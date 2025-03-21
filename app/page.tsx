"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, CheckCircle, Clock, MapPin, Ticket, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { WordOfTheDay } from "@/components/word-of-the-day"
import { Testimonials } from "@/components/testimonials"
import { FeaturedDestinations } from "@/components/featured-destinations"
import { LanguageStats } from "@/components/language-stats"
import { useLanguage } from "@/lib/language-context"
import { AipanBorder, TempleArch, WoodenFrame, DamauDrum, MountainDivider } from "@/components/decorative-elements"

export default function Home() {
  const { t, language } = useLanguage()
  const [isVisible, setIsVisible] = useState({
    stats: false,
    events: false,
    wordOfDay: false,
    destinations: false,
    testimonials: false,
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }))
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = ["stats", "events", "wordOfDay", "destinations", "testimonials"]
    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) observer.observe(element)
    })

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) observer.unobserve(element)
      })
    }
  }, [])

  return (
    <div className="uttarakhand-pattern">
      {/* Hero Section with Sunset Background */}
      <section className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Himalayan Sunset"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-uttarakhand-sunset/30 via-transparent to-uttarakhand-wood/30"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <div className="animate-float backdrop-blur-sm bg-white/10 p-8 rounded-lg border border-white/20 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-pahadi text-white drop-shadow-lg">
              {language === "hi"
                ? "उत्तराखंड की भाषाओं को जानें, समझें और संरक्षित करें"
                : "Learn, Understand and Preserve Uttarakhand's Languages"}
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90 font-pahadi drop-shadow-lg">
              {language === "hi"
                ? "कुमाऊँनी और गढ़वाली भाषाओं को इंटरएक्टिव तरीके से सीखें और उत्तराखंड की समृद्ध सांस्कृतिक विरासत से जुड़ें।"
                : "Learn Kumaoni and Garhwali languages interactively and connect with the rich cultural heritage of Uttarakhand."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://forms.gle/QsgATnNtYchCKJB48" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-uttarakhand-sunset hover:bg-uttarakhand-sunset/90 text-white font-pahadi border border-white/20 backdrop-blur-sm"
                >
                  {language === "hi" ? "अभी रजिस्टर करें" : "Register Now"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/20 font-pahadi backdrop-blur-sm"
              >
                <Sun className="mr-2 h-4 w-4" />
                {language === "hi" ? "वीडियो देखें" : "Watch Video"}
              </Button>
            </div>
          </div>
          <div className="absolute bottom-10 left-0 right-0 flex justify-center">
            <div className="animate-bounce bg-white/10 p-2 rounded-full backdrop-blur-sm">
              <ArrowRight className="h-8 w-8 transform rotate-90 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Mountain Silhouette */}
      <div className="relative h-24 bg-gradient-to-b from-uttarakhand-sunset/30 to-white dark:to-gray-900">
        <svg
          className="absolute bottom-0 w-full h-24"
          viewBox="0 0 1440 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 74V35L120 0L240 35L360 15L480 45L600 25L720 55L840 20L960 40L1080 15L1200 45L1320 20L1440 45V74H0Z"
            fill="currentColor"
            className="text-white dark:text-gray-900"
          />
        </svg>
      </div>

      <section className="py-8 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/about-uttarakhand">
              <div className="group bg-gradient-to-r from-uttarakhand-sunset/10 to-uttarakhand-mountain/10 hover:from-uttarakhand-sunset/20 hover:to-uttarakhand-mountain/20 p-6 rounded-lg border border-uttarakhand-mountain/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center">
                <TempleArch className="inline-block mb-2 w-16 h-16 mx-auto">
                  <span className="text-2xl font-bold text-uttarakhand-mountain">🏔️</span>
                </TempleArch>
                <h3 className="text-xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi mb-2">
                  {language === "hi" ? "उत्तराखंड के बारे में" : "About Uttarakhand"}
                </h3>
                <p className="text-muted-foreground font-pahadi">
                  {language === "hi"
                    ? "देवभूमि उत्तराखंड की समृद्ध विरासत और संस्कृति के बारे में जानें"
                    : "Learn about the rich heritage and culture of Devbhoomi Uttarakhand"}
                </p>
              </div>
            </Link>

            <Link href="/districts">
              <div className="group bg-gradient-to-r from-uttarakhand-pine/10 to-uttarakhand-flower/10 hover:from-uttarakhand-pine/20 hover:to-uttarakhand-flower/20 p-6 rounded-lg border border-uttarakhand-pine/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center">
                <TempleArch className="inline-block mb-2 w-16 h-16 mx-auto">
                  <span className="text-2xl font-bold text-uttarakhand-pine">🗺️</span>
                </TempleArch>
                <h3 className="text-xl font-bold text-uttarakhand-pine dark:text-uttarakhand-meadow font-pahadi mb-2">
                  {language === "hi" ? "उत्तराखंड के जिले" : "Districts of Uttarakhand"}
                </h3>
                <p className="text-muted-foreground font-pahadi">
                  {language === "hi"
                    ? "उत्तराखंड के सभी 13 जिलों के बारे में विस्तृत जानकारी प्राप्त करें"
                    : "Get detailed information about all 13 districts of Uttarakhand"}
                </p>
              </div>
            </Link>

            <Link href="/about">
              <div className="group bg-gradient-to-r from-uttarakhand-wood/10 to-uttarakhand-sunset/10 hover:from-uttarakhand-wood/20 hover:to-uttarakhand-sunset/20 p-6 rounded-lg border border-uttarakhand-wood/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center">
                <TempleArch className="inline-block mb-2 w-16 h-16 mx-auto">
                  <span className="text-2xl font-bold text-uttarakhand-wood">📚</span>
                </TempleArch>
                <h3 className="text-xl font-bold text-uttarakhand-wood dark:text-uttarakhand-meadow font-pahadi mb-2">
                  {language === "hi" ? "हमारे बारे में" : "About Us"}
                </h3>
                <p className="text-muted-foreground font-pahadi">
                  {language === "hi"
                    ? "हमारे मिशन और उत्तराखंड की भाषाओं को संरक्षित करने के हमारे प्रयासों के बारे में जानें"
                    : "Learn about our mission and efforts to preserve Uttarakhand's languages"}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Rest of the sections with updated styling */}
      {/* Language Stats Section */}
      <section
        id="stats"
        className="py-16 bg-gradient-to-b from-white to-uttarakhand-sunset/10 dark:from-gray-900 dark:to-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AipanBorder className="inline-block mb-4 bg-white/80 dark:bg-gray-800/80">
              <h2 className="text-3xl font-bold text-uttarakhand-wood dark:text-uttarakhand-sunset font-pahadi">
                {language === "hi" ? "भाषा संरक्षण की आवश्यकता" : "Why Language Preservation Matters"}
              </h2>
            </AipanBorder>
            <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
              {language === "hi"
                ? "उत्तराखंड की भाषाएँ हमारी सांस्कृतिक पहचान का महत्वपूर्ण हिस्सा हैं। इन्हें संरक्षित करना हमारी विरासत को बचाने जैसा है।"
                : "Uttarakhand's languages are a vital part of our cultural identity. Preserving them is like saving our heritage."}
            </p>
          </div>
          <div
            className={`transition-all duration-1000 ${isVisible.stats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <LanguageStats />
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Featured Events Section */}
      <section
        id="events"
        className="py-16 bg-gradient-to-r from-uttarakhand-pine/10 to-uttarakhand-mountain/10 dark:bg-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <TempleArch className="inline-block mb-4">
              <h2 className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                {language === "hi" ? "आगामी कार्यक्रम" : "Upcoming Events"}
              </h2>
            </TempleArch>
            <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
              {language === "hi"
                ? "उत्तराखंड की भाषा और संस्कृति से जुड़े विशेष कार्यक्रम और उत्सव"
                : "Special events and festivals related to Uttarakhand's language and culture"}
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible.events ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* Event 1 */}
            <Card className="border-2 border-uttarakhand-mountain/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Kumaoni Folk Songs Workshop"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-2 right-2 bg-uttarakhand-mountain text-white text-xs px-2 py-1 rounded-full">
                  {language === "hi" ? "संगीत" : "Music"}
                </div>
              </div>
              <CardHeader className="relative z-10 -mt-12 pb-0">
                <div className="bg-white dark:bg-gray-900 rounded-t-xl p-4 shadow-lg">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                      {language === "hi" ? "कुमाऊँनी लोकगीत उत्सव" : "Kumaoni Folk Music Festival"}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="bg-white dark:bg-gray-900 px-4 pb-2">
                  <div className="space-y-3 pt-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-uttarakhand-mountain dark:text-uttarakhand-meadow" />
                      <span className="text-sm text-muted-foreground font-pahadi">
                        {language === "hi" ? "15 जुलाई, 2024" : "July 15, 2024"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-uttarakhand-mountain dark:text-uttarakhand-meadow" />
                      <span className="text-sm text-muted-foreground font-pahadi">
                        {language === "hi" ? "शाम 6:00 - 9:00 बजे" : "6:00 PM - 9:00 PM"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-uttarakhand-mountain dark:text-uttarakhand-meadow" />
                      <span className="text-sm text-muted-foreground font-pahadi">
                        {language === "hi" ? "टाउन हॉल, नैनीताल" : "Town Hall, Nainital"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ticket className="h-5 w-5 text-uttarakhand-mountain dark:text-uttarakhand-meadow" />
                      <span className="text-sm text-muted-foreground font-pahadi">
                        {language === "hi" ? "₹500 प्रति व्यक्ति" : "₹500 per person"}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-white dark:bg-gray-900 pt-0 pb-4 px-4">
                <a
                  href="https://forms.gle/QsgATnNtYchCKJB48"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-uttarakhand-mountain hover:bg-uttarakhand-mountain/90 text-white font-pahadi">
                    {language === "hi" ? "टिकट बुक करें" : "Book Tickets"}
                  </Button>
                </a>
              </CardFooter>
            </Card>

            {/* Event 2 */}
            <Card className="border-2 border-uttarakhand-mountain/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Garhwali Language Workshop"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-2 right-2 bg-uttarakhand-pine text-white text-xs px-2 py-1 rounded-full">
                  {language === "hi" ? "वर्कशॉप" : "Workshop"}
                </div>
              </div>
              <CardHeader className="relative z-10 -mt-12 pb-0">
                <div className="bg-white dark:bg-gray-900 rounded-t-xl p-4 shadow-lg">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-uttarakhand-pine dark:text-uttarakhand-meadow font-pahadi">
                      {language === "hi" ? "गढ़वाली भाषा कार्यशाला" : "Garhwali Language Workshop"}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="bg-white dark:bg-gray-900 px-4 pb-2">
                  <div className="space-y-3 pt-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-uttarakhand-pine dark:text-uttarakhand-meadow" />
                      <span className="text-sm text-muted-foreground font-pahadi">
                        {language === "hi" ? "20 जुलाई, 2024" : "July 20, 2024"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-uttarakhand-pine dark:text-uttarakhand-meadow" />
                      <span className="text-sm text-muted-foreground font-pahadi">
                        {language === "hi" ? "सुबह 10:00 - शाम 4:00 बजे" : "10:00 AM - 4:00 PM"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-uttarakhand-pine dark:text-uttarakhand-meadow" />
                      <span className="text-sm text-muted-foreground font-pahadi">
                        {language === "hi" ? "सांस्कृतिक केंद्र, देहरादून" : "Cultural Center, Dehradun"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ticket className="h-5 w-5 text-uttarakhand-pine dark:text-uttarakhand-meadow" />
                      <span className="text-sm text-muted-foreground font-pahadi">
                        {language === "hi" ? "₹300 प्रति व्यक्ति" : "₹300 per person"}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-white dark:bg-gray-900 pt-0 pb-4 px-4">
                <a
                  href="https://forms.gle/QsgATnNtYchCKJB48"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-uttarakhand-pine hover:bg-uttarakhand-pine/90 text-white font-pahadi">
                    {language === "hi" ? "रजिस्टर करें" : "Register"}
                  </Button>
                </a>
              </CardFooter>
            </Card>

            {/* Event 3 */}
            <Card className="border-2 border-uttarakhand-mountain/20 dark:border-uttarakhand-meadow/20 transition-all hover:shadow-lg hover:-translate-y-1 duration-300 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Uttarakhand Cultural Festival"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-2 right-2 bg-uttarakhand-flower text-white text-xs px-2 py-1 rounded-full">
                  {language === "hi" ? "उत्सव" : "Festival"}
                </div>
              </div>
              <CardHeader className="relative z-10 -mt-12 pb-0">
                <div className="bg-white dark:bg-gray-900 rounded-t-xl p-4 shadow-lg">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-uttarakhand-flower dark:text-uttarakhand-flower font-pahadi">
                      {language === "hi" ? "उत्तराखंड सांस्कृतिक महोत्सव" : "Uttarakhand Cultural Festival"}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="bg-white dark:bg-gray-900 px-4 pb-2">
                  <div className="space-y-3 pt-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-uttarakhand-flower dark:text-uttarakhand-flower" />
                      <span className="text-sm text-muted-foreground font-pahadi">
                        {language === "hi" ? "5-7 अगस्त, 2024" : "August 5-7, 2024"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-uttarakhand-flower dark:text-uttarakhand-flower" />
                      <span className="text-sm text-muted-foreground font-pahadi">
                        {language === "hi" ? "सुबह 9:00 - रात 9:00 बजे" : "9:00 AM - 9:00 PM"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-uttarakhand-flower dark:text-uttarakhand-flower" />
                      <span className="text-sm text-muted-foreground font-pahadi">
                        {language === "hi" ? "पैराडाइज़ ग्राउंड, मसूरी" : "Paradise Ground, Mussoorie"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ticket className="h-5 w-5 text-uttarakhand-flower dark:text-uttarakhand-flower" />
                      <span className="text-sm text-muted-foreground font-pahadi">
                        {language === "hi" ? "₹800 प्रति व्यक्ति" : "₹800 per person"}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-white dark:bg-gray-900 pt-0 pb-4 px-4">
                <a
                  href="https://forms.gle/QsgATnNtYchCKJB48"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-uttarakhand-flower hover:bg-uttarakhand-flower/90 text-white font-pahadi">
                    {language === "hi" ? "टिकट बुक करें" : "Book Tickets"}
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Link href="/events">
              <Button
                variant="outline"
                className="border-uttarakhand-mountain text-uttarakhand-mountain hover:bg-uttarakhand-mountain/10 dark:border-uttarakhand-meadow dark:text-uttarakhand-meadow dark:hover:bg-uttarakhand-meadow/10 font-pahadi"
              >
                {language === "hi" ? "सभी कार्यक्रम देखें" : "View All Events"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Word of the Day Section */}
      <section id="wordOfDay" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div
            className={`grid gap-8 lg:grid-cols-[1fr_500px] items-center transition-all duration-1000 ${isVisible.wordOfDay ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="space-y-6">
              <WoodenFrame>
                <h2 className="text-3xl font-bold text-white font-pahadi">
                  {language === "hi" ? "आज का शब्द" : "Word of the Day"}
                </h2>
                <p className="text-white/80 max-w-xl font-pahadi">
                  {language === "hi"
                    ? "हर दिन एक नया कुमाऊँनी या गढ़वाली शब्द सीखें और अपनी शब्दावली बढ़ाएँ। नियमित अभ्यास से भाषा सीखना आसान हो जाता है।"
                    : "Learn a new Kumaoni or Garhwali word every day and expand your vocabulary. Regular practice makes language learning easier."}
                </p>
                <div className="space-y-4 mt-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span className="text-white/90 font-pahadi">
                      {language === "hi" ? "उच्चारण के साथ ऑडियो गाइड" : "Audio guide with pronunciation"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span className="text-white/90 font-pahadi">
                      {language === "hi" ? "वाक्य में प्रयोग के उदाहरण" : "Example usage in sentences"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-white" />
                    <span className="text-white/90 font-pahadi">
                      {language === "hi" ? "हिंदी और अंग्रेजी में अनुवाद" : "Translation in Hindi and English"}
                    </span>
                  </div>
                </div>
                <div className="pt-4">
                  <Link href="/dictionary">
                    <Button className="bg-white text-uttarakhand-wood hover:bg-white/90 font-pahadi">
                      {language === "hi" ? "शब्दकोश देखें" : "View Dictionary"}
                    </Button>
                  </Link>
                </div>
              </WoodenFrame>
            </div>
            <WordOfTheDay />
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Featured Destinations */}
      <section
        id="destinations"
        className="py-16 bg-gradient-to-r from-uttarakhand-pine/10 to-uttarakhand-mountain/10 dark:bg-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <AipanBorder className="inline-block mb-4">
              <h2 className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                {language === "hi" ? "उत्तराखंड के प्रमुख स्थल" : "Featured Destinations of Uttarakhand"}
              </h2>
            </AipanBorder>
            <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
              {language === "hi"
                ? "उत्तराखंड के सुंदर स्थलों की यात्रा करें और स्थानीय भाषा और संस्कृति से जुड़ें।"
                : "Explore the beautiful destinations of Uttarakhand and connect with local language and culture."}
            </p>
          </div>
          <div
            className={`transition-all duration-1000 ${isVisible.destinations ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <FeaturedDestinations />
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <TempleArch className="inline-block mb-4">
              <h2 className="text-3xl font-bold text-uttarakhand-mountain dark:text-uttarakhand-meadow font-pahadi">
                {language === "hi" ? "हमारे छात्रों की प्रतिक्रियाएँ" : "What Our Students Say"}
              </h2>
            </TempleArch>
            <p className="text-muted-foreground max-w-3xl mx-auto font-pahadi">
              {language === "hi"
                ? "हमारे पाठ्यक्रमों और कार्यक्रमों के बारे में छात्रों की प्रतिक्रियाएँ और अनुभव।"
                : "Feedback and experiences from students about our courses and programs."}
            </p>
          </div>
          <div
            className={`transition-all duration-1000 ${isVisible.testimonials ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Testimonials />
          </div>
        </div>
      </section>

      <MountainDivider />

      {/* Updated Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-uttarakhand-sunset via-uttarakhand-wood to-uttarakhand-pine text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="backdrop-blur-sm bg-white/10 p-8 rounded-lg border border-white/20 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-pahadi">
              {language === "hi" ? "अपनी भाषा यात्रा आज ही शुरू करें" : "Start Your Language Journey Today"}
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-white/90 font-pahadi">
              {language === "hi"
                ? "उत्तराखंड की समृद्ध भाषाई विरासत को सीखें, संरक्षित करें और आगे बढ़ाएँ। हमारे साथ जुड़ें और इस सांस्कृतिक यात्रा का हिस्सा बनें।"
                : "Learn, preserve, and promote the rich linguistic heritage of Uttarakhand. Join us and be a part of this cultural journey."}
            </p>
            <a href="https://forms.gle/QsgATnNtYchCKJB48" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-uttarakhand-sunset hover:bg-white/90 font-pahadi">
                {language === "hi" ? "अभी रजिस्टर करें" : "Register Now"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <div className="mt-8">
              <DamauDrum className="mx-auto animate-bounce" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

