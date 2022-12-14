import { ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { formatCurrency } from '../../utils/currencyUtil'
import { Button } from '../Button'
import { Count } from '../Count'

import * as S from './styles'

export type CardType =
  | 'tradicional'
  | 'especial'
  | 'com leite'
  | 'alcoólico'
  | 'gelado'

export interface CardProps {
  image: string
  types: CardType[]
  name: string
  description: string
  price: number
}

export function Card({ image, types, name, description, price }: CardProps) {
  const { addItem } = useContext(CartContext)
  const [quantity, setQuantity] = useState(0)

  function handleAddItem() {
    addItem({
      name,
      price,
      quantity,
      image,
    })

    setQuantity(0)
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.CardImage src={image} alt="Uma xícara de café" />

        <S.Types>
          {types.map((type) => (
            <S.Type key={type}>{type}</S.Type>
          ))}
        </S.Types>
      </S.Header>

      <S.Infos>
        <S.Name>{name}</S.Name>

        <S.Description>{description}</S.Description>
      </S.Infos>

      <S.Footer>
        <S.PriceContainer>
          R$
          <S.Price>
            {formatCurrency(quantity === 0 ? price : price * quantity, false)}
          </S.Price>
        </S.PriceContainer>

        <S.BuyContainer>
          <Count quantity={quantity} updateQuantity={setQuantity} />
          <Button
            backgroundColor="purpleDark"
            hoverColor="purple"
            icon={{ icon: <ShoppingCart weight="fill" />, color: 'white' }}
            disabled={quantity <= 0}
            onClick={handleAddItem}
          />
        </S.BuyContainer>
      </S.Footer>
    </S.Wrapper>
  )
}
