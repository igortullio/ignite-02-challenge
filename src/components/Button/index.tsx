import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Wrapper } from './styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
  fullWidth?: boolean
  label?: string
  icon?: ReactNode
}

export function Button({
  variant,
  fullWidth = false,
  label,
  icon,
  ...props
}: ButtonProps) {
  return (
    <Wrapper variant={variant} {...props}>
      {icon}
      {!!label && <span>{label}</span>}
    </Wrapper>
  )
}
