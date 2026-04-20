# Email Capture Flow — OET Pass Playbook Lead Magnet

> End-to-end copy for the lead-magnet funnel behind `frontend/med.html`'s `#playbook` form. Closes the gap where the form currently just alerts the user — this doc defines the full automation + sequence. Owner: [Donal] wires the automation (Zapier / Make.com), [Debby] owns the copy.

---

## The lead magnet flow at a glance

```
Visitor lands on elevaremind.io/med
  ↓
Scrolls to Playbook form OR clicks "Download the OET Pass Playbook" CTA
  ↓
Enters email + exam-type selector
  ↓
Form submits → webhook fires
  ↓
  [1] Email 1 sent: instant — PDF + next steps (within 1 min)
  ↓
  [2] Email 2 sent: +24 hrs — personalized 3-week plan + assessment call CTA
  ↓
  [3] Email 3 sent: +4 days — 1 common mistake from the playbook + soft re-CTA
  ↓
  [4] Email 4 sent: +7 days — student story / founder note + assessment CTA
  ↓
  [5] Email 5 sent: +14 days — final nudge, scarcity framing, unsubscribe-friendly tone
  ↓
IF no booking by day 21 → move to long-term nurture (monthly newsletter)
```

---

## Tech stack (minimum viable)

Pick ONE of:

### Option A: Make.com (recommended for Elevare)
- Form POST → Make webhook
- Scenario:
  1. Add row to Airtable (lead record)
  2. Send Email 1 via Brevo/Resend/SendGrid (with PDF attachment)
  3. Schedule delayed emails 2-5 via Make's built-in scheduling
  4. If user books assessment → tag in Airtable, stop sequence

**Why:** Already in Elevare stack per `MAKE_COM_AUTOMATIONS.md`. Donal knows it. Robust, visual, easy to iterate.

### Option B: Zapier
- Same flow. Slightly more expensive at volume; easier to set up initially.

### Option C: ConvertKit / MailerLite (free tier)
- Simpler — the whole sequence lives inside the email platform
- Form embeds natively
- Less flexible for downstream logic
- Good for Month 1 cheapest path

**Month 1 recommendation:** start on **Option C** (MailerLite free tier), migrate to **Option A** at $2k MRR for more flexibility.

---

## Email 1 — Instant (within 1 minute of form submit)

**Subject:** Your OET Pass Playbook (PDF attached)

**Body:**

