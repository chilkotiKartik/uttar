"\"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/lib/language-context"
import { useTheme } from "@/lib/theme-context"

export default function Header() {
  const pathname = usePathname()
  const { language } = useLanguage()
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: language === "hi" ? "होम" : "Home", href: "/" },
    { name: language === "hi" ? "उत्तराखंड के बारे में" : "About Uttarakhand", href: "/about-uttarakhand" },
    { name: language === "hi" ? "जिले" : "Districts", href: "/districts" },
    { name: language === "hi" ? "गैलरी" : "Gallery", href: "/gallery" },
    { name: language === "hi" ? "इवेंट्स" : "Events", href: "/events" },
    { name: language === "hi" ? "हमारे बारे में" : "About Us", href: "/about" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-uttarakhand-mountain to-uttarakhand-pine mr-2"></div>
            <div>
              <h1 className="text-xl font-bold font-pahadi">{language === "hi" ? "वी पहाड़ी" : "V Pahadi"}</h1>
              <p className="text-xs text-muted-foreground font-pahadi">
                {language === "hi" ? "उत्तराखंड भाषा मंच" : "Uttarakhand Language Platform"}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors font-pahadi ${
                  pathname === item.href
                    ? "bg-uttarakhand-mountain/10 text-uttarakhand-mountain dark:bg-uttarakhand-meadow/10 dark:text-uttarakhand-meadow"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <LanguageSelector />
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              className="rounded-full"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu" className="md:hidden rounded-full">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 sm:w-80">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between pb-4 border-b">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-uttarakhand-mountain to-uttarakhand-pine mr-2"></div>
                      <div>
                        <h2 className="text-lg font-bold font-pahadi">{language === "hi" ? "वी पहाड़ी" : "V Pahadi"}</h2>
                      </div>
                    </div>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" aria-label="Close">
                        <X className="h-5 w-5" />
                      </Button>
                    </SheetTrigger>
                  </div>
                  <nav className="flex flex-col space-y-4 pt-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`px-3 py-2 text-sm font-medium rounded-md transition-colors font-pahadi ${
                          pathname === item.href
                            ? "bg-uttarakhand-mountain/10 text-uttarakhand-mountain dark:bg-uttarakhand-meadow/10 dark:text-uttarakhand-meadow"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

