import { ShoppingCart } from 'phosphor-react'
import { Button } from '../Button'
import { Count } from '../Count'
import {
  Description,
  Footer,
  Header,
  Infos,
  Name,
  Price,
  PriceContainer,
  Type,
  Types,
  Wrapper,
} from './styles'

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
  return (
    <Wrapper>
      <Header>
        <img src={image} alt="" />

        <Types>
          {types.map((type) => (
            <Type key={type}>{type}</Type>
          ))}
        </Types>
      </Header>

      <Infos>
        <Name>{name}</Name>

        <Description>{description}</Description>
      </Infos>

      <Footer>
        <PriceContainer>
          <span>R$</span>
          <Price>{price}</Price>
        </PriceContainer>

        <div>
          <Count />
          <Button
            backgroundColor="purpleDark"
            hoverColor="purple"
            icon={{ icon: <ShoppingCart weight="fill" />, color: 'white' }}
          />
        </div>
      </Footer>
    </Wrapper>
  )
}
