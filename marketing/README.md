# Elevare Marketing Agent

AI-powered content generation for social media and email marketing.

## Quick Start

1. Open `marketing-dashboard.html` in your browser
2. Select content type (social post, email, etc.)
3. Choose platform (LinkedIn, Instagram, Email, etc.)
4. Click "Generate Content"
5. Copy, edit, and post!

## Files

- `marketing-dashboard.html` - Main dashboard with all features
- `content-generator.js` - Content generation logic
- `social-templates.js` - Post templates for each platform
- `email-templates.js` - Email newsletter templates
- `api-config.js` - API key configuration (you fill in your keys)

## API Setup

To enable auto-posting, add your API keys in `api-config.js`:

```javascript
const API_KEYS = {
    mailchimp: 'YOUR_MAILCHIMP_API_KEY',
    buffer: 'YOUR_BUFFER_ACCESS_TOKEN',
    sendgrid: 'YOUR_SENDGRID_API_KEY'
};
```

## Platform Guides

### Mailchimp
1. Get API key: mailchimp.com → Account → API keys
2. Audience ID: Audience → Settings → Audience name and defaults

### Buffer
1. Get Access Token: buffer.com → Apps → Create App
2. Select which profiles to access

### SendGrid
1. Get API Key: sendgrid.com → Settings → API Keys
2. Create with "Full Access" permissions

## Content Types Supported

- Social Media Posts (LinkedIn, Instagram, Facebook, Twitter/X, YouTube)
- Email Newsletters
- WhatsApp Messages
- Telegram Broadcasts
- Blog/Website Content
- Ad Copy

## Best Posting Times (Based on Research)

| Platform | Best Times |
|----------|------------|
| LinkedIn | Tue-Thu, 7-8am, 12pm, 5-6pm |
| Instagram | Mon-Fri, 11am-1pm, 7-9pm |
| Facebook | Wed, 11am-1pm |
| Twitter | Weekdays, 8-9am, 12pm |
| YouTube | Thu-Fri, 12-3pm, Sat-Sun |
