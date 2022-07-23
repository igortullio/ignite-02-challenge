import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { IconProps } from '../../components/Icon'

export const informationList: IconProps[] = [
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
