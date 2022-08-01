import { ButtonHTMLAttributes, ReactNode } from 'react'
import { defaultTheme } from '../../styles/theme/default'

import * as S from './styles'

type Colors = keyof typeof defaultTheme.colors

export type IconProps = {
  icon: ReactNode
  color: Colors
  hoverColor?: Colors
}
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean
  fullHeight?: boolean
  label?: string
  color?: Colors
  backgroundColor?: Colors
  hoverColor?: Colors
  icon?: IconProps
  quantity?: number
}

export function Button({ label, icon, quantity = 0, ...props }: ButtonProps) {
  return (
    <S.Wrapper icon={icon} {...props}>
      {quantity > 0 && <S.Badge>{quantity}</S.Badge>}
      {icon?.icon}
      {label}
    </S.Wrapper>
  )
}
