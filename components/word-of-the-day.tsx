"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Play, Pause, Volume2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

// Daily words data
const dailyWords = [
  {
    kumaoni: "ज्वाणा",
    garhwali: "ज्वाण",
    hindi: "युवक",
    english: "Young Man",
    example: {
      kumaoni: "ज्वाणा बड़ो होशियार छ।",
      garhwali: "यो ज्वाण बड़ो होशियार छ।",
      hindi: "यह युवक बहुत होशियार है।",
      english: "This young man is very intelligent.",
    },
    audio: "/audio/jwana.mp3",
  },
  {
    kumaoni: "डिकरी",
    garhwali: "धिय",
    hindi: "बेटी",
    english: "Daughter",
    example: {
      kumaoni: "मेरी डिकरी स्कूल जान्छ।",
      garhwali: "मेरी धिय स्कूल जान्द।",
      hindi: "मेरी बेटी स्कूल जाती है।",
      english: "My daughter goes to school.",
    },
    audio: "/audio/dikri.mp3",
  },
  {
    kumaoni: "बटुक",
    garhwali: "छोरू",
    hindi: "लड़का",
    english: "Boy",
    example: {
      kumaoni: "बटुक खेलणा छ।",
      garhwali: "छोरू खेलणू छ।",
      hindi: "लड़का खेल रहा है।",
      english: "The boy is playing.",
    },
    audio: "/audio/batuk.mp3",
  },
  {
    kumaoni: "दिदी",
    garhwali: "दीदी",
    hindi: "बड़ी बहन",
    english: "Elder Sister",
    example: {
      kumaoni: "मेरी दिदी काठमांडू मा छ।",
      garhwali: "मेरी दीदी काठमांडू मा छ।",
      hindi: "मेरी बड़ी बहन काठमांडू में है।",
      english: "My elder sister is in Kathmandu.",
    },
    audio: "/audio/didi.mp3",
  },
  {
    kumaoni: "भुली",
    garhwali: "भौजी",
    hindi: "भाभी",
    english: "Sister-in-law",
    example: {
      kumaoni: "भुली खाना बणाणा छन।",
      garhwali: "भौजी खाणा बणाण छन।",
      hindi: "भाभी खाना बना रही हैं।",
      english: "Sister-in-law is cooking food.",
    },
    audio: "/audio/bhuli.mp3",
  },
]

export function WordOfTheDay() {
  const { language } = useLanguage()
  const [isPlaying, setIsPlaying] = useState(false)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  // Get today's word based on the date
  useEffect(() => {
    const date = new Date()
    const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000)
    setCurrentWordIndex(dayOfYear % dailyWords.length)
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      const newAudio = new Audio(dailyWords[currentWordIndex].audio)
      setAudio(newAudio)

      return () => {
        if (newAudio) {
          newAudio.pause()
          newAudio.src = ""
        }
      }
    }
  }, [currentWordIndex, isLoaded])

  const togglePlay = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause()
      } else {
        audio.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    if (audio) {
      audio.onended = () => setIsPlaying(false)
    }
  }, [audio])

  if (!isLoaded) return null

  const currentWord = dailyWords[currentWordIndex]
  const displayLanguage = language === "hi" ? "kumaoni" : "english"
  const translationLanguage = language === "hi" ? "hindi" : "english"

  return (
    <div className="relative rounded-xl overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Uttarakhand Mountains"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-uttarakhand-mountain/80 to-uttarakhand-pine/80 backdrop-blur-sm"></div>
      </div>

      <Card className="relative z-10 border-0 bg-transparent shadow-xl">
        <CardContent className="p-6 md:p-8">
          <div className="grid grid-cols-1 gap-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-2">
                <p className="text-white font-pahadi">{language === "hi" ? "आज का शब्द" : "Word of the Day"}</p>
              </div>

              <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl border border-white/30 w-full">
                <h3 className="text-4xl font-bold text-white mb-2 font-pahadi">{currentWord.kumaoni}</h3>
                <div className="flex justify-center space-x-2 mb-4">
                  <span className="text-white/80 text-sm px-2 py-1 bg-white/10 rounded-full">
                    {language === "hi" ? "कुमाऊँनी" : "Kumaoni"}
                  </span>
                </div>
                <div className="flex justify-center mb-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white"
                    onClick={togglePlay}
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-white/70 font-pahadi">{language === "hi" ? "गढ़वाली:" : "Garhwali:"}</span>
                    <span className="text-white font-pahadi">{currentWord.garhwali}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-white/70 font-pahadi">{language === "hi" ? "हिंदी:" : "Hindi:"}</span>
                    <span className="text-white font-pahadi">{currentWord.hindi}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span className="text-white/70 font-pahadi">{language === "hi" ? "अंग्रेज़ी:" : "English:"}</span>
                    <span className="text-white font-pahadi">{currentWord.english}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur-md p-4 rounded-xl border border-white/30 w-full">
                <h4 className="text-white font-pahadi mb-2">{language === "hi" ? "उदाहरण:" : "Example:"}</h4>
                <p className="text-white/90 font-pahadi mb-2">{currentWord.example.kumaoni}</p>
                <p className="text-white/80 font-pahadi text-sm">{currentWord.example[translationLanguage]}</p>
              </div>

              <div className="flex items-center text-white/80 text-sm">
                <Volume2 className="h-4 w-4 mr-2" />
                <span className="font-pahadi">
                  {language === "hi"
                    ? "शब्द का उच्चारण सुनने के लिए प्ले बटन पर क्लिक करें"
                    : "Click the play button to hear the pronunciation"}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

