"use client"

import { useRef, Suspense, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, OrbitControls, Environment, Float } from "@react-three/drei"
import * as THREE from "three"

interface WaveBallModelProps {
  scale?: number
}

function WaveBallModel({ scale = 1 }: WaveBallModelProps) {
  const groupRef = useRef<THREE.Group>(null!)
  const { scene } = useGLTF("/sea_waves_in_the_ball.glb")

  // Clone the scene to avoid sharing issues
  const clonedScene = scene.clone()

  // Gentle rotation animation
  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.elapsedTime
      groupRef.current.rotation.y = t * 0.1
      groupRef.current.rotation.x = Math.sin(t * 0.08) * 0.05
    }
  })

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.2}
      floatIntensity={0.3}
    >
      <group ref={groupRef}>
        <primitive object={clonedScene} scale={scale} />
      </group>
    </Float>
  )
}

interface WaveBallSceneProps {
  className?: string
}

// Loading indicator component
function LoadingBall() {
  return (
    <mesh>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial
        color="#0a4d8c"
        transparent
        opacity={0.3}
        wireframe
      />
    </mesh>
  )
}

export function WaveBallScene({ className = "" }: WaveBallSceneProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if model is cached/loaded
    const timer = setTimeout(() => setIsLoading(false), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
      >
        <Suspense fallback={<LoadingBall />}>
          {/* Lighting setup for better visibility */}
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
          <directionalLight position={[-5, 3, -5]} intensity={0.5} />
          <pointLight position={[0, 0, 3]} intensity={0.5} color="#c9a962" />

          <WaveBallModel scale={1.8} />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.3}
            enableDamping
            dampingFactor={0.05}
          />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  )
}

useGLTF.preload("/sea_waves_in_the_ball.glb")
