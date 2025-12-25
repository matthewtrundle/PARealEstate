"use client"

import { Container, Section } from "@/components/layout"
import { CounterUp, Reveal } from "@/components/motion"
import { cn } from "@/lib/utils"

const stats = [
  {
    value: 250,
    suffix: "+",
    label: "Properties Sold",
    description: "Beach homes & condos",
  },
  {
    value: 15,
    suffix: "+",
    label: "Years Experience",
    description: "Port Aransas experts",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "5-star reviews",
  },
  {
    value: 45,
    prefix: "$",
    suffix: "M",
    label: "Sales Volume",
    description: "Last 12 months",
  },
]

interface StatsSectionProps {
  variant?: "light" | "dark" | "gradient"
  className?: string
}

export function StatsSection({ variant = "gradient", className }: StatsSectionProps) {
  return (
    <Section
      className={cn(
        "relative overflow-hidden",
        variant === "dark" && "bg-neutral-900",
        variant === "light" && "bg-white",
        variant === "gradient" && "bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900",
        className
      )}
    >
      {/* Background Pattern */}
      {variant === "gradient" && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }} />
        </div>
      )}

      <Container className="relative">
        <Reveal className="text-center mb-12 md:mb-16">
          <span className={cn(
            "text-sm tracking-wider uppercase font-medium block mb-4",
            variant === "light" ? "text-primary-600" : "text-accent-400"
          )}>
            By The Numbers
          </span>
          <h2 className={cn(
            "text-fluid-3xl md:text-fluid-4xl font-display font-semibold tracking-tight",
            variant === "light" ? "text-neutral-900" : "text-white"
          )}>
            Trusted Results in Port Aransas
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.1}>
              <div className="text-center group">
                {/* Stat Number */}
                <div className={cn(
                  "text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-2 transition-transform duration-300 group-hover:scale-105",
                  variant === "light" ? "text-primary-600" : "text-white"
                )}>
                  <CounterUp
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={2}
                  />
                </div>

                {/* Label */}
                <div className={cn(
                  "text-lg font-medium mb-1",
                  variant === "light" ? "text-neutral-900" : "text-white"
                )}>
                  {stat.label}
                </div>

                {/* Description */}
                <div className={cn(
                  "text-sm",
                  variant === "light" ? "text-neutral-500" : "text-white/60"
                )}>
                  {stat.description}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
