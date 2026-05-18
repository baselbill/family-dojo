# Skill Knowledge Base & Case Studies

## Skill 1: codebase-documentation-architect

### Knowledge Base: Architecture Pattern Recognition

#### Pattern 1: Single-File Web App
**Characteristics**:
- All HTML, CSS, JavaScript in one `.html` file
- No build process, no dependencies
- localStorage for persistence
- Direct DOM manipulation (no framework)

**Examples**: Family Dojo, many lightweight tools, legacy apps

**CLAUDE.md Focus**:
- Explain single-file constraint & its implications
- Document CSS organization (inline styles vs. variables)
- Show how to navigate large JS block (sections, line numbers)
- Common tasks: adding constants, rendering functions, event handlers

**memory.md Focus**:
- Why single-file was chosen (deployment simplicity, zero infrastructure)
- Scaling limits (what happens at 5K, 10K lines?)
- Migration path (if ever refactoring to modules)

**ARCHITECTURAL_REVIEW.md Focus**:
- Grade: Usually B+ to A- (simple, maintainable, clear trade-offs)
- Risks: Monolithic growth, all code shares global scope
- Recommendations: Monitor file size, plan modularization if >4K lines

#### Pattern 2: Frontend SPA (React, Vue, Angular)
**Characteristics**:
- Component-based architecture
- Build process (Webpack, Vite, etc.)
- External dependencies (npm packages)
- State management (Redux, Pinia, Context API)

**CLAUDE.md Focus**:
- Component tree organization
- State flow (where does data live? how does it move?)
- Key folders (components/, pages/, utils/, hooks/)
- Build process (how to dev, test, build, deploy)

**memory.md Focus**:
- Why this framework was chosen (React for ecosystem, Vue for simplicity, etc.)
- Architectural decisions (state management, routing, styling)
- Technical debt (legacy code, refactoring opportunities)

#### Pattern 3: Backend API (Node, Python, Go)
**Characteristics**:
- Server-side logic, database, API routes
- Authentication & authorization
- External integrations (third-party APIs)
- Async jobs, queues, caching

**CLAUDE.md Focus**:
- API endpoint structure (/api/users, /api/posts, etc.)
- Database schema (tables, relationships)
- Authentication flow (JWT, sessions, OAuth)
- Key business logic locations

**memory.md Focus**:
- Database design decisions
- API design philosophy (REST, GraphQL, RPC)
- Performance considerations (caching, indexing, async)

#### Pattern 4: Monorepo (Multiple Services)
**Characteristics**:
- Multiple apps/services in one repo
- Shared libraries
- Complex build process
- Service orchestration

**CLAUDE.md Focus**:
- Folder structure (which service is where?)
- Dependency graph (what depends on what?)
- Build process (how do services get deployed?)
- Testing strategy (unit, integration, end-to-end)

**memory.md Focus**:
- Why monorepo was chosen (shared code? easier deploys?)
- Service responsibilities (clear boundaries?)
- Deployment strategy (all at once? independent?)

---

### Case Study: Family Dojo (Single-File Web App)

**What makes Family Dojo a good template**:

1. **Clear organization** (2845 lines)
   - CSS block: ~470 lines (well-commented)
   - Constants: ~360 lines (data-driven design)
   - State management: ~100 lines (simple pattern)
   - Rendering: ~500 lines (screen-by-screen)
   - Game logic: ~400 lines (clear functions)
   - Event handlers: ~400 lines (delegated)
   - UI helpers: ~200 lines (utilities)

2. **Documentation structure** shows:
   - How to explain single-file trade-offs
   - How to list common tasks (adding badges, quests, etc.)
   - How to document game mechanics concretely
   - How to assess psychological impact (bonus: non-technical review)

3. **ARCHITECTURAL_REVIEW.md** shows:
   - How to score across multiple dimensions (A/B/C)
   - How to identify real risks (XSS, localStorage quota, daily reset edge cases)
   - How to provide specific recommendations (not generic advice)
   - How to acknowledge trade-offs (single-file is good choice for this use case)

