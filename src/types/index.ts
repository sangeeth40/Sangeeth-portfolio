import type { ReactNode } from 'react'

export interface SkillCategory {
  title: string
  icon: ReactNode
  color: string
  skills: string[]
}

export interface Experience {
  company: string
  role: string
  period: string
  location: string
  highlights: string[]
}

export interface Certification {
  name: string
  provider: string
  year: string
}

export interface Education {
  institution: string
  university:  string
  degree:      string
  period:      string
  location:    string
}

export interface Particle {
  id: number
  left: string
  top: string
  size: string
  duration: string
  delay: string
  color: string
}
