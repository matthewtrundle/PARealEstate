"use client"

export function SceneLights() {
  return (
    <>
      {/* Ambient light for base illumination */}
      <ambientLight intensity={0.4} color="#87CEEB" />

      {/* Main directional light (sun) */}
      <directionalLight
        position={[10, 20, 10]}
        intensity={1.2}
        color="#ffffff"
        castShadow
      />

      {/* Fill light from below (water caustics effect) */}
      <pointLight
        position={[0, -10, 0]}
        intensity={0.3}
        color="#00BFFF"
      />

      {/* Rim light from behind */}
      <directionalLight
        position={[-5, 5, -10]}
        intensity={0.5}
        color="#ADD8E6"
      />
    </>
  )
}
