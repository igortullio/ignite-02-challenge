import { ReactNode } from 'react'
import * as S from './styles'

export interface PaymentOptionProps {
  name: string
  label: string
  icon: ReactNode
}

export function PaymentOption({ name, label, icon }: PaymentOptionProps) {
  return (
    <>
      <S.Input type="radio" id={label} name={name} />
      <S.Wrapper htmlFor={label}>
        {icon}
        {label}
      </S.Wrapper>
    </>
  )
}
