import { ReactNode } from 'react'

import * as S from './styles'

export interface IconProps {
  icon: ReactNode
  text: string
  color: keyof typeof S.CIRCLE_COLORS
}

export function Icon({ icon, text, color }: IconProps) {
  return (
    <S.Wrapper>
      <S.Circle circleColor={color}>{icon}</S.Circle>
      {text}
    </S.Wrapper>
  )
}
