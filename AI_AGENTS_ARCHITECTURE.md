# Elevare AI Agent System Architecture

## Overview
Multi-agent AI system handling all administrative duties for Elevare.

## Agent Types

### 1. **Luna** — Student Success Agent (Chatbot)
- **Role:** First point of contact for students
- **Platform:** Website chat widget + WhatsApp + Telegram
- **Handles:**
  - Answer questions about Lingua, Rise, Flex Nexus programs
  - Help with enrollment and registration
  - Schedule appointments via Calendly
  - Track basic student progress
  - Handle billing inquiries

### 2. **Atlas** — Tutor Operations Agent (Backend)
- **Role:** Backend automation for tutor management
- **Platform:** Make.com (no-code automation)
- **Handles:**
  - Process tutor applications
  - Onboard new tutors
  - Schedule tutor sessions
  - Track payments and payouts
  - Manage tutor availability

### 3. **Athena** — Customer Support Agent (AI)
- **Role:** Intelligent FAQ and support
- **Platform:** Crisp AI chatbot + Email
- **Handles:**
  - Answer common questions
  - Escalate complex issues to humans
  - Collect feedback
  - Handle refunds and disputes

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      ELEVARE AI AGENTS                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌─────────────┐    ┌─────────────┐    ┌─────────────┐  │
│   │   LUNA      │    │   ATLAS     │    │   ATHENA    │  │
│   │  (Chatbot)  │    │ (Automation)│    │ (Support AI)│  │
│   └──────┬──────┘    └──────┬──────┘    └──────┬──────┘  │
│          │                   │                   │          │
│          ▼                   ▼                   ▼          │
│   ┌─────────────────────────────────────────────────────┐  │
│   │              SHARED KNOWLEDGE BASE                   │  │
│   │  - Program info  - Pricing  - FAQ  - Policies      │  │
│   └─────────────────────────────────────────────────────┘  │
│          │                   │                   │          │
│          ▼                   ▼                   ▼          │
│   ┌─────────────┐    ┌─────────────┐    ┌─────────────┐  │
│   │  STUDENT    │    │   TUTOR     │    │  PAYMENT    │  │
│   │  DATABASE   │    │  DATABASE   │    │   DATABASE  │  │
│   │ (Google     │    │ (Google     │    │ (Google     │  │
│   │  Sheets)    │    │  Sheets)    │    │  Sheets)    │  │
│   └─────────────┘    └─────────────┘    └─────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Integrations
- **Calendly** — Booking and scheduling
- **Google Sheets** — Student/Tutor databases
- **Email (Gmail)** — Notifications and confirmations
- **WhatsApp / Telegram** — Messaging platforms
- **Skrill** — Payment processing

## Setup Guide

### Step 1: Create Crisp Chat Widget Account
1. Go to https://crisp.chat/en/
2. Sign up for free
3. Get your website chat widget code
4. Add to Elevare website

### Step 2: Set Up Google Sheets
1. Create "Elevare Students" spreadsheet
2. Create "Elevare Tutors" spreadsheet
3. Create "Elevare Payments" spreadsheet

### Step 3: Create Make.com Account
1. Go to https://make.com
2. Sign up for free (1000 ops/month)
3. Create scenarios for each automation

### Step 4: Configure AI Brain
1. Set up OpenAI account
2. Create knowledge base
3. Train agents with Elevare info

## AI Agent Scripts

### Luna (Student Chatbot) — Response Templates

**Greeting:**
"Hi! I'm Luna, your Elevare assistant. How can I help you today?"

**Common Responses:**

Q: "What programs do you offer?"
A: "We have three pillars at Elevare:
- LINGUA: Language learning ($15/hr or $39/mo membership)
- RISE: Personal confidence coaching ($39-97/mo)
- FLEX NEXUS: Professional development ($47-227/program)
Would you like to learn more about any of these?"

Q: "How do I book a session?"
A: "Booking is easy! You can:
1. Go to our booking page: [link]
2. Choose your program
3. Pick a time that works for you
Shall I take you to the booking page?"

