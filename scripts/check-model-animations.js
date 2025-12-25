#!/usr/bin/env node
// Check what animations are in the GLB model

const fs = require('fs');
const path = require('path');

async function checkAnimations() {
  try {
    // Use Three.js GLTFLoader to check animations
    const THREE = require('three');
    const { GLTFLoader } = require('three/examples/jsm/loaders/GLTFLoader.js');

    const modelPath = path.join(__dirname, '..', 'public', 'models', 'fish-school.glb');
    const modelBuffer = fs.readFileSync(modelPath);
    const arrayBuffer = modelBuffer.buffer.slice(modelBuffer.byteOffset, modelBuffer.byteOffset + modelBuffer.byteLength);

    const loader = new GLTFLoader();

    loader.parse(arrayBuffer, '', (gltf) => {
      console.log('\n=== GLB Model Info ===');
      console.log('Animations found:', gltf.animations.length);

      gltf.animations.forEach((anim, i) => {
        console.log(`\nAnimation ${i + 1}:`);
        console.log('  Name:', anim.name || '(unnamed)');
        console.log('  Duration:', anim.duration.toFixed(2), 'seconds');
        console.log('  Tracks:', anim.tracks.length);
      });

      console.log('\nScene children:', gltf.scene.children.length);
    }, (error) => {
      console.error('Error parsing GLB:', error);
    });

  } catch (err) {
    console.error('Error:', err.message);
  }
}

checkAnimations();
