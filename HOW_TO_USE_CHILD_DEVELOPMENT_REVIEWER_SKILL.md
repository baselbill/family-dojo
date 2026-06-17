# How to Use the Child Development Reviewer Skill

Your child-development-reviewer skill is now ready to use! This guide shows you how to get psychological assessments of child-focused designs.

---

## Quick Start (2 minutes)

### Current Method: Copy-Paste the Skill Prompt

Custom skills don't work as slash commands yet. Instead, follow this simple workaround:

**Step 1: Get the skill prompt**
1. Open this file: `.claude/skills/child-development-reviewer.md`
2. Copy the entire system prompt section (the "You are a child development expert..." paragraph)

**Step 2: Paste in a new Claude Code session**
1. Start a new Claude Code session or conversation
2. Paste the system prompt you just copied
3. Press Enter

**Step 3: Describe what you're reviewing**

The skill will ask clarifying questions, then provide a comprehensive assessment. Example prompts:

```
I have a gamified chore app for 8-year-olds with daily streaks 
(if you miss a day, the streak resets to 0). Kids are getting upset 
when they miss days. Is this a psychological issue? What should I change?
```

OR

```
We're building a learning platform for 11-13 year olds. The design 
includes a leaderboard showing who's completed the most lessons. 
Target audience values achievement and competition. Is this 
age-appropriate? What are the risks?
```

OR

```
We want to launch a pet companion evolution mechanic for 6-10 year olds. 
The pet evolves based on engagement (reading, homework, chores). 
Could this create extrinsic motivation where kids only do activities 
to level the pet? How do we mitigate?
```

### What Happens Next

The skill will:
1. **Clarify** what you're reviewing and the exact age group
2. **Assess** developmental appropriateness for that age
3. **Analyze** using psychological theory (Self-Determination Theory, growth mindset, child development stages)
4. **Identify** specific psychological risks
5. **Recommend** evidence-based mitigations (specific mechanic changes, messaging, monitoring)
6. **Provide** parent/caregiver guidance language

**Total time**: 15-30 minutes for a complete review

---

## Real Examples

### Example 1: Reviewing a Feature with Issues

**Your Question:**
```
My chore app for 7-10 year olds has daily streaks. Kids cry when they 
miss a day and the streak resets. Parents say it's causing anxiety. 
What's going wrong psychologically?
```

**Skill Output** (summary):
- **Root Cause**: Perfectionism + shame. Streak reset = visible failure. All-or-nothing thinking.
- **Age 7-10 Context**: This age is especially sensitive to fairness and effort visibility. Permanent failure states cause shame.
- **Risk Identified**: ⚠️ Perfectionism (streaks encourage all-or-nothing thinking) + Shame (visible failure to child + parents)
- **Mitigation**: Add "grace period" mechanic: child can miss 1 day per week without streak resetting. Reframe: "Streaks are about practicing consistency, not never failing. Missing a day is practice at resilience."
- **Parent Messaging**: "Streaks reset sometimes—that's great practice at bouncing back. We focus on effort, not perfection."
- **Test**: Monitor whether kids report less anxiety and still engage regularly.

### Example 2: Validating a New Design

**Your Question:**
```
New design for a reading app (ages 11-13). Kids can earn XP for books read, 
unlock "Author Tiers" (Novice, Apprentice, Master), and get badges. 
No social comparison. Is this psychologically sound?
```

**Skill Output** (summary):
- **Age Appropriateness**: ✅ Good for 11-13. They can handle strategy, value identity/mastery, motivated by tier progression.
- **Self-Determination Analysis**: 
  - Autonomy ✅: Choice of books, flexible pacing
  - Competence ✅: Clear milestones (tiers), skill progression
  - Relatedness ⚠️: Minimal social element (could add family sharing, but optional)
- **Risks Identified**: 
  - Extrinsic motivation trap (XP becomes the only reason to read)
  - Plateau at higher tiers (grind factor analysis)
- **Mitigations**: 
  - Frame XP as "celebrating progress," not "earning reading"
  - Add intermediate rewards every 2-3 tiers
  - Include quotes from favorite books in tier unlocks (connects to intrinsic motivation)
- **Verdict**: ✅ Psychologically sound. Monitor: Do kids read *less* when XP is removed? If yes, intrinsic motivation is low.

### Example 3: Assessing a Controversial Mechanic

**Your Question:**
```
We have a pet evolution system for 5-7 year olds. The pet gets sick if 
engagement drops below 3x/week. Kids worry the pet will die. Is this 
manipulation? Are there real harms?
```

**Skill Output** (summary):
- **Age Assessment**: 5-7 year olds cannot distinguish fantasy from reality. They will believe the pet is actually alive.
- **Risk Identified**: ⚠️ Anxiety + autonomy violation. Mechanic creates pressure to engage ("pet will die") rather than intrinsic motivation ("reading is fun").
- **Concern**: This is emotionally manipulative. It uses children's empathy against them.
- **Mitigation Options**:
  - Option 1 (Remove): Replace with "Pet needs playtime when you have free time. Here are 3 ideas..." (optional, not mandatory)
  - Option 2 (Reframe): "Pet goes to sleep when you rest. That's healthy! It wakes up when you're ready." (removes pressure, keeps mechanic)
  - Option 3 (Age up): Move to 7-10 where they can understand "this is a game mechanic" better
