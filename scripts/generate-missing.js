#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');

const API_KEY = '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';
const MODEL = 'bytedance-seed/seedream-4.5';
const API_URL = 'https://openrouter.ai/api/v1/chat/completions';

async function generateImage(prompt, outputPath) {
  console.log(`📸 ${outputPath.split('/').slice(-2).join('/')}`);

  const requestBody = JSON.stringify({
    model: MODEL,
    messages: [{ role: 'user', content: prompt }],
    modalities: ['image', 'text']
  });

  return new Promise((resolve, reject) => {
    const url = new URL(API_URL);
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
        try {
          const response = JSON.parse(data);
          if (response.error) {
            reject(new Error(response.error.message));
            return;
          }

          let imageData = null;
          if (response.choices?.[0]?.message?.images?.[0]?.image_url?.url) {
            const dataUrl = response.choices[0].message.images[0].image_url.url;
            const match = dataUrl.match(/base64,(.+)/);
            if (match) imageData = match[1];
          }

          if (!imageData) {
            reject(new Error('No image data found'));
            return;
          }

          const dir = path.dirname(outputPath);
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
          }

          fs.writeFileSync(outputPath, Buffer.from(imageData, 'base64'));
          console.log(`   ✅ Done`);
          resolve(outputPath);
        } catch (err) {
          reject(err);
        }
      });
    });

    req.on('error', reject);
    req.write(requestBody);
    req.end();
  });
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const baseDir = path.join(__dirname, '..', 'public', 'images', 'properties');

  const tasks = [
    // Missing images
    { prompt: 'Rooftop deck at luxury beach house, outdoor lounge furniture, sunset views over Gulf of Mexico, modern railings, warm evening lighting, professional real estate photography', output: path.join(baseDir, 'sunset-cove', 'rooftop.jpg') },
    { prompt: 'Wraparound porch at coastal beach house, rocking chairs, ocean views, white railings, southern coastal charm, morning light, professional real estate photography', output: path.join(baseDir, 'pearl-beach', 'porch.jpg') },
    { prompt: 'Spacious wraparound deck at beach house on stilts, outdoor furniture, coastal views, wooden railings, sunny day, professional real estate photography', output: path.join(baseDir, 'pelican-point', 'deck.jpg') },
  ];

  console.log('🏖️  Generating Missing Images\n');

  for (const task of tasks) {
    try {
      await generateImage(task.prompt, task.output);
      await sleep(2000);
    } catch (err) {
      console.error(`   ❌ ${err.message}`);
    }
  }

  console.log('\n✅ Done');
}

main().catch(console.error);
