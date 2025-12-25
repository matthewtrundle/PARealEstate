"use client"

import { Suspense, useRef, useEffect, useState, useCallback } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment, Preload } from "@react-three/drei"

interface CanvasWrapperProps {
  children: React.ReactNode
  className?: string
  cameraPosition?: [number, number, number]
  enableControls?: boolean
}

function LoadingFallback() {
  return (
    <mesh>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshStandardMaterial color="#c9a962" wireframe />
    </mesh>
  )
}

export function CanvasWrapper({
  children,
  className = "",
  cameraPosition = [0, 0, 10],
  enableControls = false,
}: CanvasWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [contextLost, setContextLost] = useState(false)
  const [key, setKey] = useState(0)

  // Handle WebGL context loss and restoration
  const handleContextLost = useCallback((event: Event) => {
    event.preventDefault()
    console.warn("WebGL context lost - will attempt recovery")
    setContextLost(true)
  }, [])

  const handleContextRestored = useCallback(() => {
    console.log("WebGL context restored")
    setContextLost(false)
    // Force re-render of Canvas by changing key
    setKey(prev => prev + 1)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Listen for context loss on the canvas element
    const canvas = container.querySelector("canvas")
    if (canvas) {
      canvas.addEventListener("webglcontextlost", handleContextLost)
      canvas.addEventListener("webglcontextrestored", handleContextRestored)

      return () => {
        canvas.removeEventListener("webglcontextlost", handleContextLost)
        canvas.removeEventListener("webglcontextrestored", handleContextRestored)
      }
    }
  }, [handleContextLost, handleContextRestored, key])

  // Auto-retry after context loss
  useEffect(() => {
    if (contextLost) {
      const timeout = setTimeout(() => {
        console.log("Attempting WebGL recovery...")
        setContextLost(false)
        setKey(prev => prev + 1)
      }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [contextLost])

  // If context is lost, show nothing (background will show through)
  if (contextLost) {
    return <div ref={containerRef} className={`w-full h-full ${className}`} />
  }

  return (
    <div ref={containerRef} className={`w-full h-full ${className}`}>
      <Canvas
        key={key}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: false,
        }}
        dpr={[1, 1.5]} // Limit DPR to reduce GPU memory pressure
        style={{ background: "transparent" }}
        onCreated={({ gl }) => {
          // Enable context loss handling
          gl.domElement.addEventListener("webglcontextlost", handleContextLost)
          gl.domElement.addEventListener("webglcontextrestored", handleContextRestored)
        }}
      >
        <PerspectiveCamera
          makeDefault
          position={cameraPosition}
          fov={50}
          near={0.1}
          far={1000}
        />

        {enableControls && (
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
          />
        )}

        <Suspense fallback={<LoadingFallback />}>
          {children}
        </Suspense>

        {/* Environment for realistic reflections */}
        <Environment preset="sunset" />

        <Preload all />
      </Canvas>
    </div>
  )
}
