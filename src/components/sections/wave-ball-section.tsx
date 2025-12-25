"use client"

import { useState, useEffect, lazy, Suspense, Component, type ReactNode, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Container, Section } from "@/components/layout"
import { CounterUp } from "@/components/motion"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

// Premium easing
const easeOutExpo = [0.16, 1, 0.3, 1] as const

// Lazy load the Fish Scene components
const CanvasWrapper = lazy(() =>
  import("@/components/three/canvas-wrapper").then((mod) => ({ default: mod.CanvasWrapper }))
)
const FishScene = lazy(() =>
  import("@/components/three/fish-scene").then((mod) => ({ default: mod.FishScene }))
)
const OceanAtmosphere = lazy(() =>
  import("@/components/three/ocean-atmosphere").then((mod) => ({ default: mod.OceanAtmosphere }))
)
const OceanParticles = lazy(() =>
  import("@/components/three/ocean-atmosphere").then((mod) => ({ default: mod.OceanParticles }))
)
const SceneLights = lazy(() =>
  import("@/components/three/scene-lights").then((mod) => ({ default: mod.SceneLights }))
)

// Error boundary for 3D
interface ErrorBoundaryProps {
  children: ReactNode
  fallback: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ThreeErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

// Fish Tank fallback
function FishTankFallback() {
  return (
    <div className="w-full h-full rounded-3xl bg-gradient-to-b from-primary-800 to-primary-950 flex items-center justify-center overflow-hidden relative">
      {/* Animated bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-white/20 animate-pulse"
            style={{
              left: `${15 + i * 10}%`,
              bottom: `${-10}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: "3s",
            }}
          />
        ))}
      </div>
      <div className="text-white/60 text-sm">Loading aquarium...</div>
    </div>
  )
}

export function WaveBallSection() {
  const [shouldRender3D, setShouldRender3D] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    // Only render 3D on desktop with WebGL support
    const checkWebGL = () => {
      try {
        const canvas = document.createElement("canvas")
        const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
        return !!gl
      } catch {
        return false
      }
    }

    const isDesktop = window.innerWidth >= 768
    const hasWebGL = checkWebGL()

    if (isDesktop && hasWebGL) {
      setShouldRender3D(true)
    }
  }, [])

  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-white py-24 md:py-32">
      <Container>
        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Fish Tank Scene with premium entrance */}
          <motion.div
            className="order-2 lg:order-1 relative"
            initial={prefersReducedMotion ? {} : { opacity: 0, x: -50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.2 }}
          >
            <div className="aspect-[4/3] max-w-xl mx-auto relative">
              {/* Tank Frame with enhanced glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 p-3 shadow-2xl"
                whileHover={{
                  boxShadow: "0 25px 50px rgba(0,0,0,0.25), 0 0 60px rgba(10,77,140,0.2)",
                }}
                transition={{ duration: 0.4 }}
              >
                {/* Inner tank */}
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  {/* Tank glass effect overlay - enhanced */}
                  <div className="absolute inset-0 z-10 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent" />
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                    <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-white/20 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-primary-950/60 to-transparent" />
                  </div>

                  {shouldRender3D ? (
                    <ThreeErrorBoundary fallback={<FishTankFallback />}>
                      <Suspense fallback={<FishTankFallback />}>
                        <CanvasWrapper cameraPosition={[0, 0, 15]}>
                          {/* Underwater atmosphere */}
                          <OceanAtmosphere color="#0a4d8c" density={0.015} />

                          {/* Lighting */}
                          <SceneLights />

                          {/* Floating particles for underwater effect */}
                          <OceanParticles count={50} />

                          {/* Fish swimming */}
                          <FishScene
                            position={[0, 0, 0]}
                            scale={0.8}
                            animationSpeed={0.7}
                          />
                        </CanvasWrapper>
                      </Suspense>
                    </ThreeErrorBoundary>
                  ) : (
                    <FishTankFallback />
                  )}
                </div>
              </motion.div>

              {/* Tank stand/base */}
              <motion.div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[90%] h-4 bg-gradient-to-b from-slate-800 to-slate-900 rounded-b-xl shadow-lg"
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Content - slides in from right */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.3 }}
            >
              <motion.div
                className="inline-flex items-center gap-3 mb-6"
                initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.4 }}
              >
                <motion.div
                  className="h-px bg-gradient-to-r from-transparent to-primary-400"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: 48 } : { width: 0 }}
                  transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.5 }}
                />
                <span className="text-primary-600 text-sm tracking-[0.2em] uppercase font-medium">
                  Coastal Living
                </span>
              </motion.div>

              <motion.h2
                className="text-fluid-4xl font-display font-normal text-neutral-900 tracking-tight mb-6"
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.5 }}
              >
                Where the Gulf<br />
                Meets Home
              </motion.h2>

              <motion.p
                className="text-lg text-neutral-600 leading-relaxed mb-6"
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.6 }}
              >
                There's something magical about waking up to the sound of waves.
                Port Aransas isn't just a location — it's a lifestyle. Whether
                you're drawn by the world-class fishing, the laid-back beach
                culture, or simply the need to breathe salt air, we're here to
                help you find your place in paradise.
              </motion.p>

              {/* Stats with glass morphism and pop animation */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <motion.div
                  className="text-center p-5 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100/50 backdrop-blur-sm border border-primary-100/50 shadow-lg shadow-primary-100/20"
                  initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8, y: 20 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.7 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(29,78,116,0.15)",
                  }}
                >
                  <div className="text-2xl font-display text-primary-900 mb-1">
                    <CounterUp end={18} duration={2} suffix=" mi" />
                  </div>
                  <div className="text-sm text-primary-700">of Gulf coastline</div>
                </motion.div>
                <motion.div
                  className="text-center p-5 rounded-xl bg-gradient-to-br from-accent-50 to-accent-100/50 backdrop-blur-sm border border-accent-100/50 shadow-lg shadow-accent-100/20"
                  initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8, y: 20 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: easeOutExpo, delay: 0.8 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(201,169,98,0.15)",
                  }}
                >
                  <div className="text-2xl font-display text-primary-900 mb-1">
                    <CounterUp end={300} duration={2} suffix="+" />
                  </div>
                  <div className="text-sm text-primary-700">days of sunshine</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
