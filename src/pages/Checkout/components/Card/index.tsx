import { Trash } from 'phosphor-react'
import { Button } from '../../../../components/Button'
import { Count } from '../../../../components/Count'
import { useContext } from 'react'

import * as S from './styles'
import { CartContext } from '../../../../contexts/CartContext'
import currency from 'currency.js'

interface CardProps {
  name: string
  quantity: number
  price: number
  image: string
}

export function Card({ name, quantity, price, image }: CardProps) {
  const { removeItem, updateQuantity } = useContext(CartContext)

  function setQuantity(newValue: number) {
    if (newValue > 0) updateQuantity(name, newValue)
  }

  return (
    <S.Wrapper>
      <S.Image src={image} alt="" />
      <S.Information>
        <S.Title>{name}</S.Title>
        <S.InformationFooter>
          <Count quantity={quantity} updateQuantity={setQuantity} />
          <Button
            icon={{ icon: <Trash size={16} />, color: 'purple' }}
            label="remover"
            backgroundColor="button"
            hoverColor="hover"
            color="text"
            onClick={() => removeItem(name)}
          />
        </S.InformationFooter>
      </S.Information>
      <S.PriceContainer>
        <S.Price>
          {currency(price * quantity, {
            symbol: 'R$ ',
            precision: 2,
            decimal: ',',
            separator: '.',
          }).format()}
        </S.Price>
      </S.PriceContainer>
    </S.Wrapper>
  )
}
