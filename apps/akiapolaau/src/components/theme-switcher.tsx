"use client"

import * as React from "react"
import { Moon, Sun, Check } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@repo/ui"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@repo/ui"

const themes = [
  { value: "light", label: "Zinc Claro", mode: "light", color: "bg-zinc-200" },
  { value: "dark", label: "Zinc Oscuro", mode: "dark", color: "bg-zinc-800" },
  { value: "slate-light", label: "Slate Claro", mode: "light", color: "bg-slate-200" },
  { value: "slate-dark", label: "Slate Oscuro", mode: "dark", color: "bg-slate-800" },
  { value: "stone-light", label: "Stone Claro", mode: "light", color: "bg-stone-200" },
  { value: "stone-dark", label: "Stone Oscuro", mode: "dark", color: "bg-stone-800" },
  { value: "gray-light", label: "Gray Claro", mode: "light", color: "bg-gray-200" },
  { value: "gray-dark", label: "Gray Oscuro", mode: "dark", color: "bg-gray-800" },
  { value: "neutral-light", label: "Neutral Claro", mode: "light", color: "bg-neutral-200" },
  { value: "neutral-dark", label: "Neutral Oscuro", mode: "dark", color: "bg-neutral-800" },
  { value: "red-light", label: "Rojo Claro", mode: "light", color: "bg-red-200" },
  { value: "red-dark", label: "Rojo Oscuro", mode: "dark", color: "bg-red-900" },
  { value: "rose-light", label: "Rose Claro", mode: "light", color: "bg-rose-200" },
  { value: "rose-dark", label: "Rose Oscuro", mode: "dark", color: "bg-rose-900" },
  { value: "orange-light", label: "Naranja Claro", mode: "light", color: "bg-orange-200" },
  { value: "orange-dark", label: "Naranja Oscuro", mode: "dark", color: "bg-orange-900" },
  { value: "green-light", label: "Verde Claro", mode: "light", color: "bg-green-200" },
  { value: "green-dark", label: "Verde Oscuro", mode: "dark", color: "bg-green-900" },
  { value: "blue-light", label: "Azul Claro", mode: "light", color: "bg-blue-200" },
  { value: "blue-dark", label: "Azul Oscuro", mode: "dark", color: "bg-blue-900" },
  { value: "yellow-light", label: "Amarillo Claro", mode: "light", color: "bg-yellow-200" },
  { value: "yellow-dark", label: "Amarillo Oscuro", mode: "dark", color: "bg-yellow-900" },
  { value: "violet-light", label: "Violeta Claro", mode: "light", color: "bg-violet-200" },
  { value: "violet-dark", label: "Violeta Oscuro", mode: "dark", color: "bg-violet-900" },
    { value: "reda-salsa", label: "salsa Claro", mode: "light", color: "bg-orange-200" },
]

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="icon">
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  const currentMode = theme?.includes("dark") ? "dark" : "light"
  const lightThemes = themes.filter(t => t.mode === "light")
  const darkThemes = themes.filter(t => t.mode === "dark")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="motion-safe:transition-colors">
          {currentMode === "dark" ? (
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          ) : (
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 max-h-[400px] overflow-y-auto">
        <DropdownMenuLabel>Temas Claros</DropdownMenuLabel>
        {lightThemes.map((t) => (
          <DropdownMenuItem key={t.value} onClick={() => setTheme(t.value)}>
            <div className={`mr-2 h-4 w-4 rounded ${t.color}`} />
            <span>{t.label}</span>
            {theme === t.value && <Check className="ml-auto h-4 w-4" />}
          </DropdownMenuItem>
        ))}
        
        <DropdownMenuSeparator />
        
        <DropdownMenuLabel>Temas Oscuros</DropdownMenuLabel>
        {darkThemes.map((t) => (
          <DropdownMenuItem key={t.value} onClick={() => setTheme(t.value)}>
            <div className={`mr-2 h-4 w-4 rounded ${t.color}`} />
            <span>{t.label}</span>
            {theme === t.value && <Check className="ml-auto h-4 w-4" />}
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />
        
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <span className="mr-2">💻</span>
          <span>Sistema</span>
          {theme === "system" && <Check className="ml-auto h-4 w-4" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
