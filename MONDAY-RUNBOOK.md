# Monday Morning Runbook — Step-by-Step

> 7 actions, detailed steps. Total time target: 2-3 hrs. Do them in this order — each has dependencies on the previous. Owner: [Debby]. Author: Nick.

---

## Before you start (5 min prep)

Open tabs for all of these upfront so you don't have to hunt mid-flow:

1. Cloudflare: https://dash.cloudflare.com/sign-up (or log in if you have one)
2. Whop: https://whop.com
3. Meta Business Manager: https://business.facebook.com
4. Your WhatsApp (for alumni outreach)
5. Zoho Mail: https://www.zoho.com/mail/zohomail-pricing.html
6. Cal.com: https://cal.com (for booking slots)
7. Termly (for privacy/terms generator, if needed): https://termly.io

Get a coffee. This will take ~2-3 hrs total.

---

## Action 1 — Buy `elevaremind.io` (5-10 min)

**Why:** every downstream depends on domain ownership. Email, branded links, ad landing pages — all blocked until this is done.

### Steps:

1. Go to **https://dash.cloudflare.com** → sign up (free) or log in
2. In the left sidebar, click **"Domain Registration"** → **"Register Domain"**
3. Search: `elevaremind.io`
4. If available ($10-15/yr) → click **Purchase**. If NOT available:
   - Try `elevaremind.com` (likely taken)
   - Try `elevaremind.co` or `elevaremind.app`
   - Or the clean fallback: `joinelevaremind.com`
   - DM me (Nick) with what's available and I'll pick
