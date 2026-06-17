# Claude Skill Specifications

## Skill 1: codebase-documentation-architect

### Purpose
Auto-generate comprehensive developer documentation (CLAUDE.md, memory.md, architectural review) from any codebase to accelerate onboarding and maintain institutional knowledge.

### When to Invoke
- `/codebase-documentation-architect` when starting work on a new/unfamiliar codebase
- After major architectural changes (generate updated docs)
- When handing off project to another developer
- When preparing codebase for open-source release

### What It Produces
1. **CLAUDE.md** (Developer Reference)
   - Project overview & purpose
   - Architecture overview (single-file, monolith, microservices, etc.)
   - Code organization breakdown (file structure, key sections)
   - Data models & state management
   - Common development tasks (how to add features)
   - Workflow (how to develop, test, deploy)
   - Key file locations & patterns

2. **memory.md** (Institutional Knowledge)
   - Project intent & core values
   - Architectural decisions with rationale (why this choice?)
   - Design patterns used
   - Known technical debt
   - Future enhancement directions
   - Testing strategy & checklist
   - Deployment & maintenance notes

3. **ARCHITECTURAL_REVIEW.md** (Quality Assessment)
   - Architecture review (strengths, weaknesses, scaling limits)
   - Code quality assessment (scores, technical debt inventory)
   - Performance analysis (bottlenecks, optimization opportunities)
   - Security review (vulnerabilities, mitigations)
   - UX/design assessment (if applicable)
   - Risk assessment (known issues, future considerations)
   - Recommendations (priority order)

### Key Inputs
- **Codebase structure**: File tree, language(s), framework(s)
- **Project type**: Single-file, monorepo, microservices, mobile, backend, frontend, full-stack
- **Project maturity**: Hobby, alpha, beta, production, archived
- **Target audience**: Solo developer, small team, large org, open-source community
- **Special context**: Industry (parenting tech, healthcare, finance, etc.), constraints (offline-first, no dependencies, etc.)

### Implementation Approach

**Phase 1: Codebase Analysis** (Explore Agent)
- Read file structure and key files
- Identify architecture pattern (single-file, MVC, modular, etc.)
- Map data flow (state management, API patterns)
- Extract key functions, classes, constants
- Identify coding patterns and idioms

**Phase 2: Decision Archaeology** (Claude Agent)
- Infer architectural decisions from code
- Reason about why patterns were chosen
- Identify anti-patterns and technical debt
- Note assumptions embedded in code

**Phase 3: Documentation Generation** (Claude Agent)
- Generate CLAUDE.md from analysis
- Generate memory.md with decisions + rationale
- Generate ARCHITECTURAL_REVIEW.md with scores and recommendations

**Phase 4: Quality Check** (Claude Agent)
- Verify docs are accurate against code
- Ensure no placeholder text remains
- Check for completeness (all sections filled)
- Suggest refinements

### Knowledge Base Requirements
- Template structures for each doc (CLAUDE.md, memory.md, ARCHITECTURAL_REVIEW.md)
- Architecture pattern recognition (single-file, MVC, serverless, monorepo, etc.)
- Tech stack detection (JavaScript, Python, Go, React, Django, etc.)
- Code smell & technical debt patterns
- Industry-specific considerations (startup vs. enterprise, regulated vs. not, etc.)

### Success Metrics
- Docs are complete and accurate (verified against code)
- New developer can understand architecture in <30 min reading
- No critical architectural decisions missing
- Risk assessment catches real issues

