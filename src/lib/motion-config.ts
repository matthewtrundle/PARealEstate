/**
 * Motion timing configuration
 * Consistent "premium" motion language across the site
 */

// Easing curves (easeOutExpo for premium feel)
export const EASING = {
  // Primary easing for reveals - slow, expensive feel
  reveal: [0.16, 1, 0.3, 1] as [number, number, number, number],
  // Slightly faster for interactive elements
  interactive: [0.22, 1, 0.36, 1] as [number, number, number, number],
  // Smooth for continuous motion
  smooth: [0.4, 0, 0.2, 1] as [number, number, number, number],
}

// Duration in seconds
export const DURATION = {
  // Slow reveals for calm, editorial feel
  reveal: 1,
  // Slower for page transitions
  page: 0.5,
  // Counter animation
  counter: 2,
  // Stagger delay between items - subtle, almost imperceptible
  stagger: 0.05,
}

// Transform values
export const TRANSFORM = {
  // Reveal: start state - subtle, not dramatic
  reveal: {
    y: 20,
    opacity: 0,
    blur: 4,
  },
  // Parallax range (pixels) - restrained
  parallax: {
    min: -16,
    max: 16,
  },
}

// CSS custom properties for motion (can be used in Tailwind)
export const motionVars = {
  "--motion-duration-reveal": `${DURATION.reveal}s`,
  "--motion-duration-page": `${DURATION.page}s`,
  "--motion-easing-reveal": `cubic-bezier(${EASING.reveal.join(",")})`,
  "--motion-easing-interactive": `cubic-bezier(${EASING.interactive.join(",")})`,
}
