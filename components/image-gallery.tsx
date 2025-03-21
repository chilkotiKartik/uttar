"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const images = [
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: {
      en: "Kedarnath Temple",
      hi: "केदारनाथ मंदिर",
    },
    title: {
      en: "Kedarnath Temple",
      hi: "केदारनाथ मंदिर",
    },
    description: {
      en: "A famous Hindu temple, one of the Char Dham in Uttarakhand",
      hi: "उत्तराखंड के चारधाम में से एक प्रसिद्ध हिंदू मंदिर",
    },
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: {
      en: "Nainital Lake",
      hi: "नैनीताल झील",
    },
    title: {
      en: "Nainital Lake",
      hi: "नैनीताल झील",
    },
    description: {
      en: "A famous hill station and lake in Uttarakhand",
      hi: "उत्तराखंड का प्रसिद्ध हिल स्टेशन और झील",
    },
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: {
      en: "Badrinath Temple",
      hi: "बद्रीनाथ मंदिर",
    },
    title: {
      en: "Badrinath Temple",
      hi: "बद्रीनाथ मंदिर",
    },
    description: {
      en: "A famous Hindu temple, one of the Char Dham in Uttarakhand",
      hi: "उत्तराखंड के चारधाम में से एक प्रसिद्ध हिंदू मंदिर",
    },
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: {
      en: "Mussoorie",
      hi: "मसूरी",
    },
    title: {
      en: "Mussoorie",
      hi: "मसूरी",
    },
    description: {
      en: "A hill station known as the Queen of Hills",
      hi: "क्वीन ऑफ हिल्स के नाम से प्रसिद्ध हिल स्टेशन",
    },
  },
]

export function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { language } = useLanguage()

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="relative overflow-hidden rounded-xl border-2 border-uttarakhand-pine/20 shadow-lg">
      <div className="relative h-[300px] sm:h-[400px] w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt[language as "en" | "hi"]}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-uttarakhand-pine/90 to-uttarakhand-pine/0 p-4 text-white">
              <h3 className="text-lg font-bold">{image.title[language as "en" | "hi"]}</h3>
              <p className="text-sm">{image.description[language as "en" | "hi"]}</p>
            </div>
          </div>
        ))}
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 text-white hover:bg-white/30"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 text-white hover:bg-white/30"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
      <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

