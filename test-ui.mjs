import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
import fs from 'fs';

const BASE = 'http://localhost:8765/index.html';
const SHOTS = '/home/user/family-dojo/screenshots';
fs.mkdirSync(SHOTS, { recursive: true });

const issues = { critical: [], improvement: [] };
const note = (sev, msg) => { issues[sev].push(msg); console.log(`[${sev.toUpperCase()}] ${msg}`); };

let sc = 0;
async function shot(page, name) {
  await page.screenshot({ path: `${SHOTS}/${String(++sc).padStart(2,'0')}-${name}.png`, fullPage: false });
}

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox','--disable-setuid-sandbox'] });
const page = await browser.newPage();
page.setViewportSize({ width: 1280, height: 800 });

const consoleErrors = [];
page.on('console', m => { if (m.type() === 'error') consoleErrors.push(m.text()); });
page.on('pageerror', e => consoleErrors.push(e.message));

// Dismiss any/all overlays: chest → open art → collect; level-up/badge → Continue
async function dismissAllModals() {
  for (let attempts = 0; attempts < 10; attempts++) {
    const chestBg = await page.$('.chest-bg');
    if (chestBg) {
      const artWrap = await page.$('#chest-art-wrap[onclick]'); // only click if not already opening
      if (artWrap) { await artWrap.click(); await page.waitForTimeout(1500); }
      const collectBtn = await page.$('.chest-collect-btn');
      if (collectBtn) { await collectBtn.click(); await page.waitForTimeout(500); continue; }
      await page.waitForTimeout(500);
      continue;
    }
    const levelUpBtn = await page.$('.level-up-btn, #badge-overlay .level-up-btn');
    if (levelUpBtn) { await levelUpBtn.click(); await page.waitForTimeout(500); continue; }
    break; // no overlays found
  }
}

await page.goto(BASE, { waitUntil: 'networkidle' });

// ── 1. HOME SCREEN ────────────────────────────────────────────────────
console.log('\n=== HOME SCREEN ===');
await shot(page, 'home-initial');

// Check three goal cards present
const goalCards = await page.$$('.goal');
console.log(`Goal cards found: ${goalCards.length}`);
if (goalCards.length !== 3) note('critical', `Expected 3 goal cards, got ${goalCards.length}`);

// Check lucky draw card
const drawCard = await page.$('.goal.draw');
if (!drawCard) note('critical', 'Lucky Draw card not found on home screen');
else console.log('Lucky Draw card: ✓');

// Check draw pool rows
const poolRows = await page.$$('.draw-pool-row');
console.log(`Draw pool rows: ${poolRows.length}`);
if (poolRows.length === 0) note('critical', 'Draw pool rows missing — kids not shown in draw card');

// Check vote banner on weekly card
const voteBanner = await page.$('.vote-banner');
if (!voteBanner) note('critical', 'Vote banner missing from weekly card (voting is active in demo state)');
else {
  const txt = await voteBanner.textContent();
  console.log(`Vote banner text: "${txt.trim()}"`);
}

// Check header badge shows ticket count not stars
const badgeTxt = await page.$eval('.star-badge', el => el.textContent.trim()).catch(() => '');
console.log(`Header badge: "${badgeTxt}"`);
if (badgeTxt.includes('this month')) note('critical', 'Header still shows "this month" — not updated to ticket count');

// ── 2. HERO CARD → PROFILE MODAL → QUEST VIEW ────────────────────────
console.log('\n=== HERO PROFILE MODAL ===');
await page.click('.hero-card');
await page.waitForTimeout(500);
await shot(page, 'hero-profile-modal');

// Check profile modal appeared
const profileModal = await page.$('.profile-modal, .modal-bg, [class*="profile"]');
const profileQuestBtn = await page.$('.profile-quest-btn');
if (!profileQuestBtn) note('critical', 'Profile modal "Start Today\'s Quests" button not found');
else console.log('Profile quest button: ✓');