### Example Invocation
```
User: "/codebase-documentation-architect"

Skill: "I'll analyze your codebase and generate documentation. Let me start by understanding your project structure.

What type of project is this?
- [ ] Single-file web app (HTML/CSS/JS)
- [ ] Frontend (React, Vue, Angular, etc.)
- [ ] Backend (Node, Python, Go, etc.)
- [ ] Mobile (React Native, Flutter, etc.)
- [ ] Monorepo (multiple services)
- [ ] Other"

User: "Single-file web app"

Skill: "Perfect. Now let me explore your codebase..."
[Reads files, analyzes structure, identifies patterns]

Skill: "I've analyzed your codebase. Here's what I found:
- Architecture: Single-file HTML with embedded CSS & JavaScript
- Size: 2845 lines
- Key features: [list]
- Tech stack: Vanilla JS, CSS Grid, localStorage
- Maturity: Production (v5+ based on commit history)

Generating documentation..."
[Produces CLAUDE.md, memory.md, ARCHITECTURAL_REVIEW.md]
```

---

## Skill 2: gamification-system-designer

### Purpose
Design balanced, psychologically-sound gamification systems for habit/task/motivation apps. Tune mechanics, progression, rewards, and engagement loops.

### When to Invoke
- When designing new app/feature with gamification elements
- When tuning existing game mechanics (progression feels grindy, rewards not motivating)
- When launching new reward tier or achievement system
- When designing for specific age group or user segment

### What It Does

1. **Mechanic Design**
   - Design progression system (levels, tiers, milestones)
   - Create reward structure (currency, costs, tier pricing)
   - Define achievement taxonomy (badges, unlocks, milestones)
   - Design feedback loops (animations, notifications, celebration)

2. **Balance Analysis**
   - XP/currency mathematics (how long to level up?)
   - Drop rates & probability (loot boxes, random rewards)
   - Difficulty curve (early game vs. late game pacing)
   - Reward saturation (is it too easy to get rewards?)

3. **Psychological Assessment**
   - Intrinsic vs. extrinsic motivation (Self-Determination Theory)
   - Age-appropriateness (developmental stages)
   - Risk assessment (perfectionism, shame, comparison anxiety)
   - Engagement patterns (sustainable vs. burnout-prone)

4. **Iterative Tuning**
   - Simulate game progression (what does month 1/6/12 look like?)
   - Identify balance issues (power creep, grinding, boredom)
   - Suggest adjustments with predicted impact
   - A/B test frameworks

### Key Inputs
- **Target users**: Age group, experience level, motivation types
- **Core mechanic**: What is the primary action? (chores, fitness, learning, habit building)
- **Desired engagement**: Casual vs. hardcore, daily vs. weekly, sprint vs. marathon
- **Constraints**: No social comparison, mobile-friendly, offline-first, faith-aligned, etc.
- **Success metrics**: What indicates success? (retention, DAU, conversion, etc.)

### Implementation Approach

**Phase 1: Goal Clarification**
- Understand user motivation (why do they engage?)
- Define success (what does "good" engagement look like?)
- Identify constraints (age, culture, values alignment)

**Phase 2: Mechanic Design**
- Suggest progression system (levels, tiers, milestones)
- Design reward structure (currency, costs, rarity tiers)
- Create achievement taxonomy (badges, unlocks, special events)
- Design feedback loops (celebration, notifications, community)

**Phase 3: Mathematical Tuning**
- Calculate progression curve (how long to reach max level?)
- Simulate reward economics (can players afford rewards?)
- Analyze drop rates & probability distribution
- Estimate time investment per reward (hours per achievement)

**Phase 4: Psychological Review**
- Assess intrinsic vs. extrinsic motivation balance
- Flag perfectionism/anxiety/shame risks
- Check age-appropriateness
- Identify comparison/sibling rivalry risks
- Suggest parent/user guidance language

**Phase 5: Iteration & Testing**
- Suggest adjustments based on balance issues
- Provide frameworks for A/B testing
- Recommend metrics to track (retention, engagement, satisfaction)
- Plan future feature releases

### Knowledge Base Requirements
- Progression system templates (linear, exponential, milestone-based)
- Reward structure examples (stars, points, currency, rarity tiers)
- Achievement taxonomy patterns (quest count, time-based, special events)
- Self-Determination Theory application (autonomy, competence, relatedness)
- Psychological risk patterns (perfectionism spirals, shame cycles, comparison anxiety)
- Age-appropriateness frameworks (developmental stages)
- Engagement metrics & health checks
- Case studies (Habitica, Deposit, Family Dojo, Duolingo, Fitbit, etc.)

