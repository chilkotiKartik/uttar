"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

export function Testimonials() {
  const { language } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: {
        hi: "अनुराग नेगी",
        en: "Anurag Negi",
      },
      location: {
        hi: "देहरादून, उत्तराखंड",
        en: "Dehradun, Uttarakhand",
      },
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: {
        hi: "उत्तराखंड भाषा के कुमाऊँनी पाठ्यक्रम ने मुझे अपनी मातृभाषा से फिर से जुड़ने में मदद की। अब मैं अपने दादा-दादी से उनकी भाषा में बात कर सकता हूँ, जिससे हमारा रिश्ता और मजबूत हुआ है।",
        en: "The Kumaoni course from Uttarakhand Bhasha helped me reconnect with my mother tongue. Now I can talk to my grandparents in their language, which has strengthened our relationship.",
      },
    },
    {
      name: {
        hi: "प्रीति बिष्ट",
        en: "Preeti Bisht",
      },
      location: {
        hi: "नैनीताल, उत्तराखंड",
        en: "Nainital, Uttarakhand",
      },
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: {
        hi: "मैं दिल्ली में रहती हूँ, लेकिन उत्तराखंड भाषा के ऑनलाइन कोर्स के माध्यम से मैं अपनी गढ़वाली भाषा और संस्कृति से जुड़ी रह सकती हूँ। यह मेरे लिए अपनी जड़ों से जुड़े रहने का एक शानदार तरीका है।",
        en: "I live in Delhi, but through the online courses of Uttarakhand Bhasha, I can stay connected to my Garhwali language and culture. It's a wonderful way for me to stay connected to my roots.",
      },
    },
    {
      name: {
        hi: "मोहित रावत",
        en: "Mohit Rawat",
      },
      location: {
        hi: "हरिद्वार, उत्तराखंड",
        en: "Haridwar, Uttarakhand",
      },
      image: "https://randomuser.me/api/portraits/men/62.jpg",
      quote: {
        hi: "उत्तराखंड भाषा के वर्कशॉप्स बहुत इंटरैक्टिव और मजेदार हैं। मैंने न केवल भाषा सीखी, बल्कि उत्तराखंड के इतिहास और संस्कृति के बारे में भी बहुत कुछ जाना। यह एक अद्भुत अनुभव रहा है।",
        en: "The workshops of Uttarakhand Bhasha are very interactive and fun. I not only learned the language but also learned a lot about the history and culture of Uttarakhand. It has been a wonderful experience.",
      },
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-uttarakhand-pine/10 dark:border-uttarakhand-meadow/10 p-6 md:p-8">
      <Quote className="h-12 w-12 text-uttarakhand-pine/10 dark:text-uttarakhand-meadow/10 absolute top-6 right-6" />

      <div className="relative z-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`transition-opacity duration-500 ${
              index === activeIndex ? "opacity-100" : "opacity-0 absolute inset-0"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="relative h-20 w-20 md:h-24 md:w-24 rounded-full overflow-hidden border-2 border-uttarakhand-pine dark:border-uttarakhand-meadow">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name[language as "en" | "hi"]}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <p className="text-lg text-muted-foreground italic mb-4">
                  "{testimonial.quote[language as "en" | "hi"]}"
                </p>

                <div>
                  <h4 className="font-semibold text-uttarakhand-pine dark:text-uttarakhand-meadow">
                    {testimonial.name[language as "en" | "hi"]}
                  </h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location[language as "en" | "hi"]}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between items-center">
        <div className="flex space-x-1">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === activeIndex
                  ? "bg-uttarakhand-pine dark:bg-uttarakhand-meadow"
                  : "bg-uttarakhand-pine/20 dark:bg-uttarakhand-meadow/20"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 border-uttarakhand-pine/20 text-uttarakhand-pine hover:bg-uttarakhand-pine/10 dark:border-uttarakhand-meadow/20 dark:text-uttarakhand-meadow dark:hover:bg-uttarakhand-meadow/10"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 border-uttarakhand-pine/20 text-uttarakhand-pine hover:bg-uttarakhand-pine/10 dark:border-uttarakhand-meadow/20 dark:text-uttarakhand-meadow dark:hover:bg-uttarakhand-meadow/10"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

