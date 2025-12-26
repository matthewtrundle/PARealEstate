const fs = require('fs');
const path = require('path');

// Using the provided API key directly
const OPENROUTER_API_KEY = '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';

// All placeholder images needed
const imageGroups = {
  team: {
    dir: 'team',
    images: [
      {
        name: 'sarah.jpg',
        prompt: 'Professional headshot portrait of a friendly female real estate agent in her 40s with warm smile, blonde hair styled professionally, wearing a navy blue blazer over white blouse, neutral gray studio background, high-end corporate photography, soft natural lighting, confident and approachable expression, professional Texas realtor'
      },
      {
        name: 'michael.jpg',
        prompt: 'Professional headshot portrait of a distinguished male real estate agent in his 50s with salt and pepper gray hair, warm genuine smile, wearing a crisp light blue dress shirt no tie open collar, neutral gray studio background, high-end corporate photography, soft natural lighting, trustworthy and experienced expression, Texas real estate professional'
      },
      {
        name: 'jennifer.jpg',
        prompt: 'Professional headshot portrait of a female real estate marketing specialist in her 30s with brunette hair, friendly professional smile showing confidence, wearing an elegant cream colored silk blouse, neutral gray studio background, high-end corporate photography, soft natural lighting, creative and approachable marketing professional'
      }
    ]
  },
  neighborhoods: {
    dir: 'neighborhoods',
    images: [
      {
        name: 'cinnamon-shore.jpg',
        prompt: 'Luxury coastal community Cinnamon Shore in Port Aransas Texas at golden hour, beautiful pastel colored beach houses with wrap-around porches and white railings, palm trees swaying, white picket fences, cobblestone walkways, pristine landscaping, blue sky with wispy clouds, upscale resort community aesthetic, architectural real estate photography'
      },
      {
        name: 'beach-access.jpg',
        prompt: 'Beautiful sandy beach access path in Port Aransas Texas, wooden boardwalk with rope railings leading through golden sea oats and natural dunes down to pristine white sand beach, turquoise Gulf of Mexico waters in background, bright sunny day with blue sky, coastal paradise vacation destination, professional real estate marketing photography'
      },
      {
        name: 'canal-front.jpg',
        prompt: 'Luxury waterfront canal homes in Port Aransas Texas, beautiful waterfront properties with private wooden boat docks, calm turquoise canal waters reflecting blue sky, palm trees and tropical landscaping, modern coastal architecture with large windows, fishing boats and yachts moored at docks, golden hour lighting, high-end real estate marketing photography'
      },
      {
        name: 'port-aransas.jpg',
        prompt: 'Charming downtown Port Aransas Texas main street scene, colorful local shops and seafood restaurants, palm trees lining the street with string lights, tourists walking and enjoying ice cream, beach town vibes, sunny day with blue sky, Gulf Coast vacation destination, vibrant and welcoming coastal community, street photography style'
      },
      {
        name: 'mustang-island.jpg',
        prompt: 'Stunning aerial view of Mustang Island Texas coastline from above, pristine white sandy beaches stretching into the distance, turquoise and blue Gulf of Mexico waters with gentle waves, beach houses and condos along the shore, barrier island paradise, bright sunny day, real estate marketing aerial drone photography'
      }
    ]
  },
  demo: {
    dir: 'demo',
    images: [
      {
        name: 'before-1.jpg',
        prompt: 'Interior real estate photography of dated 1990s beach house kitchen before renovation, outdated oak cabinets, old white appliances, worn laminate countertops, beige walls with scuff marks, fluorescent lighting, cluttered counters, needs updating but has potential, Texas coastal home renovation before photo, documentary style'
      },
      {
        name: 'after-1.jpg',
        prompt: 'Stunning modern coastal kitchen after complete renovation, bright white shaker cabinets with brushed gold hardware, white quartz countertops with subtle veining, stainless steel professional appliances, white subway tile backsplash, coastal blue accents, elegant pendant lighting over large island with barstools, natural light flooding in, luxury beach house interior design photography'
      },
      {
        name: 'before-2.jpg',
        prompt: 'Outdated beach condo living room before renovation needing work, old popcorn ceiling, dated floral furniture, worn beige carpet, small windows with heavy drapes blocking light, 1980s brass fixtures, cramped feeling, needs complete refresh, real estate before photo, documentary style'
      },
      {
        name: 'after-2.jpg',
        prompt: 'Beautiful renovated coastal living room transformation, open airy floor plan with vaulted ceiling and exposed white beams, floor to ceiling sliding glass doors with panoramic ocean view, modern coastal furniture in whites creams and ocean blues, white shiplap accent wall, ceiling fan with light wood blades, natural light flooding the space, luxury beach condo interior design photography'
      }
    ]
  },
  about: {
    dir: 'about',
    images: [
      {
        name: 'team-hero.jpg',
        prompt: 'Professional real estate team group photo of 4 agents standing together on a wooden beach boardwalk in Port Aransas Texas at sunset, casual professional coastal attire, warm golden hour lighting, genuine team camaraderie and smiles, coastal luxury real estate agents, confident and friendly poses, Gulf of Mexico and beach in background, professional marketing photography'
      }
    ]
  }
};

async function generateImage(imageConfig, outputDir) {
  console.log(`Generating: ${imageConfig.name}...`);
  console.log(`  Prompt: "${imageConfig.prompt.substring(0, 80)}..."`);

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

    // Check for image in the images array (OpenRouter format)
    const images = data.choices[0]?.message?.images;
    if (images && images.length > 0 && images[0].image_url?.url) {
      const imageUrl = images[0].image_url.url;
      if (imageUrl.includes('data:image')) {
        const matches = imageUrl.match(/data:image\/[^;]+;base64,(.+)/);
        if (matches && matches[1]) {
          const base64Data = matches[1];
          const buffer = Buffer.from(base64Data, 'base64');
          const outputPath = path.join(outputDir, imageConfig.name);
          fs.writeFileSync(outputPath, buffer);
          console.log(`  ✓ Saved: ${outputPath}`);
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
        const outputPath = path.join(outputDir, imageConfig.name);
        fs.writeFileSync(outputPath, buffer);
        console.log(`  ✓ Saved: ${outputPath}`);
        return true;
      }
    }

    console.log(`  ✗ No image returned for ${imageConfig.name}`);
    console.log(`  Response: ${JSON.stringify(data).substring(0, 200)}`);
    return false;
  } catch (error) {
    console.error(`  ✗ Error: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('============================================');
  console.log('Port Aransas Estates - Placeholder Image Generator');
  console.log('Model: bytedance-seed/seedream-4.5');
  console.log('============================================\n');

  const baseDir = path.join(__dirname, '..', 'public', 'images');

  let totalSuccess = 0;
  let totalFailed = 0;

  for (const [groupName, group] of Object.entries(imageGroups)) {
    console.log(`\n[${ groupName.toUpperCase() }]`);
    console.log('-'.repeat(44));

    const outputDir = path.join(baseDir, group.dir);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
      console.log(`Created directory: ${outputDir}`);
    }

    for (const image of group.images) {
      const result = await generateImage(image, outputDir);
      if (result) {
        totalSuccess++;
      } else {
        totalFailed++;
      }
      // Wait between requests to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
  }

  console.log('\n============================================');
  console.log(`COMPLETE: ${totalSuccess} successful, ${totalFailed} failed`);
  console.log(`Estimated cost: ~$${(totalSuccess * 0.04).toFixed(2)}`);
  console.log('============================================');
}

main().catch(console.error);
