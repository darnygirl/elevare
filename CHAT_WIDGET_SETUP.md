# Elevare Chat Widget Setup

## Quick Start Guide

### Step 1: Choose Your Chat Platform

We recommend **Crisp** for its:
- Generous free tier (2 seats, unlimited chats)
- Built-in AI chatbot (Crisp MagicChat)
- WhatsApp & Telegram integration
- Easy WordPress/GitHub Pages integration

Alternative: **Tidio** or **Intercom** if you prefer.

---

## Crisp Setup Instructions

### 1. Create Account
1. Go to https://crisp.chat/en/
2. Click "Start for free"
3. Sign up with your email

### 2. Get Your Chat Code
1. Go to Settings → Website Chat
2. Copy the JavaScript code (looks like this):
```javascript
<script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="YOUR_WEBSITE_ID";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>
```

### 3. Add to Your Website
Add the code just before the `</body>` tag in your `index.html`.

### 4. Configure Your Chatbot
1. Go to Settings → MagicChat (or AI Studio)
2. Create a new chatbot
3. Train it with Elevare information (use the knowledge base below)
4. Set it to auto-respond when you're offline

---

## Knowledge Base for Training

Copy this information to train your AI chatbot:

```
ELEVARE COMPANY INFO:
- Elevare is a global online language and personal-development studio
- Three pillars: Lingua (language), Rise (confidence), Flex Nexus (professional)
- Website: https://darnygirl.github.io/elevare
- Booking: https://calendly.com/elevareworkplace
- Email: hello@elevarework.com

PROGRAMS:

LINGUA (Language Learning):
- Language tutoring in 15+ languages
- Prices: $15/hour, $149 video course, $29 quiz bundle
- Free resources: grammar guides, vocabulary, flashcards
- 1-on-1 coaching available

RISE (Personal Development):
- Confidence building and life coaching
- Prices: $39/month membership, $29-79 webinars, $97 mastermind
- Free resources: personal growth guides, confidence quizzes
- Mental-health-informed approach

FLEX NEXUS (Professional Development):
- Business communication and executive skills
- Prices: $47 workshop, $79 guides bundle, $49 templates, $227 intensive
- Free resources: professional guides, career quizzes
- Negotiation, leadership, presentation skills

BOOKING:
- Free consultations available
- Book at: https://calendly.com/elevareworkplace
- Sessions conducted via Jitsi video (meet.jit.si)
- Confirmation sent via email

TUTORS:
- Apply at: https://darnygirl.github.io/elevare/frontend/tutors.html
- Must fill out registration form
- Training and resources provided
- International placement consulting available ($97-197/mo)

POLICIES:
- Cancellation: 24 hours notice required
- Refunds: Case-by-case basis
- Payment methods: Card, bank transfer, Skrill
```

---

## Tidio Alternative Setup

If you prefer Tidio:

### 1. Create Account
1. Go to https://www.tidio.com/
2. Sign up free

### 2. Get Your Code
1. Settings → Installation
2. Copy the code

### 3. Add to Website
Add before `</body>` tag.

### 4. Set Up AI chatbot
1. Go to Channels → AI chatbot
2. Create new bot
3. Use same knowledge base above

---

## Free Alternative: Chaport

https://www.chaport.com/ - also has free tier with AI capabilities.

---

## Adding Multiple Platform Support

### WhatsApp Integration
1. In Crisp/Tidio, connect your WhatsApp Business
2. Link to: https://wa.me/1234567890 (replace with your number)

### Telegram Integration  
1. Create Telegram bot via @BotFather
2. Connect in Crisp/Tidio settings
3. Bot token: YOUR_BOT_TOKEN

### Facebook Messenger
1. Go to Crisp/Tidio integrations
2. Connect Facebook Page
3. Manage in one dashboard

---

## Chat Widget Customization

Add this CSS to style the widget to match Elevare:

```css
/* Crisp Widget Styling */
.crisp-kbhvkx {
    --primary: #c9a227 !important; /* Gold */
    --secondary: #0d1b2a !important; /* Navy */
}
```

---

## Automated Response Examples

### Auto-Replies to Set:

1. **Welcome Message:**
"Hi! 👋 Welcome to Elevare! I'm Luna, your virtual assistant. I can help you with language learning, booking sessions, or answering questions about our programs. What can I help you with today?"

2. **After Hours:**
"Thanks for messaging! We're currently away. Leave us a message and we'll get back to you within 24 hours. For urgent matters, email us at hello@elevarework.com"

3. **Common FAQ Trigger:**
"Did you know we offer free consultations? Click here to book your free 30-minute call: [Calendly link]"

---

## Testing Your Chatbot

1. Open your website
2. Click the chat widget
3. Test these phrases:
   - "Hi"
   - "How much does it cost?"
   - "I want to learn Spanish"
   - "How do I book?"
   - "I'm interested in becoming a tutor"
   - "I need to cancel"

4. Check responses and adjust AI training

---

## Monitoring & Analytics

Check in your chat platform dashboard:
- Response times
- Resolution rates
- Common questions
- Customer satisfaction scores

---

## Next Steps After Setup

1. Monitor chat for first week
2. Add FAQ responses for unhandled questions
3. Refine AI training monthly
4. Connect to Make.com for automations
