# Marketing-Agent JS Snippet for Donal — Drop-in 5-Product Taxonomy Update

> ⚠️ **SUPERSEDED 2026-04-24** — site repositioned to 3-tier + add-ons taxonomy. The 5 products in this snippet (AI/Speak/Fluency) no longer exist. **Do NOT paste this as-is.** See [marketing/TODO-marketing-agent-rebuild.md](marketing/TODO-marketing-agent-rebuild.md) for the current snippet.
>
> Closes priority #1 in `marketing-agent-improvement-plan.md`. This is a ready-to-paste JavaScript block that Donal can drop into `marketing/marketing-dashboard.html` to wire in the 5-product taxonomy (Elevare AI / Speak / Fluency / Pro / Med). Saves ~4 hours of the 9-hr Week-1 critical path.

---

## What this replaces

The existing dashboard has 3-product dropdowns (Lingua / Rise / Flex Nexus) and content templates across ~4 locations in the HTML file:

| Location | Lines (approx.) | What to replace |
|---|---|---|
| Content dropdown #1 | ~518-520 | `<option>` tags |
| Content dropdown #2 | ~626-628 | `<option>` tags |
| Content dropdown #3 | ~727-729 | `<option>` tags |
| `contentTemplates` object | ~1138-1250 | program keys |
| `voicelessAds` object | ~1386-1518 | product keys |
| `hashtags` bank | ~1244 | per-product arrays |

Below are drop-in replacements for each.

---

## 1. Dropdown replacement — use this `<select>` block anywhere the old one appears

```html
<select class="form-select" id="programSelect">
    <option value="">— Select program —</option>
    <optgroup label="Current products">
        <option value="elevare-ai">Elevare AI — $29/mo (WhatsApp AI companion)</option>
        <option value="elevare-speak">Elevare Speak — $199/mo (conversation cohort)</option>
        <option value="elevare-fluency">Elevare Fluency — $497 12wk (intensive)</option>
        <option value="elevare-pro">Elevare Pro — $449/mo (business English)</option>
        <option value="elevare-med">Elevare Med — $699/mo (medical English + OET)</option>
    </optgroup>
    <optgroup label="Legacy (being migrated)">
        <option value="lingua-legacy">Lingua (redirects to Speak)</option>
        <option value="rise-legacy">Rise (now methodology layer)</option>
        <option value="flexnexus-legacy">Flex Nexus (redirects to Fluency)</option>
    </optgroup>
</select>
```

Replace the existing `<select>` blocks at the 3 dropdown locations. Keep the `id` unique per instance (`programSelectContent`, `programSelectAds`, etc.).

---

## 2. `contentTemplates` object — replace with this

