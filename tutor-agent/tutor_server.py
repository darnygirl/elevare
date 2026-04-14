#!/usr/bin/env python3
"""
Elevare AI Tutor Server
Provides OpenAI-powered tutoring via browser interface.

Usage:
    python tutor_server.py

Open tutor-dashboard.html in browser to use.
"""

from flask import Flask, request, jsonify
import os
import openai

app = Flask(__name__)

# Configuration
OPENAI_API_KEY = os.environ.get('OPENAI_API_KEY', '')
MODEL = 'gpt-3.5-turbo'

# Course context
COURSE_CONTEXT = """You are an AI tutor for Elevare, a coaching platform with three programs:

1. LINGUA (Language Learning) - Master any language with native-speaking tutors
2. RISE (Confidence Building) - Build unshakeable confidence and overcome anxiety
3. FLEX NEXUS (Professional Communication) - Develop executive presence and business communication skills

Your role:
- Help students practice speech, pronunciation, and conversation
- Provide pronunciation feedback and tongue twisters
- Offer confidence-building exercises and mindset tips
- Assist with grammar, vocabulary, and language structure
- Give interview prep advice using STAR method
- Share practical tips for professional communication

Be encouraging, patient, and provide actionable feedback.
Always suggest practice exercises when appropriate.
Keep responses concise but helpful (under 150 words unless detailed explanation needed).
"""

@app.route('/status')
def status():
    has_key = bool(OPENAI_API_KEY)
    return jsonify({
        'ready': has_key,
        'model': MODEL if has_key else None,
        'message': 'OpenAI configured' if has_key else 'Set OPENAI_API_KEY environment variable'
    })

@app.route('/chat', methods=['POST'])
def chat():
    if not OPENAI_API_KEY:
        return jsonify({'error': 'OpenAI API key not configured'}), 400
    
    data = request.get_json()
    message = data.get('message', '').strip()
    history = data.get('history', [])
    
    if not message:
        return jsonify({'error': 'No message provided'}), 400
    
    try:
        openai.api_key = OPENAI_API_KEY
        
        # Build messages
        messages = [
            {'role': 'system', 'content': COURSE_CONTEXT}
        ]
        
        # Add conversation history
        for h in history[-5:]:  # Last 5 messages
            messages.append({'role': h.get('role', 'user'), 'content': h.get('content', '')})
        
        messages.append({'role': 'user', 'content': message})
        
        response = openai.chat.completions.create(
            model=MODEL,
            messages=messages,
            max_tokens=300,
            temperature=0.7
        )
        
        reply = response.choices[0].message.content
        return jsonify({'response': reply})
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/health')
def health():
    return jsonify({'status': 'ok'})

if __name__ == '__main__':
    print("=" * 50)
    print("Elevare AI Tutor Server")
    print("=" * 50)
    print(f"OpenAI API Key: {'Set' if OPENAI_API_KEY else 'NOT SET'}")
    print()
    print("To enable AI responses, set your OpenAI API key:")
    print("  export OPENAI_API_KEY='your-key-here'")
    print("  python tutor_server.py")
    print()
    print("Or run with: OPENAI_API_KEY='your-key' python tutor_server.py")
    print("=" * 50)
    app.run(host='127.0.0.1', port=5001, debug=False)
