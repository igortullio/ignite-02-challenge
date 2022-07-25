import { ShoppingCart } from 'phosphor-react'
import {
  BuyContainer,
  CardImage,
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
import { Button } from '../Button'
import { Count } from '../Count'

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
        <CardImage src={image} alt="Uma xícara de café" />

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
          R$<Price>{price}</Price>
        </PriceContainer>

        <BuyContainer>
          <Count />
          <Button
            backgroundColor="purpleDark"
            hoverColor="purple"
            icon={{ icon: <ShoppingCart weight="fill" />, color: 'white' }}
          />
        </BuyContainer>
      </Footer>
    </Wrapper>
  )
}
