# memory.md

This file documents key decisions, context, and learnings about the Family Dojo codebase for future work sessions.

## Project Intent & Values

**Family Dojo** is a faith-centered gamification system designed to:
- Turn household responsibilities into meaningful quests
- Build intrinsic motivation through progress tracking (XP, levels, badges)
- Celebrate effort and consistency with streak tracking and scripture verses
- Encourage family bonding through shared rewards (movie nights, outings)
- Foster character development through class-based roleplay and pet companions

The application weaves Christian values throughout:
- Daily scripture verses tied to themes (love, perseverance, gratitude, integrity)
- Streak milestones and achievement unlock overlays feature relevant verses
- Achievement descriptions connect accomplishment to spiritual growth
- Holiday mode for seasonal events and church observances

## Architectural Decisions & Rationale

### Single-File HTML (No Build Process)
**Decision**: All code (HTML, CSS, JS) in one index.html file  
**Rationale**: 
- Minimal deployment complexity—push a single file to static hosting
- No dependencies to manage or update
- Instant access; no npm, webpack, or build tools needed
- Suitable for a family app; parents shouldn't need dev tooling to update
- Simplifies sharing and version control

**Trade-off**: File size grows as features expand. Current size is manageable (2845 lines); if exceeds 10K lines, consider refactoring into separate JS modules loaded as `<script>` tags (but keep as single HTML file for deployment).

### localStorage-Based State (No Backend)
**Decision**: All data lives in browser's localStorage  
**Rationale**:
- No server costs or maintenance
- Works offline
- Instant persistence; no network latency
- Suitable for household use (device-specific data is acceptable)

**Trade-off**: 
- Single device only; no sync across devices (intentional—encourages shared device/family involvement)
- No cloud backup
- Data loss if localStorage is cleared
- 5–10MB limit (sufficient for ~1000 chores and badge history per family)

### Vanilla JavaScript (No Framework)
**Decision**: Plain JavaScript, no React/Vue/Angular  
**Rationale**:
- Single-file constraint rules out modern tooling
- Minimal learning curve for maintainers
- Direct DOM manipulation is appropriate for this app's complexity
- Excellent performance for the use case

**Trade-off**: Event handling and re-rendering done manually; no virtual DOM. Careful attention needed to avoid stale UI state.

### Emoji-Based Design (No Custom Graphics)
**Decision**: Use Unicode emojis for all visuals (heroes, pets, rewards, badges, chores)  
**Rationale**:
- Zero asset pipeline; renders immediately
- Cross-platform support (emoji rendering varies, but graceful fallback)
- Reduces file size
- Alignment with hero roleplay (abstract, imaginative)

**Trade-off**: Limited visual customization; emoji variety depends on OS/browser support.

## Data Model Decisions

### XP as Single Currency
All progression is based on XP:
- `member.xp`: Cumulative XP earned (never decreases)
- Used to derive: level, tier, rank title, pet evolution stage
- Easier than managing multiple currencies (could add if needed)

**Future consideration**: Could separate "stars" (earned from quests) from "XP" (used for leveling) for richer progression tuning, but current model is intuitive.

### Daily Reset via Flag
Chores tracked with a `done` boolean that resets each day (checked against `lastResetDay`).

**Why not store completion history?** Adds complexity; daily reset is simpler for the core mechanic. Badge system tracks `dailyHistory` separately for streak/consistency checks.

### Quest Templates vs. Custom Chores
- **QL** array: Built-in age-appropriate quest templates (line ~797)
- **ST.customChores**: Parent-added chores (managed in Parent Zone)
- Both rendered in quest list; no distinction in UI (seamless integration)

**Rationale**: Templates reduce setup friction; custom chores allow flexibility.

### Member Structure Includes Parents
Parents are members with `isParent: true` flag (no XP, class, pet).
- Simpler than separate "parent" vs. "child" structures
- Allows future features (parent leaderboards, badges)
- Current UI filters them out from hero list automatically

## Game Mechanics Decisions

### 8-Tier Progression (Recruit → Mythic)
Levels 1–100 mapped to 8 tiers with thresholds:
- Recruit (1), Apprentice (5), Adept (10), Knight (20), Champion (35), Hero (50), Legend (75), Mythic (100)
- **Why 100?** Nice round number; accommodates casual to dedicated players
- **Why 8 tiers?** Provides meaningful milestone bumps without excessive grinding