```javascript
const contentTemplates = {
    // === Elevare AI ($29/mo) ===
    'elevare-ai': {
        'linkedin-post': [
            "Your English coach doesn't sleep. Between weekly sessions, Elevare AI keeps you in the game — scenario role-plays, confidence warm-ups, and session recaps. All on WhatsApp. $29/mo. First week free.",
            "Most apps teach you about English. Elevare AI makes you practice English. 10-minute scenario role-plays where failing has zero cost. Lead to your real coach session ready, not cold.",
            "I used to dread work calls in English. Then I started warming up with Elevare AI for 2 minutes before each one. Game changed. If you freeze up in meetings, try the 7-day free trial."
        ],
        'instagram-post': [
            "🗣️ 10 mins a day. WhatsApp only. Safe space to fail.\n\nElevare AI practice companion — $29/mo, 7-day free trial, cancel anytime.\n\nBook free trial → elevaremind.io/ai",
            "Can't find time to practice English? You have WhatsApp. You have 10 minutes. That's all Elevare AI needs.",
            "The gap between intermediate and confident isn't more vocabulary. It's more reps. Elevare AI gives you unlimited reps on the scenarios that matter to you."
        ],
        'email-subject': "The English practice that fits in your WhatsApp",
        'email-body': "Hey [First Name],\n\nYou've been studying English. You know the grammar. You understand the films. But the moment someone asks you something unexpected, your mind blanks.\n\nThat's not a vocabulary problem. It's a rep problem.\n\nElevare AI is a WhatsApp-native practice companion — $29/mo, 7-day free trial. Three modes: scenario role-plays, session warm-ups before real calls, and weekly recaps.\n\nIt's the gym for your English. The real coach (when you're ready) is the trainer.\n\nStart free: elevaremind.io/ai",
        'whatsapp-message': "Hey! Quick question — would a 10-min daily English practice on WhatsApp be useful for you? We just launched Elevare AI for $29/mo (first week free). Happy to share details if you're curious."
    },

    // === Elevare Speak ($199/mo) ===
    'elevare-speak': {
        'linkedin-post': [
            "Stopped freezing in English conversations. Not after 10 years of apps. After 6 weeks in a 6-person cohort with a real coach. That's Elevare Speak.",
            "The 4 moves that make you sound fluent, not just correct: small talk that doesn't stall. Stories with real arc. Disagreement without aggression. Improv when you don't know the word.\n\nElevare Speak. Weekly cohort + bi-weekly 1:1. $199/mo.",
            "A2-B2 learners: you don't need another Duolingo streak. You need 6 humans at your level in a weekly 90-min call, and a coach who hears patterns you can't."
        ],
        'instagram-post': [
            "👥 Cohort of 6. Weekly 90-min call. Bi-weekly 1:1 with your coach. Daily AI practice.\n\nElevare Speak — $199/mo. Book free assessment.",
            "You don't freeze in English because your English is bad. You freeze because you haven't practiced under real stakes. Elevare Speak fixes that with a cohort and a coach.",
            "The single highest-leverage thing you can do for your English in 2026? Join a small cohort of learners at your level. Isolation is the enemy of fluency."
        ],
        'email-subject': "Why you still freeze in English conversations (and the fix)",
        'email-body': "Hi [First Name],\n\nAfter years of apps and occasional tutoring, you can read the newspaper, understand films, even write professional emails. But real-time conversation still trips you up.\n\nThat's because you've trained your input skills for years, but barely trained your output under pressure.\n\nElevare Speak puts you in a cohort of 6 peers at your level, weekly 90-min group call + bi-weekly 1:1 with your coach + daily AI practice between.\n\n$199/month. Book a free 5-min assessment: elevaremind.io/speak",
        'whatsapp-message': "Hey! I'm running small English conversation cohorts (6 people max) for working adults. Weekly group call + 1:1 with me. $199/mo. Free assessment call if you're curious — elevaremind.io/speak"
    },

    // === Elevare Fluency ($497 12-wk intensive) ===
    'elevare-fluency': {
        'linkedin-post': [
            "The 12-week English intensive for people with an actual deadline. Wedding abroad. Visa requirement. Job interview. Move in 3 months.\n\nElevare Fluency. Measurable progress every 2 weeks, graduation in 12.",
            "Measurable progress in 12 weeks. Or we keep coaching you free. That's the Elevare Fluency guarantee — not marketing, actual policy.",
            "Most 'learn English fast' programs are either self-paced apps (no accountability) or individual tutoring ($60+/hr). Elevare Fluency is the third option: 12-week cohort, weekly 1:1, graduation, $497 upfront."
        ],
        'instagram-post': [
            "⏱️ 12 weeks. Baseline → breakthrough. $497 upfront (or 3×$199).\n\nNext cohort: check the calendar at elevaremind.io/fluency",
            "Graduation. Certificate. LinkedIn badge. Alumni community for life.\n\nElevare Fluency — 12 weeks, 6-person cohort, guaranteed measurable progress.",
            "Deadline-driven English learning. If you need fluency by [date], Fluency is the right tier. If you're just improving ongoing, Speak is better."
        ],
        'email-subject': "12 weeks to measurable fluency — or we keep coaching you",
        'email-body': "Hi [First Name],\n\nIf you've got a deadline — wedding, visa, move, interview — in the next 3-6 months, Elevare Fluency is built for exactly this.\n\n12-week intensive. Weekly cohort + 1:1 + AI practice. 6 phases from fluency floor to breakthrough. Measurable progress gates every 4 weeks.\n\n$497 upfront (or $199×3). Graduation with certificate + LinkedIn badge.\n\nNext cohort starts soon. Free assessment: elevaremind.io/fluency",
        'whatsapp-message': "Hey! Got a date you need to be fluent by? Our 12-week intensive just opened applications for the next cohort. $497 upfront, measurable progress guaranteed. Check elevaremind.io/fluency"
    },

    // === Elevare Pro ($449/mo) ===
    'elevare-pro': {
        'linkedin-post': [
            "You're 'functional' in English meetings. You want to be commanding. That gap isn't vocabulary — it's deployment of frameworks. Elevare Pro teaches them.",
            "The 4 moments that define business-English careers: leading a meeting. Delivering a pitch. Negotiating a price. Writing a decisive email. Elevare Pro builds muscle memory on all four.",
            "Business English coaching for working professionals. Senior coaches only. 1:1 + small group + AI practice on your actual upcoming high-stakes moments. $449/mo."
        ],
        'instagram-post': [
            "🎯 One meeting. One pitch. One promotion.\n\nElevare Pro — senior coach, weekly 1:1 + small group. $449/mo.",
            "Your LinkedIn says 'fluent in English.' Your meetings say 'still working on it.' Elevare Pro closes that gap in 2-3 months.",
            "Business-English buyers: employers often reimburse Elevare Pro. Ask HR. $449/mo is a rounding error on most professional-development budgets."
        ],
        'email-subject': "Lead the meeting. Deliver the pitch. Close the deal.",
        'email-body': "Hi [First Name],\n\nYou're past 'getting by' in English. You want to command the room. That's a specific kind of work — deploying frameworks under pressure, not just vocabulary.\n\nElevare Pro: 60-min weekly 1:1 with a senior coach + 60-min weekly small group (3 max) + Elevare AI for your scenario practice. Your actual upcoming meetings become the curriculum.\n\n$449/month. 3-month minimum commitment. Most students stay 4-8 months.\n\nBook a 10-min assessment — no obligation: elevaremind.io/pro",
        'whatsapp-message': "Hey! If your English is 'functional' but not yet 'commanding' in work situations, we just opened Elevare Pro — senior coach + small group for working pros. $449/mo. Employer-reimbursable in most cases."
    },

    // === Elevare Med ($699/mo) ===
    'elevare-med': {
        'linkedin-post': [
            "60% of nurses fail OET speaking on first attempt. Not because of their English — because of under-rehearsal of a very specific 5-minute performance. Elevare Med fixes that.",
            "OET Grade B in 12 weeks. Or we keep coaching you free. That's the commitment. We only accept students we believe we can get across the line.",
            "The gap between Grade C and Grade B on OET isn't more vocabulary. It's 5 specific rubric dimensions scored by an external coach. Self-study can't get you there."
        ],
        'instagram-post': [
            "👩‍⚕️ OET Grade B, 12 weeks. Or we keep coaching free.\n\nFor internationally-trained nurses and doctors. UK NMC, AHPRA, NCNZ.\n\nFree assessment → elevaremind.io/med",
            "£2,400 — the cost of delaying UK NMC registration by 3 months. The math on Elevare Med pays for itself.",
            "30 clinical scenarios. 5-dimension rubric scoring. Weekly coach. $699/mo. Or pass-guarantee. Elevare Med."
        ],
        'email-subject': "Why most nurses fail OET speaking twice (and how to fix it in 12 weeks)",
        'email-body': "Hi [First Name],\n\nYou've studied English for years. You handle patients in English on shift. But OET speaking scored you C+. Maybe twice.\n\nYou're not bad at English. You're under-rehearsed for a very specific 5-minute performance. And no self-study course can coach you out of the patterns you can't hear in yourself.\n\nElevare Med: 12-week programme, OET-trained 1:1 coach, 30+ clinical scenarios, AI practice companion, pass-or-keep-coaching guarantee.\n\n$699/month (or $1,999 upfront saves 15%). Built for UK NMC / AHPRA / NCNZ / Irish NMBI candidates.\n\nBook a free 10-minute assessment — we'll score you against the rubric and send a personalized 3-week plan: elevaremind.io/med",
        'whatsapp-message': "Hey! Know any nurses prepping for OET? I just launched Elevare Med — 12-week programme, pass Grade B guarantee or we keep coaching free. $699/mo. Assessment call is free: elevaremind.io/med"
    }
};
```