### Success Metrics
- Mechanics feel balanced (not too grindy, not too easy)
- Progression curve matches user expectations
- Engagement sustainable (no burnout, healthy streaks)
- Psychological safety (no shame, low comparison risk)
- Works for target age group (appropriate complexity/feedback)

### Example Invocation
```
User: "/gamification-system-designer

I'm building a chore app for kids ages 7-13. Help me design the progression and reward system."

Skill: "Great! Let me understand your vision.

1. What's your primary goal?
   - Intrinsic motivation (kids help family because it matters)
   - Habit formation (build daily routines)
   - Character development (teach values through action)
   - Behavior change (reduce resistance to chores)

2. How long should it take to reach 'max progression'?
   - 3 months
   - 6 months
   - 1 year
   - 2+ years

3. What's your target engagement?
   - Daily (quests reset each day)
   - Weekly (goals reset weekly)
   - Monthly (seasonal progression)
   - Ongoing (no hard reset)

4. Any constraints?
   - Age-appropriate (7-13)
   - Faith-aligned values
   - No social comparison
   - Offline-first
   - Other?"

User: [Provides answers]

Skill: "Perfect. Based on your constraints, I recommend...

**Progression System**:
- 8 tiers (Recruit → Mythic, levels 1-100)
- Exponential curve (slow early, accelerates mid-game, plateaus at end)
- Milestones: Pet evolution at levels 3, 5, 10, 15, 25, 50, 100

**Reward Structure**:
- Daily stars (1-3 per quest completion)
- Weekly target (30-50 stars/week)
- Monthly rewards (large prizes, family activities)
- Grand rewards (yearly achievements)

**Achievement System**:
- 20+ badges (quests, streaks, special events)
- Verses at unlocks (faith values)
- No public leaderboards (reduces comparison)

**Risk Assessment**:
- ✅ Low perfectionism risk (resets daily, no permanent failure)
- ✅ Healthy motivation (intrinsic focus on values)
- ⚠️ Monitor: Streak mechanics could cause anxiety in high-achievers

**Recommendations**:
1. Add parent guidance about normalizing missed days
2. Consider 'streak recovery' mechanic (miss 1 day, resume next)
3. Emphasize badges over star count in UI

Let me simulate the progression curve..."
[Shows charts, simulations, detailed math]
```

---

## Implementation Timeline

### Week 1-2: Specifications & Knowledge Base
- [ ] Finalize skill definitions
- [ ] Build template library (CLAUDE.md, memory.md, ARCHITECTURAL_REVIEW.md)
- [ ] Create code pattern recognition library
- [ ] Compile gamification system templates & case studies

### Week 3-4: Prompt Engineering
- [ ] Write system prompts for each skill
- [ ] Design conversation flows (user questions, skill responses)
- [ ] Create decision trees (what to ask based on user input)
- [ ] Build validation checks (docs complete, math checks out, etc.)

### Week 5-6: Testing & Refinement
- [ ] Test codebase-documentation-architect on 5 sample codebases
- [ ] Test gamification-system-designer on 3 design scenarios
- [ ] Refine based on output quality
- [ ] Document limitations and edge cases

### Week 7-8: Launch & Support
- [ ] Publish skill definitions
- [ ] Create user guide & example invocations
- [ ] Gather feedback from early users
- [ ] Iterate on prompts based on real usage

---

## Success Criteria

**codebase-documentation-architect**:
- Produces complete, accurate CLAUDE.md in <15 min
- Generated docs match manual quality of Family Dojo docs
- New developer understands architecture after reading docs
- Catches real technical debt and scaling limits

**gamification-system-designer**:
- Designs balanced progression system (not grindy, not trivial)
- Identifies psychological risks (perfectionism, shame, comparison)
- Provides mathematical verification (progression curves, reward economics)
- Recommends age-appropriate mechanics
- Suggests concrete implementation steps
