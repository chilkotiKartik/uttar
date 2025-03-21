"use client"

import * as React from "react"
import { Check, ChevronsUpDown, Globe } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useLanguage } from "@/lib/language-context"

const languages = [
  {
    value: "hi",
    label: {
      hi: "हिंदी",
      en: "Hindi",
    },
    flag: "🇮🇳",
  },
  {
    value: "en",
    label: {
      hi: "अंग्रेज़ी",
      en: "English",
    },
    flag: "🇬🇧",
  },
]

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage()
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-fit gap-1 px-2 sm:w-[130px] sm:justify-between"
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{language === "hi" ? "हिंदी" : "English"}</span>
          <ChevronsUpDown className="ml-1 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={t("search_language")} />
          <CommandList>
            <CommandEmpty>{t("no_language_found")}</CommandEmpty>
            <CommandGroup>
              {languages.map((lang) => (
                <CommandItem
                  key={lang.value}
                  value={lang.value}
                  onSelect={(currentValue) => {
                    setLanguage(currentValue)
                    setOpen(false)
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span>{lang.flag}</span>
                    <span>{lang.label[language as "en" | "hi"]}</span>
                  </div>
                  <Check className={cn("ml-auto h-4 w-4", language === lang.value ? "opacity-100" : "opacity-0")} />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

