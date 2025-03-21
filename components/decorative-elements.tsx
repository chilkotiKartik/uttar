import type React from "react"
import { cn } from "@/lib/utils"

interface AipanBorderProps {
  className?: string
  children: React.ReactNode
}

export function AipanBorder({ className, children }: AipanBorderProps) {
  return <div className={cn("relative p-6 aipan-border", className)}>{children}</div>
}

interface TempleArchProps {
  className?: string
  children: React.ReactNode
}

export function TempleArch({ className, children }: TempleArchProps) {
  return <div className={cn("temple-arch p-4", className)}>{children}</div>
}

interface WoodenFrameProps {
  className?: string
  children: React.ReactNode
}

export function WoodenFrame({ className, children }: WoodenFrameProps) {
  return <div className={cn("wooden-card p-4", className)}>{children}</div>
}

interface DamauDrumProps {
  className?: string
  children?: React.ReactNode
}

export function DamauDrum({ className, children }: DamauDrumProps) {
  return (
    <div className={cn("damau-drum inline-block", className)}>
      {children || (
        <div className="h-10 w-10 bg-uttarakhand-sunset rounded-full flex items-center justify-center text-white">
          <span className="font-pahadi">ढोल</span>
        </div>
      )}
    </div>
  )
}

interface MountainDividerProps {
  className?: string
}

export function MountainDivider({ className }: MountainDividerProps) {
  return (
    <div className={cn("relative py-8", className)}>
      <div className="absolute inset-0 bg-mountain-pattern bg-repeat-x bg-bottom"></div>
      <div className="h-12"></div>
    </div>
  )
}

