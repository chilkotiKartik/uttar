"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

export function FeaturedDestinations() {
  const { language } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)

  const destinations = [
    {
      name: {
        hi: "केदारनाथ",
        en: "Kedarnath",
      },
      image:
        "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      description: {
        hi: "केदारनाथ उत्तराखंड के रुद्रप्रयाग जिले में स्थित एक प्रसिद्ध हिंदू मंदिर है। यह चारधाम यात्रा का एक महत्वपूर्ण हिस्सा है और भगवान शिव को समर्पित है।",
        en: "Kedarnath is a famous Hindu temple located in the Rudraprayag district of Uttarakhand. It is an important part of the Char Dham pilgrimage and is dedicated to Lord Shiva.",
      },
      location: {
        hi: "रुद्रप्रयाग, उत्तराखंड",
        en: "Rudraprayag, Uttarakhand",
      },
      localPhrase: {
        phrase: "ज्वाल बिना जीवन नहीं चल सकदा",
        meaning: {
          hi: "पानी के बिना जीवन नहीं चल सकता",
          en: "Life cannot go on without water",
        },
        language: "कुमाऊँनी (Kumaoni)",
      },
    },
    {
      name: {
        hi: "नैनीताल",
        en: "Nainital",
      },
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      description: {
        hi: "नैनीताल उत्तराखंड का एक प्रसिद्ध हिल स्टेशन है, जो अपनी सुंदर झील के लिए जाना जाता है। यह कुमाऊँ क्षेत्र में स्थित है और पर्यटकों के बीच बहुत लोकप्रिय है।",
        en: "Nainital is a famous hill station in Uttarakhand, known for its beautiful lake. It is located in the Kumaon region and is very popular among tourists.",
      },
      location: {
        hi: "नैनीताल, उत्तराखंड",
        en: "Nainital, Uttarakhand",
      },
      localPhrase: {
        phrase: "हमरी नैनी झील बड़ी सुन्दर छ",
        meaning: {
          hi: "हमारी नैनीताल झील बहुत सुंदर है",
          en: "Our Nainital lake is very beautiful",
        },
        language: "कुमाऊँनी (Kumaoni)",
      },
    },
    {
      name: {
        hi: "मसूरी",
        en: "Mussoorie",
      },
      image:
        "https://images.unsplash.com/photo-1626714100232-114c6a8c5ef2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      description: {
        hi: "मसूरी उत्तराखंड का एक प्रसिद्ध हिल स्टेशन है, जिसे 'पहाड़ों की रानी' के नाम से भी जाना जाता है। यह गढ़वाल क्षेत्र में स्थित है और अपने सुंदर दृश्यों के लिए प्रसिद्ध है।",
        en: "Mussoorie is a famous hill station in Uttarakhand, also known as the 'Queen of Hills'. It is located in the Garhwal region and is famous for its beautiful views.",
      },
      location: {
        hi: "देहरादून, उत्तराखंड",
        en: "Dehradun, Uttarakhand",
      },
      localPhrase: {
        phrase: "मसूरी का मौसम बड़ा सुहाणा छ",
        meaning: {
          hi: "मसूरी का मौसम बहुत सुहावना है",
          en: "The weather of Mussoorie is very pleasant",
        },
        language: "गढ़वाली (Garhwali)",
      },
    },
    {
      name: {
        hi: "बद्रीनाथ",
        en: "Badrinath",
      },
      image:
        "https://images.unsplash.com/photo-1589182337358-2cb63099350c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      description: {
        hi: "बद्रीनाथ उत्तराखंड के चमोली जिले में स्थित एक प्रसिद्ध हिंदू मंदिर है। यह चारधाम यात्रा का एक महत्वपूर्ण हिस्सा है और भगवान विष्णु को समर्पित है।",
        en: "Badrinath is a famous Hindu temple located in the Chamoli district of Uttarakhand. It is an important part of the Char Dham pilgrimage and is dedicated to Lord Vishnu.",
      },
      location: {
        hi: "चमोली, उत्तराखंड",
        en: "Chamoli, Uttarakhand",
      },
      localPhrase: {
        phrase: "जय बदरी विशाल",
        meaning: {
          hi: "बद्रीनाथ की जय हो",
          en: "Glory to Badrinath",
        },
        language: "गढ़वाली (Garhwali)",
      },
    },
  ]

  const nextDestination = () => {
    setActiveIndex((prevIndex) => (prevIndex === destinations.length - 1 ? 0 : prevIndex + 1))
  }

  const prevDestination = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? destinations.length - 1 : prevIndex - 1))
  }

  const activeDestination = destinations[activeIndex]

  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-uttarakhand-pine/10 dark:border-uttarakhand-meadow/10">
      <div className="grid md:grid-cols-2">
        <div className="relative h-64 md:h-auto">
          <Image
            src={activeDestination.image || "/placeholder.svg"}
            alt={activeDestination.name[language as "en" | "hi"]}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent md:hidden"></div>
          <div className="absolute bottom-4 left-4 md:hidden">
            <h3 className="text-white text-xl font-bold">{activeDestination.name[language as "en" | "hi"]}</h3>
            <div className="flex items-center text-white/80 text-sm">
              <MapPin className="h-4 w-4 mr-1" />
              {activeDestination.location[language as "en" | "hi"]}
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="hidden md:block mb-4">
            <h3 className="text-2xl font-bold text-uttarakhand-pine dark:text-uttarakhand-meadow">
              {activeDestination.name[language as "en" | "hi"]}
            </h3>
            <div className="flex items-center text-muted-foreground text-sm mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              {activeDestination.location[language as "en" | "hi"]}
            </div>
          </div>

          <p className="text-muted-foreground mb-6">{activeDestination.description[language as "en" | "hi"]}</p>

          <div className="bg-uttarakhand-pine/5 dark:bg-uttarakhand-meadow/5 p-4 rounded-lg mb-6">
            <div className="text-sm text-muted-foreground mb-1">
              {language === "hi" ? "स्थानीय वाक्यांश" : "Local Phrase"}:
            </div>
            <div className="font-medium text-uttarakhand-pine dark:text-uttarakhand-meadow mb-1">
              "{activeDestination.localPhrase.phrase}"
            </div>
            <div className="text-sm text-muted-foreground mb-1">
              {language === "hi" ? "अर्थ" : "Meaning"}: {activeDestination.localPhrase.meaning[language as "en" | "hi"]}
            </div>
            <div className="text-xs text-muted-foreground">
              {language === "hi" ? "भाषा" : "Language"}: {activeDestination.localPhrase.language}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex space-x-1">
              {destinations.map((_, index) => (
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
                onClick={prevDestination}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 border-uttarakhand-pine/20 text-uttarakhand-pine hover:bg-uttarakhand-pine/10 dark:border-uttarakhand-meadow/20 dark:text-uttarakhand-meadow dark:hover:bg-uttarakhand-meadow/10"
                onClick={nextDestination}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

