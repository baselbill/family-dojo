# Claude Code Skills

This directory contains reusable skills for designing and analyzing gamification systems, based on lessons learned from **Family Dojo**.

## Available Skills

### gamification-system-designer

**Purpose**: Design balanced, psychologically-sound gamification systems for any engagement-driven app.

**Invoke**: `/gamification-system-designer`

**Use cases**:
- Design a new gamification system from scratch
- Validate an existing system for balance & psychology
- Fix a game that feels too grindy or not rewarding
- Adapt mechanics for different age groups

**Example**:
```
/gamification-system-designer

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
- `../SKILL_KNOWLEDGE_BASE.md` - Knowledge base reference

---

## How to Use Skills in Claude Code

### In a Claude Code Session

1. **Type the skill command**:
   ```
   /gamification-system-designer
   ```

2. **Describe your use case**:
   ```
   I'm building [app type] for [audience].
   Goal: [what you want to accomplish]
   Constraints: [any limitations]
   ```

3. **The skill will guide you** through the design process

### Without Typing the Command

You can also paste the system prompt directly in any conversation:

1. Open `gamification-system-designer.md`
2. Copy the system prompt section
3. Paste it in your Claude Code session
4. Describe your use case

---

## What Makes These Skills Effective

### Evidence-Based
- Grounded in Self-Determination Theory, growth mindset, developmental psychology
- References real case studies (Family Dojo, Habitica, Duolingo, etc.)
- Mathematically validated progression curves

### Specific, Not Generic
- Provides numbers: "8 tiers, levels 1-100, exponential 1.3x, 6 months to max"
- Not vague advice: "make it engaging" → specific mechanics with reasoning

### Psychological Depth
- Identifies real risks: perfectionism from streaks, shame from failures, burnout from grinding
- Suggests specific mitigations: "grace period", "daily reset", "milestone unlocks"
- Age-appropriate recommendations: Different mechanics for 5-7, 7-10, 11-13, 14+

### Actionable
- Recommends MVP first, then phases 2 & 3
- Suggests metrics to track
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

### Example 1: Design a New System

```
/gamification-system-designer

I'm building a reading challenge for middle schoolers (ages 11-15).
They set a goal (books/month) and log completions.
Goal: Make reading feel rewarding without pressure.
Constraints: No comparison, focus on personal progress.

What progression and achievement system would work?
```

### Example 2: Validate an Existing System

```
/gamification-system-designer

I already have a system:
- 100 levels, exponential progression (1.3x multiplier)
- 50 stars/week earned, 200-star monthly reward
- 20 badges for streaks, milestones, and achievements
- Age group: 7-13, family chores app

Is this balanced? Any psychological risks I should know about?
```

### Example 3: Fix a Problem

```
/gamification-system-designer

My game feels too grindy. Users drop off after month 2.

Current system:
- Levels 1-100, exponential progression
- 3-4 workouts per week engagement
- 20 badges (process, streaks, milestones)
- Age: 25-40, fitness app

What's wrong? How do I fix it?
```

---

## Deep Dive Resources

For more information, see the main project documentation:

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

- **SKILL_KNOWLEDGE_BASE.md** (3500 words)
  - Progression templates
  - Reward structures
  - Achievement taxonomy
  - Psychological frameworks
  - Case studies

---

## Contributing

Found an issue? Have a suggestion? Want to add a case study?

1. File an issue on GitHub
2. Submit a PR with improvements
3. Share your design journey (email: see project README)

---

## Status

✅ **Version 1.0 - Production Ready**

Phase 2 complete: Prompt engineering & conversation design validated across 6 test scenarios.

Ready for: Phase 3 - Beta testing with real users

---

**Last Updated**: 2026-05-18  
**Maintained By**: Family Dojo Contributors
