"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"

export function Logo() {
  const { language } = useLanguage()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative z-10"
        initial={{ scale: 1 }}
        animate={{
          scale: isHovered ? 1.05 : 1,
          rotate: isHovered ? [0, -2, 2, -2, 0] : 0,
        }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 200,
        }}
      >
        <div className="flex items-center">
          <div className="relative w-12 h-12 mr-2 overflow-hidden rounded-full bg-gradient-to-br from-uttarakhand-mountain to-uttarakhand-pine">
            <motion.div
              className="absolute inset-0 bg-[url('/mountains-silhouette.svg')] bg-no-repeat bg-bottom"
              animate={{
                y: isHovered ? [0, -5, 0] : 0,
              }}
              transition={{
                duration: 1.5,
                repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-uttarakhand-flower via-uttarakhand-sunset to-uttarakhand-flower opacity-70"
              animate={{
                x: isHovered ? [0, 12, 0] : 0,
              }}
              transition={{
                duration: 2,
                repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
                repeatType: "reverse",
              }}
            />
          </div>
          <div>
            <motion.h1
              className="text-xl font-bold font-pahadi bg-gradient-to-r from-uttarakhand-mountain to-uttarakhand-pine bg-clip-text text-transparent"
              animate={{
                y: isHovered ? [0, -2, 0] : 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                type: "spring",
                stiffness: 300,
              }}
            >
              {language === "hi" ? "वी पहाड़ी" : "V Pahadi"}
            </motion.h1>
            <motion.p
              className="text-xs text-muted-foreground font-pahadi"
              animate={{
                y: isHovered ? [0, -2, 0] : 0,
                opacity: isHovered ? 1 : 0.8,
              }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                type: "spring",
                stiffness: 300,
              }}
            >
              {language === "hi" ? "उत्तराखंड भाषा मंच" : "Uttarakhand Language Platform"}
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Animated background elements */}
      {isHovered && (
        <>
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-uttarakhand-flower"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.7, 0],
              x: [0, 10, 20],
              y: [0, -10, -20],
            }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-uttarakhand-sunset"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.7, 0],
              x: [0, -10, -15],
              y: [0, 10, 15],
            }}
            transition={{ duration: 1.2, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
          />
          <motion.div
            className="absolute top-1/2 -right-2 w-2 h-2 rounded-full bg-uttarakhand-pine"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.7, 0],
              x: [0, 10, 15],
              y: [0, 5, 10],
            }}
            transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
          />
        </>
      )}
    </div>
  )
}

