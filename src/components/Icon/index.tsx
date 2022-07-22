import { ReactNode } from 'react'
import { Circle, CIRCLE_COLORS, Wrapper } from './styles'

export interface IconProps {
  icon: ReactNode
  text: string
  color: keyof typeof CIRCLE_COLORS
}

export function Icon({ icon, text, color }: IconProps) {
  return (
    <Wrapper>
      <Circle circleColor={color}>{icon}</Circle>
      {text}
    </Wrapper>
  )
}
