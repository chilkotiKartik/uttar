"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause, X, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

interface Video {
  id: string
  title: {
    en: string
    hi: string
  }
  description: {
    en: string
    hi: string
  }
  type: "youtube" | "instagram"
  thumbnail: string
}

interface VideoGalleryProps {
  videos: Video[]
  title?: {
    en: string
    hi: string
  }
  description?: {
    en: string
    hi: string
  }
}

export function VideoGallery({
  videos,
  title = { en: "Video Gallery", hi: "वीडियो गैलरी" },
  description = {
    en: "Explore Uttarakhand through these amazing videos",
    hi: "इन अद्भुत वीडियो के माध्यम से उत्तराखंड का अन्वेषण करें",
  },
}: VideoGalleryProps) {
  const { language } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const nextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length)
  }

  const prevVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length)
  }

  const openModal = (index: number) => {
    setCurrentIndex(index)
    setIsModalOpen(true)
    setIsPlaying(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setIsPlaying(false)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const currentVideo = videos[currentIndex]

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2 font-pahadi">{title[language === "hi" ? "hi" : "en"]}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto font-pahadi">
          {description[language === "hi" ? "hi" : "en"]}
        </p>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            className="relative rounded-lg overflow-hidden shadow-md cursor-pointer group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => openModal(index)}
          >
            <div className="aspect-video relative">
              <img
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title[language === "hi" ? "hi" : "en"]}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
                  <Play className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-bold font-pahadi truncate">
                  {video.title[language === "hi" ? "hi" : "en"]}
                </h3>
                <p className="text-white/80 text-sm font-pahadi line-clamp-1">
                  {video.type === "youtube" ? "YouTube" : "Instagram"}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-lg overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-lg font-bold font-pahadi">{currentVideo.title[language === "hi" ? "hi" : "en"]}</h3>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon" onClick={togglePlayPause} className="rounded-full">
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </Button>
                  <Button variant="ghost" size="icon" onClick={closeModal} className="rounded-full">
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="aspect-video relative">
                {currentVideo.type === "youtube" && (
                  <iframe
                    src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=${isPlaying ? 1 : 0}&mute=0`}
                    title={currentVideo.title[language === "hi" ? "hi" : "en"]}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
                {currentVideo.type === "instagram" && (
                  <iframe
                    src={`https://www.instagram.com/p/${currentVideo.id}/embed`}
                    title={currentVideo.title[language === "hi" ? "hi" : "en"]}
                    className="absolute inset-0 w-full h-full"
                    allowFullScreen
                  ></iframe>
                )}
              </div>

              <div className="p-4">
                <p className="text-muted-foreground font-pahadi">
                  {currentVideo.description[language === "hi" ? "hi" : "en"]}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={prevVideo} className="rounded-full">
                      <ChevronLeft className="h-4 w-4 mr-1" />
                      {language === "hi" ? "पिछला" : "Previous"}
                    </Button>
                    <Button variant="outline" size="sm" onClick={nextVideo} className="rounded-full">
                      {language === "hi" ? "अगला" : "Next"}
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-full"
                    onClick={() => {
                      window.open(
                        currentVideo.type === "youtube"
                          ? `https://www.youtube.com/watch?v=${currentVideo.id}`
                          : `https://www.instagram.com/p/${currentVideo.id}/`,
                        "_blank",
                      )
                    }}
                  >
                    {language === "hi" ? "स्रोत पर देखें" : "View on source"}
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

