#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');

const API_KEY = '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';
const MODEL = 'bytedance-seed/seedream-4.5';
const API_URL = 'https://openrouter.ai/api/v1/chat/completions';

async function generateImage(prompt, outputPath) {
  console.log(`\n📸 Generating: ${path.basename(outputPath)}`);
  console.log(`   Prompt: ${prompt.substring(0, 80)}...`);

  const requestBody = JSON.stringify({
    model: MODEL,
    messages: [
      {
        role: 'user',
        content: prompt
      }
    ],
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
            console.error(`   ❌ API Error: ${response.error.message || JSON.stringify(response.error)}`);
            reject(new Error(response.error.message));
            return;
          }

          // Extract base64 image from response
          // Format: response.choices[0].message.images[0].image_url.url
          let imageData = null;

          if (response.choices?.[0]?.message?.images?.[0]?.image_url?.url) {
            const dataUrl = response.choices[0].message.images[0].image_url.url;
            // Extract base64 part from data URL
            const match = dataUrl.match(/base64,(.+)/);
            if (match) {
              imageData = match[1];
            }
          }

          if (!imageData) {
            console.log('   ⚠️  Could not extract image from response');
            reject(new Error('No image data found in response'));
            return;
          }

          // Ensure directory exists
          const dir = path.dirname(outputPath);
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
          }

          // Save image (as jpg since API returns jpeg)
          const buffer = Buffer.from(imageData, 'base64');
          // Change extension to .jpg since API returns jpeg
          const jpgPath = outputPath.replace('.webp', '.jpg');
          fs.writeFileSync(jpgPath, buffer);
          console.log(`   ✅ Saved: ${jpgPath}`);
          resolve(jpgPath);
        } catch (err) {
          console.error(`   ❌ Parse error: ${err.message}`);
          reject(err);
        }
      });
    });

    req.on('error', (err) => {
      console.error(`   ❌ Request error: ${err.message}`);
      reject(err);
    });

    req.write(requestBody);
    req.end();
  });
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const baseDir = path.join(__dirname, '..', 'public', 'images');

  // Image generation tasks
  const tasks = [
    // Hero image
    {
      prompt: 'Stunning aerial photograph of Port Aransas Texas beach coastline at golden hour, crystal clear turquoise Gulf of Mexico waters, white sand beach, luxury beachfront homes visible, palm trees, warm sunset lighting, professional real estate photography, ultra high resolution, no text or watermarks',
      output: path.join(baseDir, 'hero', 'beach-aerial.webp')
    },

    // Azure Shores Estate
    {
      prompt: 'Luxurious modern beachfront estate exterior, 3-story coastal contemporary architecture, infinity pool overlooking Gulf of Mexico, white stucco and glass, tropical landscaping, Port Aransas Texas style, golden hour lighting, professional architectural photography, no text',
      output: path.join(baseDir, 'properties', 'azure-shores', 'hero.webp')
    },
    {
      prompt: 'Stunning open concept living room in luxury beach house, floor-to-ceiling windows with ocean views, white coastal modern interior design, comfortable seating, high ceilings with wood beams, natural light flooding in, professional interior photography, no text',
      output: path.join(baseDir, 'properties', 'azure-shores', 'living.webp')
    },
    {
      prompt: 'Private infinity pool at luxury beach home overlooking the Gulf of Mexico, sunset view, modern pool deck with lounge chairs, tropical plants, warm evening lighting, professional real estate photography, no text',
      output: path.join(baseDir, 'properties', 'azure-shores', 'pool.webp')
    },
    {
      prompt: 'Elegant master bedroom suite in coastal luxury home, king bed with ocean views through large windows, neutral coastal decor, high-end finishes, sitting area, morning light, professional interior photography, no text',
      output: path.join(baseDir, 'properties', 'azure-shores', 'master.webp')
    },
    {
      prompt: 'Gourmet chef kitchen in luxury beach house, white shaker cabinets, marble countertops, large island with seating, stainless steel appliances, ocean view through window, coastal modern style, professional interior photography, no text',
      output: path.join(baseDir, 'properties', 'azure-shores', 'kitchen.webp')
    },

    // Sunset Cove Villa
    {
      prompt: 'Beautiful Mediterranean-style beach villa exterior, terracotta roof, arched windows, palm trees, private courtyard, coastal Texas architecture, warm sunset lighting, professional architectural photography, no text',
      output: path.join(baseDir, 'properties', 'sunset-cove', 'hero.webp')
    },
    {
      prompt: 'Spacious living room in Mediterranean beach villa, arched doorways, comfortable coastal furnishings, natural wood floors, warm lighting, ocean views through windows, professional interior photography, no text',
      output: path.join(baseDir, 'properties', 'sunset-cove', 'living.webp')
    },

    // Pearl Beach House
    {
      prompt: 'Charming coastal cottage beach house, elevated on stilts, wraparound porch, light blue exterior with white trim, tropical landscaping, Port Aransas beach setting, clear blue sky, professional real estate photography, no text',
      output: path.join(baseDir, 'properties', 'pearl-beach', 'hero.webp')
    },
    {
      prompt: 'Cozy beach cottage living room, whitewashed shiplap walls, comfortable coastal furniture, ocean views, natural textures, relaxed beach house style, bright and airy, professional interior photography, no text',
      output: path.join(baseDir, 'properties', 'pearl-beach', 'living.webp')
    },

    // Oceanview Condo
    {
      prompt: 'Modern high-rise beachfront condominium building exterior, balconies with ocean views, contemporary architecture, Port Aransas Texas beach setting, palm trees, clear blue sky, professional architectural photography, no text',
      output: path.join(baseDir, 'properties', 'oceanview-condo', 'hero.webp')
    },

    // Dunes Retreat
    {
      prompt: 'Contemporary beach home nestled in sand dunes, modern coastal architecture, large windows, natural wood and white exterior, native grasses, Gulf of Mexico in background, professional real estate photography, no text',
      output: path.join(baseDir, 'properties', 'dunes-retreat', 'hero.webp')
    },

    // Pelican Point
    {
      prompt: 'Elegant waterfront home on canal with private dock, coastal contemporary style, two-story with balcony, boat dock visible, palm trees, clear water, Port Aransas setting, professional real estate photography, no text',
      output: path.join(baseDir, 'properties', 'pelican-point', 'hero.webp')
    }
  ];

  console.log('🏖️  Port Aransas Real Estate Image Generator');
  console.log('============================================');
  console.log(`Generating ${tasks.length} images using Seedream 4.5...\n`);

  let completed = 0;
  let failed = 0;

  for (const task of tasks) {
    try {
      await generateImage(task.prompt, task.output);
      completed++;
      // Rate limiting - wait 2 seconds between requests
      await sleep(2000);
    } catch (err) {
      failed++;
      console.error(`   Failed: ${err.message}`);
    }
  }

  console.log('\n============================================');
  console.log(`✅ Completed: ${completed}/${tasks.length}`);
  if (failed > 0) console.log(`❌ Failed: ${failed}`);
}

main().catch(console.error);
