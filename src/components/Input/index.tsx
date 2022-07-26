import { InputHTMLAttributes } from 'react'

import * as S from './styles'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...props }: InputProps) {
  return <S.Wrapper {...props}></S.Wrapper>
}
