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

### Shared Knowledge Base

- **SKILL_KNOWLEDGE_BASE.md** (3500 words)
  - Progression templates (linear, exponential, milestone-based)
  - Reward structures (single, dual, tiered)
  - Achievement taxonomy (100+ badge ideas)
  - Psychological frameworks (SDT, growth mindset, developmental stages)
  - Case studies (Family Dojo, Habitica, Duolingo, etc.)
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

Both skills are ready for copy-paste usage in Claude Code sessions.

---

**Last Updated**: 2026-05-18  
**Maintained By**: Family Dojo Contributors
