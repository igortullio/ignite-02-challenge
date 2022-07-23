import americano from '../images/americano.png'
import arabe from '../images/arabe.png'
import cafeComLeite from '../images/cafe_com_leite.png'
import cafeGelado from '../images/cafe_gelado.png'
import capuccino from '../images/capuccino.png'
import chocolateQuente from '../images/chocolate_quente.png'
import cubano from '../images/cubano.png'
import expressoCremoso from '../images/expresso_cremoso.png'
import expresso from '../images/expresso.png'
import havaiano from '../images/havaiano.png'
import irlandes from '../images/irlandes.png'
import latte from '../images/latte.png'
import macchiato from '../images/macchiato.png'
import mochaccino from '../images/mochaccino.png'

import { CardProps } from '../../components/Card'

export const cardList: CardProps[] = [
  {
    image: expresso,
    types: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    image: americano,
    types: ['tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    image: expressoCremoso,
    types: ['tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    image: cafeGelado,
    types: ['tradicional', 'gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    image: cafeComLeite,
    types: ['tradicional', 'com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    image: latte,
    types: ['tradicional', 'com leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    image: capuccino,
    types: ['tradicional', 'com leite'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    image: macchiato,
    types: ['tradicional', 'com leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    image: mochaccino,
    types: ['tradicional', 'com leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    image: chocolateQuente,
    types: ['especial', 'com leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    image: cubano,
    types: ['especial', 'alcoólico', 'gelado'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    image: havaiano,
    types: ['especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    image: arabe,
    types: ['especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    image: irlandes,
    types: ['tradicional', 'alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
]
