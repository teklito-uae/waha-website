import type { LucideIcon } from "lucide-react"
import {
  Armchair,
  Asterisk,
  Boxes,
  Building2,
  ClipboardList,
  FileText,
  Hammer,
  Palette,
  Sparkles,
} from "lucide-react"

export interface Service {
  icon: LucideIcon
  title: string
  description: string
  bullets: string[]
}

export const services: Service[] = [
  {
    icon: Armchair,
    title: "Interior Design",
    description: "Beautiful interiors tailored to your lifestyle and needs.",
    bullets: [
      "Residential Interiors",
      "Apartment Interiors",
      "Villa Interiors",
      "Office & Workspace Design",
      "Retail & Commercial Interiors",
      "Hospitality Interiors",
    ],
  },
  {
    icon: Building2,
    title: "Architectural Design",
    description: "Smart planning and innovative architecture for every space.",
    bullets: [
      "Floor Planning",
      "Space Planning",
      "Building Design",
      "Renovation & Remodeling",
      "Facade Design",
      "3D Visualization",
      "Photorealistic 3D",
    ],
  },
  {
    icon: Boxes,
    title: "Renders",
    description: "Realistic 3D renders that bring your vision to life.",
    bullets: [
      "Exterior Visualization",
      "Interior Visualization",
      "Walkthrough & Animations",
      "Concept Visualizations",
      "Product Rendering",
    ],
  },
  {
    icon: Palette,
    title: "Design Consultation",
    description: "Expert advice on materials, colors, and finishes.",
    bullets: [
      "Material & Finish Selection",
      "Furniture Selection",
      "Color Consultation",
      "Lighting Design",
    ],
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description: "End-to-end execution with attention to quality and detail.",
    bullets: [
      "Site Coordination",
      "BOQ (Bill of Quantities)",
      "Vendor Coordination",
      "Execution Supervision",
      "Quality Control",
    ],
  },
  {
    icon: Hammer,
    title: "Custom Design",
    description: "Bespoke furniture and joinery designed just for you.",
    bullets: [
      "Modular Kitchen Design",
      "Wardrobe Design",
      "Custom Furniture Design",
      "TV Unit Design",
      "False Ceiling Design",
      "Bathroom Design",
      "Styling",
    ],
  },
  {
    icon: Sparkles,
    title: "Interior Styling",
    description: "Curated décor and styling to elevate your space beautifully.",
    bullets: ["Home Décor Selection", "Art & Accessories Styling", "Soft Furnishing Selection"],
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Detailed drawings and layouts for a seamless process.",
    bullets: [
      "Working Drawings",
      "Electrical Layouts",
      "Plumbing Layouts",
      "Ceiling Layouts",
      "Furniture Layouts",
      "Joinery Details",
      "Shop Drawings",
    ],
  },
]

export interface AdditionalServiceGroup {
  title: string
  items: string[]
}

export const additionalServices: {
  icon: LucideIcon
  title: string
  groups: AdditionalServiceGroup[]
} = {
  icon: Asterisk,
  title: "Additional Services",
  groups: [
    { title: "", items: ["Mood Boards", "Material Boards", "2D Layout Planning"] },
    {
      title: "",
      items: ["Furniture & Decor Procurement Assistance", "Design Review & Consultation"],
    },
    { title: "", items: ["Turnkey Interior Solutions"] },
  ],
}