5. Complete purchase with your Uganda or Thai card. If Uganda card is declined: try PayPal checkout, or use Namecheap (https://www.namecheap.com) which accepts more cards
6. If you buy on Namecheap: after purchase, go to Namecheap → Domain List → Manage → **Nameservers** → Custom DNS → paste Cloudflare's nameservers (Cloudflare will tell you which ones when you "Add Site" in step 8)

### Verification:

- Go to Cloudflare → Websites → click `elevaremind.io`
- Status should show **"Active"** (may take 5-60 min if registered on Namecheap)

### DNS setup (10 min after purchase):

1. In Cloudflare, click your domain → **DNS** tab
2. Add these records:

| Type | Name | Content | Proxy |
|---|---|---|---|
| CNAME | @ | `darnygirl.github.io` | ✅ Proxied |
| CNAME | www | `darnygirl.github.io` | ✅ Proxied |

3. Go to GitHub: `github.com/darnygirl/elevare` → Settings → Pages → **Custom domain** → type `elevaremind.io` → Save
4. Wait 5-10 min. Then visit `https://elevaremind.io` — should show your site

**Gate:** `https://elevaremind.io` loads the current Elevare homepage.

---

## Action 2 — Submit Whop KYC (10-15 min)

**Why:** this is your primary payment rail. KYC verification takes 3-7 days, so starting Monday means best-case ready by Thursday, worst-case next Monday. If stalled, `payment-contingency.md` has the fallback plan.

### What you need before starting:

- **Uganda passport photo** (clear, all 4 corners visible, no glare) — use your phone camera, daylight, flat surface
- **Proof of address** — any ONE of:
  - Chiang Mai rental contract (with your name + Thai address)
  - Thai utility bill (electric, water, internet) in your name
  - Bank statement with Thai address
  - TM30 form (tourist accommodation registration)
- **Business description** — ready to paste: *"Elevare: English tutoring platform combining human coach sessions with AI-assisted practice. 5-product family (AI, Speak, Fluency, Pro, Med). Subscription-based + one-time cohort programmes, USD."*
- **Business email** — use your Gmail for now; update to `debby@elevaremind.io` once Zoho email is live (Action 6)

### Steps:

1. Go to **https://whop.com** → **"Sell on Whop"** → Sign up
2. Fill in:
   - Whop name: `Elevare Mind`
   - Category: **Education & Learning** → **Language Learning**
   - Business type: **Sole Proprietor** (unless you have an LLC)
3. Upload passport + proof of address (drag and drop — they support JPG/PNG/PDF)
4. Add business description (paste from above)
5. Add banking info: whichever bank you're using for business receipts. If Uganda: Equity Bank, Stanbic etc. If you have Wise: use Wise.
6. Submit

### Verification:

- You'll get an email: **"Your Whop account is under review"** within 5 min
- Tag it `Whop-KYC` in your inbox so you can track it
- Expected response: 2-7 days. If no answer after 4 days → email whop@whop.com politely asking for status

**Gate:** KYC application submitted + confirmation email received.

**If Whop rejects or stalls past Friday:** open `courses/payment-contingency.md` and start Lemon Squeezy as your backup rail. Steps are in that doc.

---

## Action 3 — Create Meta Business Manager (15 min)

**Why:** Meta (Facebook/Instagram) ads can only run from a **Business Manager**, not a personal account. Donal's Meta account is banned, so ads MUST run under yours. Domain verification takes 24-48 hrs, so starting Monday means ads-launchable by Wednesday.

### Before you start:

- You need a personal Facebook account (you have one)
- You need your domain (`elevaremind.io`) live from Action 1
- You need your phone for verification SMS

### Steps:

1. Go to **https://business.facebook.com**
2. Click **"Create Account"** (top right)
3. Fill in:
   - Business name: `Elevare`
   - Your name: Debby [surname]
   - Business email: your personal Gmail for now (swap to Elevare email later)
4. On the Business Manager homepage:
   - **Add a Facebook Page** → Create New → Name: "Elevare" → Category: Education → Sub-category: Tutor/Teacher
   - **Add Instagram Account** (if you have an Elevare IG — if not, create one: @elevaremind)
5. **Domain verification** (critical for ads):
   - In Business Manager → Brand Safety → **Domains** → Add `elevaremind.io`
   - Meta gives you 3 verification options: DNS TXT record, HTML file upload, or meta tag
   - **Easiest:** DNS TXT record. Copy the TXT record they provide.
   - Go to Cloudflare → DNS → Add record: Type **TXT**, Name **@**, Content: [paste Meta's TXT value]
   - Back in Meta: click **Verify** (may take 5-30 min to propagate)
6. **Create ad account:**
   - Business Manager → Ad Accounts → Create → Name: `Elevare Ads` → Currency: USD → Time zone: Bangkok
7. **Add Donal as Admin:**
   - Ad Accounts → Elevare Ads → Add People → type Donal's Facebook email → Role: **Admin**
   - Donal adds his payment method (he has this part covered per plan)

### Verification:

- Business Manager shows **Elevare page + ad account both green**
- Domain shows **"Verified"**
- Donal has access (confirm with him via WhatsApp)

**Gate:** Business Manager created + ad account + domain verified.

---

## Action 4 — DM 20 India Alumni for Testimonials (15-20 min)

**Why:** Real testimonials are your #1 conversion lever. Without them, cold-traffic ads convert 40% below par. You have 10 years of past students — reach out to 20 this week, expect 3-5 usable quotes by Friday.

### Steps:

1. Open **`courses/testimonial-outreach-script.md`** — it has the exact WhatsApp message + follow-up script
2. Open your WhatsApp or email and list **20 past India students** — prioritize:
   - Students who finished the full programme (not drop-outs)
   - Students who thanked you unprompted at any point
   - Students who had concrete outcomes during/after your coaching (got a job, moved abroad, passed an exam, got married internationally)
   - Mix of backgrounds/cities
3. Copy the WhatsApp script from `testimonial-outreach-script.md` — personalize the `[Name]` and send to each
4. Track responses in a new Google Sheet: `Name | Sent date | Reply? | Quote | Consent?`
5. Reply to each response within 24 hrs thanking them personally

### Verification:

- 20 messages sent by EOD Monday
- Google Sheet has 20 rows filled in

**Gate:** 20 messages sent + tracking sheet started.

**Follow-up rule:** Don't send reminders to non-responders for 3 days. Then send the one-line follow-up in the script. After that, let it go.

---

## Action 5 — Ask 4 Tutors for Photos + Intro Videos (10-15 min)

**Why:** ads and landing pages convert 30-50% better with real coach faces. This is 1 afternoon of tutor time each.

### Steps:

1. In WhatsApp, send each of your 4 tutors this message:

```
Hey [Name], hope you're well 🙏

Quick ask — I'm updating the Elevare site with real coach profiles, and I'd love your help.

Could you send me:

1. 3 photos of yourself (any light, phone camera fine — just natural and clear). Ideally: one headshot, one teaching/working scene, one smiling-at-camera
2. A 30-second video on your phone answering: "Why I teach English" — super casual, just talk to the camera like a friend. Vertical works best.

Goal: have these by Friday. If you have questions or need me to send examples, happy to help.

Thank you! 🎯
```

2. Set up a shared folder for uploads:
   - Google Drive → New folder → `Elevare Coach Assets` → Share link with "Anyone with link can upload"
   - Paste link at end of each tutor's message
3. Track in Google Sheet: `Tutor | Message sent | Photos received | Video received | Approved for site?`
4. Friday: review + pick best 1 photo + the full video for each

### Verification:

- 4 tutors messaged with the shared Drive link
- Tracking sheet created

**Gate:** 4 tutors messaged, Friday deadline set.

---

## Action 6 — Set Up Zoho Mail for `debby@elevaremind.io` (30-45 min)

**Why:** a branded email (not Gmail) unlocks: better deliverability for ad campaigns, professional trust signal on sales calls, prerequisite for payment providers verifying your domain.

### Steps:

1. Go to **https://www.zoho.com/mail/zohomail-pricing.html** → choose **Forever Free Plan** (5 users, 5GB each — more than enough)
2. Sign up with your personal Gmail
3. During signup: **"I already own a domain"** → enter `elevaremind.io`
4. Zoho gives you 3 domain-verification options. Use **CNAME method** (easiest):
   - Zoho gives you a specific CNAME record (e.g., `zbXXXXXXXX.elevaremind.io → zmverify.zoho.com`)
   - Go to Cloudflare → DNS → Add the CNAME they specified
   - Click **Verify** in Zoho (takes 1-10 min to propagate)
5. After verification, create users:
   - `debby@elevaremind.io` (your main inbox)
   - `hello@elevaremind.io` (catch-all for prospects)
   - `tutors@elevaremind.io` (for tutor-facing comms)
6. **Set up MX records** (Zoho will tell you which):
   - Cloudflare → DNS → Add 3 MX records pointing to Zoho's mail servers
   - Also add SPF (TXT): `v=spf1 include:zoho.com ~all`
   - And Zoho's DKIM records (they'll give you the exact strings)
7. **Test:** send a test email from `debby@elevaremind.io` to your personal Gmail. Then reply from Gmail to `debby@elevaremind.io`. Both should work within 15 min.

### Verification:

- Send + receive works from `debby@elevaremind.io`
- SPF + DKIM showing green in Zoho's DNS verification panel

**Gate:** `debby@elevaremind.io` is live.

---

## Action 7 — Set Up Cal.com Booking Links (15 min)

**Why:** every Elevare landing page (Med, Pro, Speak, Fluency, AI) has a "Book Free Assessment" button pointing at Cal.com. If those links 404, every landing page is broken.

### Steps:

1. Go to **https://cal.com** → Sign up (free) with `debby@elevaremind.io` (from Action 6)
2. Username: `elevare` (your Cal link becomes `cal.com/elevare`)
3. **Set up 5 event types** (one per product's assessment):

| Event name | Slug (URL suffix) | Duration | Description |
|---|---|---|---|
| Med Assessment | `med-assessment` | 10 min | Free 10-min OET diagnostic for nurses + doctors |
| Pro Assessment | `pro-assessment` | 10 min | Business English assessment for professionals |
| Speak Assessment | `speak-assessment` | 5 min | Conversation fluency check |
| Fluency Assessment | `fluency-assessment` | 10 min | 12-week intensive intake diagnostic |
| AI Signup (trial info) | `ai-signup` | 5 min | Elevare AI trial orientation |

4. For each event, set:
   - Availability: 2-hour windows across the week that match your Chiang Mai working hours (e.g., 9-11 AM + 3-5 PM)
   - Questions on the booking page: Name, Email, Target exam/goal, Timeline
   - Confirmation message: "We'll send you a personalized 3-week plan within 24 hours after the call."

### Verification:

- Visit each URL in a private browser window:
  - `cal.com/elevaremind/med-assessment`
  - `cal.com/elevaremind/pro-assessment`
  - `cal.com/elevaremind/speak-assessment`
  - `cal.com/elevaremind/fluency-assessment`
  - `cal.com/elevaremind/ai-signup`
- All 5 should show the booking page, not 404

**Gate:** 5 Cal.com links live.

---

## Post-Monday check (end of day)

Run these in your terminal to verify everything committed:

```bash
cd ~/Desktop/elevare-site
git pull
open https://elevaremind.io                    # or paste URL in browser
open https://elevaremind.io/frontend/med.html
open https://cal.com/elevaremind/med-assessment
```

Also check:

- [ ] Domain live at `elevaremind.io` with HTTPS ✓
- [ ] Whop email received ("KYC under review")
- [ ] Meta Business Manager: domain showing "Verified"
- [ ] 20 alumni DMs sent
- [ ] 4 tutors messaged with photo/video ask
- [ ] `debby@elevaremind.io` sends + receives
- [ ] 5 Cal.com links all work

If all checked: **you've unblocked the critical path.** By Wednesday you'll have Whop cleared, domain fully propagated, first alumni testimonials coming in, and ad creative ready for Day-8 launch. 🎯

---

## Troubleshooting

### "Whop rejected my KYC"
- Reply to the rejection email with a specific question
- Start Lemon Squeezy in parallel (see `courses/payment-contingency.md`)
- Don't panic — Lemon Squeezy accepts 95%+ of applicants from Uganda/Thailand

### "Cloudflare DNS not propagating"
- Use https://dnschecker.org/ to check globally
- Some regions take up to 24 hrs. The GitHub Pages domain addition usually works within 10 min
- If stuck >4 hrs → clear your browser DNS cache: Chrome → `chrome://net-internals/#dns` → Clear host cache

### "Meta rejected my domain verification"
- Make sure TXT record was added WITHOUT quotes around the value
- Propagation can take 1 hr. Retry.
- Last resort: use the HTML file upload method instead — Meta gives you an HTML file, you put it in `frontend/` of the repo, Meta checks the URL

### "Zoho Mail works but emails go to spam"
- Verify SPF + DKIM + DMARC records are ALL set
- Use https://mail-tester.com to send a test — gives you a score and tells you what's missing
- DMARC record (TXT): `v=DMARC1; p=none; rua=mailto:debby@elevaremind.io;`

### "A tutor didn't reply"
- Give it 48 hrs then send one gentle follow-up
- If still no reply after 5 days, the tutor may have disengaged — time to think about replacement

### "An alumnus sent a weird / negative response"
- Don't debate it. Reply: "Totally understand — thanks for being honest. Wishing you well!"
- Move on. 1 negative doesn't invalidate 20 asks.

---

*Runbook v1 — 2026-04-17. Author: Nick for Debby. Monday morning execution target: 2-3 hrs.*
