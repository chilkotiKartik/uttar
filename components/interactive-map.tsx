"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"

interface District {
  id: number
  name: {
    en: string
    hi: string
  }
  path: string
  coordinates: {
    x: number
    y: number
  }
}

const districts: District[] = [
  {
    id: 1,
    name: { en: "Dehradun", hi: "देहरादून" },
    path: "M50,180 L70,190 L90,185 L100,200 L80,220 L60,210 L40,220 L30,200 Z",
    coordinates: { x: 65, y: 200 },
  },
  {
    id: 2,
    name: { en: "Haridwar", hi: "हरिद्वार" },
    path: "M60,210 L80,220 L90,240 L70,260 L50,250 L40,220 Z",
    coordinates: { x: 65, y: 235 },
  },
  {
    id: 3,
    name: { en: "Uttarkashi", hi: "उत्तरकाशी" },
    path: "M90,80 L120,90 L140,120 L120,150 L90,140 L70,120 L80,100 Z",
    coordinates: { x: 105, y: 115 },
  },
  {
    id: 4,
    name: { en: "Tehri Garhwal", hi: "टिहरी गढ़वाल" },
    path: "M90,140 L120,150 L130,170 L100,200 L90,185 L70,190 L70,170 Z",
    coordinates: { x: 100, y: 170 },
  },
  {
    id: 5,
    name: { en: "Pauri Garhwal", hi: "पौड़ी गढ़वाल" },
    path: "M100,200 L130,170 L160,180 L170,210 L150,230 L120,240 L90,240 L80,220 Z",
    coordinates: { x: 135, y: 205 },
  },
  {
    id: 6,
    name: { en: "Rudraprayag", hi: "रुद्रप्रयाग" },
    path: "M130,170 L160,150 L180,160 L160,180 Z",
    coordinates: { x: 155, y: 165 },
  },
  {
    id: 7,
    name: { en: "Chamoli", hi: "चमोली" },
    path: "M120,150 L160,120 L190,130 L200,150 L180,160 L160,150 Z",
    coordinates: { x: 160, y: 140 },
  },
  {
    id: 8,
    name: { en: "Bageshwar", hi: "बागेश्वर" },
    path: "M190,130 L220,120 L240,140 L220,160 L200,150 Z",
    coordinates: { x: 215, y: 140 },
  },
  {
    id: 9,
    name: { en: "Almora", hi: "अल्मोड़ा" },
    path: "M200,150 L220,160 L230,180 L210,200 L190,190 L180,160 Z",
    coordinates: { x: 205, y: 175 },
  },
  {
    id: 10,
    name: { en: "Nainital", hi: "नैनीताल" },
    path: "M180,160 L190,190 L210,200 L200,220 L170,210 Z",
    coordinates: { x: 190, y: 195 },
  },
  {
    id: 11,
    name: { en: "Champawat", hi: "चंपावत" },
    path: "M210,200 L230,180 L250,190 L240,210 L220,220 L200,220 Z",
    coordinates: { x: 225, y: 200 },
  },
  {
    id: 12,
    name: { en: "Pithoragarh", hi: "पिथौरागढ़" },
    path: "M220,120 L250,100 L270,120 L260,150 L250,190 L230,180 L240,140 Z",
    coordinates: { x: 245, y: 145 },
  },
  {
    id: 13,
    name: { en: "Udham Singh Nagar", hi: "ऊधम सिंह नगर" },
    path: "M170,210 L200,220 L220,220 L230,240 L200,260 L170,250 L150,230 Z",
    coordinates: { x: 200, y: 235 },
  },
]

export function InteractiveMap() {
  const { language } = useLanguage()
  const router = useRouter()
  const [hoveredDistrict, setHoveredDistrict] = useState<number | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })

  const handleDistrictClick = (districtId: number) => {
    router.push(`/districts/${districtId}`)
  }

  const handleDistrictHover = (districtId: number, e: React.MouseEvent) => {
    setHoveredDistrict(districtId)

    // Calculate tooltip position
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setTooltipPosition({ x, y })
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <svg
        viewBox="0 0 300 300"
        className="w-full h-auto"
        style={{ filter: "drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.15))" }}
      >
        <defs>
          <linearGradient id="uttarakhand-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F7942" />
            <stop offset="50%" stopColor="#6A8E7F" />
            <stop offset="100%" stopColor="#8FB4C0" />
          </linearGradient>
        </defs>

        {/* State outline */}
        <path
          d="M50,180 L30,200 L40,220 L50,250 L70,260 L90,240 L120,240 L150,230 L170,250 L200,260 L230,240 L220,220 L240,210 L250,190 L260,150 L270,120 L250,100 L220,120 L190,130 L160,120 L140,120 L120,90 L90,80 L80,100 L70,120 L70,170 L50,180 Z"
          fill="none"
          stroke="#333"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Districts */}
        {districts.map((district) => (
          <motion.path
            key={district.id}
            d={district.path}
            fill={hoveredDistrict === district.id ? "url(#uttarakhand-gradient)" : "#8FB4C0"}
            stroke="#fff"
            strokeWidth="1"
            initial={{ opacity: 0.7 }}
            animate={{
              opacity: hoveredDistrict === district.id ? 1 : 0.7,
              scale: hoveredDistrict === district.id ? 1.02 : 1,
            }}
            transition={{ duration: 0.3 }}
            onClick={() => handleDistrictClick(district.id)}
            onMouseEnter={(e) => handleDistrictHover(district.id, e)}
            onMouseLeave={() => setHoveredDistrict(null)}
            style={{ cursor: "pointer" }}
          />
        ))}

        {/* District labels */}
        {districts.map((district) => (
          <g key={`label-${district.id}`}>
            <circle
              cx={district.coordinates.x}
              cy={district.coordinates.y}
              r="3"
              fill="#fff"
              stroke="#333"
              strokeWidth="0.5"
            />
            {hoveredDistrict === district.id && (
              <motion.text
                x={district.coordinates.x}
                y={district.coordinates.y - 10}
                textAnchor="middle"
                fill="#fff"
                fontSize="8"
                fontWeight="bold"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                style={{
                  filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.5))",
                  pointerEvents: "none",
                }}
              >
                {district.name[language === "hi" ? "hi" : "en"]}
              </motion.text>
            )}
          </g>
        ))}
      </svg>

      {/* Tooltip */}
      {hoveredDistrict !== null && (
        <div
          className="absolute pointer-events-none bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow-lg text-sm font-pahadi"
          style={{
            left: `${tooltipPosition.x}px`,
            top: `${tooltipPosition.y - 40}px`,
            transform: "translateX(-50%)",
            zIndex: 10,
          }}
        >
          {districts.find((d) => d.id === hoveredDistrict)?.name[language === "hi" ? "hi" : "en"]}
        </div>
      )}

      <div className="mt-4 text-center">
        <p className="text-sm text-muted-foreground font-pahadi">
          {language === "hi"
            ? "जिले के बारे में अधिक जानकारी के लिए मानचित्र पर क्लिक करें"
            : "Click on the map to learn more about a district"}
        </p>
      </div>
    </div>
  )
}

