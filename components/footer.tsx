"use client"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/lib/language-context"
import { Logo } from "@/components/logo"

export default function Footer() {
  const { t, language } = useLanguage()

  return (
    <footer className="bg-uttarakhand-pine/10 dark:bg-gray-900 border-t aipan-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo />
            </div>
            <p className="text-sm text-muted-foreground mb-4 font-pahadi">
              {language === "hi"
                ? "उत्तराखंड की भाषाओं, संस्कृति और विरासत को संरक्षित और प्रचारित करने के लिए समर्पित एक पहल।"
                : "An initiative dedicated to preserving and promoting the languages, culture, and heritage of Uttarakhand."}
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 flex items-center justify-center rounded-full bg-uttarakhand-pine/20 text-uttarakhand-pine hover:bg-uttarakhand-pine hover:text-white dark:bg-uttarakhand-meadow/20 dark:text-uttarakhand-meadow dark:hover:bg-uttarakhand-meadow dark:hover:text-uttarakhand-pine transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 flex items-center justify-center rounded-full bg-uttarakhand-pine/20 text-uttarakhand-pine hover:bg-uttarakhand-pine hover:text-white dark:bg-uttarakhand-meadow/20 dark:text-uttarakhand-meadow dark:hover:bg-uttarakhand-meadow dark:hover:text-uttarakhand-pine transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 flex items-center justify-center rounded-full bg-uttarakhand-pine/20 text-uttarakhand-pine hover:bg-uttarakhand-pine hover:text-white dark:bg-uttarakhand-meadow/20 dark:text-uttarakhand-meadow dark:hover:bg-uttarakhand-meadow dark:hover:text-uttarakhand-pine transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 flex items-center justify-center rounded-full bg-uttarakhand-pine/20 text-uttarakhand-pine hover:bg-uttarakhand-pine hover:text-white dark:bg-uttarakhand-meadow/20 dark:text-uttarakhand-meadow dark:hover:bg-uttarakhand-meadow dark:hover:text-uttarakhand-pine transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="temple-pillar px-4">
            <h3 className="text-lg font-semibold mb-4 text-uttarakhand-pine dark:text-uttarakhand-meadow font-pahadi">
              {language === "hi" ? "त्वरित लिंक" : "Quick Links"}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-uttarakhand-pine dark:hover:text-uttarakhand-meadow transition-colors font-pahadi"
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-sm text-muted-foreground hover:text-uttarakhand-pine dark:hover:text-uttarakhand-meadow transition-colors font-pahadi"
                >
                  {t("events")}
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-sm text-muted-foreground hover:text-uttarakhand-pine dark:hover:text-uttarakhand-meadow transition-colors font-pahadi"
                >
                  {t("gallery")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-uttarakhand-pine dark:hover:text-uttarakhand-meadow transition-colors font-pahadi"
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-uttarakhand-pine dark:hover:text-uttarakhand-meadow transition-colors font-pahadi"
                >
                  {t("terms")}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-uttarakhand-pine dark:hover:text-uttarakhand-meadow transition-colors font-pahadi"
                >
                  {t("privacy_policy")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="wooden-card p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-white font-pahadi">
              {language === "hi" ? "संपर्क जानकारी" : "Contact Information"}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-white shrink-0 mt-0.5" />
                <span className="text-sm text-white/80 font-pahadi">
                  {language === "hi" ? "देहरादून, उत्तराखंड, भारत - 248001" : "Dehradun, Uttarakhand, India - 248001"}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-white shrink-0" />
                <span className="text-sm text-white/80 font-pahadi">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-white shrink-0" />
                <span className="text-sm text-white/80 font-pahadi">info@vpahadi.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="temple-arch pt-4">
            <h3 className="text-lg font-semibold mb-4 text-uttarakhand-pine dark:text-uttarakhand-meadow font-pahadi">
              {language === "hi" ? "न्यूज़लेटर" : "Newsletter"}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 font-pahadi">
              {language === "hi"
                ? "नवीनतम अपडेट, कार्यक्रम और पाठ्यक्रम प्राप्त करने के लिए हमारे न्यूज़लेटर की सदस्यता लें।"
                : "Subscribe to our newsletter to receive the latest updates, events, and courses."}
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder={language === "hi" ? "आपका ईमेल" : "Your email"}
                className="border-uttarakhand-pine/20 focus-visible:ring-uttarakhand-pine dark:border-uttarakhand-meadow/20 dark:focus-visible:ring-uttarakhand-meadow"
              />
              <Button className="bg-uttarakhand-pine hover:bg-uttarakhand-pine/90 dark:bg-uttarakhand-meadow dark:text-uttarakhand-pine dark:hover:bg-uttarakhand-meadow/90 font-pahadi">
                {language === "hi" ? "सदस्यता लें" : "Subscribe"}
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-uttarakhand-pine/10 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left font-pahadi">
            {language === "hi" ? "© 2024 V Pahadi। सर्वाधिकार सुरक्षित।" : "© 2024 V Pahadi. All rights reserved."}
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1 font-pahadi">
            {language === "hi" ? "उत्तराखंड के प्रति प्रेम के साथ बनाया गया" : "Made with love for Uttarakhand"}{" "}
            <Heart className="h-3 w-3 text-red-500 fill-red-500" />
          </p>
        </div>
      </div>
    </footer>
  )
}

