# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Family Dojo — Hero Academy** is a gamified family chore management system designed to motivate children through RPG mechanics. It combines chore tracking with achievement progression, pet companions, and faith-based values. The entire application is a single self-contained HTML file with embedded CSS and JavaScript.

## Architecture

### Single-File Design
- **index.html** (2845 lines) contains all HTML, CSS, and JavaScript
- No build process or dependencies—deploy directly to any static host
- localStorage-based state persistence (key: `fdv10`)
- No external API calls; everything is client-side

### Code Organization Within index.html

1. **CSS Styles** (lines ~13–470)
   - CSS variables for theme (colors, spacing, shadows)
   - Component-based class naming (e.g., `.hero-card`, `.quest-list`, `.qi`)
   - Animations: levelUp, confetti, questFlash, shimmer, float
   - Responsive grid layouts for mobile-first design

2. **JavaScript Sections** (lines ~473–2845)
   - **Data Constants** (lines 478–836): Classes, pets, badges, chest types, reward suggestions, quest templates, 365 daily verses
   - **State Management** (lines 839–945): Global `ST` object, defaultState(), load/save to localStorage
   - **Utility Functions**: Date helpers (weekKey, dayNumber), storage migration (ensureFields), rendering helpers
   - **Screen Rendering**: Hero list, quest view, parent zone, PIN screen, modals
   - **Game Logic**: XP/level calculation, badge checking, chest drops, streak tracking, daily resets
   - **Event Handlers**: Click/tap events for quest completion, hero selection, parent zone actions
   - **Audio**: Text-to-speech using Web Speech API (voice selection, audio playback)

### Key Data Model

**State (ST)** contains:
- `members`: Array of family members (heroes + parents)
- `chores`: Array of quests/tasks with assignments and completion status
- `rewards`: Three tiers (weekly, monthly, grand) with star costs
- `weeklyStars`, `completedCount`, `cumulativeStars`: Per-member tracking
- `streaks`, `badges`, `dailyHistory`: Achievement tracking
- `chestsOpened`, `pendingChests`: Loot system state
- `holidayMode`: Seasonal toggle

**Members** have:
- `id`, `name`, `dob`, `isParent` flag
- Non-parents: `classId` (hero class), `petId`, `hue` (color hue), `skin` (tone), `xp` (cumulative points)
- `photo`: Optional base64 profile image

**Chores** have:
- `id`, `name`, `desc`, `emoji`, `assignee` (member id), `points` (XP value), `done` (completed today)

### Game Mechanics

1. **Classes & Pets**: 6 hero classes, each with 3 pet lines (18 total), 7 evolution stages per pet
2. **Progression**: XP-based leveling with 8 tiers (Recruit → Mythic), class-specific rank titles
3. **Streaks**: Daily streak tracking with milestone verses at 3, 7, 14, 30, 60, 100 days
4. **Badges**: 20+ achievement badges tied to quest count, star count, streaks, and special events
5. **Treasure Chests**: 15% drop chance on quest completion; 4 rarity levels (Common, Rare, Epic, Legendary)
6. **Rewards**: Star-based redemption system with three tiers and parent-configurable rewards
7. **Daily Reset**: Resets quest completion status at midnight (done flag resets daily)

### UI Screens

- **Hero List** (default view): 4-column grid of hero cards showing level, pet, stars, class
- **Quest View** (single hero): Large list of quests with audio task descriptions, completion toggle, XP display
- **Personal Rewards Panel**: Per-member redemption options
- **Parent Zone**: Multi-tab interface (kids, tasks, rewards, library, schedule, reports, settings)
- **PIN Screen**: 4-digit parent lock
- **Modals**: Hero editing, badge/unlock overlays, chest opening, level-up celebration

### Key Functions & Patterns

**Rendering**:
- `render()`: Main render loop; called on every state change
- `redraw[Screen]()`: Screen-specific rendering (e.g., `redrawHeroList()`, `redrawQuestView()`)
- No templating engine; all DOM manipulation via vanilla JS
- `q(sel)` and `qa(sel)`: Shortcuts for `querySelector` and `querySelectorAll`

**State Updates**:
- Direct mutation of `ST` object
- `save()` after any mutation to persist to localStorage
- `ensureFields()` during load to handle backward compatibility

