# India Alumni Testimonial Outreach — WhatsApp/Email Script

> Debby has 10+ years of past English-teaching students. Section 13.8 of plan-feedback calls for reaching out to ~20 of them for one-sentence testimonials. This doc is the exact message + follow-up flow. Send 20 Monday, target 3-5 usable testimonials by Friday.

---

## The principles

1. **Warm tone, short ask** — they know you. Don't write like a marketer.
2. **Make it easy** — one sentence, first-name OK, they can even skip
3. **No pressure** — gratitude, not guilt
4. **Two-hop max** — original ask, one follow-up, done
5. **Capture consent** — explicit OK to use their words + first name + (optional) photo

---

## Message 1 — the original ask

**WhatsApp version** (preferred — highest reply rate):

> Hi [Name] 😊
>
> Hope life is treating you well!
>
> Quick ask — I'm building something new for English learners, and I'd love to share a word from you as one of my past students. Would you mind sending me one or two sentences about what changed for you after we worked together? Could be anything — what clicked, how you felt, an outcome.
>
> Totally no pressure if you'd rather skip. And I'm happy to quote you with just your first name if you'd prefer that over your full one.
>
> Thank you so much for anything you can share 🙏
>
> — Debby

**Email version** (fallback if WhatsApp number unknown):

> Subject: One quick ask — if you have 2 minutes
>
> Hi [Name],
>
> Hope you're doing well! I'm Debby — we worked together on your English [rough period: "a few years back" / "in [Year]" / similar].
>
> I'm launching something new for English learners (it's called Elevare — a hybrid coach + AI practice program), and I'd love to include a few words from past students as honest feedback.
>
> Would you be willing to send me one or two sentences about what changed for you after our sessions? It could be anything — a skill that clicked, a feeling, a concrete outcome at work or in life. Happy to quote you with just your first name if you'd prefer.
>
> No pressure at all if you'd rather skip. And thank you, either way.
>
> Warm regards,
> Debby
> elevaremind.io

---

## Follow-up (only if they reply with "sure!" or similar but don't send anything)

Send 3-5 days after the original, only if they engaged but didn't produce a sentence:

> Hey [Name]! No rush at all — just nudging in case my original message got buried. Any sentence is fine. Even a WhatsApp voice note works if that's easier 🎤
>
> Here's a simple prompt if that helps: *"After working with Debby, I could finally [X] when before I couldn't [Y]."* — just fill in what's true for you.

---

## Response template — when they send something

Always reply within 24 hours, personally, never automated:

> Oh [Name], thank you so much — this made my day. I'd love to use this exactly as you've written it. Two quick things:
>
> 1. OK to share with just your first name, or would you prefer your full name?
> 2. If you'd ever like to join a quick 30-sec video testimonial — no pressure — we'd be happy to gift you a month of Elevare free.
>
> Again, thank you 🙏

*(The video testimonial bump is optional — only offer it to students you'd genuinely like on camera. Don't ask if their written quote is already gold.)*

---

## Capture workflow

For each response, add a row in a tracking Google Sheet:

| Name | First-name-only? | Date received | Quote text | Approved to use? | Video possible? | Used on which page? |
|---|---|---|---|---|---|---|

Minimum approval: student replies with their words + confirms OK to use (first-name-only counts as yes, as long as the text itself is theirs). Store the WhatsApp thread screenshot as proof of consent.

---

## Who to message first

**20 highest-priority contacts:**

1. Students who reached out with an unprompted thank-you at any point
2. Students who finished their full program (not the drop-outs)
3. Students who moved jobs / passed exams / got a visa / got married abroad during or after your coaching (concrete outcomes = gold)
4. Students who are currently active on LinkedIn or Instagram (social proof potential if they're willing)
5. Students from different countries (diversity in your testimonials matters)

If you have >20 possible contacts, narrow to the 20 with the **highest concrete-outcome stories**. Those are the testimonials that sell.

---

## What not to do

- ❌ Don't send a generic "Hi there" — use their actual name
- ❌ Don't ask 5 questions — one sentence is the ask
- ❌ Don't chase more than twice — 2 messages max, then move on
- ❌ Don't offer money or discounts upfront for the testimonial (it corrupts honesty; offer the 1-month free only after they've sent something sincere)
- ❌ Don't pressure anyone who politely declines — thank them and close the loop

---

## Where these testimonials land

Once you have 3+ approved quotes:

1. Swap the placeholder sections on the site:
   - `frontend/med.html` — section 9 testimonial block
   - `frontend/speak.html` — needs a testimonial section added after pricing
   - `frontend/fluency.html` — same
   - `frontend/pro.html` — same
2. Use in email sequences (`email-capture-flow.md` Email 4 currently has a placeholder Gbemi story — swap in a real one)
3. Use in paid ad creative (first ad variant with real testimonial typically beats generic by 40-50% conversion lift)
4. Cross-post to LinkedIn as founder-story content

---

## Success criteria

- **20 messages sent by Monday EOD**
- **8-12 replies** (expected reply rate for warm DMs to past students)
- **3-5 usable testimonial quotes** by Friday
- **1-2 willing for a 30-sec video** (bonus, not expected)

If you hit these: the Med + Speak + Pro landing pages get honest social proof by Week 2. That's the single biggest conversion lever the site has.

---

*Script v1 — 2026-04-17. Nick wrote; Debby sends. Track responses in Google Sheet. First testimonials land on site by Week 2.*