---

## 3. `voicelessAds` object — replace with this

```javascript
const voicelessAds = {
    'elevare-ai': {
        short: "Hook: Frozen in a meeting?\nSetup: You know the words. The moment just gets you.\nPromise: 10 mins a day on WhatsApp. Elevare AI.\nCTA: 7-day free trial. elevaremind.io/ai",
        medium: "OPEN: Close-up of hands typing frantically.\nVO: \"You've studied English for years.\"\nCUT: Person in meeting, jaw tight.\nVO: \"But the moment they turn to you, your mind blanks.\"\nCUT: WhatsApp chat with Elevare AI scrolling through a role-play.\nVO: \"Elevare AI gives you unlimited reps. On WhatsApp. $29 a month. 7-day free trial.\"\nEND: Logo + elevaremind.io/ai",
        long: "OPEN: Time-lapse of a laptop, many tabs, Duolingo, grammar books, YouTube.\nVO: \"10 years of apps. 5 years of YouTube. One tutor that didn't stick. Your English is intermediate. Your confidence isn't.\"\nCUT: Person opens WhatsApp. Starts a conversation with Elevare AI.\nVO: \"What if you practiced every day, 10 minutes, with zero stakes?\"\nCUT: Person at a real meeting — speaking, calm.\nVO: \"Elevare AI. $29 a month. 7-day free trial. Cancel any time.\"\nEND: elevaremind.io/ai"
    },
    'elevare-speak': {
        short: "Hook: Still freezing in English conversations?\nPromise: 6-person cohort, weekly coach, daily AI practice.\nCTA: Free assessment → elevaremind.io/speak",
        medium: "OPEN: Person at dinner table, everyone laughing, they freeze.\nVO: \"You're still freezing in English conversations — not because your English is bad.\"\nCUT: Split screen, 6 people on a Zoom call laughing together.\nVO: \"Because you haven't practiced in a cohort of humans at your level, with a coach who hears patterns you can't.\"\nCUT: Elevare logo + pricing.\nVO: \"Elevare Speak. 6-person cohort. $199 a month. Free assessment.\"\nEND: elevaremind.io/speak",
        long: "OPEN: Multiple close-ups of people struggling to speak English — pauses, uhs.\nVO: \"A2, B1, B2 — the plateau where English stops getting easier.\"\nCUT: Phone showing Elevare Speak intake call.\nVO: \"Elevare Speak puts you in a cohort of 6 peers, weekly 90-min group call, bi-weekly 1:1 with your coach, and daily AI practice on WhatsApp.\"\nCUT: Testimonial (placeholder — swap when real one lands).\nVO: \"$199 a month. Cancel any time. Next cohort starts [date].\"\nEND: elevaremind.io/speak"
    },
    'elevare-fluency': {
        short: "Hook: Deadline-driven English?\nPromise: 12-week intensive, measurable progress or we keep coaching.\nCTA: elevaremind.io/fluency",
        medium: "OPEN: Calendar flipping. Wedding invitation. Visa paperwork.\nVO: \"Got a deadline? 3 months? 6 months? Elevare Fluency is built for exactly this.\"\nCUT: 12-week roadmap graphic.\nVO: \"6 phases. Milestone assessment every 4 weeks. Graduation with certificate.\"\nCUT: Pricing.\nVO: \"$497 upfront — or $199×3. Measurable progress guaranteed, or we keep coaching.\"\nEND: elevaremind.io/fluency",
        long: "OPEN: Montage of real-world deadlines — wedding abroad, visa stamp, job offer, apartment lease in a new country.\nVO: \"You need English by a specific date. Not 'someday' — a date.\"\nCUT: Phone showing Fluency roadmap.\nVO: \"12 weeks. 6 phases. A cohort of 6 peers with the same urgency. Weekly 1:1 with your coach. Daily AI practice.\"\nCUT: Graduation ceremony / certificate.\nVO: \"If you don't hit the agreed progress by Week 12, we keep coaching you free. $497 upfront. Next cohort starts [date].\"\nEND: elevaremind.io/fluency"
    },
    'elevare-pro': {
        short: "Hook: Still 'functional' in work meetings?\nPromise: Business English, senior coach, deploy-ready frameworks.\nCTA: elevaremind.io/pro",
        medium: "OPEN: Person in conference room, boss asks a question, they freeze.\nVO: \"Functional English isn't career English.\"\nCUT: Senior coach on a call, deploying a framework live.\nVO: \"Elevare Pro: senior coaches, weekly 1:1, small group of 3 peers, business scenarios.\"\nCUT: Pricing + employer-reimbursable note.\nVO: \"$449 a month. Usually employer-reimbursable.\"\nEND: elevaremind.io/pro",
        long: "OPEN: Montage — meetings, pitches, negotiations, emails.\nVO: \"The 4 moments that define business careers in English: leading, pitching, negotiating, writing.\"\nCUT: Elevare Pro dashboard showing the 4-week curriculum.\nVO: \"Elevare Pro teaches deployable frameworks for each — and puts you in role-plays of your own upcoming meetings.\"\nCUT: Testimonial placeholder.\nVO: \"Senior coach. Small group. AI practice. $449 a month. 3-month minimum.\"\nEND: elevaremind.io/pro"
    },
    'elevare-med': {
        short: "Hook: OET Grade C+ stuck?\nPromise: Grade B in 12 weeks, or we keep coaching free.\nCTA: elevaremind.io/med",
        medium: "OPEN: Nurse in scrubs, staring at OET result slip, C+.\nVO: \"Your English isn't the problem. Your rehearsal is.\"\nCUT: Close-up of OET rubric, 5 dimensions scored.\nVO: \"Most OET prep teaches you about the test. Elevare Med coaches you through it — 5-dimension rubric scoring, weekly, by an OET-trained coach.\"\nCUT: Pricing.\nVO: \"Grade B in 12 weeks, or we keep coaching free. $699 a month.\"\nEND: elevaremind.io/med",
        long: "OPEN: Montage — Filipino, Indian, African nurses prepping internationally.\nVO: \"You've been a nurse for years. You've cared for English-speaking patients on every shift. Your OET still scored C+.\"\nCUT: Elevare Med 12-week roadmap.\nVO: \"Because you've never had someone score your speaking against the real 5-dimension rubric. Every week. Elevare Med fixes that.\"\nCUT: Guarantee graphic.\nVO: \"Grade B in 12 weeks, on all 4 papers, or we keep coaching you free until you pass. $699/mo — or $1,999 upfront, save 15%.\"\nEND: elevaremind.io/med"
    }
};
```

