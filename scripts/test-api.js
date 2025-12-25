#!/usr/bin/env node

const https = require('https');

const API_KEY = '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';

const requestBody = JSON.stringify({
  model: 'bytedance-seed/seedream-4.5',
  messages: [{ role: 'user', content: 'A simple beach sunset' }],
  modalities: ['image', 'text']
});

const url = new URL('https://openrouter.ai/api/v1/chat/completions');
const options = {
  hostname: url.hostname,
  path: url.pathname,
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(requestBody)
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    const parsed = JSON.parse(data);
    console.log('\n=== FULL RESPONSE STRUCTURE ===');
    console.log(JSON.stringify(parsed, null, 2).substring(0, 3000));

    if (parsed.choices?.[0]?.message) {
      console.log('\n=== MESSAGE KEYS ===');
      console.log(Object.keys(parsed.choices[0].message));

      if (parsed.choices[0].message.images) {
        console.log('\n=== IMAGES TYPE ===');
        console.log('Type:', typeof parsed.choices[0].message.images);
        console.log('Is Array:', Array.isArray(parsed.choices[0].message.images));
        if (Array.isArray(parsed.choices[0].message.images)) {
          console.log('First item type:', typeof parsed.choices[0].message.images[0]);
          if (typeof parsed.choices[0].message.images[0] === 'object') {
            console.log('First item keys:', Object.keys(parsed.choices[0].message.images[0]));
          }
        }
      }
    }
  });
});

req.on('error', (err) => console.error('Error:', err.message));
req.write(requestBody);
req.end();
