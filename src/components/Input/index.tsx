import { InputHTMLAttributes } from 'react'
import { Wrapper } from './styles'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...props }: InputProps) {
  return <Wrapper {...props}></Wrapper>
}