Q: "How much does it cost?"
A: "Our pricing varies by program:
- Lingua Sessions: From $15/hour
- Rise Membership: $39/month
- Flex Nexus Intensive: From $47
We also offer free consultations! Want to start with a free call?"

Q: "I want to be a tutor"
A: "That's wonderful! We always welcome new tutors. You can:
1. Apply here: [link to tutors page]
2. Fill out our registration form
3. Our team will review and get back to you within 48 hours
Would you like me to send you the tutor application link?"

Q: "I need to cancel/reschedule"
A: "I can help with that! Please note our cancellation policy:
- Sessions must be cancelled 24+ hours in advance
- Late cancellations may incur a fee
To reschedule, please visit your booking confirmation email or contact us directly."

### Atlas (Tutor Automation) — Workflows

**Tutor Application Flow:**
1. Form submission on website
2. Make.com receives webhook
3. Creates row in Tutors spreadsheet
4. Sends confirmation email to applicant
5. Notifies admin of new application
6. Admin reviews and approves
7. Welcome email sent to new tutor
8. Tutor added to scheduling system

**Session Booking Flow:**
1. Student books via Calendly
2. Make.com receives notification
3. Creates student record if new
4. Sends confirmation email
5. Adds to session schedule
6. Sends reminder 24hrs before
7. Collects feedback after session

### Athena (Support Agent) — Response Templates

**Refund Requests:**
"We understand things come up. For refund requests, please provide:
- Your name and email
- Session date
- Reason for refund
Our team will review and respond within 24-48 hours."

**Technical Issues:**
"We're sorry you're experiencing issues. Please describe the problem and we'll get it resolved as quickly as possible. For immediate assistance, you can also reach us on WhatsApp."

## Response Flowchart

```
                    INCOMING MESSAGE
                           │
                           ▼
                    ┌───────────────┐
                    │  Luna greets │
                    │  & classifies│
                    └───────┬───────┘
                            │
            ┌───────────────┼───────────────┐
            │               │               │
            ▼               ▼               ▼
      ┌──────────┐   ┌──────────┐   ┌──────────┐
      │ STUDENT  │   │  TUTOR   │   │GENERAL   │
      │ INQUIRY  │   │ INQUIRY  │   │QUESTION  │
      └────┬─────┘   └────┬─────┘   └────┬─────┘
           │              │              │
           ▼              ▼              ▼
    Luna answers    Atlas handles   Luna checks
    or books       or escalates    knowledge base
           │              │              │
           └──────────────┼──────────────┘
                          │
                    ┌─────┴─────┐
                    │  Complex?  │
                    └─────┬─────┘
                          │
              ┌───────────┴───────────┐
              │                       │
              ▼                       ▼
        ┌──────────┐         ┌──────────┐
        │    NO    │         │   YES   │
        │  Answer  │         │ Escalate │
        │ directly │         │  to human│
        └──────────┘         └──────────┘
```

## Knowledge Base Content

### Program Details
- Lingua: Language tutoring, 15+ languages, prices, methodology
- Rise: Confidence coaching, mindset work, membership benefits
- Flex Nexus: Professional development, negotiation, executive presence

### Pricing Information
- Lingua: $15/hr sessions, $149 video course, $29 quizzes bundle
- Rise: $39/mo membership, $29-79 webinars, $97 mastermind, $197 course
- Flex Nexus: $47 workshops, $79 guides bundle, $49 templates, $227 intensive

### Policies
- Cancellation: 24 hours notice required
- Refunds: At discretion, case-by-case
- Payment: Skrill, card, bank transfer
- Scheduling: Via Calendly

## Success Metrics
- Response time: < 2 minutes
- Resolution rate: 85% automated
- Customer satisfaction: > 90%
- Booking conversion: > 20%

## Next Steps
1. Create Crisp.chat account
2. Add chat widget to website
3. Set up Google Sheets
4. Create Make.com account
5. Build first automation
6. Train AI with knowledge base
7. Test with real users