**Use this template when documenting**:
- Single-file HTML/CSS/JS apps
- Data-driven systems (lots of constants)
- UI-heavy apps (forms, modals, rendering)
- Apps with game mechanics (progression, achievements)
- Apps with localStorage persistence

---

## Skill 2: gamification-system-designer

### Knowledge Base: Game Mechanic Templates

#### Progression System Library

**Template 1: Linear Progression** (Simplest)
```
Levels: 1-100
XP per level: 100 * (level - 1)
Total to max: 500,000 XP
At 250 XP/day: ~2000 days = 5.5 years
Feel: Steady, predictable, can get boring
Best for: Short-term habits (30-90 days), fitness trackers
Risk: Mid-game churn (levels 30-60 feel grindy)
Mitigation: Add milestone unlocks (badges, pet evolution)
```

**Template 2: Exponential Progression** (Accelerating)
```
Levels 1-10: Linear (100 XP per level)
Levels 11-30: Exponential x1.2 (120, 144, 173...)
Levels 31-60: Exponential x1.3 (grows faster)
Levels 61-100: Exponential x1.5 (very high end)
Total to max: 1,000,000+ XP
At 250 XP/day: ~4000 days = 11 years
Feel: Quick early wins, harder as you progress
Best for: Long-term engagement (1+ year), RPGs
Risk: Power creep (new levels feel too easy)
Mitigation: Adjust multipliers every 6 months based on usage
```

**Template 3: Milestone-Based** (Story-Driven)
```
Tier 1 (Recruit): Levels 1-3, reach in 1 week
Tier 2 (Apprentice): Levels 4-8, reach in 1 month
Tier 3 (Knight): Levels 9-20, reach in 3 months
Tier 4 (Hero): Levels 21-50, reach in 6 months
Tier 5 (Legend): Levels 51-100, reach in 1+ year
XP within each tier: Exponential or linear
Feel: Clear structure, tier promotion feels like achievement
Best for: RPGs, family apps, character-driven systems
Risk: Tier boundaries create "grinding zones"
Mitigation: Add unlocks/badges at tier boundaries, not just levels
```

#### Reward Structure Library

**Single Currency** (Simplest, best for learners)
```
Currency: XP
Source: Complete quests/tasks
Uses: 
  - Level progression (100 XP = level up)
  - Achievements (unlocked automatically)
No separate "coins" or "stars"
Feel: Simple, one thing to track
Best for: Habit trackers, first-time gamification
Risk: Currency loses meaning (is it for progression or rewards?)
```

**Dual Currency** (Medium, best for family apps)
```
Currency 1: XP (Experience Points)
  - Earned from: Quest/task completion
  - Used for: Progression (levels, ranks, unlocks)
  - Feeling: Measures growth/capability

Currency 2: Stars (Reward Currency)
  - Earned from: Daily/weekly quest completion
  - Used for: Tangible rewards (family activities, screen time)
  - Feeling: Immediate gratification vs. long-term progression

Conversion: 1 quest = 1 XP + 1-2 stars (varies by difficulty)
Feel: Separates "am I getting better?" from "what's my reward?"
Best for: Chores, parenting, fitness
Trade-off: Slightly more complex (two things to track)
Example: Family Dojo (XP for leveling, stars for rewards)
```

**Tiered Rewards** (Complex, best for long-term engagement)
```
Tier 1 (Weekly): Reset every Sunday
  - Target: 30-50 stars/week
  - Rewards: Small perks (1 extra game, choose snack, etc.)
  - Cost: 20-50 stars
  - Feel: Achievable weekly goal, frequent celebration

Tier 2 (Monthly): Reset 1st of month
  - Target: 150-200 stars/month
  - Rewards: Medium experiences (movie night, outing, etc.)
  - Cost: 100-200 stars
  - Feel: Bigger goal, more meaningful reward

Tier 3 (Grand/Annual): Accumulates yearly
  - Target: 1000-2000 stars/year
  - Rewards: Major experiences (trip, big purchase, etc.)
  - Cost: 500-2000 stars
  - Feel: Long-term aspiration, teaches delayed gratification

Progress visualization: Progress bar per tier
Feel: Multiple goal horizons (short/medium/long term)
Best for: Family apps, fitness, habit tracking
Example: Family Dojo uses this structure
```

