# How to Use the Gamification System Designer Skill

Your gamification-system-designer skill is now ready to use! Here's how:

---

## Quick Start (2 minutes)

### Current Method: Copy-Paste the Skill Prompt

Custom skills in Claude Code don't work as slash commands yet. Instead, follow this simple workaround:

**Step 1: Get the skill prompt**
1. Open this file: `.claude/skills/gamification-system-designer.md`
2. Copy the entire system prompt section (the "You are a gamification system designer..." paragraph that starts at line 62)

**Step 2: Paste in a new Claude Code session**
1. Start a new Claude Code session or conversation
2. Paste the system prompt you just copied
3. Press Enter

**Step 3: Describe your use case**

Now Claude will activate the skill and ask clarifying questions. Paste your use case (one of the examples below):

```
I'm building a [fitness app / learning platform / chores app / habit tracker].
Target users: [age group, motivation type]
Goal: [what you want to accomplish]
Any constraints: [age-appropriate, no comparison, values-aligned, offline-first, etc.]

What progression system and reward structure would you recommend?
```

### What Happens Next

The skill will:
1. **Ask clarifying questions** (~2-3 min) to understand your vision
2. **Design a complete system** (~10 min) with specific numbers
3. **Validate mathematically** (~10 min) to ensure it's balanced
4. **Assess psychologically** (~10 min) to identify risks
5. **Recommend implementation** (~5 min) with roadmap

**Total time**: ~30-45 minutes for a complete design

---

## Real Examples

### Example 1: Fitness App for Beginners

```
/gamification-system-designer

I'm building a fitness tracking app for adults ages 25-40.
Users log workouts: cardio, strength training, flexibility.
Goal: Get people to work out 3-4 times per week consistently for 90+ days.
No social features - personal progress only, no comparison.
I want a clean, professional interface (no pets, emojis, cutesy mechanics).

What progression system should I use?
```

**Expected Output:**
- Workout-count milestones (10, 25, 50, 100 workouts) instead of levels
- Separate streak tracking for each workout type
- 12 achievement badges (process, type streaks, milestone, special)
- Grace-period mechanic (miss 1 workout/week, streak continues)
- Implementation roadmap with MVP, phase 2, phase 3

### Example 2: Learning Platform (Diagnosis)

```
/gamification-system-designer

My language learning app has a problem.
Users say it feels grindy after month 2 and drop off.

Current system:
- Simple XP + streak system
- Users complete 10-15 minute daily lessons
- Currently just levels and streaks, nothing else
- Ages 8-16

What's causing the dropout? How should I fix it?
```

**Expected Output:**
- Root cause: Mid-game plateau (levels 30-60 feel slow with no intermediate rewards)
- Recommendation: Add skill-tier unlocks (e.g., "Apprentice Speaker" at level 5 unlocks custom avatar)
- Add intermediate rewards every 5-10 levels
- Adjust streak mechanics: "Freeze" feature lets users pause without losing streak
- A/B test plan to validate improvements

### Example 3: Chores App for Families

```
/gamification-system-designer

I'm designing a chore/task app for families with kids ages 7-13.
Goal: Motivate kids to do chores, teach responsibility, celebrate progress.

Should I use:
- Levels or a different progression system?
- Single currency (points) or dual (XP + rewards)?
- Pet companion evolution?
- Streaks?
- Daily reset or weekly reset?

I want it faith-aligned and family-first, with no sibling comparison.

What would you recommend?
```

**Expected Output:**
- 8-tier progression (Recruit → Mythic) with concrete rank titles
- Dual currency (XP for progression, Stars for rewards)
- Pet evolution mechanics (creates emotional attachment)
- Daily reset (allows fresh start, reduces shame from failures)
- 20+ badges covering streaks, milestones, special events, and family focus
- Specific numbers: "50 stars/week earned, 40-star weekly reward goal, 200-star monthly"
- Psychological assessment: Flags perfectionism risk from streaks, recommends grace periods
- Implementation roadmap with verses/values integration

---

## What You'll Get Back

For any design request, the skill provides:

### 1. System Design (Specific)
- Progression system (type, levels, milestones, time estimates)
- Reward structure (currency type, costs, affordability)
- Achievement taxonomy (20+ badge ideas with names & descriptions)
- Feedback loops (animations, notifications, celebrations)
- All with **specific numbers**, not vague suggestions

### 2. Mathematical Validation
- Progression curve showing time to reach key levels
- Grind factor analysis (hours per reward)
- Reward affordability check (can users reach goals?)
- Drop rate simulation (if using random mechanics)
- Player journey simulation (month 1 → month 6 → month 12)

### 3. Psychological Assessment
- Self-Determination Theory analysis (autonomy, competence, relatedness)
- Intrinsic vs. extrinsic motivation balance
- Age-appropriateness verification
- **Risk flags**: Perfectionism, shame, comparison, burnout, autonomy violations
- **Specific mitigations** for each risk (not generic advice)
- Parent/user guidance language examples