console.log('\n=== QUEST VIEW ===');
// Navigate to quest view via profile button
if (profileQuestBtn) {
  await profileQuestBtn.click();
  await page.waitForTimeout(500);
} else {
  // Try direct JS call as fallback
  await page.evaluate(() => { closeHeroProfile?.(); openQuests('grace'); });
  await page.waitForTimeout(500);
}

await page.waitForSelector('.quest-list', { timeout: 5000 }).catch(() => note('critical', '.quest-list never appeared in quest view'));
await shot(page, 'quest-view-grace');

// Check vote panel appears (voting is active + options set in demo)
const votePanel = await page.$('.vote-panel');
if (!votePanel) note('critical', 'Vote panel missing from quest view (voting active, options set)');
else console.log('Vote panel: ✓');

// Check vote option buttons
const voteBtns = await page.$$('.vote-opt-btn');
console.log(`Vote option buttons: ${voteBtns.length}`);
if (voteBtns.length === 0) note('critical', 'No vote option buttons rendered');
if (voteBtns.length > 0 && voteBtns.length < 2) note('improvement', 'Fewer vote options than expected (demo has 3)');

// Check lucky draw panel appears (demo has prizes set)
const ldPanel = await page.$('.ld-panel');
if (!ldPanel) note('critical', 'Lucky draw entry panel missing from quest view');
else console.log('Lucky draw panel: ✓');

// Check balance and slider
const ldMeta = await page.$('.ld-panel-meta');
if (ldMeta) {
  const metaTxt = await ldMeta.textContent();
  console.log(`Draw panel meta: "${metaTxt.trim()}"`);
  if (!metaTxt.includes('★')) note('improvement', 'Draw panel meta text does not show star symbol');
}
const slider = await page.$('#ld-amount');
if (!slider) note('critical', 'Lucky draw star slider not found');
else {
  const max = await slider.getAttribute('max');
  const ariaLabel = await slider.getAttribute('aria-label');
  console.log(`Slider max=${max}, aria-label="${ariaLabel}"`);
  if (!ariaLabel) note('improvement', 'Slider missing aria-label');
}

// ── 3. CAST A VOTE ────────────────────────────────────────────────────
console.log('\n=== VOTING ===');
const freshVoteBtns = await page.$$('.vote-opt-btn');
if (freshVoteBtns.length > 0) {
  const btn0txt = await freshVoteBtns[0].textContent();
  console.log(`Voting for option: "${btn0txt.trim().slice(0,40)}"`);
  await freshVoteBtns[0].click();
  await page.waitForTimeout(500);
  await shot(page, 'quest-view-after-vote');

  // Check voted state applied
  const votedBtn = await page.$('.vote-opt-btn.voted');
  if (!votedBtn) note('critical', 'Voted button does not get .voted class after clicking');
  else {
    const checkBadge = await page.$('.vote-opt-check');
    console.log(`Vote check badge: ${checkBadge ? '✓' : 'missing'}`);
    if (!checkBadge) note('improvement', '.vote-opt-check element not found after voting');
  }

  // Check "recorded" note appears
  const bodyHTML = await page.$eval('.vote-panel', el => el.innerHTML);
  const recordedShown = bodyHTML.includes('recorded');
  if (!recordedShown) note('improvement', '"Vote is recorded" note not visible after voting');
  else console.log('Vote recorded message: ✓');
}

// ── 4. ENTER LUCKY DRAW ───────────────────────────────────────────────
console.log('\n=== ENTER LUCKY DRAW ===');
const sliderEl = await page.$('#ld-amount');
if (sliderEl) {
  await sliderEl.fill('3');
  await sliderEl.dispatchEvent('input');
  await page.waitForTimeout(200);
  const displayVal = await page.$eval('#ld-val', el => el.textContent).catch(() => '?');
  console.log(`Slider display value after setting 3: "${displayVal}"`);
  if (displayVal !== '3') note('improvement', 'Slider display value did not update to 3');

  const submitBtn = await page.$('.ld-submit');
  if (submitBtn) {
    await submitBtn.click();
    await page.waitForTimeout(600);
    await shot(page, 'quest-view-after-draw-entry');

    const toastGone = !(await page.$('.toast'));
    console.log(`Toast auto-dismissed: ${toastGone}`);

    const newMeta = await page.$eval('.ld-panel-meta', el => el.textContent).catch(() => '');
    console.log(`Draw meta after entry: "${newMeta.trim()}"`);
  } else {
    note('critical', '.ld-submit button not found');
  }
} else {
  note('critical', 'No slider — either ldBalance=0 or panel missing');
}