### 7-Stage Pet Evolution
Eggs hatch and evolve through 7 stages tied to level milestones (3, 5, 10, 15, 25, 50, unlocks).
- Creates long-term engagement (pets grow with heroes)
- Visual feedback (pet emoji changes visually)
- Backward compatible: can add stages without resetting existing pets

### Treasure Chest Mechanics
15% drop chance on quest completion; 4 rarity tiers with weighted distribution:
- Common (70%), Rare (22%), Epic (7%), Legendary (1%)
- Drop chance was tuned to avoid feeling "grindy"; ~1 chest per 6–7 quests on average

**Prevention of exploit**: Chest drop only on first completion of day; toggle undoes it (removes chest) to prevent re-rolling.

### Badge System with Categories
20 badges grouped into: quests, stars, streaks, special. Verses attached to each badge.
- Categories allow filtering (possible future UI enhancement)
- Automatic unlock detection in `updateBadges()` (called after quest completion, level-up, etc.)
- Verses randomly selected during unlock overlay

## Known Technical Debt

1. **Event Handling**: Large click handlers on container divs with nested target checks. Works but could benefit from event delegation abstraction.
2. **Render Performance**: `render()` does full re-draw on every state change. Fine for current app size but watch for slowdown if UI grows significantly.
3. **Voice Selection**: Web Speech API varies by browser. Desktop Chrome ≈ excellent; Safari ≈ basic; mobile ≈ inconsistent. No fallback UI if API unavailable.
4. **CSS Organization**: All styles in one `<style>` tag. No CSS-in-JS or SCSS. Maintainable but dense.
5. **Backward Compatibility**: `ensureFields()` patches old state with new fields. Works but could be more systematic (schema version tracking?).

## Future Enhancement Directions (Not Blocked)

### Low Complexity
- Add more quest templates to QL
- Tweak star costs or XP values for reward tiers
- Add new badge types
- Expand daily verses (currently cycles through 365)
- Seasonal themes (holiday modes already exist; could expand)

### Medium Complexity
- Export/import state as JSON (backup, sharing across devices)
- Per-member customizable rewards (currently shared/suggested)
- Leaderboard (weekly/monthly comparison)
- Parent messaging (e.g., "Grace leveled up!")
- Time-based quest scheduling (assigns quests for specific times)

### High Complexity
- Cloud sync (requires backend; breaks single-file model)
- Multi-device support (requires sync strategy)
- Photo gallery (requires image optimization)
- Real-time multiplayer (requires WebSocket/server)

## Testing & Quality Assurance

**Manual testing checklist:**
- [ ] Quest completion → XP increase, level-up if threshold reached
- [ ] Pet evolution triggers at level milestones
- [ ] Daily reset at midnight; streaks increment for continuous completion
- [ ] Badge unlocks show correct verse overlay
- [ ] Treasure chest drops ~15% of the time; rarity weights correct
- [ ] Parent zone: add/edit member, assign quests, edit rewards
- [ ] PIN screen blocks parent zone (correct PIN required)
- [ ] Mobile: responsive layout, touch targets adequate (min 44px)
- [ ] localStorage persists across page reloads and browser restart
- [ ] Voice narration works (where Web Speech API available)

**Automated testing**: Not implemented (single-file, no test framework). Consider Jest + DOM testing if refactoring to modules.

## Deployment

Currently deployed to static hosting (e.g., GitHub Pages, Vercel, Firebase).
- No build step needed
- DNS points to index.html
- Mobile-friendly metadata in `<head>` (viewport, apple-mobile-web-app meta tags)
- No service worker; PWA features possible but not critical for this use case

## Context for Future Sessions

- If asked to add a feature, check BADGES and CLASSES arrays first; patterns are established
- Avoid breaking localStorage schema; always use `ensureFields()` to handle old data
- Test on mobile/touch before considering complete (primary use case is tablet/phone)
- Scripture verses are intentional; don't remove or trivialize religious content
- Keep the "family" focus: features should encourage shared device/household engagement
- If performance becomes an issue, profile before optimizing; DOM update is likely bottleneck (consider virtual rendering if needed)

## Contact/Maintainers

- **Bill** (isParent: true) — Setup, initial features, game balance
- **Ying** (isParent: true) — Values, verses, family gameplay
- **Children (Grace, Lauren, Christian, Constance)** — Playtesters, feature feedback
