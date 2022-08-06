import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { Button } from '../Button'
import { Logo } from '../Logo'

import * as S from './styles'

export function Header() {
  const { items } = useContext(CartContext)

  return (
    <S.Wrapper>
      <Link to="/">
        <Logo />
      </Link>

      <S.ButtonContainer>
        <Button
          label="Brasília, DF"
          color="purpleDark"
          backgroundColor="purpleLight"
          hoverColor="purpleLight"
          icon={{ icon: <MapPin weight="fill" />, color: 'purple' }}
        />
        <Link to="/checkout">
          <Button
            fullHeight
            backgroundColor="yellowLight"
            hoverColor="yellow"
            icon={{ icon: <ShoppingCart weight="fill" />, color: 'yellowDark' }}
            quantity={items.length}
            disabled={items.length < 1}
          />
        </Link>
      </S.ButtonContainer>
    </S.Wrapper>
  )
}
