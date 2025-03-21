"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight, BookOpen, Users, Heart, Twitter, Mail, Linkedin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  const { t, language } = useLanguage()
  const [isVisible, setIsVisible] = useState({
    mission: false,
    values: false,
    team: false,
    achievements: false,
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

    const sections = ["mission", "values", "team", "achievements"]
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
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Nainital Lake, Uttarakhand"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-zoom-in">
            {language === "hi" ? "हमारे बारे में" : "About Us"}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 animate-zoom-in">
            {language === "hi"
              ? "उत्तराखंड की भाषाओं और संस्कृति को संरक्षित और प्रचारित करने के लिए समर्पित एक पहल।"
              : "An initiative dedicated to preserving and promoting the languages and culture of Uttarakhand."}
          </p>
          <div className="mt-8 animate-zoom-in">
            <Button size="lg" className="bg-uttarakhand-mountain hover:bg-uttarakhand-mountain/90 text-white">
              {language === "hi" ? "हमसे जुड़ें" : "Join Us"}
            </Button>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section id="mission" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 ${isVisible.mission ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-uttarakhand-pine dark:text-uttarakhand-meadow mb-6">
                {language === "hi" ? "हमारा मिशन" : "Our Mission"}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {language === "hi"
                  ? "उत्तराखंड भाषा का मिशन उत्तराखंड की समृद्ध भाषाई विरासत को संरक्षित करना, प्रचारित करना और आगे बढ़ाना है। हम कुमाऊँनी और गढ़वाली जैसी स्थानीय भाषाओं को सीखने और बोलने के लिए एक मंच प्रदान करते हैं, ताकि ये भाषाएँ आने वाली पीढ़ियों के लिए जीवित रहें।"
                  : "The mission of Uttarakhand Bhasha is to preserve, promote, and advance the rich linguistic heritage of Uttarakhand. We provide a platform for learning and speaking local languages like Kumaoni and Garhwali, so that these languages remain alive for generations to come."}
              </p>
              <p className="text-lg text-muted-foreground">
                {language === "hi"
                  ? "हम मानते हैं कि भाषा सिर्फ संवाद का माध्यम नहीं है, बल्कि यह हमारी संस्कृति, परंपराओं और इतिहास का वाहक भी है। इसलिए, हम न केवल भाषा सिखाते हैं, बल्कि उत्तराखंड की समृद्ध सांस्कृतिक विरासत से भी परिचित कराते हैं।"
                  : "We believe that language is not just a medium of communication, but also a carrier of our culture, traditions, and history. Therefore, we not only teach the language, but also introduce the rich cultural heritage of Uttarakhand."}
              </p>
              <div className="mt-8 flex gap-4">
                <Button className="bg-uttarakhand-pine hover:bg-uttarakhand-pine/90 text-white">
                  {language === "hi" ? "और जानें" : "Learn More"}
                </Button>
                <Button
                  variant="outline"
                  className="border-uttarakhand-pine text-uttarakhand-pine hover:bg-uttarakhand-pine/10"
                >
                  {language === "hi" ? "हमसे संपर्क करें" : "Contact Us"}
                </Button>
              </div>
            </div>
            <div
              className={`transition-all duration-1000 ${isVisible.mission ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1589182337358-2cb63099350c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                  alt="Badrinath Temple, Uttarakhand"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{language === "hi" ? "बद्रीनाथ मंदिर" : "Badrinath Temple"}</h3>
                  <p className="text-white/80">
                    {language === "hi"
                      ? "उत्तराखंड की समृद्ध सांस्कृतिक विरासत का एक महत्वपूर्ण हिस्सा"
                      : "An important part of Uttarakhand's rich cultural heritage"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section id="values" className="py-20 bg-uttarakhand-pine/5 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-uttarakhand-pine dark:text-uttarakhand-meadow mb-4">
              {language === "hi" ? "हमारे मूल्य" : "Our Values"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {language === "hi"
                ? "हमारे मूल्य हमारे काम का मार्गदर्शन करते हैं और हमारे मिशन को पूरा करने में हमारी मदद करते हैं।"
                : "Our values guide our work and help us fulfill our mission."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              className={`border-2 border-uttarakhand-pine/20 dark:border-uttarakhand-meadow/20 transition-all duration-1000 hover:shadow-lg hover:-translate-y-1 ${isVisible.values ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "0ms" }}
            >
              <CardHeader>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-uttarakhand-pine/10 dark:bg-uttarakhand-meadow/10 mb-4">
                  <Heart className="h-8 w-8 text-uttarakhand-pine dark:text-uttarakhand-meadow" />
                </div>
                <CardTitle className="text-2xl text-uttarakhand-pine dark:text-uttarakhand-meadow">
                  {language === "hi" ? "प्रेम और सम्मान" : "Love and Respect"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  {language === "hi"
                    ? "हम उत्तराखंड की भाषाओं और संस्कृति के प्रति प्रेम और सम्मान रखते हैं, और इसी भावना को अपने छात्रों में भी विकसित करना चाहते हैं।"
                    : "We have love and respect for the languages and culture of Uttarakhand, and we want to develop the same feeling in our students."}
                </p>
              </CardContent>
            </Card>

            <Card
              className={`border-2 border-uttarakhand-pine/20 dark:border-uttarakhand-meadow/20 transition-all duration-1000 hover:shadow-lg hover:-translate-y-1 ${isVisible.values ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "200ms" }}
            >
              <CardHeader>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-uttarakhand-pine/10 dark:bg-uttarakhand-meadow/10 mb-4">
                  <BookOpen className="h-8 w-8 text-uttarakhand-pine dark:text-uttarakhand-meadow" />
                </div>
                <CardTitle className="text-2xl text-uttarakhand-pine dark:text-uttarakhand-meadow">
                  {language === "hi" ? "शिक्षा और ज्ञान" : "Education and Knowledge"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  {language === "hi"
                    ? "हम मानते हैं कि शिक्षा और ज्ञान हमारी भाषाओं और संस्कृति को संरक्षित करने का सबसे प्रभावी तरीका है।"
                    : "We believe that education and knowledge are the most effective ways to preserve our languages and culture."}
                </p>
              </CardContent>
            </Card>

            <Card
              className={`border-2 border-uttarakhand-pine/20 dark:border-uttarakhand-meadow/20 transition-all duration-1000 hover:shadow-lg hover:-translate-y-1 ${isVisible.values ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "400ms" }}
            >
              <CardHeader>
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-uttarakhand-pine/10 dark:bg-uttarakhand-meadow/10 mb-4">
                  <Users className="h-8 w-8 text-uttarakhand-pine dark:text-uttarakhand-meadow" />
                </div>
                <CardTitle className="text-2xl text-uttarakhand-pine dark:text-uttarakhand-meadow">
                  {language === "hi" ? "समुदाय और सहयोग" : "Community and Collaboration"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  {language === "hi"
                    ? "हम एक समुदाय के रूप में काम करते हैं और सहयोग को बढ़ावा देते हैं, क्योंकि हम मानते हैं कि साथ मिलकर हम अधिक प्रभावी ढंग से अपने लक्ष्यों को प्राप्त कर सकते हैं।"
                    : "We work as a community and promote collaboration, because we believe that together we can achieve our goals more effectively."}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="team" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-uttarakhand-pine dark:text-uttarakhand-meadow mb-4">
              {language === "hi" ? "हमारी टीम" : "Our Team"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {language === "hi"
                ? "हमारी टीम उत्तराखंड की भाषाओं और संस्कृति के प्रति समर्पित विशेषज्ञों से बनी है।"
                : "Our team consists of experts dedicated to the languages and culture of Uttarakhand."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div
              className={`text-center transition-all duration-1000 ${isVisible.team ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "0ms" }}
            >
              <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden border-4 border-uttarakhand-pine/20 dark:border-uttarakhand-meadow/20 mb-4 shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="Dr. Anand Joshi"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-uttarakhand-pine dark:text-uttarakhand-meadow">
                {language === "hi" ? "डॉ. आनंद जोशी" : "Dr. Anand Joshi"}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                {language === "hi" ? "संस्थापक और निदेशक" : "Founder & Director"}
              </p>
              <p className="text-sm text-muted-foreground">
                {language === "hi" ? "कुमाऊँनी भाषा और साहित्य के विशेषज्ञ" : "Expert in Kumaoni language and literature"}
              </p>
              <div className="mt-4 flex justify-center space-x-3">
                <a
                  href="#"
                  className="text-uttarakhand-pine hover:text-uttarakhand-pine/80 dark:text-uttarakhand-meadow dark:hover:text-uttarakhand-meadow/80"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-uttarakhand-pine hover:text-uttarakhand-pine/80 dark:text-uttarakhand-meadow dark:hover:text-uttarakhand-meadow/80"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-uttarakhand-pine hover:text-uttarakhand-pine/80 dark:text-uttarakhand-meadow dark:hover:text-uttarakhand-meadow/80"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Team Member 2 */}
            <div
              className={`text-center transition-all duration-1000 ${isVisible.team ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden border-4 border-uttarakhand-pine/20 dark:border-uttarakhand-meadow/20 mb-4 shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                  alt="Dr. Meera Rawat"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-uttarakhand-pine dark:text-uttarakhand-meadow">
                {language === "hi" ? "डॉ. मीरा रावत" : "Dr. Meera Rawat"}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                {language === "hi" ? "शैक्षिक निदेशक" : "Academic Director"}
              </p>
              <p className="text-sm text-muted-foreground">
                {language === "hi" ? "गढ़वाली भाषा और संस्कृति की विशेषज्ञ" : "Expert in Garhwali language and culture"}
              </p>
              <div className="mt-4 flex justify-center space-x-3">
                <a
                  href="#"
                  className="text-uttarakhand-pine hover:text-uttarakhand-pine/80 dark:text-uttarakhand-meadow dark:hover:text-uttarakhand-meadow/80"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-uttarakhand-pine hover:text-uttarakhand-pine/80 dark:text-uttarakhand-meadow dark:hover:text-uttarakhand-meadow/80"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-uttarakhand-pine hover:text-uttarakhand-pine/80 dark:text-uttarakhand-meadow dark:hover:text-uttarakhand-meadow/80"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Team Member 3 */}
            <div
              className={`text-center transition-all duration-1000 ${isVisible.team ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden border-4 border-uttarakhand-pine/20 dark:border-uttarakhand-meadow/20 mb-4 shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="Rajendra Singh Negi"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-uttarakhand-pine dark:text-uttarakhand-meadow">
                {language === "hi" ? "राजेंद्र सिंह नेगी" : "Rajendra Singh Negi"}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                {language === "hi" ? "वरिष्ठ भाषा शिक्षक" : "Senior Language Instructor"}
              </p>
              <p className="text-sm text-muted-foreground">
                {language === "hi"
                  ? "20+ वर्षों का कुमाऊँनी भाषा शिक्षण अनुभव"
                  : "20+ years of experience in teaching Kumaoni language"}
              </p>
              <div className="mt-4 flex justify-center space-x-3">
                <a
                  href="#"
                  className="text-uttarakhand-pine hover:text-uttarakhand-pine/80 dark:text-uttarakhand-meadow dark:hover:text-uttarakhand-meadow/80"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-uttarakhand-pine hover:text-uttarakhand-pine/80 dark:text-uttarakhand-meadow dark:hover:text-uttarakhand-meadow/80"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-uttarakhand-pine hover:text-uttarakhand-pine/80 dark:text-uttarakhand-meadow dark:hover:text-uttarakhand-meadow/80"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Team Member 4 */}
            <div
              className={`text-center transition-all duration-1000 ${isVisible.team ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "600ms" }}
            >
              <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden border-4 border-uttarakhand-pine/20 dark:border-uttarakhand-meadow/20 mb-4 shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
                  alt="Geeta Bisht"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-uttarakhand-pine dark:text-uttarakhand-meadow">
                {language === "hi" ? "गीता बिष्ट" : "Geeta Bisht"}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                {language === "hi" ? "वरिष्ठ भाषा शिक्षक" : "Senior Language Instructor"}
              </p>
              <p className="text-sm text-muted-foreground">
                {language === "hi"
                  ? "15+ वर्षों का गढ़वाली भाषा शिक्षण अनुभव"
                  : "15+ years of experience in teaching Garhwali language"}
              </p>
              <div className="mt-4 flex justify-center space-x-3">
                <a
                  href="#"
                  className="text-uttarakhand-pine hover:text-uttarakhand-pine/80 dark:text-uttarakhand-meadow dark:hover:text-uttarakhand-meadow/80"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-uttarakhand-pine hover:text-uttarakhand-pine/80 dark:text-uttarakhand-meadow dark:hover:text-uttarakhand-meadow/80"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-uttarakhand-pine hover:text-uttarakhand-pine/80 dark:text-uttarakhand-meadow dark:hover:text-uttarakhand-meadow/80"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Achievements Section */}
      <section id="achievements" className="py-20 bg-uttarakhand-pine/5 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-uttarakhand-pine dark:text-uttarakhand-meadow mb-4">
              {language === "hi" ? "हमारी उपलब्धियाँ" : "Our Achievements"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {language === "hi"
                ? "हमने अपनी यात्रा में कई महत्वपूर्ण उपलब्धियाँ हासिल की हैं।"
                : "We have achieved several significant milestones in our journey."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card
              className={`border-2 border-uttarakhand-pine/20 dark:border-uttarakhand-meadow/20 text-center p-6 transition-all duration-1000 ${isVisible.achievements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "0ms" }}
            >
              <div className="text-5xl font-bold text-uttarakhand-pine dark:text-uttarakhand-meadow mb-2">5000+</div>
              <p className="text-lg text-muted-foreground">{language === "hi" ? "छात्र" : "Students"}</p>
            </Card>

            <Card
              className={`border-2 border-uttarakhand-pine/20 dark:border-uttarakhand-meadow/20 text-center p-6 transition-all duration-1000 ${isVisible.achievements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="text-5xl font-bold text-uttarakhand-pine dark:text-uttarakhand-meadow mb-2">20+</div>
              <p className="text-lg text-muted-foreground">{language === "hi" ? "पाठ्यक्रम" : "Courses"}</p>
            </Card>

            <Card
              className={`border-2 border-uttarakhand-pine/20 dark:border-uttarakhand-meadow/20 text-center p-6 transition-all duration-1000 ${isVisible.achievements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="text-5xl font-bold text-uttarakhand-pine dark:text-uttarakhand-meadow mb-2">100+</div>
              <p className="text-lg text-muted-foreground">{language === "hi" ? "वर्कशॉप" : "Workshops"}</p>
            </Card>

            <Card
              className={`border-2 border-uttarakhand-pine/20 dark:border-uttarakhand-meadow/20 text-center p-6 transition-all duration-1000 ${isVisible.achievements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "600ms" }}
            >
              <div className="text-5xl font-bold text-uttarakhand-pine dark:text-uttarakhand-meadow mb-2">10+</div>
              <p className="text-lg text-muted-foreground">{language === "hi" ? "पुरस्कार" : "Awards"}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-uttarakhand-pine dark:text-uttarakhand-meadow mb-4">
              {language === "hi" ? "उत्तराखंड की झलक" : "Glimpses of Uttarakhand"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {language === "hi"
                ? "उत्तराखंड की सुंदरता और संस्कृति की कुछ झलकियाँ"
                : "Some glimpses of the beauty and culture of Uttarakhand"}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-40 md:h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Nainital Lake"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-40 md:h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1589182337358-2cb63099350c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                alt="Badrinath Temple"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-40 md:h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1626714100232-114c6a8c5ef2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Mussoorie"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-40 md:h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                alt="Kedarnath Temple"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <Button
              className="bg-uttarakhand-mountain hover:bg-uttarakhand-mountain/90 text-white"
              onClick={() => (window.location.href = "/gallery")}
            >
              {language === "hi" ? "गैलरी देखें" : "View Gallery"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-20 bg-uttarakhand-pine text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{language === "hi" ? "हमसे जुड़ें" : "Join Us"}</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              {language === "hi"
                ? "उत्तराखंड की भाषाओं और संस्कृति को संरक्षित करने के मिशन में हमारे साथ जुड़ें।"
                : "Join us in our mission to preserve the languages and culture of Uttarakhand."}
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="https://forms.gle/QsgATnNtYchCKJB48" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-uttarakhand-pine hover:bg-white/90">
                {language === "hi" ? "अभी रजिस्टर करें" : "Register Now"}
              </Button>
            </a>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              {language === "hi" ? "हमसे संपर्क करें" : "Contact Us"}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

