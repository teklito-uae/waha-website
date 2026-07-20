import type { LucideIcon } from "lucide-react"
import { CheckCircle2, Gem, Home, Wrench } from "lucide-react"

export interface TrustPoint {
  icon: LucideIcon
  title: string
  description: string
}

export const trustPoints: TrustPoint[] = [
  {
    icon: Gem,
    title: "Timeless Design",
    description: "Elegant, enduring spaces that stand the test of time.",
  },
  {
    icon: Home,
    title: "Functional Spaces",
    description: "Smart layouts tailored to your lifestyle and needs.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Assurance",
    description: "We use quality materials and ensure fine craftsmanship.",
  },
  {
    icon: Wrench,
    title: "End-to-End Service",
    description: "From concept to completion, we handle it all.",
  },
]