#### Achievement Taxonomy Library

**Process Badges** (Reward behavior consistency)
```
"First Step" (1 quest completed)
"Pathfinder" (10 quests)
"Adventurer" (25 quests)
"Veteran" (50 quests)
"Champion" (100 quests)
"Legend" (250 quests)

Psychological: Growth mindset (effort compounds)
Release: Unlock every 25-50 quests
Frequency: At least one every 2-4 weeks for active user
```

**Streak Badges** (Reward consistency)
```
"First Streak" (3 days in a row)
"Faithful" (7 consecutive days)
"Unstoppable" (14 consecutive days)
"Monthly Champion" (30 consecutive days)
"Unstoppable" (60 consecutive days)
"Eternal" (100 consecutive days)

Psychological: Self-discipline, resilience, identity
Reset: On missed day (harsh but intentional)
Verse attached: Scripture at milestone (motivational)
Frequency: Milestone every 2-4 weeks if user is consistent
```

**Milestone Badges** (Celebrate rank progression)
```
"Apprentice" (reach rank 5)
"Knight" (reach rank 20)
"Champion" (reach rank 35)
"Hero" (reach rank 50)
"Legend" (reach rank 75)
"Mythic" (reach rank 100)

Psychological: Status, identity, long-term aspiration
Unlock: Automatic when level reached
Frequency: Every 10-20 level increases
Celebration: Overlay modal with verse/fanfare
```

**Special Event Badges** (Context-specific)
```
"Birthday Bash" (completed quests on birthday)
"Holiday Helper" (completed quests during holidays)
"Comeback Kid" (returned after 7+ day absence)
"Community Champion" (participated in family reward)
"Generous Heart" (helped complete someone else's quest)

Psychological: Relatedness, values alignment, joy
Release: Unlock based on context (not just achievement)
Frequency: Varies (1-2 per month depending on context)
```

---

### Case Study 1: Family Dojo (Chore Motivation)

**System Overview**:
```
Progression: 8-tier (Recruit → Mythic, levels 1-100)
Currency: XP (progression) + Stars (rewards)
Mechanics: Daily reset, 15% chest drop, pet evolution, streaks
Engagement: Daily (quests reset 11:59 PM), weekly (star goals), monthly (grand rewards)
```

**Progression Curve** (Milestone-based + Exponential):
```
Tier 1 (Recruit, L1-3): 300 XP total, ~1 week
Tier 2 (Apprentice, L4-8): ~2K XP, ~1 month
Tier 3 (Adept, L9-20): ~10K XP, ~3 months
Tier 4 (Knight, L20-35): ~30K XP, ~6 months
Tier 5+ (Champion → Mythic): ~100K+ XP, 1+ year
Curve: Exponential (1.3x multiplier per 10 levels)
```

**Reward Structure** (Tiered):
```
Weekly: 30-50 stars, unlocks personal rewards
Monthly: 200-400 stars, unlocks family rewards
Grand: 2000+ stars, unlocks major family experiences
Satisfaction: Frequent wins (weekly), meaningful goals (monthly), aspiration (grand)
```

**Achievement System** (20+ Badges):
```
Process: "First Step" (1 quest) → "Legend" (250 quests)
Streaks: "Faithful" (3 days) → "Eternal" (100 days)
Milestones: "Apprentice" (L5) → "Mythic" (L100)
Special: "Treasure Hunter" (1 chest), "Birthday Bash", etc.
Verses: Each badge has scripture, reinforcing values
```

**Psychological Design**:
- Intrinsic motivation: Daily verses frame chores as meaningful, not transactional
- Autonomy: Child chooses which quests to do, when
- Competence: XP feedback frequent (each quest = visible progress)
- Relatedness: Family rewards (movie night, outing) are shared goals
- Safety: No permanent failure (resets daily), no shame mechanics
- Age-appropriate: Concrete feedback (XP numbers), growing complexity (streaks, badges)

**Numbers That Work**:
- 15% chest drop rate: Feels "lucky" without being frustrating
- 1-2 XP per quest: Frequent level-ups early (week 1), slows mid-game
- Streak milestones: Every 3, 7, 14, 30, 60, 100 days (natural checkpoints)
- Star costs: Weekly achievable (~30-50 stars/week), monthly ambitious (~200/month)

