#!/usr/bin/env node

/**
 * Compress GLB model using gltf-transform
 * Reduces file size from ~35MB to <12MB using Draco compression and texture optimization
 */

import { NodeIO } from "@gltf-transform/core"
import { ALL_EXTENSIONS } from "@gltf-transform/extensions"
import {
  dedup,
  draco,
  prune,
  quantize,
  resample,
  textureCompress
} from "@gltf-transform/functions"
import draco3d from "draco3dgltf"
import sharp from "sharp"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const INPUT_PATH = path.resolve(__dirname, "../../animated-swimming-tropical-fish-school-loop/source/School of fish.glb")
const OUTPUT_PATH = path.resolve(__dirname, "../public/models/fish-school.glb")

async function compressModel() {
  console.log("Starting model compression...")
  console.log(`Input: ${INPUT_PATH}`)
  console.log(`Output: ${OUTPUT_PATH}`)

  // Initialize IO with extensions
  const io = new NodeIO()
    .registerExtensions(ALL_EXTENSIONS)
    .registerDependencies({
      "draco3d.decoder": await draco3d.createDecoderModule(),
      "draco3d.encoder": await draco3d.createEncoderModule(),
    })

  // Read the input model
  console.log("\nReading model...")
  const document = await io.read(INPUT_PATH)

  // Apply optimizations
  console.log("Applying optimizations...")

  // 1. Remove duplicate data
  await document.transform(dedup())
  console.log("  - Deduplication complete")

  // 2. Remove unused data
  await document.transform(prune())
  console.log("  - Pruning complete")

  // 3. Quantize vertex attributes (reduces precision but saves space)
  await document.transform(quantize({ quantizePosition: 14, quantizeNormal: 10 }))
  console.log("  - Quantization complete")

  // 4. Resample animations to reduce keyframes
  await document.transform(resample())
  console.log("  - Animation resampling complete")

  // 5. Apply Draco mesh compression
  await document.transform(draco({ method: "edgebreaker" }))
  console.log("  - Draco compression complete")

  // 6. Compress textures if sharp is available
  try {
    await document.transform(
      textureCompress({
        encoder: sharp,
        targetFormat: "webp",
        quality: 80,
      })
    )
    console.log("  - Texture compression complete")
  } catch (error) {
    console.log("  - Texture compression skipped (no textures or sharp error)")
  }

  // Write the optimized model
  console.log("\nWriting optimized model...")
  await io.write(OUTPUT_PATH, document)

  console.log("\nCompression complete!")
  console.log(`Output saved to: ${OUTPUT_PATH}`)
}

compressModel().catch((error) => {
  console.error("Compression failed:", error)
  process.exit(1)
})
