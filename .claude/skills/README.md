# Claude Code Skills

This directory contains reusable skills for designing and analyzing gamification systems and child-focused products, based on lessons learned from **Family Dojo**.

## Available Skills

### gamification-system-designer

**Purpose**: Design balanced, psychologically-sound gamification systems for any engagement-driven app.

**Invoke**: Copy-paste the system prompt from `gamification-system-designer.md`

**Use cases**:
- Design a new gamification system from scratch
- Validate an existing system for balance & psychology
- Fix a game that feels too grindy or not rewarding
- Adapt mechanics for different age groups

**Example**:
```
I'm building a fitness app for adults 25-40. 
Target: 3-4 workouts per week.
No social features.
What progression and reward system should I use?
```

The skill will:
1. Ask clarifying questions about your goal, audience, constraints
2. Design a complete system (progression, rewards, achievements)
3. Validate mathematically (time to milestones, grind factor)
4. Assess psychologically (motivation, risks, age-appropriateness)
5. Provide implementation roadmap (MVP, phases, metrics)

**See also**:
- `gamification-system-designer.md` - Full skill definition
- `../GAMIFICATION_SKILL_*.md` - Detailed documentation
- `../HOW_TO_USE_GAMIFICATION_SKILL.md` - User quick start
- `../SKILL_KNOWLEDGE_BASE.md` - Knowledge base reference

---

### child-development-reviewer

**Purpose**: Review child-focused products, features, and designs through the lens of developmental psychology. Assess age-appropriateness, identify psychological risks, and recommend evidence-based mitigations.

**Invoke**: Copy-paste the system prompt from `child-development-reviewer.md`

**Use cases**:
- Review a feature for psychological soundness
- Assess age-appropriateness of mechanics
- Identify perfectionism, shame, comparison, or burnout risks
- Validate gamification mechanics for kids
- Assess social features for harm
- Evaluate behavioral incentives

**Example**:
```
My chore app for 8-year-olds has daily streaks. When kids miss a day, 
the streak resets to 0. Parents say kids are getting anxious and upset. 
Is this a psychological issue? What should I change?
```

The skill will:
1. Ask clarifying questions about what you're reviewing and the exact age group
2. Assess developmental appropriateness using Piaget's stages
3. Analyze using Self-Determination Theory (autonomy, competence, relatedness)
4. Identify specific psychological risks with causal chains
5. Recommend evidence-based mitigations (specific mechanic changes)
6. Provide parent/caregiver messaging language
7. Suggest metrics to monitor for real-world impact

**See also**:
- `child-development-reviewer.md` - Full skill definition
- `../HOW_TO_USE_CHILD_DEVELOPMENT_REVIEWER_SKILL.md` - User quick start
- `../SKILL_KNOWLEDGE_BASE.md` - Knowledge base reference

---

### faith-tech-product-builder

**Purpose**: Build authentic faith-integrated products. Helps teams design apps that genuinely serve faith communities with integrity—combining product expertise with theological understanding and community strategy.

**Invoke**: Copy-paste the system prompt from `faith-tech-product-builder.md`

**Use cases**:
- Build a prayer habit tracker (without legalism/shame)
- Create a Bible reading app for families
- Design a values-tracking app (virtue-focused)
- Launch a devotional platform
- Build a church app with community features
- Integrate scripture authentically (not preachy)
- Navigate sensitive topics (shame, doubt, abuse, LGBTQ+)
- Plan marketing to faith communities

**Example**:
```
We're building a prayer app for families (kids + parents, ages 8-14). 
We want prayer to feel like natural rhythm, not checklist. 
How do we design this so it doesn't become legalistic/shame-based?
```

The skill will:
1. Ask clarifying questions about your product, audience, faith perspective, values
2. Assess theological soundness (red flags: shame, legalism, exploitation?)
3. Design mechanics that honor faith (grace, invitation, depth, community)
4. Align with your faith tradition (Protestant, Catholic, Orthodox, interfaith)
5. Plan community strategy (advisory board, beta testing, church partnerships)
6. Handle sensitive topics (shame, doubt, spiritual abuse, LGBTQ+, grief)
7. Provide implementation roadmap (MVP, phases, key partnerships, success metrics)

**See also**:
- `faith-tech-product-builder.md` - Full skill definition
- `../HOW_TO_USE_FAITH_TECH_PRODUCT_BUILDER_SKILL.md` - User quick start
- `../SKILL_KNOWLEDGE_BASE.md` - Knowledge base reference

