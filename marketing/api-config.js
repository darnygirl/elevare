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
    },

    // ElevenLabs API - https://elevenlabs.io/docs/api-reference
    elevenlabs: {
        apiKey: 'YOUR_ELEVENLABS_API_KEY', // Get from elevenlabs.io/profile/api-key
        voiceId: 'YOUR_VOICE_ID', // Get from your cloned voice settings
        model: 'eleven_monolingual_v1' // Audio model
    },

    // Play.ht API - https://play.ht/docs/api
    playht: {
        apiKey: 'YOUR_PLAYHT_API_KEY', // Get from play.ht/api
        userId: 'YOUR_PLAYHT_USER_ID', // Get from play.ht/api
        voiceId: 'YOUR_CLONED_VOICE_ID' // Get from voice cloning section
    },

    // Resemble.ai API - https://docs.resemble.ai
    resemble: {
        apiKey: 'YOUR_RESEMBLE_API_TOKEN', // Get from app.resemble.ai/account/api
        voiceId: 'YOUR_VOICE_UUID', // Get from voice cloning section
        model: 'chatterbox-turbo' // Use turbo model for better quality
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
        this.elevenlabs = apiKeys.elevenlabs;
        this.resemble = apiKeys.resemble;
    }

    // Resemble.ai Voice Cloning functions
    async generateVoiceoverResemble(text, options = {}) {
        if (!this.resemble.apiKey || this.resemble.apiKey === 'YOUR_RESEMBLE_API_TOKEN') {
            return { error: 'Resemble not configured' };
        }

        const voiceId = options.voiceId || this.resemble.voiceId;
        const model = options.model || this.resemble.model;

        const response = await fetch('https://f.cluster.resemble.ai/synthesize', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.resemble.apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                voice_uuid: voiceId,
                data: text,
                model: model,
                output_format: 'mp3'
            })
        });

        if (!response.ok) {
            const error = await response.json();
            return { error: error.message || 'Voice generation failed' };
        }

        const result = await response.json();
        
        if (!result.success) {
            return { error: result.error || 'Voice generation failed' };
        }

        // Convert base64 to blob
        const audioData = atob(result.audio_content);
        const audioArray = new Uint8Array(audioData.length);
        for (let i = 0; i < audioData.length; i++) {
            audioArray[i] = audioData.charCodeAt(i);
        }
        const audioBlob = new Blob([audioArray], { type: 'audio/mp3' });
        const audioUrl = URL.createObjectURL(audioBlob);

        return { 
            success: true, 
            audioUrl: audioUrl,
            audioBlob: audioBlob,
            duration: result.duration
        };
    }

    async getResembleVoices() {
        const response = await fetch('https://f.cluster.resemble.ai/voices', {
            headers: {
                'Authorization': `Bearer ${this.resemble.apiKey}`
            }
        });
        return await response.json();
    }

    // ElevenLabs Voice Cloning functions
    async generateVoiceover(text, options = {}) {
        if (!this.elevenlabs.apiKey || this.elevenlabs.apiKey === 'YOUR_ELEVENLABS_API_KEY') {
            return { error: 'ElevenLabs not configured' };
        }

        const voiceId = options.voiceId || this.elevenlabs.voiceId;
        const model = options.model || this.elevenlabs.model;
        const stability = options.stability || 0.5;
        const similarityBoost = options.similarityBoost || 0.75;

        const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
            method: 'POST',
            headers: {
                'Accept': 'audio/mpeg',
                'Content-Type': 'application/json',
                'xi-api-key': this.elevenlabs.apiKey
            },
            body: JSON.stringify({
                text: text,
                model_id: model,
                voice_settings: {
                    stability: stability,
                    similarity_boost: similarityBoost
                }
            })
        });

        if (!response.ok) {
            const error = await response.json();
            return { error: error.detail || 'Voice generation failed' };
        }

        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        return { 
            success: true, 
            audioUrl: audioUrl,
            audioBlob: audioBlob
        };
    }

    async getVoiceoverHistory() {
        if (!this.elevenlabs.apiKey) {
            return { error: 'ElevenLabs not configured' };
        }

        const response = await fetch('https://api.elevenlabs.io/v1/history', {
            headers: {
                'xi-api-key': this.elevenlabs.apiKey
            }
        });

        return await response.json();
    }

    // Play.ht Voice Cloning functions
    async generateVoiceoverPlayht(text, options = {}) {
        if (!this.playht.apiKey || this.playht.apiKey === 'YOUR_PLAYHT_API_KEY') {
            return { error: 'Play.ht not configured' };
        }

        const voiceId = options.voiceId || this.playht.voiceId;
        const voiceEngine = options.voiceEngine || 'PlayHT2.0';

        const response = await fetch('https://api.play.ht/api/v2/tts', {
            method: 'POST',
            headers: {
                'Accept': 'audio/mpeg',
                'Content-Type': 'application/json',
                'X-API-Key': this.playht.apiKey,
                'X-User-Id': this.playht.userId
            },
            body: JSON.stringify({
                text: text,
                voice: voiceId,
                voice_engine: voiceEngine
            })
        });

        if (!response.ok) {
            const error = await response.json();
            return { error: error.message || 'Voice generation failed' };
        }

        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        return { 
            success: true, 
            audioUrl: audioUrl,
            audioBlob: audioBlob
        };
    }

    async getPlayhtVoices() {
        const response = await fetch('https://api.play.ht/api/v2/voices', {
            headers: {
                'X-API-Key': this.playht.apiKey,
                'X-User-Id': this.playht.userId
            }
        });
        return await response.json();
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
