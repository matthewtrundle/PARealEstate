#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');

const API_KEY = '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';
const MODEL = 'bytedance-seed/seedream-4.5';
const API_URL = 'https://openrouter.ai/api/v1/chat/completions';

async function generateImage(prompt, outputPath) {
  console.log(`\n📸 Generating: ${outputPath.split('/').slice(-2).join('/')}`);
  console.log(`   Prompt: ${prompt.substring(0, 70)}...`);

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

          const buffer = Buffer.from(imageData, 'base64');
          fs.writeFileSync(outputPath, buffer);
          console.log(`   ✅ Saved`);
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
    // Sunset Cove additional images
    { prompt: 'Private pool area in Mediterranean beach villa, terracotta tile deck, palm trees, blue water, warm evening light, professional real estate photography', output: path.join(baseDir, 'sunset-cove', 'pool.jpg') },
    { prompt: 'Elegant master bedroom in Mediterranean villa, arched doorway, coastal decor, king bed, warm natural light, professional interior photography', output: path.join(baseDir, 'sunset-cove', 'master.jpg') },

    // Pearl Beach additional images
    { prompt: 'Cozy kitchen in beach cottage, white cabinets, butcher block counters, coastal blue accents, natural light, professional interior photography', output: path.join(baseDir, 'pearl-beach', 'kitchen.jpg') },

    // Oceanview Condo interior
    { prompt: 'Modern luxury condo living room with floor-to-ceiling ocean views, contemporary furniture, neutral tones, high-rise beach condo interior, professional photography', output: path.join(baseDir, 'oceanview-condo', 'living.jpg') },
    { prompt: 'Modern condo bedroom with ocean view balcony, contemporary design, neutral coastal decor, morning light, professional interior photography', output: path.join(baseDir, 'oceanview-condo', 'bedroom.jpg') },

    // Dunes Retreat interiors
    { prompt: 'Contemporary beach house living room with dune views, minimalist coastal design, large windows, natural materials, bright and airy, professional interior photography', output: path.join(baseDir, 'dunes-retreat', 'living.jpg') },
    { prompt: 'Modern beach house kitchen, white and wood finishes, island seating, dune views through window, professional interior photography', output: path.join(baseDir, 'dunes-retreat', 'kitchen.jpg') },

    // Pelican Point interiors
    { prompt: 'Waterfront home living room with canal views, coastal contemporary style, comfortable furnishings, boat visible through window, professional interior photography', output: path.join(baseDir, 'pelican-point', 'living.jpg') },
    { prompt: 'Private dock at waterfront home with boat lift, clear water, palm trees, coastal setting, sunset light, professional real estate photography', output: path.join(baseDir, 'pelican-point', 'dock.jpg') },

    // Additional properties hero images
    { prompt: 'Modern Gulf-view townhouse exterior, contemporary coastal architecture, private garage, balcony with ocean view, professional architectural photography', output: path.join(baseDir, 'gulf-view-townhome', 'hero.jpg') },
    { prompt: 'Cozy beachside bungalow, vintage beach cottage charm, white picket fence, colorful landscaping, sunny day, professional real estate photography', output: path.join(baseDir, 'beachside-bungalow', 'hero.jpg') },
    { prompt: 'Luxury penthouse terrace overlooking Port Aransas beach, modern outdoor furniture, panoramic Gulf views, sunset, professional architectural photography', output: path.join(baseDir, 'penthouse-suite', 'hero.jpg') },
    { prompt: 'Tropical island-style beach house, elevated design, wraparound deck, lush tropical landscaping, Port Aransas setting, professional real estate photography', output: path.join(baseDir, 'island-breeze', 'hero.jpg') },
    { prompt: 'Spacious family beach home, traditional coastal architecture, large front porch, sandy yard, beach access path visible, professional real estate photography', output: path.join(baseDir, 'sandcastle-retreat', 'hero.jpg') },
    { prompt: 'Contemporary canal-front property with infinity pool, modern coastal design, boat dock, palm trees, golden hour lighting, professional architectural photography', output: path.join(baseDir, 'harbor-haven', 'hero.jpg') }
  ];

  console.log('🏖️  Generating Additional Property Images');
  console.log(`Total: ${tasks.length} images\n`);

  let completed = 0;
  for (const task of tasks) {
    try {
      await generateImage(task.prompt, task.output);
      completed++;
      await sleep(2000);
    } catch (err) {
      console.error(`   ❌ Failed: ${err.message}`);
    }
  }

  console.log(`\n✅ Completed: ${completed}/${tasks.length}`);
}

main().catch(console.error);