---

## How to Use Skills in Claude Code

### Current Method: Copy-Paste the System Prompt

Custom skills don't work as slash commands yet. Instead, use this simple workaround for any skill:

1. **Open the skill file**:
   - For gamification: `gamification-system-designer.md`
   - For child development: `child-development-reviewer.md`

2. **Copy the system prompt section**:
   - Find the line starting with "You are a..." 
   - Copy from there to the end of the prompt

3. **Paste in a Claude Code session**:
   - Start a new session
   - Paste the system prompt
   - Press Enter

4. **Describe your use case**:
   ```
   I'm building [app type] for [audience].
   Goal: [what you want to accomplish]
   Context: [any specific details]
   ```

5. **The skill will guide you** through the review/design process

**Tip**: Bookmark the skill file for quick 10-second copy-paste access.

---

## What Makes These Skills Effective

### Evidence-Based
- Grounded in Self-Determination Theory, growth mindset, developmental psychology
- References Piaget's cognitive stages, Erikson's psychosocial development, Dweck's growth mindset
- References real case studies (Family Dojo, Habitica, Duolingo, etc.)
- Mathematically validated progression curves
- Harm research on perfectionism, shame, anxiety, and burnout

### Specific, Not Generic
- Provides numbers: "8 tiers, levels 1-100, exponential 1.3x, 6 months to max"
- Not vague advice: "make it engaging" → specific mechanics with reasoning
- Not vague risk flags: "add grace period mechanic: miss 1 day/week without resetting"

### Psychological Depth
- **Gamification skill**: Identifies risks in progression systems, reward structures, achievement mechanics
- **Development skill**: Identifies real risks by age group (perfectionism, shame, comparison, burnout, autonomy violation)
- Suggests specific mitigations with evidence and causal chains
- Age-appropriate recommendations: Different mechanics for 5-7, 7-10, 11-13, 14+

### Actionable
- Recommends concrete changes with numbers, not vague suggestions
- Suggests metrics to track and monitor
- Provides parent/caregiver messaging language
- Provides A/B testing framework

---

## Supported Use Cases

The skill works for any engagement-driven app:

| Domain | Example | Use Case |
|--------|---------|----------|
| **Family** | Chores, allowance, learning | Motivate kids, build responsibility |
| **Fitness** | Workouts, running, strength | Build habits, celebrate milestones |
| **Learning** | Languages, courses, reading | Increase completion, streaks |
| **Productivity** | Tasks, projects, goals | Motivate knowledge workers |
| **Habits** | Meditation, journaling, exercise | Form new habits over 90 days |
| **Health** | Water intake, sleep, nutrition | Behavior change tracking |

---

## Quick Start Examples

### Gamification Skill Examples

**Example 1: Design a New System**
```
I'm building a reading challenge for middle schoolers (ages 11-15).
They set a goal (books/month) and log completions.
Goal: Make reading feel rewarding without pressure.
Constraints: No comparison, focus on personal progress.

What progression and achievement system would work?
```

**Example 2: Validate an Existing System**
```
I already have a system:
- 100 levels, exponential progression (1.3x multiplier)
- 50 stars/week earned, 200-star monthly reward
- 20 badges for streaks, milestones, and achievements
- Age group: 7-13, family chores app

Is this balanced? Any psychological risks I should know about?
```

**Example 3: Fix a Problem**
```
My game feels too grindy. Users drop off after month 2.

Current system:
- Levels 1-100, exponential progression
- 3-4 workouts per week engagement
- 20 badges (process, streaks, milestones)
- Age: 25-40, fitness app

What's wrong? How do I fix it?
```

---

### Child Development Skill Examples

**Example 1: Review a Feature with Issues**
```
My chore app for 7-10 year olds has daily streaks. Kids cry when they 
miss a day and the streak resets. Parents say it's causing anxiety. 
What's going wrong psychologically?
```

**Example 2: Validate a New Design**
```
New design for a reading app (ages 11-13). Kids can earn XP for books read, 
unlock "Author Tiers" (Novice, Apprentice, Master), and get badges. 
No social comparison. Is this psychologically sound?
```

**Example 3: Assess a Controversial Mechanic**
```
We have a pet evolution system for 5-7 year olds. The pet gets sick if 
engagement drops below 3x/week. Kids worry the pet will die. Is this 
manipulation? Are there real harms?
```

