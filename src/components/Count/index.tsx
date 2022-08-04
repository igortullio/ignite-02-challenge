import { Minus, Plus } from 'phosphor-react'
import { Button } from '../Button'

import * as S from './styles'

interface CountProps {
  quantity: number
  updateQuantity: (newValue: number) => void
}

export function Count({ quantity, updateQuantity }: CountProps) {
  function handleMinusClick() {
    if (quantity > 0) updateQuantity(quantity - 1)
  }

  function handlePlusClick() {
    updateQuantity(quantity + 1)
  }

  return (
    <S.Wrapper>
      <Button
        hoverColor="purpleDark"
        icon={{
          icon: <Minus size={14} />,
          color: 'purple',
          hoverColor: 'purpleDark',
        }}
        onClick={handleMinusClick}
      />
      <S.Value>{quantity}</S.Value>
      <Button
        icon={{
          icon: <Plus size={14} />,
          color: 'purple',
          hoverColor: 'purpleDark',
        }}
        onClick={handlePlusClick}
      />
    </S.Wrapper>
  )
}