- **Recommendation**: Option 2 or Age up. Option 1 also valid if you want to remove pressure entirely.

---

## What You'll Get Back

For any review, the skill provides:

### 1. Developmental Assessment
- Is this age-appropriate?
- What can this age group understand vs. not?
- Concrete examples of what works/doesn't for that developmental stage

### 2. Psychological Analysis
- Autonomy: Does the child choose to engage?
- Competence: Do they see progress?
- Relatedness: Is there meaningful connection?
- Intrinsic vs. Extrinsic motivation balance

### 3. Risk Identification
- Specific psychological risks (not generic concerns)
- Why this risk applies (the causal chain)
- Probability (theoretical vs. likely)
- Severity (annoying vs. harmful)

### 4. Evidence-Based Mitigations
- Specific mechanic changes (numbers, not vague suggestions)
- Why each mitigation works (backed by theory)
- How to test whether it worked
- Parent/caregiver messaging language

### 5. Implementation Guidance
- What to tell parents
- What to tell kids
- Metrics to monitor
- Red flags during rollout

---

## Scenarios Where This Skill Helps

### Gamification Systems
- Streaks (perfectionism risk)
- Achievements (shame risk)
- Pet companions (attachment risk)
- Levels & progression (grind/burnout risk)

### Learning Apps
- XP for lessons (intrinsic motivation risk)
- Leaderboards (comparison risk for 7-10)
- Time-limited events (FOMO/pressure)
- Difficulty curves (competence gaps)

### Parental Controls
- Screen time enforcement (autonomy violation)
- Reward systems for homework
- Progress visibility to parents vs. kids
- Age-gating features

### Social Features
- Leaderboards (comparison & shame)
- Friend lists (privacy concerns, especially 11-13)
- Public profiles (identity/safety risk)
- Chat/messaging (stranger risk, bullying)

### Behavioral Design
- Notifications (FOMO, autonomy violation)
- Time pressure (anxiety)
- Daily resets (perfectionism)
- Punishment mechanics (shame)

### Art & Design
- Visual design appropriateness (scary? boring? cutesy?)
- Body representation (unrealistic standards?)
- Character diversity (representation)
- Language/tone (condescending? age-appropriate?)

---

## Pro Tip: Bookmark the Skill File

Since you'll need to copy-paste regularly, bookmark:
`.claude/skills/child-development-reviewer.md`

Then copy-pasting becomes a 10-second operation.

---

## Future: Auto-Loading

Once Claude Code supports SessionStart hooks, this copy-paste step will be automatic. For now, it's the most reliable method.

---

## Key Frameworks the Skill Uses

The skill applies these evidence-based frameworks:

1. **Piaget's Developmental Stages** — Cognitive development by age
2. **Self-Determination Theory** — Autonomy, competence, relatedness
3. **Dweck's Growth Mindset** — Effort vs. fixed talent
4. **Erikson's Psychosocial Development** — Identity formation across ages
5. **Motivation Psychology** — Intrinsic vs. extrinsic, flow theory

You don't need to know these—the skill uses them. But they're why the recommendations are grounded in research, not guesses.

---

## Troubleshooting

### "The recommendations seem too harsh"
This is designed to flag real risks. Designers often miss psychological harms because they're obvious in hindsight but hidden during development. If you disagree with a risk, the skill will explain the mechanism—you can decide to accept the risk knowingly.

### "I want to use this mechanic anyway, even though it's risky"
That's fine. The skill will:
1. Explain the trade-off clearly
2. Suggest mitigations to reduce harm
3. Provide monitoring metrics so you can catch problems early
4. Give you language to communicate with parents/caregivers

The goal is informed decision-making, not gatekeeping.

### "Can you review my competitor's app?"
Yes. You can ask "Is Duolingo's streak mechanic psychologically sound?" and get the same analysis.

### "Can you assess a real product with real users?"
The skill is designed for design review, not user research. For data-driven assessment, you'd pair this with actual user testing. But the skill can flag hypothetical risks before they affect real kids.

---

## Next Steps

1. **Try it out** on your current product (copy-paste the skill prompt)
2. **Use the recommendations** to adjust your design
3. **Monitor the metrics** the skill suggests
4. **Share your feedback** on what was helpful/missing

---

## Support

**Questions?** See `.claude/skills/README.md` for overview of other skills.

**Want to contribute?** Add case studies, additional frameworks, or assessment templates.

**Have feedback?** File an issue on GitHub or email us.

---

**Status**: ✅ Ready to use  
**Last Updated**: 2026-05-18  
**Version**: 1.0
