# Elevare Make.com Automation Workflows

## Make.com Setup Guide

### 1. Create Account
1. Go to https://make.com
2. Sign up for free (1,000 operations/month)
3. Verify your email

### 2. Create First Scenario
1. Click "Create a new scenario"
2. Click the empty circle to add your first module

---

## WORKFLOW 1: Student Intake & Enrollment

### Trigger: New Form Submission (Google Forms)
```
┌─────────────────────────────────────────────┐
│  GOOGLE FORMS                               │
│  Watch New Responses                         │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  ROUTER (Branch)                            │
│  Check enrollment type                       │
└─────────────────┬───────────────────────────┘
                  │
     ┌────────────┼────────────┐
     ▼            ▼            ▼
┌─────────┐ ┌─────────┐ ┌─────────┐
│ Lingua  │ │  Rise   │ │  Flex   │
│ Path    │ │  Path   │ │  Nexus  │
└────┬────┘ └────┬────┘ └────┬────┘
     │            │            │
     ▼            ▼            ▼
┌─────────────────────────────────────────────┐
│  GOOGLE SHEETS                              │
│  Add Row to Students Database                │
│  - Name, Email, Program, Date, Status       │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  GMAIL                                      │
│  Send Welcome Email                          │
│  Template: Student Welcome                   │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  GMAIL                                      │
│  Notify Admin (you)                         │
│  Subject: New Student Enrollment             │
└─────────────────────────────────────────────┘
```

### Detailed Steps:

**Module 1: Google Forms Trigger**
- App: Google Forms
- Event: Watch Form Responses
- Form: [Select your enrollment form]

**Module 2: Router**
- Condition: `{{Program}}` equals "Lingua" / "Rise" / "Flex Nexus"
- Each route adds different tags

**Module 3: Google Sheets - Add Row**
- Spreadsheet: Elevare Students
- Columns: Name, Email, Phone, Program, Interest, Date, Status
- Status: "New Lead"

**Module 4: Gmail - Send Email**
- To: `{{Email}}`
- Subject: Welcome to Elevare, {{Name}}!
- Body: [Use template below]

**Module 5: Gmail - Notify Admin**
- To: hello@elevarework.com
- Subject: New {{Program}} Student: {{Name}}
- Body: A new student has enrolled!

---

## WORKFLOW 2: Tutor Application Processing

### Trigger: Website Form Submission
```
┌─────────────────────────────────────────────┐
│  WEBHOOK                                     │
│  Receive tutor application                    │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  GOOGLE SHEETS                              │
│  Add Row to Tutors Database                  │
│  - Name, Email, Specialization, Date, Status │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  GMAIL                                      │
│  Send Application Received                   │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  SLACK (or Gmail)                           │
│  Notify admin of new application             │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  CALENDLY                                   │
│  Create onboarding meeting                   │
└─────────────────────────────────────────────┘
```

### Tutor Welcome Email Template:
```
Subject: Welcome to Elevare, {{Name}}!

Hi {{Name}},

Thank you for applying to join the Elevare tutor network! We're excited to have you.

What happens next:
1. We'll review your application within 48 hours
2. If approved, you'll receive an invitation to our tutor portal
3. Complete your profile and training modules
4. Start accepting students!

In the meantime, feel free to explore our resources:
- Tutor Portal: [link]
- Resource Library: [link]

Questions? Reply to this email or book a call: [Calendly link]

Best,
Elevare Team
```

---

## WORKFLOW 3: Session Booking Automation

### Trigger: Calendly Booking
```
┌─────────────────────────────────────────────┐
│  CALENDLY                                   │
│  Watch Event Booking                         │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  GOOGLE SHEETS                              │
│  Find or Create Student Row                  │
│  (Match by email)                           │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  GOOGLE SHEETS                              │
│  Update Row - Add Session                    │
│  - Session Date, Type, Tutor, Status        │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  GMAIL                                      │
│  Send Session Confirmation                   │
│  Include Jitsi room link                    │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  TWILIO (or SMS gateway)                    │
│  Send SMS Reminder (optional)                │
│  "Session tomorrow at [time]"               │
└─────────────────────────────────────────────┘
```

### Session Confirmation Email:
```
Subject: Your Elevare Session is Confirmed! 📚

Hi {{Name}},

Your session details:
- Date: {{Event Date}}
- Time: {{Event Time}}
- Type: {{Event Type}}
- Tutor: {{Tutor Name}}

Join your session here:
{{Jitsi Room Link}}

Before your session:
- Test your camera and microphone
- Find a quiet space
- Have your materials ready

Need to reschedule? Reply to this email or visit your booking link.

See you soon!
Elevare Team
```

---

## WORKFLOW 4: Payment Processing

### Trigger: Skrill Notification (or manual entry)
```
┌─────────────────────────────────────────────┐
│  WEBHOOK / EMAIL                            │
│  Receive payment notification                │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  GOOGLE SHEETS                              │
│  Add Payment Record                          │
│  - Student, Amount, Date, Type, Status      │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  ROUTER                                     │
│  Check payment type                          │
└─────────────────┬───────────────────────────┘
                  │
        ┌─────────┴─────────┐
        ▼                   ▼
   ┌─────────┐        ┌─────────┐
   │ Student │        │  Tutor  │
   │ Payment │        │  Payout │
   └────┬────┘        └────┬────┘
        │                   │
        ▼                   ▼
   ┌─────────────┐   ┌─────────────┐
   │ Update student│   │ Calculate   │
   │ subscription │   │ tutor commission│
   │ status       │   │             │
   └─────────────┘   └──────┬──────┘
                            │
                            ▼
                     ┌─────────────┐
                     │ Schedule   │
                     │ payout     │
                     │ automation │
                     └─────────────┘
```