**Event Delegation**:
- Most event listeners attached to container elements
- Event object inspection for target identification (e.g., `ev.target.closest('.qi-check')`)

**Animation**:
- CSS animations for transitions (questFlash, levelUp, confetti)
- `confetti()` function spawns animated confetti particles
- Toast notifications for user feedback

## Development Workflow

### Making Changes

1. **Edit index.html** directly
2. **Test in browser** (open file locally or deploy to a static host)
3. **Persist state**: Use browser DevTools localStorage or clear it to test reset
4. **No build step required**—changes are live immediately

### Testing Locally

```bash
# Option 1: Open directly in browser
open index.html  # macOS
# or: xdg-open index.html  # Linux
# or: start index.html  # Windows

# Option 2: Use a local server (if you need HTTPS or specific conditions)
python3 -m http.server 8000
# Then visit http://localhost:8000/index.html
```

### Debugging State

Open browser DevTools Console:
```javascript
// Inspect current state
console.log(ST)

// Clear state (reset to defaults)
localStorage.removeItem('fdv10')
location.reload()

// Export state (for backup/sharing)
JSON.stringify(ST, null, 2)

// Manually test logic
// e.g., simulate quest completion
ST.chores[0].done = true; save(); render()
```

## Common Tasks

### Adding a New Quest Template
1. Add to `QL` array (line ~797–829)
2. Define: `{a:"age-range", e:"emoji", n:"name", d:"description", s:stars}`
3. Example:
   ```javascript
   {a:"7–10", e:"📚", n:"Read for 15 minutes", d:"Read your book out loud", s:1}
   ```

### Adding a New Badge
1. Add to `BADGES` array (line ~578–664)
2. Define `id`, `name`, `emoji`, `cat` (category), `desc`, `check` function, `verse`
3. Check function receives member `id` and returns boolean
4. Badge UI will auto-detect eligible badges and show overlay on unlock

### Adding a New Class
1. Update `CLASSES` constant (line ~480–487)
2. Update `CLASS_RANKS` and `RANK_LEVELS` (line ~543–551)
3. Define 3 pet lines in `PETS` constant
4. Update `COLORS` or theme if needed

### Adding Daily Scripture Verses
- The `V` array (line ~673–794) holds 365 daily verses; cycle through them
- Verses appear in streak milestones and level-up overlays
- Format: `{d:day-of-year, r:"Reference", t:"Text"}`

### Customizing Rewards
- Edit `REWARD_SUGS` (line ~831–837) to change suggested rewards
- Parents can also add custom rewards in the Parent Zone
- Star costs for rewards are configurable per tier

## Performance & Optimization

- Single HTML file keeps load time minimal
- Lazy image rendering in hero cards (base64 photos)
- No external image CDN—emojis and colors used throughout
- localStorage limit is typically 5–10MB (plenty for this use case)
- Text-to-speech via Web Speech API (varies by browser)

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile: iOS Safari, Chrome for Android
- Requires localStorage support
- Web Speech API optional (graceful fallback if unavailable)

## Known Limitations & Future Considerations

1. **Data Export/Sync**: Currently single-device only (localStorage); no cloud sync
2. **Multiplayer**: No network features; designed for single household
3. **Voice Coverage**: Web Speech API quality varies; some languages limited
4. **Photo Storage**: Base64 images increase state size; consider URL-based alternatives if adding rich media
5. **Mobile Touch**: Fully touch-optimized; no mouse-only features

## Key Files & Code Locations

| Purpose | Lines |
|---------|-------|
| CSS variables & theme | 15–27 |
| Animations | 36–41 |
| Hero cards & quest UI | 108–184 |
| Parent Zone layout | 198–264 |
| Modals & overlays | 265–282 |
| Data constants | 478–836 |
| State & persistence | 839–945 |
| Main render loop | (locate via `function render()`) |
| Quest completion logic | (locate via `completeQuest()`) |
| Badge checking | (locate via `updateBadges()`) |

## Git Workflow

- Work on feature branches (e.g., `claude/feature-name`)
- Commit with clear messages describing what changed (e.g., "feat: add new badge", "fix: prevent chest duplicate opens")
- Push and create PRs for review before merging to main
