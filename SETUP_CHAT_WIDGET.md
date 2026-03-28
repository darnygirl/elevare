# Step-by-Step: Setting Up Your Elevare AI Chatbot

## What We're Building
A chat widget on your website where visitors can:
- Ask questions about programs
- Get help booking sessions
- Learn about becoming a tutor

---

## STEP 1: Create Crisp Account (5 minutes)

1. Open a new tab and go to: **https://crisp.chat/en/**
2. Click the green **"Start for free"** button
3. Enter your email: `debbynickryanz@gmail.com`
4. Create a password
5. Check your email and verify your account
6. Log in to Crisp

---

## STEP 2: Get Your Website ID (2 minutes)

1. In Crisp dashboard, look for **Settings** (gear icon ⚙️ in left sidebar)
2. Click **Website Chat** (or "Chat Widget")
3. Scroll down to find **"Website ID"**
4. Copy the long string of letters/numbers (like `a1b2c3d4-e5f6-7890...`)

**You'll need this ID for later!**

---

## STEP 3: Set Up Your First Inbox (2 minutes)

1. In Crisp, click **"Inbox"** in the left sidebar
2. You'll see a demo conversation - click the trash icon to delete it
3. Your inbox is now ready to receive messages!

---

## STEP 4: Configure Chat Widget Settings (3 minutes)

1. Go to **Settings → Website Chat**
2. **Widget Setup** tab:
   - Website Name: `Elevare`
   - Website URL: `https://darnygirl.github.io/elevare`
3. **Appearance** tab:
   - Theme: Choose "Dark"
   - Primary Color: `#c9a227` (gold)
4. **追加工具** (Additional) tab:
   - Enable "Magic Chat" (AI chatbot) if available
5. Click **Save**

---

## STEP 5: Set Up Magic Chat / AI Bot (5 minutes)

*Note: Magic Chat is a Crisp AI feature. If it's not available on your free plan, skip to Step 6 and use Tidio instead.*

1. Go to **Settings → Magic Chat** (or "AI Studio")
2. Click **"Create a new chatbot"**
3. Name it: `Luna`
4. Choose "Customer Support" template
5. Paste this as your knowledge base:

```
ELEVARE INFO:
Elevare is a global online language and personal-development studio
Website: https://darnygirl.github.io/elevare
Email: hello@elevarework.com
Booking: https://calendly.com/elevareworkplace

PROGRAMS:

LINGUA (Language Learning):
- Language tutoring in 15+ languages
- Individual sessions: $15/hour
- Video course: $149
- Quiz bundle: $29
- Membership: $39/month
- Free resources: grammar guides, vocabulary, flashcards

RISE (Personal Development):
- Confidence and life coaching
- Membership: $39/month
- Webinars: $29-79
- Mastermind: $97/month
- Course: $197
- Free resources: personal growth guides, quizzes

FLEX NEXUS (Professional Development):
- Business communication and executive skills
- Workshops: $47
- Guides bundle: $79
- Templates: $49
- 12-Week Intensive: $227
- Free resources: professional guides, quizzes

BOOKING:
- Free 30-minute consultations available
- Book at: https://darnygirl.github.io/elevare/frontend/book.html
- Sessions via Jitsi video

TUTORS:
- Apply at: https://darnygirl.github.io/elevare/frontend/tutors.html
- Training and resources provided
- International placement consulting: $97-197/month

POLICIES:
- Cancellation: 24 hours notice required
- Refunds: Case-by-case basis
```

6. Set response style: "Friendly and professional"
7. Save and enable

---

## STEP 6: If Magic Chat Isn't Available - Use Tidio Instead

**Tidio Alternative (Also Free):**

1. Go to: **https://www.tidio.com/**
2. Click "Get started free"
3. Sign up with your email
4. After signup, go to **Settings → Installation**
5. Copy your **Public Key** (a string like `XXXXX-XXXXXXXXXX`)
6. Come back here to Step 7

---

## STEP 7: Add Chat Widget to Your Website (5 minutes)

Now we need to add the chat code to your website files:

1. **For Crisp**, copy this code (replace `YOUR_CRISP_ID` with your actual Website ID):

```html
<script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="YOUR_CRISP_ID";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>
```

2. **For Tidio**, copy this code (replace `YOUR_TIDIO_KEY` with your actual Public Key):

```html
<script src="//code.tidio.co/YOUR_TIDIO_KEY.js" async></script>
```

3. **Now update your website files:**
   - Open `index.html` in your code editor
   - Find the line before `</body>` (very end of file)
   - Paste your chosen code there
   - Save the file
   - Do this for these files:
     - `index.html` (homepage)
     - `frontend/book.html` (booking page)
     - `frontend/tutors.html` (tutor page)
     - `frontend/contact.html` (contact page)

4. **Commit and push to GitHub:**
```bash
cd /home/debbynickryanz/Mytravels
git add index.html frontend/book.html frontend/tutors.html frontend/contact.html
git commit -m "Add chat widget"
git push origin master
```

---

## STEP 8: Test Your Chat Widget (2 minutes)

1. Wait 2-3 minutes for GitHub to publish
2. Go to: **https://darnygirl.github.io/elevare/**
3. You should see a green/gold chat bubble in the bottom-right corner
4. Click it to test!
5. Try typing: "Hi", "How much does it cost?", "I want to book a session"

---

## STEP 9: Set Up Auto-Responses (3 minutes)

In Crisp or Tidio dashboard:

1. Go to ** inbox → Rules** or **Automation**
2. Create a new rule:
   - Trigger: "When a visitor sends a message"
   - Condition: "If it's the first message"
   - Action: "Send a canned response"

3. Copy this welcome message:

```
Hi! 👋 Welcome to Elevare! I'm Luna, your virtual assistant.

I can help you with:
• Learning about our programs (Lingua, Rise, Flex Nexus)
• Booking a session or consultation
• Becoming a tutor
• Answering questions about pricing

What can I help you with today?
```

4. Save the rule

---

## STEP 10: Set Up Email Notifications (2 minutes)

So you get notified when someone chats:

1. In Crisp, go to **Settings → Notifications**
2. Enable email notifications for new messages
3. Add your email: `debbynickryanz@gmail.com`
4. Save

Now you'll receive emails when visitors message you!

---

## What's Working Now ✅

- Chat widget on your website
- Auto-greeting for visitors
- AI responses to common questions
- Email notifications for new messages

## Coming Soon (Next Steps)

1. **Connect to Make.com** for automated workflows
2. **Connect to WhatsApp** for messaging
3. **Set up Telegram bot**
4. **Create student database**

---

## Troubleshooting

**Chat widget not showing?**
- Make sure you pushed to GitHub and waited 2-3 minutes
- Clear your browser cache
- Check that your Website ID is correct

**Chat widget looks wrong?**
- In Crisp settings, check the Appearance tab
- Make sure primary color is set to gold (#c9a227)

**AI not responding?**
- Magic Chat may not be on your free plan
- Try Tidio instead (has free AI chatbot)

**Questions?**
- Email me: hello@elevarework.com
- Or book a support call: https://calendly.com/elevareworkplace
