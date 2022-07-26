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
}

export function Button({ label, icon, ...props }: ButtonProps) {
  return (
    <S.Wrapper icon={icon} {...props}>
      {icon?.icon}
      {label}
    </S.Wrapper>
  )
}
