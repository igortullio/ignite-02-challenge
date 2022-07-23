import {
  CoffeeList,
  Information,
  ListItem,
  Menu,
  MenuTitle,
  Paragrath,
  Title,
  UnorderedList,
  Wrapper,
} from './styles'

import image from '../../assets/images/cup_coffee.png'
import imageExpresso from '../../assets/images/expresso.png'

import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { Icon, IconProps } from '../../components/Icon'
import { Card, CardProps } from '../../components/Card'

const informationList: IconProps[] = [
  {
    icon: <ShoppingCart weight="fill" size={16} />,
    text: 'Compra simples e segura',
    color: 'yellowDark',
  },
  {
    icon: <Package weight="fill" size={16} />,
    text: 'Embalagem mantém o café intacto',
    color: 'black',
  },
  {
    icon: <Timer weight="fill" size={16} />,
    text: 'Entrega rápida e rastreada',
    color: 'yellow',
  },
  {
    icon: <Coffee weight="fill" size={16} />,
    text: 'O café chega fresquinho até você',
    color: 'purple',
  },
]

const cardList: CardProps[] = [
  {
    image: imageExpresso,
    types: ['tradicional', 'com leite'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    image: imageExpresso,
    types: ['tradicional', 'com leite'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    image: imageExpresso,
    types: ['tradicional', 'com leite'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    image: imageExpresso,
    types: ['tradicional', 'com leite'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    image: imageExpresso,
    types: ['tradicional', 'com leite'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    image: imageExpresso,
    types: ['tradicional', 'com leite'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
]

export function Home() {
  return (
    <Wrapper>
      <Information>
        <div>
          <div>
            <Title>Encontre o café perfeito para qualquer hora do dia</Title>
            <Paragrath>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </Paragrath>
          </div>
          <UnorderedList>
            {informationList.map((item) => (
              <ListItem key={item.text}>
                <Icon {...item} />
              </ListItem>
            ))}
          </UnorderedList>
        </div>
        <img src={image} alt="Copo de café" />
      </Information>

      <Menu>
        <MenuTitle>Nossos cafés</MenuTitle>
        <CoffeeList>
          {cardList.map((coffee) => (
            <Card key={coffee.name} {...coffee} />
          ))}
        </CoffeeList>
      </Menu>
    </Wrapper>
  )
}
