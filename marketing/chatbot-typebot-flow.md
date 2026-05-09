# Typebot + OpenRouter Chat Flow — Elevare

> **Status:** v1 spec, ready for Debby to build in Typebot.
> **Goal:** Replace Tidio with a brand-aligned AI chatbot trained on Elevare content.
> **Stack:** Typebot (cloud or self-hosted free tier) + OpenRouter (Haiku 4.5).
> **Embed target:** index.html line 3296, frontend/contact.html line 584 (replace Tidio script).

---

## Why this flow + this stack

```
PROBLEM WITH TIDIO
─────────────────────────────────────────────
- "We are currently offline" tone is apologetic
- Solo founder = always "offline" outside hours
- $29/mo to scale beyond 50 chats
- Generic UI, low brand fit

WHAT TYPEBOT + OPENROUTER GIVES
─────────────────────────────────────────────
- 24/7 coverage via AI responses (no "offline" lie)
- Brand-aligned design (you control everything)
- Cents per chat via OpenRouter (~$0.01-0.05/conversation)
- Captures leads when YOU are asleep
- Hands off to WhatsApp for complex / qualified leads
```

---

## Setup steps

### 1. Accounts (~10 min)

```
[ ] Typebot account: https://typebot.io → Sign up
    Choose: Free / Personal tier (sufficient for now)
[ ] OpenRouter API key: https://openrouter.ai → Settings → Keys
    You likely already have one (memory says it's in your stack)
    Generate new key labelled "elevare-chatbot"
    Top up $5-10 credit (covers ~500-2000 conversations)
```

### 2. Build the flow in Typebot (~45 min)

Use the conversation spec below. Typebot has a visual flow builder
— each "block" maps to a step in the spec.

### 3. Embed on site (~5 min)

```
[ ] Typebot dashboard → Share → Get embed code
[ ] Replace index.html line 3296:
       OLD: <script src="https://code.tidio.co/...js" async></script>
       NEW: <script src="https://typebot.io/...js" async></script>
            (Typebot will give you the exact tag)
[ ] Same on frontend/contact.html line 584
[ ] Commit + push to GitHub Pages
[ ] Test on live site
```

### 4. Disconnect Tidio (~2 min)

```
[ ] Log into Tidio → cancel any free tier subscription so they
    don't keep emailing you
[ ] Remove Tidio embed code from any pages it's on
```

---

## CONVERSATION FLOW SPEC

### Block 1 — Greeting

