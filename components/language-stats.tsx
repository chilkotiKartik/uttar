"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { Progress } from "@/components/ui/progress"

export function LanguageStats() {
  const { language } = useLanguage()
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  const stats = [
    {
      title: {
        hi: "कुमाऊँनी बोलने वाले",
        en: "Kumaoni Speakers",
      },
      value: animate ? 20 : 0,
      description: {
        hi: "उत्तराखंड की आबादी का लगभग 20% लोग कुमाऊँनी भाषा बोलते हैं।",
        en: "About 20% of Uttarakhand's population speaks Kumaoni language.",
      },
      color: "bg-uttarakhand-pine",
    },
    {
      title: {
        hi: "गढ़वाली बोलने वाले",
        en: "Garhwali Speakers",
      },
      value: animate ? 25 : 0,
      description: {
        hi: "उत्तराखंड की आबादी का लगभग 25% लोग गढ़वाली भाषा बोलते हैं।",
        en: "About 25% of Uttarakhand's population speaks Garhwali language.",
      },
      color: "bg-uttarakhand-river",
    },
    {
      title: {
        hi: "युवा वक्ता",
        en: "Young Speakers",
      },
      value: animate ? 15 : 0,
      description: {
        hi: "केवल 15% युवा (18-30 वर्ष) स्थानीय भाषाओं को धाराप्रवाह बोल पाते हैं।",
        en: "Only 15% of youth (18-30 years) can speak local languages fluently.",
      },
      color: "bg-uttarakhand-sunset",
    },
    {
      title: {
        hi: "भाषा संरक्षण की आवश्यकता",
        en: "Need for Language Preservation",
      },
      value: animate ? 85 : 0,
      description: {
        hi: "85% लोग मानते हैं कि स्थानीय भाषाओं के संरक्षण के लिए तत्काल कदम उठाने की आवश्यकता है।",
        en: "85% believe immediate steps are needed to preserve local languages.",
      },
      color: "bg-uttarakhand-flower",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-uttarakhand-pine/10 dark:border-uttarakhand-meadow/10"
        >
          <h3 className="text-lg font-semibold mb-2 text-uttarakhand-pine dark:text-uttarakhand-meadow">
            {stat.title[language as "en" | "hi"]}
          </h3>
          <div className="flex items-center gap-2 mb-2">
            <Progress
              value={stat.value}
              className="h-2 bg-gray-100 dark:bg-gray-700 transition-all duration-1000 ease-out"
              indicatorClassName={`${stat.color} transition-all duration-1000 ease-out`}
            />
            <span className="text-sm font-medium">{stat.value}%</span>
          </div>
          <p className="text-sm text-muted-foreground">{stat.description[language as "en" | "hi"]}</p>
        </div>
      ))}
    </div>
  )
}