### 4. Implementation Roadmap
- **Tier 1 (MVP)**: What to ship first (core feature set)
- **Tier 2**: What to add in phase 2 (expansion features)
- **Tier 3**: What to add in phase 3 (advanced features)
- **Metrics to track**: Retention, level distribution, churn points
- **A/B testing framework**: What to test and how
- **Balance tuning guide**: If feels too grindy/easy, adjust these numbers

---

## The Skill in Action

Here's what a real conversation looks like:

---

**You**: I'm building a fitness app for adults 25-40. Target is 3-4 workouts per week. No social features, just personal progress.

**Skill**: Great! I have a few clarifying questions:

1. **Progression type**: Do you want users to feel like they're "leveling up" (1 → 2 → 3...) or would you prefer "milestone" progression (10 workouts → "Starter", 25 → "Consistent", etc.)?

2. **Streaks**: Do you want streak mechanics? They're powerful but risky. For 3-4x/week, should a "streak" mean "7 consecutive workouts" (takes ~2 weeks) or "3-4 workouts per week" (reset weekly)?

3. **Variety**: Should users track different workout types separately (Cardio, Strength, Flexibility) or combined (just total workouts)?

**You**: Milestones please (feels more tangible). 7 consecutive workouts for a streak. And track varieties separately.

**Skill**: Perfect. Here's my recommended system:

**Progression: Workout-Count Milestones**
- Starter: 10 workouts (3 weeks) → Unlock progress dashboard
- Consistent: 25 workouts (8 weeks) → Unlock insights by type
- Dedicated: 50 workouts (4 months) → Unlock goal-setting
- Athlete: 100 workouts (8 months) → Unlock advanced metrics

**Streaks**: 7-workout streaks (takes ~2 weeks), tracked separately per type:
- Cardio Streak (7 consecutive cardio)
- Strength Streak (7 consecutive strength)
- Flexibility Streak (7 consecutive flexibility)

**Achievements**: 12 total badges...
[continues with full design, math validation, psychology assessment, implementation roadmap]

---

## Files Included

The skill has access to extensive knowledge:

- **Progression templates** (linear, exponential, milestone-based with formulas)
- **Reward structures** (single currency, dual currency, tiered examples)
- **100+ badge ideas** organized by category
- **Psychological frameworks** (Self-Determination Theory, growth mindset, developmental stages)
- **Risk patterns & mitigations** (perfectionism, shame, burnout, comparison)
- **Age-appropriateness guidelines** for 5-7, 7-10, 11-13, 14+ year olds
- **5+ case studies** (Family Dojo, Habitica, Duolingo, Deposit, etc.)
- **Mathematical tools** (progression calculator, grind factor analyzer, drop-rate simulator)

All of these are available when you use the skill.

---

## Troubleshooting

### "The /gamification-system-designer command doesn't work"

This is expected. Custom skills stored in `.claude/skills/` don't register as slash commands (unlike built-in Claude Code commands). 

**Solution**: Use the copy-paste method described in Quick Start:
1. Open `.claude/skills/gamification-system-designer.md`
2. Copy the system prompt section (from "You are a gamification system designer..." to the end)
3. Paste it into a Claude Code session
4. Describe your use case—the skill will activate immediately

### "The recommendations seem generic"

This usually means you need to provide more context. Try:
- Specifying your exact age group (not "kids" but "7-10 year olds")
- Defining your constraint explicitly (not "engaging" but "no sibling comparison")
- Sharing your current problem (not "new design" but "users drop off at week 4")

The skill asks clarifying questions to get specific. Engage with them fully.

### "The math doesn't match my game"

This might mean:
1. Your game uses a different curve type (linear vs. exponential)
2. Your user engagement is different than assumed (1x/week vs. 3x/week)
3. Your reward structure has hidden mechanics

Share your specific numbers, and the skill will recalculate for your exact system.

---

## Pro Tip: Bookmark the Skill File

Since you'll need to copy-paste the skill prompt regularly, bookmark or pin this file:
`.claude/skills/gamification-system-designer.md`

Then copy-pasting becomes a 10-second operation.

---

## Future: Auto-Loading

Once Claude Code supports automatic skill loading on session start, this copy-paste step will become unnecessary. For now, it's the most reliable way to use the skill.

---

## Next Steps

1. **Try it out** on your current project (copy-paste the skill prompt)
2. **Iterate** with the skill's recommendations
3. **Test** with real users (Phase 3)
4. **Share your design** — show us what you built!

---

## Support

**Questions?** See `.claude/skills/README.md` for more details.

**Want to contribute?** The skill is open-source. Share case studies, improve the knowledge base, or suggest features.

**Have feedback?** File an issue on GitHub or email us.

---

**Status**: ✅ Ready to use (Phase 2 complete)  
**Last Updated**: 2026-05-18  
**Version**: 1.0