---

## 4. `hashtags` bank — replace with this

```javascript
const hashtags = {
    'elevare-ai': ['#LearnEnglish', '#EnglishPractice', '#AItutor', '#WhatsAppEnglish', '#DailyEnglish', '#ConfidenceInEnglish', '#SpeakEnglish', '#Elevare'],
    'elevare-speak': ['#EnglishCohort', '#ConversationEnglish', '#SmallGroupLearning', '#EnglishFluency', '#SpeakingConfidence', '#ESLCommunity', '#Elevare'],
    'elevare-fluency': ['#EnglishIntensive', '#12WeekChallenge', '#FluencyGoals', '#EnglishDeadline', '#LearnFast', '#ESLIntensive', '#Elevare'],
    'elevare-pro': ['#BusinessEnglish', '#ExecutiveEnglish', '#ProfessionalCommunication', '#EnglishForWork', '#LinkedInEnglish', '#CareerFluency', '#Elevare'],
    'elevare-med': ['#OETprep', '#MedicalEnglish', '#NurseAbroad', '#UKNMC', '#AHPRA', '#NCNZ', '#OETspeaking', '#OETpass', '#InternationalNurse', '#Elevare']
};
```

---

## 5. Pricing update — update all references in the file

Find-and-replace these strings throughout the HTML:

