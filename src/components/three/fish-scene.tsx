"use client"

import { useRef, useEffect, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF, Center } from "@react-three/drei"
import * as THREE from "three"

interface FishSceneProps {
  position?: [number, number, number]
  scale?: number
  animationSpeed?: number
  mousePos?: { x: number; y: number }
  isHovering?: boolean
}

export function FishScene({
  position = [0, 0, 0],
  scale = 1,
  animationSpeed = 0.8,
  mousePos = { x: 0, y: 0 },
  isHovering = false,
}: FishSceneProps) {
  const groupRef = useRef<THREE.Group>(null!)
  const mixerRef = useRef<THREE.AnimationMixer | null>(null)

  // Smooth mouse following with lerp
  const smoothMouseRef = useRef({ x: 0, y: 0 })

  // Scatter effect state
  const [isScattered, setIsScattered] = useState(false)
  const scatterTimeRef = useRef(0)

  // Load model with animations
  const { scene, animations } = useGLTF("/models/fish-school-converted.glb")

  // Process materials and setup animation mixer
  useEffect(() => {
    // Process materials
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh && child.material) {
        const mat = child.material as THREE.MeshStandardMaterial
        mat.side = THREE.DoubleSide
        if (mat.map) {
          mat.map.colorSpace = THREE.SRGBColorSpace
        }
        mat.needsUpdate = true
      }
    })

    // Create mixer directly on the loaded scene
    if (animations.length > 0) {
      console.log("Creating mixer for animations:", animations.map(a => a.name))

      const mixer = new THREE.AnimationMixer(scene)
      mixerRef.current = mixer

      // Play all animation clips
      animations.forEach((clip) => {
        const action = mixer.clipAction(clip)
        action.setEffectiveTimeScale(animationSpeed)
        action.setLoop(THREE.LoopRepeat, Infinity)
        action.play()
        console.log(`Started animation: ${clip.name}`)
      })
    } else {
      console.log("No animations found in GLB")
    }

    return () => {
      if (mixerRef.current) {
        mixerRef.current.stopAllAction()
      }
    }
  }, [scene, animations, animationSpeed])

  // Update mixer every frame + group movement with mouse interactivity
  useFrame((state, delta) => {
    // CRITICAL: Update animation mixer
    if (mixerRef.current) {
      mixerRef.current.update(delta)
    }

    if (groupRef.current) {
      const t = state.clock.elapsedTime

      // Smooth lerp towards mouse position
      const lerpSpeed = isHovering ? 0.03 : 0.02
      smoothMouseRef.current.x += (mousePos.x - smoothMouseRef.current.x) * lerpSpeed
      smoothMouseRef.current.y += (mousePos.y - smoothMouseRef.current.y) * lerpSpeed

      // Handle scatter effect (when cursor gets too close)
      const mouseDistance = Math.sqrt(smoothMouseRef.current.x ** 2 + smoothMouseRef.current.y ** 2)
      if (isHovering && mouseDistance > 0.6 && !isScattered) {
        setIsScattered(true)
        scatterTimeRef.current = t
      }
      if (isScattered && t - scatterTimeRef.current > 2) {
        setIsScattered(false)
      }

      // Base organic swimming movement
      const swimX = Math.sin(t * 0.15) * 3 + Math.cos(t * 0.08) * 1.5
      const swimY = Math.sin(t * 0.2) * 1.5 + Math.cos(t * 0.12) * 0.8
      const swimZ = Math.sin(t * 0.1) * 2

      // Mouse influence - fish swim away from cursor (negative influence)
      const mouseInfluenceX = -smoothMouseRef.current.x * 8
      const mouseInfluenceY = -smoothMouseRef.current.y * 5

      // Scatter effect - fish dart away quickly
      let scatterX = 0
      let scatterY = 0
      let scatterZ = 0
      if (isScattered) {
        const scatterProgress = (t - scatterTimeRef.current) * 2
        const scatterDecay = Math.exp(-scatterProgress * 0.8)
        scatterX = Math.sin(scatterProgress * 5) * 6 * scatterDecay
        scatterY = Math.cos(scatterProgress * 4) * 4 * scatterDecay
        scatterZ = Math.sin(scatterProgress * 3) * 3 * scatterDecay
      }

      // Combine all movement
      groupRef.current.position.x = position[0] + swimX + mouseInfluenceX + scatterX
      groupRef.current.position.y = position[1] + swimY + mouseInfluenceY + scatterY
      groupRef.current.position.z = position[2] + swimZ + scatterZ

      // Rotation - look in swimming direction with mouse influence
      const targetRotY = Math.sin(t * 0.15) * 0.2 + smoothMouseRef.current.x * 0.3
      const targetRotX = Math.sin(t * 0.12) * 0.08 - smoothMouseRef.current.y * 0.15

      groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * 0.05
      groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.05
    }
  })

  return (
    <group ref={groupRef} position={position}>
      <Center>
        <primitive object={scene} scale={scale} />
      </Center>
    </group>
  )
}

useGLTF.preload("/models/fish-school-converted.glb")
