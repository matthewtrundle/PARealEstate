"use client"

import { useRef, useMemo } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"

interface OceanAtmosphereProps {
  color?: string
  density?: number
}

export function OceanAtmosphere({
  color = "#0a4d8c",
  density = 0.015,
}: OceanAtmosphereProps) {
  const { scene } = useThree()

  // Set fog for depth
  scene.fog = new THREE.FogExp2(color, density)

  return null
}

// Dynamic floating particles for underwater effect
export function OceanParticles({ count = 100 }: { count?: number }) {
  const particlesRef = useRef<THREE.Points>(null)

  // Create particle data with more properties for organic movement
  const particleData = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const velocities: { x: number; y: number; z: number; phase: number }[] = []
    const sizes = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      // Spread particles in a larger volume
      positions[i * 3] = (Math.random() - 0.5) * 50 // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30 // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50 // z

      // Each particle has its own movement pattern
      velocities.push({
        x: (Math.random() - 0.5) * 0.01,
        y: 0.005 + Math.random() * 0.015, // Rising
        z: (Math.random() - 0.5) * 0.01,
        phase: Math.random() * Math.PI * 2, // Random phase for variety
      })

      // Varied sizes for depth perception
      sizes[i] = 0.08 + Math.random() * 0.15
    }

    return { positions, velocities, sizes }
  }, [count])

  useFrame((state) => {
    if (!particlesRef.current) return

    const t = state.clock.elapsedTime
    const posArray = particlesRef.current.geometry.attributes.position.array as Float32Array

    for (let i = 0; i < count; i++) {
      const vel = particleData.velocities[i]

      // Organic floating motion with sine waves
      posArray[i * 3] += vel.x + Math.sin(t * 0.5 + vel.phase) * 0.003
      posArray[i * 3 + 1] += vel.y + Math.sin(t * 0.3 + vel.phase) * 0.002
      posArray[i * 3 + 2] += vel.z + Math.cos(t * 0.4 + vel.phase) * 0.003

      // Reset if out of bounds
      if (posArray[i * 3 + 1] > 15) {
        posArray[i * 3 + 1] = -15
        posArray[i * 3] = (Math.random() - 0.5) * 50
        posArray[i * 3 + 2] = (Math.random() - 0.5) * 50
      }
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true

    // Subtle rotation of entire particle system
    particlesRef.current.rotation.y = Math.sin(t * 0.05) * 0.1
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particleData.positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        color="#fffef0"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Dramatic light rays from above (caustics simulation) - legacy
export function LightRays() {
  const raysRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!raysRef.current) return

    const t = state.clock.elapsedTime

    // Animate light rays - opacity and subtle movement
    raysRef.current.children.forEach((child, i) => {
      if (child instanceof THREE.Mesh) {
        const material = child.material as THREE.MeshBasicMaterial
        // Breathing animation with different phases
        material.opacity = 0.06 + Math.sin(t * 0.4 + i * 0.7) * 0.04

        // Subtle sway
        child.rotation.z = (i - 4) * 0.08 + Math.sin(t * 0.2 + i * 0.3) * 0.02
      }
    })

    // Whole group slowly rotates
    raysRef.current.rotation.y = Math.sin(t * 0.1) * 0.05
  })

  return (
    <group ref={raysRef} position={[0, 0, -10]}>
      {Array.from({ length: 9 }).map((_, i) => (
        <mesh
          key={i}
          position={[(i - 4) * 5, 20, 0]}
          rotation={[0.2, 0, (i - 4) * 0.08]}
        >
          <planeGeometry args={[1.2, 60]} />
          <meshBasicMaterial
            color="#fffbe6"
            transparent
            opacity={0.06}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  )
}

// Organic sun rays from top-right corner - natural light beams
export function SunRays() {
  const raysRef = useRef<THREE.Group>(null)

  // Create ray data with organic variations
  const rayData = useMemo(() => {
    const rays = []
    const rayCount = 12

    for (let i = 0; i < rayCount; i++) {
      // Spread rays in a fan pattern from top-right
      const baseAngle = -0.4 - (i / rayCount) * 0.8 // -0.4 to -1.2 radians
      const angleVariation = (Math.random() - 0.5) * 0.15

      rays.push({
        angle: baseAngle + angleVariation,
        length: 45 + Math.random() * 25, // Variable lengths
        width: 0.4 + Math.random() * 1.2, // Variable widths - some thick, some thin
        opacity: 0.03 + Math.random() * 0.05, // Variable opacity
        speed: 0.2 + Math.random() * 0.3, // Variable animation speed
        phase: Math.random() * Math.PI * 2, // Random phase
        xOffset: Math.random() * 8, // Spread horizontally
        yOffset: Math.random() * 5, // Spread vertically
      })
    }
    return rays
  }, [])

  useFrame((state) => {
    if (!raysRef.current) return

    const t = state.clock.elapsedTime

    raysRef.current.children.forEach((child, i) => {
      if (child instanceof THREE.Mesh && rayData[i]) {
        const ray = rayData[i]
        const material = child.material as THREE.MeshBasicMaterial

        // Organic pulsing opacity - each ray breathes independently
        const pulse = Math.sin(t * ray.speed + ray.phase)
        const secondaryPulse = Math.sin(t * ray.speed * 0.7 + ray.phase * 1.3) * 0.5
        material.opacity = ray.opacity + pulse * 0.02 + secondaryPulse * 0.01

        // Very subtle sway
        child.rotation.z = ray.angle + Math.sin(t * 0.15 + ray.phase) * 0.02
      }
    })

    // Entire group has very slow drift
    raysRef.current.rotation.z = Math.sin(t * 0.08) * 0.01
  })

  return (
    <group
      ref={raysRef}
      position={[25, 18, -15]} // Top right origin
      rotation={[0, 0, -0.3]} // Angled down-left
    >
      {rayData.map((ray, i) => (
        <mesh
          key={i}
          position={[ray.xOffset, ray.yOffset, i * -0.5]}
          rotation={[0, 0, ray.angle]}
        >
          {/* Use tapered geometry for more natural ray shape */}
          <planeGeometry args={[ray.width, ray.length]} />
          <meshBasicMaterial
            color="#fff8e0"
            transparent
            opacity={ray.opacity}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      ))}

      {/* Add a subtle glow source at the origin */}
      <mesh position={[0, 0, -8]}>
        <circleGeometry args={[15, 32]} />
        <meshBasicMaterial
          color="#fffbe6"
          transparent
          opacity={0.04}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  )
}