---

### Faith-Tech Skill Examples

**Example 1: Build a Prayer App**
```
We're building a prayer app for families (kids + parents, ages 8-14). 
We want prayer to feel like a natural rhythm, not a checklist. 
Our faith emphasizes that prayer is conversation, not performance. 
How do we avoid legalism and shame if kids miss days?
```

**Example 2: Launch a Bible Reading App**
```
We want to create a Bible reading app for ages 11-16 with streak tracking 
and community features. We're worried about making it feel grindy. 
How do we integrate scripture authentically without being preachy?
```

**Example 3: Design a Values App**
```
We're designing a values-tracking app for families based on Christian virtues. 
We want kids to reflect on living out values—NOT earn rewards. 
How do we design this authentically?
```

---

## Deep Dive Resources

### Gamification System Designer

- **GAMIFICATION_SKILL_IMPLEMENTATION.md** (570 lines)
  - System prompt (full)
  - Conversation flow state machine
  - Mathematical tools (Python)
  - Test plan

- **GAMIFICATION_SKILL_TESTS.md** (550 lines)
  - 6 test scenarios with outputs
  - Validation results
  - Quality metrics

- **GAMIFICATION_SKILL_CONVERSATION_EXAMPLE.md** (470 lines)
  - Full example conversation
  - All 9 interaction states
  - Success criteria

- **GAMIFICATION_SKILL_DEPLOYMENT.md** (480 lines)
  - Quick start
  - Integration options
  - Testing checklist
  - FAQ

- **HOW_TO_USE_GAMIFICATION_SKILL.md** (262 lines)
  - Quick start guide
  - Real copy-paste examples
  - Troubleshooting

### Child Development Reviewer

- **HOW_TO_USE_CHILD_DEVELOPMENT_REVIEWER_SKILL.md** (280 lines)
  - Quick start guide
  - Real review examples
  - Frameworks used (Piaget, SDT, growth mindset)
  - Troubleshooting

- **child-development-reviewer.md** (350 lines)
  - Full system prompt
  - 6-step review process
  - Risk identification framework
  - Age-specific guidance

### Faith-Tech Product Builder

- **HOW_TO_USE_FAITH_TECH_PRODUCT_BUILDER_SKILL.md** (300 lines)
  - Quick start guide
  - 3 real examples (prayer app, Bible reader, values app)
  - Key principles (theological humility, authenticity, community)
  - Common concerns & answers
  - Troubleshooting

- **faith-tech-product-builder.md** (400 lines)
  - Full system prompt
  - 8-step design process (theology, mechanics, values, community, sensitive topics, roadmap)
  - Red flags to avoid (shame, legalism, proof-texting, exploitation)
  - Strengths to build on (grace, invitation, depth, community)
  - Community strategy & advisory board structure
  - Ethical monetization
  - Metrics that matter

### Shared Knowledge Base

- **SKILL_KNOWLEDGE_BASE.md** (3500 words)
  - Progression templates (linear, exponential, milestone-based)
  - Reward structures (single, dual, tiered)
  - Achievement taxonomy (100+ badge ideas)
  - Psychological frameworks (SDT, growth mindset, developmental stages)
  - Faith-tech frameworks (theology, grace, legalism, shame, abuse)
  - Case studies (Family Dojo, Habitica, Duolingo, Youversion, Pray, Nines, etc.)
  - Risk patterns & mitigations

---

## Contributing

Found an issue? Have a suggestion? Want to add a case study?

1. File an issue on GitHub
2. Submit a PR with improvements
3. Share your design journey (email: see project README)

---

## Status

✅ **Version 1.0 - Production Ready**

### gamification-system-designer
- Phase 2 complete: Prompt engineering & conversation design validated across 6 test scenarios
- Ready for: Phase 3 - Beta testing with real users

### child-development-reviewer
- Phase 1 complete: Skill created based on gamification skill's psychological assessment framework
- Status: Production-ready for immediate use
- Ready for: Testing and validation

### faith-tech-product-builder
- Phase 1 complete: Comprehensive skill for authentic faith-integrated product design
- Status: Production-ready for immediate use
- Based on: Family Dojo's faith-integrated mechanics + CEO's theological expertise
- Ready for: Real-world faith-tech projects

All three skills are ready for copy-paste usage in Claude Code sessions.

---

**Last Updated**: 2026-05-18  
**Maintained By**: Family Dojo Contributors
