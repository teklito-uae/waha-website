import { Moon, Sun } from "lucide-react"

import { useTheme } from "@/components/layout/ThemeProvider"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground/80 transition-colors hover:text-foreground dark:border-brand-foreground/30 dark:text-brand-foreground/80 dark:hover:text-brand-foreground",
        className
      )}
    >
      {theme === "light" ? <Moon className="size-4" /> : <Sun className="size-4" />}
    </button>
  )
}