| Old | New |
|---|---|
| `$149` (Lingua pricing) | `$199` (Speak pricing) |
| `$227` (Flex Nexus old price) | `$497` (Fluency new price) |
| `Lingua` (in any text) | `Elevare Speak` |
| `Flex Nexus` | `Elevare Fluency` |

**Note:** "Rise" references are OK as-is — Rise is now the methodology layer and still has a landing page at `frontend/rise.html`.

---

## 6. What Donal does NOT need to change

- The UI layout (tabs, sections, styling) stays as-is
- The voice clone / recording features stay stubs (not ready until voice clone exists)
- The analytics dashboard stays as-is (will be rebuilt when real API keys exist per improvement plan #3)

---

## 7. Post-paste verification

After wiring in:

1. Open `marketing/marketing-dashboard.html` in a browser
2. Click the Create tab
3. Select "Elevare Med" from the program dropdown
4. Click "Generate LinkedIn Post"
5. Verify the output mentions OET / nurses / medical English — not Lingua / Rise / Flex Nexus
6. Repeat for each new product
7. Check Voiceless Ads tab — same verification

If all 5 products produce program-appropriate content, the taxonomy wire-up is complete.

---

## Time estimate

- Paste Dropdown replacements: 20 min
- Replace contentTemplates + voicelessAds: 30 min
- Update hashtags bank: 10 min
- Find-and-replace pricing + program names: 30 min
- Verification: 30 min

**Total: ~2 hrs** (vs 4 hrs if Donal built all content from scratch)

---

*Snippet v1 — 2026-04-17. Author: Nick (Claude) for [Donal] × [Debby]. Closes priority #1 of `marketing-agent-improvement-plan.md`.*