**Risks Identified**:
- ⚠️ Streak reset harsh: Could cause shame in high-achiever. Mitigated by parent guidance.
- ⚠️ Mid-game plateau: Levels 30-60 feel grindy. Mitigated by pet evolution unlocks.
- ⚠️ Comparison risk: If parents compare sibling stars. Mitigated by no leaderboard UI.

**What Makes This Work**:
1. Daily reset (gives fresh start, builds habit)
2. Frequent feedback (see progress immediately)
3. Multiple engagement vectors (XP, stars, badges, streaks, chests, pet evolution)
4. Values alignment (verses, class identity, family focus)
5. Parental involvement (customizable rewards, PIN-protected settings)

---

### Case Study 2: Habitica (Habit Formation + Community)

**System Overview**:
```
Progression: 50+ levels (huge scope)
Currency: Gold (loot) + Exp (leveling)
Mechanics: Habit/Daily/Todo lists, tavern (community), guilds, challenges
Engagement: Daily (habits/todos reset), weekly (challenges), ongoing (guilds)
```

**What Works**:
- Community motivation (guilds, social proof, shared challenges)
- Multiple engagement vectors (4 habit types: Habits, Dailies, Todos, Rewards)
- Character customization (avatar, gear, pet)
- Clear feedback ("Hit an action → get gold/exp")

**What's Complex**:
- High learning curve (15+ mechanics to understand)
- Can feel grindy (lots of low-value actions needed for meaningful reward)
- Community-focused (if you hate social, less appealing)

**Lessons for Skill**:
- Community motivation is powerful but requires active community management
- Multiple engagement vectors = more interesting but also more to balance
- Customization (gear, pets) increases attachment to character
- Can support generic habit types (not domain-specific)

---

### Case Study 3: Deposit (Allowance + Chores)

**System Overview**:
```
Progression: Levels (simpler than Habitica)
Currency: Coins (earned from chores, spent on allowance/rewards)
Mechanics: Assign chores, mark done, earn coins, buy items from store
Engagement: Weekly (chores repeat weekly)
```

**What Works**:
- Clean, simple interface (easy onboarding)
- Real money integration (coins → actual allowance)
- Parental controls (can adjust chore values, rewards)