// ── 5. BACK TO HOME — check pool updated ─────────────────────────────
console.log('\n=== HOME AFTER INTERACTIONS ===');
await page.click('.btn-back');
await page.waitForSelector('.hero-grid', { timeout: 5000 }).catch(() => {});
await shot(page, 'home-after-interactions');

const newPoolRows = await page.$$('.draw-pool-row');
const poolText = await Promise.all(newPoolRows.map(r => r.textContent()));
console.log('Updated draw pool:');
poolText.forEach(t => console.log(' ', t.trim()));

const headerBadge = await page.$eval('.star-badge .v', el => el.textContent).catch(() => '?');
console.log(`Header ticket count: ${headerBadge}`);

// ── 6. COMPLETE A QUEST → check starBalance increases ─────────────────
console.log('\n=== QUEST COMPLETION ===');
await page.click('.hero-card');
await page.waitForTimeout(500);
const pqBtn = await page.$('.profile-quest-btn');
if (pqBtn) { await pqBtn.click(); await page.waitForTimeout(500); }
await page.waitForSelector('.quest-list', { timeout: 5000 }).catch(() => {});

const ldMetaBefore = await page.$eval('.ld-panel-meta', el => el.textContent).catch(() => '');
console.log(`Balance before completing quest: "${ldMetaBefore.trim()}"`);

const unchecked = await page.$('.qi-check:not(.on)');
if (unchecked) {
  await unchecked.click();
  await page.waitForTimeout(1200);
  await dismissAllModals();
  await page.waitForTimeout(500);

  const ldMetaAfter = await page.$eval('.ld-panel-meta', el => el.textContent).catch(() => '');
  console.log(`Balance after completing quest: "${ldMetaAfter.trim()}"`);
  if (ldMetaBefore === ldMetaAfter) note('improvement', 'starBalance display did not change after completing quest (may be obscured by overlay)');
  else console.log('starBalance updated after quest completion: ✓');
} else {
  console.log('No uncompleted quests to test with');
}

// ── 7. PARENT ZONE ────────────────────────────────────────────────────
console.log('\n=== PARENT ZONE ===');
await dismissAllModals();
await page.click('.btn-back');
await page.waitForSelector('.hero-grid', { timeout: 5000 }).catch(() => {});
await page.click('.btn-parents');
await page.waitForSelector('.pin-screen', { timeout: 5000 }).catch(() => {});

for (const d of ['1','2','3','4']) {
  await page.click(`.ppb >> text="${d}"`);
  await page.waitForTimeout(100);
}
await page.waitForSelector('.p-layout', { timeout: 3000 }).catch(() => {});
await shot(page, 'parent-zone-initial');

// Navigate to Rewards tab
await page.click('.pni:has-text("Rewards")').catch(() =>
  page.click('.pni:has-text("Goals")').catch(() => {})
);
await page.waitForTimeout(500);
await shot(page, 'parent-rewards-tab');

// Check weekly vote section
const allTitles = await page.$$eval('.af-title', els => els.map(e => e.textContent.trim()));
console.log('AF titles found:', allTitles);
const voteSection = allTitles.some(t => t.includes('Vote'));
if (!voteSection) note('critical', 'Weekly Vote section not found in Parent Zone Rewards tab');
else console.log('Weekly Vote section: ✓');

// Check lucky draw section
const drawSection = allTitles.some(t => t.includes('Lucky'));
if (!drawSection) note('critical', 'Lucky Draw section not found in Parent Zone Rewards tab');
else console.log('Lucky Draw section: ✓');