**Trigger:** Page load (after 5-second delay so it's not aggressive)

**Bot says:**

```
Hi 👋 Welcome to Elevare.

I help working professionals find their voice in English —
through coaching, cohorts, and our 12-week programmes.

What's on your mind?
```

**Quick reply buttons:**

```
[1] Tell me about the programmes
[2] OET prep for healthcare
[3] Corporate / hospital cohorts
[4] Pricing
[5] Other — let me type
```

---

### Block 2 — "Tell me about the programmes"

**Bot says:**

```
We have three core tiers, each built for a different stage:

🎯 General — $99/mo
   Fluency + confidence. Small peer groups (4–8) facilitated by
   an AI teacher. 2 × 60-min sessions per week.

💼 Pro — $299/mo
   Business English for working professionals. Often
   employer-reimbursable. Designed for corporate communication
   contexts.

🩺 Med — 12-week cohort
   OET preparation programme for healthcare staff. Cohort-based,
   capped at 10 participants. Pass-or-keep-coaching guarantee.

Want to dig into one specifically, or shall I tell you about
how cohorts work?
```

**Quick reply buttons:**

```
[1] More on General
[2] More on Pro
[3] More on Med
[4] How cohorts work
[5] What's the next step?
```

---

### Block 3 — "OET prep for healthcare"

**Bot says:**

```
Great — OET prep is one of our core focuses.

Our 12-week Med programme is designed specifically for nurses
and healthcare staff preparing for OET Grade B (350+). It
combines:

✓ Two × 90-min live group sessions per week
✓ Individualised writing/speaking audits weekly
✓ Three full mock tests across the programme
✓ Clinical-context coaching (case notes, referral letters,
  discharge summaries, nurse-patient roleplay)
✓ Cohort capped at 10 for individualised feedback

We're currently launching with our first hospital cohort.

Are you asking for yourself, or for your hospital/healthcare
employer?
```

**Quick reply buttons:**

```
[1] For myself (individual)
[2] For my hospital / employer (corporate cohort)
[3] What does it cost?
[4] Talk to Deborah directly
```

---

### Block 4 — "Corporate / hospital cohorts"

**Bot says:**

```
We work with hospitals and healthcare employers to run
12-week OET preparation cohorts for their nursing staff.

How it works:
─ 8-10 participants per cohort
─ Online delivery, evening sessions accommodating shift work
─ Dedicated lead instructor + clinical SME advisory
─ Three mock tests + weekly individual audits
─ Cohort report at week 12

For corporate engagements, the next step is a 30-minute
discovery call to confirm cohort size, scheduling, and pricing.

Want to:
```

**Quick reply buttons:**

```
[1] Book a discovery call
[2] Get a programme overview by email
[3] What does it cost?
[4] Speak to Deborah on WhatsApp
```

---

### Block 5 — "Pricing"

**Bot says:**

```
Here's the high-level:

🎯 General        $99/mo individual self-serve
                  $199/mo with weekly tutor drops
💼 Pro            $299/mo individual
                  Custom for corporate cohorts
🩺 Med            Corporate cohorts only — pricing depends
                  on cohort size + hospital context.

Add-ons:
─ AI Practice Bot (+$29/mo) — 24/7 WhatsApp drills
─ Extra 1:1 Tutor (+$199/mo) — private weekly coaching
─ OET Exam Bundle (+$449 one-time) — exam-month intensive

Want to chat with Deborah about which fit's right for you?
```

**Quick reply buttons:**

```
[1] Book a call (Calendly)
[2] WhatsApp Deborah
[3] Send me an email instead
[4] More questions
```

---

### Block 6 — Lead Capture (when "WhatsApp / book / email")

**Bot says:**

```
Great. Quick details so we can follow up cleanly:

What's your name?
```

**Input:** Text field → save as `{{name}}`

**Bot says:**

```
Thanks {{name}}.

What's your best email so we can confirm?
```

**Input:** Email field → save as `{{email}}`

**Bot says:**

```
And one last thing — what's the single biggest English
challenge you're trying to solve right now?
```

**Input:** Long text → save as `{{challenge}}`

**Bot says:**

```
Got it. Sending this to Deborah now — she'll reply within
the day.

In the meantime, you can:
```

**Quick reply buttons (links):**

```
[1] WhatsApp now → wa.me/66949690869?text=Hi%20Deborah%20—%20{{name}}
[2] Book a call → cal.com/elevare/discovery
[3] Browse the site
```

**Action:** Send notification to deborah@elevaremind.io with
`{{name}}, {{email}}, {{challenge}}` + the conversation history.

---

### Block 7 — "Other / let me type" (free text)

**This is where OpenRouter comes in.**

**Configuration:**

```
LLM:           openrouter/anthropic/claude-haiku-4.5
SYSTEM PROMPT: see below
TEMPERATURE:   0.4 (consistent brand voice)
MAX TOKENS:    300 (concise responses)
```

**System prompt:**

```
You are the Elevare chat assistant. Elevare is a structured
language coaching practice serving working professionals
globally — founded by Deborah Madtrwoth, a nurse + TESOL-aligned
language coach.

OUR PROGRAMMES:
- General ($99/mo): fluency + confidence, small peer groups
  with AI facilitation, 2×60min sessions/week
- Pro ($299/mo): business English for working professionals,
  employer-reimbursable
- Med (corporate cohorts only): 12-week OET preparation for
  nursing/healthcare staff, capped at 10 per cohort, target
  Grade B (350+)

ADD-ONS:
- AI Practice Bot (+$29/mo): WhatsApp 24/7 drills
- Extra 1:1 Tutor (+$199/mo): private weekly coaching
- OET Exam Bundle (+$449 one-time): exam-month intensive

YOUR ROLE:
- Answer questions about the programmes, pricing, methodology
- Be warm but concise (<3 sentences usually, never preachy)
- For complex / clinical / qualified questions, hand off to
  Deborah (WhatsApp +66 94 969 0869 or deborah@elevaremind.io)
- NEVER invent features, prices, or guarantees not in this prompt
- NEVER promise specific exam outcomes — say "we target Grade B"
- If asked about Tidio / chatbot tech / how this works:
  redirect to the actual programme topic
- If user is hostile, ends conversation, or asks for refund:
  immediately offer to connect them to Deborah

If a question is OUTSIDE Elevare scope (general English advice,
homework help, off-topic): politely decline and redirect.
"That's outside what I can help with — but I can connect you
to Deborah if you'd like to chat about your English coaching
goals."

After 3 back-and-forths in free chat, ALWAYS offer:
"Want me to connect you with Deborah directly? She's at
+66 94 969 0869 (WhatsApp) or deborah@elevaremind.io."
```

**Fallback:** If OpenRouter API fails or returns nonsense, fall
back to: "Let me get Deborah on this. Tap WhatsApp or send
your question to deborah@elevaremind.io and she'll reply
today."

---

## TONE GUARDRAILS

```
DO                              DON'T
─────────────────────           ─────────────────────────────
Warm, professional              Cheesy / over-friendly
Concise (<3 sentences)          Long paragraph essays
Clear next steps                Vague "let me know!"
Mention specific tier names     Marketing-speak ("transform")
Use emoji sparingly (1 max)     Emoji every line
Brand consistency: "find        "Master English" or other
your voice in English"          aspirational claims
Hand off to human when stuck    Pretend AI knows everything
```

---

## SUCCESS METRICS

```
Week 1-2 after launch:
─ Total conversations started:   ___
─ Lead captures (name+email):    ___ (target: 30%+ of starts)
─ Handoffs to WhatsApp/email:    ___ (target: 10-20%)
─ OpenRouter cost:               $___ (target: <$5/week)

If conversion is low (<10% lead capture):
─ Review actual transcripts in Typebot dashboard
─ Identify drop-off points
─ Adjust copy or quick replies

If cost is high (>$5/week):
─ Check if AI is being looped on hostile / spam users
─ Add rate limiting via Typebot
─ Cap conversations to 10 messages each
```

---

## FAQ (pre-built answers for common questions, keeps cost low)

Build these as discrete blocks in Typebot rather than letting
the AI handle every common question. Cheaper + more consistent.

```
Q: When are sessions?           A: Evenings Bangkok time, two
                                   per week. Specific schedule
                                   confirmed at enrolment.

Q: What if I miss a session?    A: All sessions recorded.
                                   Async drills cover the
                                   material between live sessions.

Q: Refund policy?               A: General/Pro: monthly, cancel
                                   anytime. Med cohorts: pass-or-
                                   keep-coaching guarantee — if
                                   you don't hit Grade B, you keep
                                   coaching free until you do.

Q: How do payments work?        A: Wise / Revolut / Stripe (card).
                                   Monthly billing for individual
                                   tiers. Corporate cohorts billed
                                   per cohort.

Q: Where are you based?         A: Founder is currently in Chiang
                                   Mai, Thailand. Programme is
                                   100% online — students are
                                   global.

Q: Free trial?                  A: Yes — 5-day trial for General
                                   tier. Drop your details and
                                   we'll get you set up.
```

---

*This spec is the chatbot's blueprint. Build it in Typebot once
Bangkok cohort closes (or sooner if Tidio free tier hits limit).*
