import {
  Information,
  ListItem,
  Menu,
  Paragrath,
  Title,
  UnorderedList,
  Wrapper,
} from './styles'

import image from '../../assets/images/cup_coffee.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { Icon, IconProps } from '../../components/Icon'

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

      <Menu></Menu>
    </Wrapper>
  )
}