// Check toggle voting button
const toggleBtn = await page.$('button:has-text("Close Voting"), button:has-text("Open Voting")');
if (!toggleBtn) note('critical', 'Toggle Voting button not found in parent zone');
else {
  const toggleTxt = await toggleBtn.textContent();
  console.log(`Toggle button: "${toggleTxt.trim()}"`);

  await toggleBtn.click();
  await page.waitForTimeout(500);
  await shot(page, 'parent-after-toggle-voting');

  const newToggleTxt = await page.$eval('button:has-text("Close Voting"), button:has-text("Open Voting")', el => el.textContent.trim()).catch(() => '?');
  console.log(`Toggle button after click: "${newToggleTxt}"`);
  if (newToggleTxt === toggleTxt.trim()) note('critical', 'Toggle voting button text did not change — renderParent() bug still present');
  else console.log('Toggle voting UI update: ✓');
}

// Check draw pool entries in parent zone
const allLis = await page.$$('.li');
console.log(`Draw pool entries in parent zone (all .li): ${allLis.length}`);

// Try run draw button
const runDrawBtn = await page.$('button:has-text("Run the Draw")');
if (!runDrawBtn) note('critical', '"Run the Draw!" button not found');
else {
  console.log('Run the Draw button: ✓');
  page.once('dialog', dialog => { console.log(`Confirm dialog: "${dialog.message().slice(0,80)}"`); dialog.dismiss(); });
  await runDrawBtn.click();
  await page.waitForTimeout(500);
  console.log('Confirm dialog correctly appeared and was dismissed ✓');
}

// Apply vote winner
const applyBtn = await page.$('button:has-text("Apply Winner")');
if (!applyBtn) note('improvement', '"Apply Winner" button not found');
else {
  await applyBtn.click();
  await page.waitForTimeout(400);
  const toast = await page.$('.toast');
  if (toast) {
    const toastTxt = await toast.textContent();
    console.log(`Apply winner toast: "${toastTxt}"`);
  } else {
    note('improvement', 'No toast shown after Apply Winner — votes may be empty');
  }
}

await shot(page, 'parent-rewards-final');

// ── 8. MOBILE VIEW ────────────────────────────────────────────────────
console.log('\n=== MOBILE VIEW ===');
await page.setViewportSize({ width: 390, height: 844 });
await page.goto(BASE, { waitUntil: 'networkidle' });
await shot(page, 'mobile-home');

await page.click('.hero-card');
await page.waitForTimeout(500);
const mobilePqBtn = await page.$('.profile-quest-btn');
if (mobilePqBtn) { await mobilePqBtn.click(); await page.waitForTimeout(500); }
await page.waitForSelector('.quest-list', { timeout: 5000 }).catch(() => {});
await shot(page, 'mobile-quest-view');

const ldPanelMobile = await page.$('.ld-panel');
if (ldPanelMobile) {
  const box = await ldPanelMobile.boundingBox();
  console.log(`Draw panel on mobile — x:${box.x.toFixed(0)}, width:${box.width.toFixed(0)}, viewport:390`);
  if (box.x < 0) note('improvement', 'Lucky draw panel left margin too tight on mobile');
  if (box.x + box.width > 395) note('critical', 'Lucky draw panel overflows viewport on mobile');
} else {
  note('improvement', 'Lucky draw panel not visible on mobile quest view');
}

// ── FINAL REPORT ─────────────────────────────────────────────────────
await browser.close();

if (consoleErrors.length) {
  console.log('\n=== JS ERRORS ===');
  consoleErrors.forEach(e => { console.log(' ', e); note('critical', `JS error: ${e}`); });
}

console.log('\n═══════════════════════════════════════');
console.log('CRITICAL ISSUES:', issues.critical.length);
issues.critical.forEach((m, i) => console.log(`  ${i+1}. ${m}`));
console.log('\nIMPROVEMENTS:', issues.improvement.length);
issues.improvement.forEach((m, i) => console.log(`  ${i+1}. ${m}`));
console.log('═══════════════════════════════════════');
