import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Wrapper } from './styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
  fullWidth?: boolean
  fullHeight?: boolean
  label?: string
  icon?: ReactNode
}

export function Button({
  variant,
  fullWidth = false,
  fullHeight = false,
  label,
  icon,
  ...props
}: ButtonProps) {
  return (
    <Wrapper
      variant={variant}
      fullWidth={fullWidth}
      fullHeight={fullHeight}
      {...props}
    >
      {icon}
      {!!label && <span>{label}</span>}
    </Wrapper>
  )
}
