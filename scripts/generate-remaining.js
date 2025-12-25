#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');

const API_KEY = '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';
const MODEL = 'bytedance-seed/seedream-4.5';
const API_URL = 'https://openrouter.ai/api/v1/chat/completions';

async function generateImage(prompt, outputPath) {
  console.log(`\n📸 ${outputPath.split('/').slice(-2).join('/')}`);

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
    // Seaglass Penthouse
    { prompt: 'Luxury waterfront penthouse building exterior, modern high-rise architecture, floor-to-ceiling glass, Gulf views, sunset, Port Aransas Texas, professional architectural photography', output: path.join(baseDir, 'seaglass', 'hero.jpg') },
    { prompt: 'Penthouse living room with panoramic gulf views, floor-to-ceiling windows, modern luxury interior, high ceilings, contemporary furniture, professional interior photography', output: path.join(baseDir, 'seaglass', 'view.jpg') },
    { prompt: 'Luxury penthouse terrace with outdoor furniture, panoramic ocean views, sunset, modern design, professional real estate photography', output: path.join(baseDir, 'seaglass', 'terrace.jpg') },
    { prompt: 'Penthouse master bedroom with ocean views, luxury bedding, modern coastal decor, large windows, professional interior photography', output: path.join(baseDir, 'seaglass', 'master.jpg') },

    // Driftwood Retreat
    { prompt: 'Charming beach cottage exterior, elevated on stilts, natural wood exterior, tropical landscaping, private pool visible, coastal Texas, professional real estate photography', output: path.join(baseDir, 'driftwood', 'hero.jpg') },
    { prompt: 'Beach cottage private pool area, outdoor kitchen, tropical plants, wooden deck, cozy coastal style, professional real estate photography', output: path.join(baseDir, 'driftwood', 'pool.jpg') },
    { prompt: 'Cozy beach cottage living room, casual coastal decor, comfortable furniture, natural light, relaxed beach style, professional interior photography', output: path.join(baseDir, 'driftwood', 'living.jpg') },

    // Coral Bay Manor
    { prompt: 'Grand beach estate exterior, 3-story luxury home, large resort-style pool, multiple decks, coastal Texas architecture, professional architectural photography', output: path.join(baseDir, 'coral-bay', 'hero.jpg') },
    { prompt: 'Resort-style pool at grand beach estate, hot tub, outdoor bar, fire pit, evening lighting, professional real estate photography', output: path.join(baseDir, 'coral-bay', 'pool.jpg') },
    { prompt: 'Game room in luxury beach house, pool table, arcade games, bar area, colorful lighting, professional interior photography', output: path.join(baseDir, 'coral-bay', 'game.jpg') },
    { prompt: 'Grand gourmet kitchen in beach estate, two islands, professional appliances, white cabinets, marble counters, professional interior photography', output: path.join(baseDir, 'coral-bay', 'kitchen.jpg') },

    // Gulf Breeze Condo
    { prompt: 'Beachfront condominium building, mid-rise coastal architecture, balconies overlooking Gulf, palm trees, sunny day, professional architectural photography', output: path.join(baseDir, 'gulf-breeze', 'hero.jpg') },
    { prompt: 'Condo balcony with gulf view, patio furniture, ocean visible, sunny day, professional real estate photography', output: path.join(baseDir, 'gulf-breeze', 'view.jpg') },
    { prompt: 'Cozy condo living room, coastal decor, open to kitchen, neutral colors, ocean view through window, professional interior photography', output: path.join(baseDir, 'gulf-breeze', 'living.jpg') },

    // Tidal Wave House
    { prompt: 'Ultra-modern contemporary beach house, bold geometric architecture, walls of glass, flat roof, geometric pool, dramatic lighting, professional architectural photography', output: path.join(baseDir, 'tidal-wave', 'hero.jpg') },
    { prompt: 'Modern beach house exterior at dusk, bold contemporary architecture, pool lighting, dramatic design, professional architectural photography', output: path.join(baseDir, 'tidal-wave', 'exterior.jpg') },
    { prompt: 'Ultra-modern living room, minimalist design, floor-to-ceiling glass, contemporary furniture, ocean views, professional interior photography', output: path.join(baseDir, 'tidal-wave', 'living.jpg') },
    { prompt: 'Geometric modern pool, clean lines, contemporary pool deck, lounge chairs, evening lighting, professional real estate photography', output: path.join(baseDir, 'tidal-wave', 'pool.jpg') },

    // Starfish Landing
    { prompt: 'Family beach house exterior, colorful coastal design, large porch, fenced yard, family-friendly, sunny day, professional real estate photography', output: path.join(baseDir, 'starfish', 'hero.jpg') },
    { prompt: 'Family pool with shallow end for kids, colorful pool toys, fenced backyard, beach house setting, professional real estate photography', output: path.join(baseDir, 'starfish', 'pool.jpg') },
    { prompt: 'Beach house game room, arcade games, pool table, colorful decor, fun family atmosphere, professional interior photography', output: path.join(baseDir, 'starfish', 'game.jpg') },
    { prompt: 'Kids bunk room in beach house, built-in bunks, coastal theme, playful design, nautical decor, professional interior photography', output: path.join(baseDir, 'starfish', 'bunk.jpg') },

    // Ocean Mist Retreat
    { prompt: 'Zen beach house exterior, peaceful design, meditation garden visible, natural landscaping, serene coastal setting, professional real estate photography', output: path.join(baseDir, 'ocean-mist', 'hero.jpg') },
    { prompt: 'Zen meditation garden at beach house, buddha statue, water feature, peaceful plants, tranquil atmosphere, professional real estate photography', output: path.join(baseDir, 'ocean-mist', 'garden.jpg') },
    { prompt: 'Spa bathroom in beach house, soaking tub, rain shower, natural materials, peaceful design, professional interior photography', output: path.join(baseDir, 'ocean-mist', 'spa.jpg') },
    { prompt: 'Outdoor yoga deck overlooking ocean, wooden deck, morning light, peaceful beach setting, professional real estate photography', output: path.join(baseDir, 'ocean-mist', 'yoga.jpg') },

    // Captain's Quarters
    { prompt: 'Nautical themed beach house, crows nest observation deck on roof, ship-inspired design, harbor views, coastal Texas, professional real estate photography', output: path.join(baseDir, 'captains', 'hero.jpg') },
    { prompt: 'Crows nest observation deck on beach house roof, panoramic views, nautical railings, ship-inspired design, professional real estate photography', output: path.join(baseDir, 'captains', 'crowsnest.jpg') },
    { prompt: 'Nautical themed living room, ship wheel decor, maritime artwork, comfortable coastal furniture, wood accents, professional interior photography', output: path.join(baseDir, 'captains', 'living.jpg') },
    { prompt: 'Harbor view from beach house, boats in marina, sunset, nautical setting, professional real estate photography', output: path.join(baseDir, 'captains', 'harbor.jpg') }
  ];

  console.log('🏖️  Generating Remaining Property Images');
  console.log(`Total: ${tasks.length} images\n`);

  let completed = 0;
  for (const task of tasks) {
    try {
      await generateImage(task.prompt, task.output);
      completed++;
      await sleep(2000);
    } catch (err) {
      console.error(`   ❌ ${err.message}`);
    }
  }

  console.log(`\n✅ Completed: ${completed}/${tasks.length}`);
}

main().catch(console.error);