---

## WORKFLOW 5: Session Reminders

### Schedule: Daily at 9 AM
```
┌─────────────────────────────────────────────┐
│  GOOGLE SHEETS                              │
│  Search Sessions (tomorrow's date)          │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  ITERATOR                                   │
│  Process each session                        │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  GMAIL                                      │
│  Send 24-hour reminder                       │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  TWILIO                                     │
│  Send SMS reminder (optional)                │
└─────────────────────────────────────────────┘
```

### Reminder Email Template:
```
Subject: Reminder: Your Elevare Session Tomorrow 📅

Hi {{Name}},

This is a friendly reminder about your upcoming session:

📚 Session: {{Session Type}}
🗓 Date: {{Tomorrow's Date}}
⏰ Time: {{Time}}
👨‍🏫 Tutor: {{Tutor Name}}

Join here: {{Jitsi Link}}

If you need to reschedule, please let us know at least 24 hours in advance.

See you tomorrow!
Elevare Team
```

---

## WORKFLOW 6: Post-Session Feedback

### Trigger: 1 hour after session end
```
┌─────────────────────────────────────────────┐
│  CALENDLY                                   │
│  Watch Event Completed                       │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  GMAIL                                      │
│  Send Feedback Request                       │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  GOOGLE SHEETS                              │
│  Update session status: "Completed"          │
└─────────────────────────────────────────────┘
```

### Feedback Request Email:
```
Subject: How Was Your Session? 💭

Hi {{Name}},

We hope you had a great session with {{Tutor Name}}!

Your feedback helps us improve and helps other students choose the right programs.

Take 2 minutes to share your experience:
[Feedback Form Link]

Rate your session:
⭐⭐⭐⭐⭐

Thank you!
Elevare Team
```

---

## WORKFLOW 7: Tutor Payout Scheduling

### Schedule: 1st of each month
```
┌─────────────────────────────────────────────┐
│  GOOGLE SHEETS                              │
│  Search: All "Completed" sessions           │
│  Calculate tutor hours & earnings            │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  GOOGLE SHEETS                              │
│  Create Payout Report                        │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  GMAIL                                      │
│  Send payout notification to each tutor      │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  GMAIL                                      │
│  Send admin payout summary                   │
└─────────────────────────────────────────────┘
```

### Tutor Payout Email:
```
Subject: Your Elevare Earnings - [Month] 💰

Hi {{Tutor Name}},

Here's your monthly payout summary:

📊 Sessions Completed: {{Count}}
⏱ Total Hours: {{Hours}}
💵 Gross Earnings: ${{Gross}}
🔧 Platform Fee: ${{Fee}}
💰 Net Payout: ${{Net}}

Payout will be processed to your [Skrill/Payment Method] on [Date].

Thank you for being part of Elevare!

Best,
Elevare Team
```

---

## WORKFLOW 8: Weekly Reports to Admin

### Schedule: Every Monday 9 AM
```
┌─────────────────────────────────────────────┐
│  GOOGLE SHEETS                              │
│  Get week's new students                     │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  GOOGLE SHEETS                              │
│  Get week's sessions                         │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  GOOGLE SHEETS                              │
│  Get week's payments                         │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│  EMAIL                                      │
│  Compile & send weekly report               │
└─────────────────────────────────────────────┘
```

### Weekly Report Email:
```
Subject: Elevare Weekly Report 📊 [Date]

Hi Admin,

Here's your weekly summary:

📚 NEW STUDENTS: {{Count}}
- {{Student 1 Name}} ({{Program}})
- {{Student 2 Name}} ({{Program}})
...

📅 SESSIONS: {{Count}} completed
- Revenue: ${{Amount}}

💰 PAYMENTS RECEIVED: ${{Total}}

📅 NEXT WEEK'S HIGHLIGHTS:
- {{Tutor Name}} - {{Count}} sessions
...

Have a great week!
Elevare System
```

---

## Making These Work Together

### Connecting the Workflows:

1. **Student signs up** → Workflow 1 creates record
2. **Student books session** → Workflow 3 creates appointment
3. **24 hours before** → Workflow 5 sends reminder
4. **Session ends** → Workflow 6 sends feedback request
5. **Payment received** → Workflow 4 records it
6. **Monthly** → Workflow 7 pays tutors

### Error Handling:

Add these to each workflow:
- **Error Handler**: If email fails, retry 3 times
- **Backup Notification**: If automation fails, alert admin
- **Logging**: Keep history of all automation runs

---

## Testing Your Automations

1. **Turn on one workflow at a time**
2. **Create a test record**
3. **Verify each step completes**
4. **Check email/Sheet updates**
5. **Fix any errors**
6. **Move to next workflow**

---

## Need Help?

- Make.com Documentation: https://www.make.com/en/help
- YouTube Tutorials: Search "Make.com beginners guide"
- Community: https://www.make.com/en/community
