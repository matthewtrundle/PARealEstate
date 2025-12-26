const fs = require('fs');
const path = require('path');
require('dotenv').config();

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

const images = [
  {
    name: 'beachfront-homes.jpg',
    prompt: 'Luxury beachfront homes on the Texas Gulf Coast, Port Aransas, aerial view showing white sand beach, turquoise water, upscale beach houses with pools, sunny day, professional real estate photography style, 4k quality'
  },
  {
    name: 'condos.jpg',
    prompt: 'Modern oceanfront condominium building on Mustang Island Texas, Gulf of Mexico views, resort-style pool area, palm trees, blue sky, professional real estate photography, luxury coastal living'
  },
  {
    name: 'investment.jpg',
    prompt: 'Vacation rental property in Port Aransas Texas, charming beach cottage with rental income potential, guests enjoying outdoor deck, coastal landscaping, investment property, professional real estate photography'
  },
  {
    name: 'waterfront.jpg',
    prompt: 'Canal-front home with private boat dock in Port Aransas Texas, waterway views, fishing boat tied to dock, palm trees, Texas coastal architecture, golden hour lighting, real estate photography'
  },
  {
    name: 'new-construction.jpg',
    prompt: 'New construction modern beach house in Texas Gulf Coast, contemporary coastal architecture, large windows, elevated design, construction complete, landscaped yard, professional real estate photography'
  },
  {
    name: 'luxury.jpg',
    prompt: 'Ultra-luxury beachfront estate in Port Aransas Texas, infinity pool overlooking Gulf of Mexico, modern architecture, floor-to-ceiling windows, palm trees, sunset, premium real estate photography'
  },
  {
    name: 'gulf-coast.jpg',
    prompt: 'Panoramic view of Texas Gulf Coast real estate, Port Aransas and Mustang Island from above, beach communities, blue ocean, white sand beaches, coastal development, aerial drone photography'
  },
  {
    name: 'blog-bg.jpg',
    prompt: 'Port Aransas Texas beach scene, morning light on the Gulf of Mexico, gentle waves, sea oats in foreground, peaceful coastal atmosphere, soft focus background suitable for text overlay'
  },
  {
    name: 'testimonials-bg.jpg',
    prompt: 'Happy family enjoying Port Aransas beach, Texas Gulf Coast vacation, children playing in sand, parents relaxing, beach house in background, warm summer day, lifestyle photography'
  },
  {
    name: 'og-default.jpg',
    prompt: 'Port Aransas Estates real estate hero image, luxury beach homes on Texas Gulf Coast, aerial view of Mustang Island, turquoise water, white sand beach, premium coastal properties, professional marketing photography, 1200x630 aspect ratio'
  }
];

async function generateImage(imageConfig) {
  console.log(`Generating: ${imageConfig.name}...`);

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://portaransasestates.com',
        'X-Title': 'Port Aransas Estates'
      },
      body: JSON.stringify({
        model: 'bytedance-seed/seedream-4.5',
        messages: [
          {
            role: 'user',
            content: imageConfig.prompt
          }
        ],
        modalities: ['image', 'text']
      })
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`API error: ${response.status} - ${error}`);
    }

    const data = await response.json();

    // Check for image in the images array (new format)
    const images = data.choices[0]?.message?.images;
    if (images && images.length > 0 && images[0].image_url?.url) {
      const imageUrl = images[0].image_url.url;
      if (imageUrl.includes('data:image')) {
        const matches = imageUrl.match(/data:image\/[^;]+;base64,(.+)/);
        if (matches && matches[1]) {
          const base64Data = matches[1];
          const buffer = Buffer.from(base64Data, 'base64');
          const outputPath = path.join(__dirname, '../public/images/hero', imageConfig.name);
          fs.writeFileSync(outputPath, buffer);
          console.log(`  Saved: ${imageConfig.name}`);
          return true;
        }
      }
    }

    // Fallback: check content for base64 image
    const content = data.choices[0]?.message?.content;
    if (content && content.includes('data:image')) {
      const matches = content.match(/data:image\/[^;]+;base64,([^"]+)/);
      if (matches && matches[1]) {
        const base64Data = matches[1];
        const buffer = Buffer.from(base64Data, 'base64');
        const outputPath = path.join(__dirname, '../public/images/hero', imageConfig.name);
        fs.writeFileSync(outputPath, buffer);
        console.log(`  Saved: ${imageConfig.name}`);
        return true;
      }
    }

    console.log(`No image found for ${imageConfig.name}`);
    return false;
  } catch (error) {
    console.error(`  Error generating ${imageConfig.name}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('\nGenerating hero images with Seedream 4.5...\n');

  const heroDir = path.join(__dirname, '../public/images/hero');
  if (!fs.existsSync(heroDir)) {
    fs.mkdirSync(heroDir, { recursive: true });
  }

  const imagesDir = path.join(__dirname, '../public/images');

  let success = 0;
  let failed = 0;

  for (const img of images) {
    const result = await generateImage(img);
    if (result) {
      success++;
      if (img.name === 'og-default.jpg') {
        const srcPath = path.join(heroDir, img.name);
        const destPath = path.join(imagesDir, img.name);
        fs.copyFileSync(srcPath, destPath);
        console.log(`  Copied og-default.jpg to images root`);
      }
    } else {
      failed++;
    }
    // Wait 2 seconds between requests to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  console.log(`\nResults: ${success} successful, ${failed} failed`);
  console.log(`Estimated cost: $${(success * 0.04).toFixed(2)}`);
}

main().catch(console.error);