> Hi [First Name if captured, else "there"],
>
> Here's the OET Pass Playbook you asked for — 12 pages on the specific mistakes that keep nurses at Grade C, and the coaching fixes that move them to B.
>
> **Read it in one sitting — it takes 20 minutes.**
>
> I'd especially look at Mistake 4 (grammar slippage under pressure) and Mistake 6 (unfamiliar exam-style patients). Those two cost most of our students their Grade B on the first attempt.
>
> Tomorrow I'll send you something more personal — a 3-week starter plan based on the exam you told me you're preparing for ([exam selection]).
>
> For now: read, mark up, send me any questions.
>
> Talk soon,
> [Your name]
> Elevare Med
>
> P.S. If you'd rather skip ahead: book a free 10-minute assessment and I'll tell you exactly where you are in the 5 scoring dimensions. [Book here →](https://cal.com/elevaremind/med-assessment)

**Attachments:** OET-Pass-Playbook-v1.pdf (exported from `oet-pass-playbook.md` via Pandoc or Google Docs export)

---

## Email 2 — +24 hours

**Subject:** Your personalized 3-week plan (for [exam type] prep)

**Body:**

> Hi [Name],
>
> Okay — you said you're preparing for **[exam type]**. Here's a 3-week plan to start closing your Grade-C → Grade-B gap, tailored to where most students like you get stuck.
>
> **Week 1 — Diagnose and anchor**
> - Sit one full OET speaking mock, score yourself against the 5-dimension rubric (see Playbook p.4 — or hit reply and I'll send the rubric as a separate doc)
> - Identify your 2 weakest dimensions
> - Fix the opener + acknowledgements (Mistakes 1 + 2 from the playbook)
>
> **Week 2 — Target the weakest**
> - 3 role-plays/day in your weakest dimension
> - Record and transcribe one — circle your top 3 recurring errors
> - Practice with a friend or tutor who can score against the rubric
>
> **Week 3 — Integrate + mock**
> - Second full mock, score all 5 dimensions
> - Compare to Week 1 baseline — look for 50+ point movement on the targeted dimension
> - If stuck: this is where most students need a coach. Keep reading.
>
> Most students who self-study can move 1-2 dimensions 50 points each in 3 weeks. The other 3 dimensions? They need external scoring. You can't hear yourself fail your own grammar under pressure.
>
> **That's what Elevare Med is built for.** 12 weeks, 1:1 OET-trained coach, scored every session. $699/mo or $1,999 upfront. Or the $0 free assessment first so you know where you actually are.
>
> [Book your free 10-minute assessment →](https://cal.com/elevaremind/med-assessment)
>
> [Your name]

---

## Email 3 — +4 days

**Subject:** The Grade-B leak most nurses don't see

**Body:**

> Hi [Name],
>
> One thing from the Playbook I want to highlight — because it's the mistake that catches the most nurses by surprise:
>
> **You'll say "um" and "uhh" 2-3× more often under exam pressure than in your daily work.**
>
> It's not that your English got worse. It's that your brain is doing two things at once: generating clinical content AND monitoring your own English for errors. Fluency drops by 30-40% just from the monitoring load.
>
> The fix isn't "stop saying um." The fix is **practice under the exact pressure conditions of the exam** so your brain gets used to splitting attention.
>
> Here's how to simulate exam pressure without a real coach:
>
> 1. Set a 5-minute timer
> 2. Stand up (higher stress posture matches exam chair)
> 3. Have a friend read you an OET-style role-play prompt
> 4. Record yourself — no pausing, no restarting, no looking up words
> 5. After: count fillers per minute. Track the number over weeks.
>
> Most students start at 8-12 fillers per minute, should land at under 4 for Grade B.
>
> With coaching, we typically see the filler rate halve in 2 weeks. Self-study it's 4-6 weeks.
>
> If your exam is close, don't bet on 4-6 weeks:
>
> [Book your free 10-minute assessment →](https://cal.com/elevaremind/med-assessment)
>
> [Your name]
>
> P.S. I'm running the Elevare Med founding cohort at a locked-in rate. The first 20 students pay the current price for life. After that, pricing moves to $899/mo. If you were thinking of joining, now's the month.

---

## Email 4 — +7 days

**Subject:** Why Gbemi (nurse, Lagos) had to re-sit OET speaking twice

**Body:**

> Hi [Name],
>
> Meeting one Elevare Med student this week made me think of you.
>
> Gbemi (she gave permission to share her story) is a nurse from Lagos preparing for UK NMC registration. She'd sat OET speaking twice — once scored C+, the second time C. She was convinced her English was the problem.
>
> When we ran her through the intake rubric, her English was fine. Her **intelligibility scored 380, linguistic range 360, grammar 340** — all above Grade B on paper.
>
> Her **fluency scored 280** and her **appropriateness scored 310**.
>
> The real problem: under exam pressure, she rushed into clinical questions without acknowledging what the patient said first. The examiner read her as robotic. Her register didn't match.
>
> That's a **4-week fix with the right coaching**. Not a rebuild.
>
> She sits the test next week, and we believe she's ready.
>
> The reason I'm writing: **you might be Gbemi.** The assumption that "my English isn't good enough" is often the wrong diagnosis. The right diagnosis needs someone who can score you against the 5 dimensions during an actual role-play.
>
> That's what the free 10-minute assessment does.
>
> [Book yours here →](https://cal.com/elevaremind/med-assessment)
>
> Next cohort start: [date]. We're at [X/20] founding-member spots.
>
> [Your name]

*(Note: swap in real student story once one exists. For the first 30 days of cohort, use a placeholder: "A student from our first cohort — I'll share their story when they give the nod.")*

---

## Email 5 — +14 days

**Subject:** One last note from me (or I'll stop bothering you)

**Body:**

> Hi [Name],
>
> Two weeks ago you downloaded the OET Pass Playbook. I've sent a few follow-ups. You haven't booked the free assessment yet — totally fine, plenty of reasons that could be.
>
> So this is the last one from me in this sequence. After this, I'll move you to our monthly newsletter (one email per month, unsubscribe anytime).
>
> Before I do, let me give you something useful:
>
> **If you're going to take OET in the next 3-6 months, here are the 3 most common reasons people delay:**
>
> 1. *"I'll prep more first."* → Prep without scoring is practice-without-progress. You need external scoring within the first 2 weeks or you plateau.
> 2. *"I can't afford coaching."* → Elevare Med is $699/mo. The UK NMC salary starts at £28,400/yr. Delaying by 3 months costs you £7,100 in lost income. Coaching pays for itself 10× over.
> 3. *"What if I'm not ready after 12 weeks?"* → Our guarantee: if you don't hit Grade B in the Week-12 mock, we keep coaching you at no charge until you do.
>
> If any of those sounds like you — book the free 10-minute assessment:
>
> [Book here →](https://cal.com/elevaremind/med-assessment)
>
> If not — genuinely no hard feelings. You have the Playbook, you have the 3-week plan, you have my best thinking. Go pass the test. Come back if you get stuck.
>
> Take care,
> [Your name]
>
> Elevare Med
>
> P.S. If you ever want to unsubscribe, the link at the bottom works immediately. Privacy matters.

---

## Long-term nurture (Month 2+)

If user hasn't booked by Email 5, move to monthly touchpoints:

**Monthly newsletter — "OET in 15 minutes"**
- One teaching moment per month (10 min)
- One student win (3 min)
- One soft CTA (2 min)

**Content rotation:**
- Month 2: a new playbook excerpt
- Month 3: a student story
- Month 4: a "what I'd do if I had 8 weeks" scenario
- Month 5: Q&A from our community
- Month 6: reminder of the founding-member lock-in + urgency

---

## Unsubscribe + compliance

- Every email must have a working unsubscribe link (GDPR + CAN-SPAM)
- Include physical business address in footer
- Honor unsubscribes within 24 hrs (automated)
- Do NOT send marketing to unsubscribed users under any circumstance

**Footer template (every email):**

> Elevare Med • Coaching Services
> [Physical address — use a PO box if working from home]
>
> You received this because you downloaded the OET Pass Playbook at elevaremind.io/med. [Unsubscribe](unsub-link) anytime. [Privacy](privacy-link).

---

## Tagging + segmentation in Airtable

Every lead gets these tags automatically:

| Field | Value |
|---|---|
| Source | landing-page-med / ads / referral |
| Exam target | OET-nurse / OET-doctor / IELTS / NCLEX |
| Sequence stage | Email 1-5 / Long-term nurture / Booked / Converted |
| Booked assessment date | (populated if booked) |
| Cohort start preference | (if captured later) |
| Country of current residence | (if captured) |
| Country of registration target | (if captured) |

Segment weekly:
- Not yet booked (push harder)
- Booked but not shown up (rebook script)
- Assessment done but not enrolled (personalized follow-up)

---

## What to measure

| Metric | Target | Source |
|---|---|---|
| Email 1 open rate | 55%+ | Email platform |
| Email 1 → PDF download confirm | 90%+ | Link click or auto-attached |
| Email 2 → assessment booking | 3-5% | Calendly → Airtable |
| Full sequence → assessment booking | 8-12% | Airtable tag |
| Assessment → Elevare Med enrolment | 40-60% | Airtable close stage |

Review weekly. If Email 2 conversion is under 2%, rewrite. If Email 1 open is under 40%, subject-line-test.

---

*Flow v1 — 2026-04-17. Implementation owner: [Donal]. Copy owner: [Debby]. First sequence runs live with Med landing page launch.*