**What's Missing**:
- No gamification depth (no pets, badges, streaks, unlocks)
- Basic progression (simple levels, doesn't feel like growth)
- Limited engagement vectors (just chores → coins)

**Lessons for Skill**:
- Simplicity is valuable (but can feel shallow)
- Real money/reward integration matters (makes it feel "real")
- Parents need control over values (Deposit does this well)
- Differentiation opportunity: Add gamification depth to reward collection

---

### Case Study 4: Duolingo (Language Learning)

**System Overview**:
```
Progression: Lessons (units) in skill tree (visual progression)
Currency: XP (experience points for streaks, lessons)
Mechanics: Daily lessons, streaks, leaderboards (league), social features
Engagement: Daily (lessons reset daily), weekly (leagues), ongoing (skill tree)
```

**What Works**:
- Visually satisfying streak counter (big number, visible daily)
- Social gamification (leagues: compete with friends, not global ranking)
- Skill tree feels like progression (visual, concrete)
- Frequent rewards (lingots, level-ups, social praise)
- Cultural: Daily habit formation (Duolingo → new language)

**What Risks Perfectionism**:
- Streak counter creates pressure (break it = shame)
- Leaderboards create comparison (am I good enough?)
- Notifications aggressive (push user to maintain habit)

**Lessons for Skill**:
- Streak mechanics are powerful but psychologically risky
- Leaderboards work (social motivation) but need careful scoping (friend leagues, not global)
- Skill trees feel meaningful (visual, concrete progression)
- Short daily sessions (15 min) maintain habit; longer sessions increase churn
- Social features = network effects (users invite friends)

---

### Age-Appropriateness Framework

#### Ages 5-7: Sensorimotor → Preoperational
**Mechanics to Use**:
- Immediate feedback (tap button → see result right away)
- Colorful, fun animations
- Simple emojis (no complex visuals)
- Short sessions (5-10 min)
- Concrete rewards (stickers, small treats)

**Mechanics to Avoid**:
- Long-term goals (too abstract: "level up in 2 months")
- Permanent progression (no "resetting" confuses them)
- Reading-heavy (need adult narration)
- Complex decision-making (choose class? Too many options)

**Example**: Tap quest → confetti → emoji evolved → parent celebrates

#### Ages 7-10: Concrete Operational
**Mechanics to Use**:
- Levels with visible numbers (Level 5 is clearly higher than Level 3)
- Progression bars (can see how close to next level)
- Badges & achievements (tangible unlocks)
- Pet evolution (visual change over time)
- Streaks (days in a row visible)

**Mechanics to Avoid**:
- Abstract concepts ("influence points" - too vague)
- Complex probability ("7.3% drop chance" - means nothing)
- Permanent failures (breaks self-esteem)
- Social comparison (leaderboards)

**Example**: Family Dojo sweet spot (levels, pets, badges, streaks all concrete)

#### Ages 11-13: Transitioning to Formal Operational
**Mechanics to Use**:
- Strategy (optimize star earning: which quests best value?)
- Identity choice (pick a class: Mage vs. Swordmaster)
- Longer-term planning (monthly goals, Grand rewards)
- Appreciation for values/meaning (verses, character backstory)
- Autonomy (choose what quests to do)

**Mechanics to Avoid**:
- Still: permanent failures, shame, harsh comparisons
- But OK: complexity, strategy, long-term planning

**Example**: Can understand "this tier takes 6 months" and think "cool, long-term goal"

#### Ages 14+: Formal Operational (Adolescence)
**Mechanics to Use**:
- Challenge (hard achievements, speedrun mode)
- Values alignment ("this matters because..." - show the why)
- Autonomy (heavy customization, no forced engagement)
- Authenticity (no "cutesy" mechanics; be respectful)

**Mechanics to Avoid**:
- Forced fun (if it feels babyish, they'll quit)
- Surveillance (checking in feels controlling)
- Arbitrary rules (need to understand why)
- Comparison/shame

**Example**: Reframe as "responsibility practice" not "chore gamification"

---

## Mathematical Calculators & Formulas

### XP Progression Calculator

```
Linear: xp_for_level(n) = 100 * (n - 1)
Exponential: xp_for_level(n) = base * (multiplier ^ (n - 1))
Milestone: xp_for_level(n) = base for tier 1, exponential × tier_multiplier for other tiers

Example (Family Dojo exponential 1.3x):
Level 1: 0 XP
Level 10: 1,290 XP
Level 20: 8,300 XP
Level 50: 500,000 XP
Level 100: 3,500,000 XP

To find time to level n at R XP/day:
time_in_days = sum(xp_for_level(1..n)) / R
```

### Reward Affordability Analysis

```
Total stars earned per period: S
Reward cost: C
Months to afford: M = C / (S / month)
Feel: Grindy if M > 3, achievable if M < 1, balanced if 1-2

Example:
S = 100 stars/month
C = 200 stars (monthly reward)
M = 200 / 100 = 2 months (balanced, slightly ambitious)
```

### Drop Rate Analysis

```
Drop chance: P
Actions per week: A
Expected drops per week: P * A
Time to first drop: 1 / (P * A) weeks

Example (15% drop, 10 actions/week):
Expected: 0.15 * 10 = 1.5 drops/week
Time to first: 1 / 1.5 = 0.67 weeks ≈ 5 days
Feel: Predictable (most users get one every week), satisfying
```

---

## Templates & Checklists

### Progression System Design Checklist

- [ ] Choose curve type (linear, exponential, milestone)
- [ ] Define level range (1-50? 1-100? 1-1000?)
- [ ] Calculate total XP needed (sum all levels)
- [ ] Estimate time to max (XP / typical daily earn rate)
- [ ] Identify "milestone levels" (every 10? 25? when to unlock things?)
- [ ] Plan unlocks (pet evolution, badges, cosmetics at each milestone)
- [ ] Test feel: "Does early game feel rewarding? Mid-game engaging? Late-game have goals?"
- [ ] Check: Matches target engagement (daily? weekly? yearly?)

### Reward Structure Checklist

- [ ] Choose currency type (single, dual, tiered)
- [ ] Define earn rate (XP/quest, stars/quest)
- [ ] List reward tiers (weekly, monthly, grand)
- [ ] Calculate costs (is weekly achievable? monthly ambitious? grand aspirational?)
- [ ] Price unlocks (badges: free? achievement-based? purchasable?)
- [ ] Test economics: "Can average user afford weekly rewards? Monthly?"
- [ ] Plan evolution: "How do we increase costs as players level without feeling unfair?"

### Achievement Taxonomy Checklist

- [ ] Process badges (quest count: 1, 10, 50, 100, 250, 1000)
- [ ] Milestone badges (level: 5, 20, 50, 100)
- [ ] Streak badges (days: 3, 7, 14, 30, 60, 100)
- [ ] Special badges (first time, events, comebacks, etc.) 
- [ ] Total: 20+ badges (enough for 6+ months of new unlocks)
- [ ] Each has: Name, emoji, description, associated value
- [ ] Distribution: 1-2 per month for engaged user
- [ ] Verses/lore attached (if values-aligned game)

---

## Metrics & Health Checks

### Engagement Health Dashboard

**Weekly Metrics**:
- DAU (Daily Active Users)
- MAU (Monthly Active Users)
- Retention Day 1, Day 7, Day 30
- Average session length
- % completing daily goal

**Balance Metrics**:
- Time to first level-up
- Time to 2nd achievement
- % who reach level 10, 50, 100
- Average level reached (at 30 days, 90 days, 180 days)
- Drop-off by level (where do users churn?)

**Reward Metrics**:
- Redemption rate (% who use reward feature)
- Average stars earned/week
- Affordability (can users reach reward goals?)
- Satisfaction (NPS of reward system)

**Target Ranges** (Healthy):
- Day 1 retention: >40%
- Day 7 retention: >25%
- Day 30 retention: >15%
- Avg session length: 5-10 min
- Level 10 reached: >60% of starters
- Level 50 reached: >20% of starters

**Red Flags** (Adjust System):
- Day 7 retention <15% → progression too slow or boring
- Level 50 retention <5% → mid-game plateau (add unlocks)
- Reward redemption <10% → rewards not motivating (rebalance costs)
- Session length >20 min → addictive (maybe add time caps?)

---

## Implementation Checklist

### Phase 1: Design (Week 1-2)
- [ ] Define user goal (motivation type, age, constraints)
- [ ] Choose progression system (linear/exponential/milestone)
- [ ] Design reward structure (single/dual/tiered)
- [ ] List 20+ achievement ideas
- [ ] Document psychological assumptions

### Phase 2: Mathematical Validation (Week 3)
- [ ] Calculate progression curve (time to levels)
- [ ] Analyze reward economics (grind factor)
- [ ] Simulate player journey (month 1, 6, 12)
- [ ] Stress-test (what if users earn 2x as fast? Half as fast?)

### Phase 3: Psychological Review (Week 4)
- [ ] Assess intrinsic vs. extrinsic motivation
- [ ] Check age-appropriateness
- [ ] Flag psychological risks (perfectionism, shame, comparison)
- [ ] Write parent guidance language

### Phase 4: Implementation (Week 5-8)
- [ ] Code progression system (store levels, XP, milestones)
- [ ] Code reward system (currency, costs, redemption)
- [ ] Code achievements (unlock logic, display)
- [ ] Code feedback (animations, notifications, celebrations)

### Phase 5: Testing (Week 9-12)
- [ ] Beta with 10-30 users
- [ ] Measure: retention, engagement, satisfaction
- [ ] Collect feedback: "What felt grindy? What was rewarding?"
- [ ] Adjust: Tune XP thresholds, reward costs, unlock timing

### Phase 6: Launch & Monitor (Week 13+)
- [ ] Track health metrics (DAU, retention, level distribution)
- [ ] Plan balance updates (based on real data)
- [ ] Plan feature releases (new achievements, reward tiers)
- [ ] Iterate
