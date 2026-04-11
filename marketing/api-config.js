// API Configuration for Elevare Marketing Agent
// Add your actual API keys here

const API_KEYS = {
    // Mailchimp API - https://mailchimp.com/help/about-api-keys/
    mailchimp: {
        apiKey: 'YOUR_MAILCHIMP_API_KEY',
        server: 'us1', // Found in your API key (e.g., key-us1)
        audienceId: 'YOUR_AUDIENCE_ID'
    },

    // Buffer API - https://buffer.com/developers/apps
    buffer: {
        accessToken: 'YOUR_BUFFER_ACCESS_TOKEN',
        profileIds: ['PROFILE_ID_1', 'PROFILE_ID_2']
    },

    // SendGrid API - https://app.sendgrid.com/settings/api_keys
    sendgrid: {
        apiKey: 'YOUR_SENDGRID_API_KEY',
        fromEmail: 'hello@elevare.work',
        fromName: 'Elevare'
    }
};

// Platform configurations
const PLATFORMS = {
    linkedin: {
        name: 'LinkedIn',
        icon: 'linkedin',
        bestTimes: ['9:00 AM', '12:00 PM', '5:00 PM', '6:00 PM'],
        days: ['Tuesday', 'Wednesday', 'Thursday']
    },
    instagram: {
        name: 'Instagram',
        icon: 'instagram',
        bestTimes: ['11:00 AM', '1:00 PM', '7:00 PM', '8:00 PM'],
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    facebook: {
        name: 'Facebook',
        icon: 'facebook',
        bestTimes: ['11:00 AM', '1:00 PM', '3:00 PM'],
        days: ['Wednesday', 'Thursday', 'Friday']
    },
    twitter: {
        name: 'X (Twitter)',
        icon: 'twitter',
        bestTimes: ['8:00 AM', '9:00 AM', '12:00 PM'],
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    youtube: {
        name: 'YouTube',
        icon: 'youtube',
        bestTimes: ['12:00 PM', '3:00 PM'],
        days: ['Thursday', 'Friday', 'Saturday', 'Sunday']
    }
};

// Marketing automation functions
class MarketingAgent {
    constructor(apiKeys) {
        this.mailchimp = apiKeys.mailchimp;
        this.buffer = apiKeys.buffer;
        this.sendgrid = apiKeys.sendgrid;
    }

    // Mailchimp functions
    async addSubscriber(email, firstName, lastName) {
        if (!this.mailchimp.apiKey || this.mailchimp.apiKey === 'YOUR_MAILCHIMP_API_KEY') {
            console.log('Mailchimp not configured');
            return { error: 'Mailchimp not configured' };
        }

        const url = `https://${this.mailchimp.server}.api.mailchimp.com/3.0/lists/${this.mailchimp.audienceId}/members`;
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.mailchimp.apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email_address: email,
                status: 'subscribed',
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            })
        });

        return await response.json();
    }

    async sendCampaign(subject, content, audienceId) {
        if (!this.mailchimp.apiKey) {
            return { error: 'Mailchimp not configured' };
        }

        // Create campaign
        const campaignUrl = `https://${this.mailchimp.server}.api.mailchimp.com/3.0/campaigns`;
        const campaign = await fetch(campaignUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.mailchimp.apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                type: 'regular',
                recipients: { list_id: audienceId || this.mailchimp.audienceId },
                settings: {
                    subject_line: subject,
                    from_name: 'Elevare',
                    reply_to: 'hello@elevare.work'
                }
            })
        }).then(r => r.json());

        // Set content
        await fetch(`${campaignUrl}/${campaign.id}/content`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${this.mailchimp.apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                html: content
            })
        });

        // Send
        await fetch(`${campaignUrl}/${campaign.id}/actions/send`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.mailchimp.apiKey}`
            }
        });

        return campaign;
    }

    // Buffer functions
    async createPost(platform, text, media = null) {
        if (!this.buffer.accessToken) {
            return { error: 'Buffer not configured' };
        }

        const profileId = this.buffer.profileIds[0]; // Use first profile

        const response = await fetch('https://api.bufferapp.com/1/updates/create.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                access_token: this.buffer.accessToken,
                profile_ids: [profileId],
                text: text,
                media: media ? { link: media } : null
            })
        });

        return await response.json();
    }

    async schedulePost(platform, text, scheduledTime) {
        if (!this.buffer.accessToken) {
            return { error: 'Buffer not configured' };
        }

        const profileId = this.buffer.profileIds[0];

        const response = await fetch('https://api.bufferapp.com/1/updates/new.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                access_token: this.buffer.accessToken,
                profile_ids: [profileId],
                text: text,
                scheduled_at: scheduledTime
            })
        });

        return await response.json();
    }

    // SendGrid functions
    async sendEmail(to, subject, htmlContent) {
        if (!this.sendgrid.apiKey) {
            return { error: 'SendGrid not configured' };
        }

        const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.sendgrid.apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                personalizations: [{ to: [{ email: to }] }],
                from: { email: this.sendgrid.fromEmail, name: this.sendgrid.fromName },
                subject: subject,
                content: [{ type: 'text/html', value: htmlContent }]
            })
        });

        return { success: response.ok };
    }

    async sendBulkEmail(recipients, subject, htmlContent) {
        if (!this.sendgrid.apiKey) {
            return { error: 'SendGrid not configured' };
        }

        const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.sendgrid.apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                personalizations: recipients.map(email => ({ to: [{ email: email }] })),
                from: { email: this.sendgrid.fromEmail, name: this.sendgrid.fromName },
                subject: subject,
                content: [{ type: 'text/html', value: htmlContent }]
            })
        });

        return { success: response.ok, sent: recipients.length };
    }
}

// Export for use in dashboard
window.MarketingAgent = MarketingAgent;
window.API_KEYS = API_KEYS;
window.PLATFORMS = PLATFORMS;
