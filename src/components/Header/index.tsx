import { MapPin, ShoppingCart } from 'phosphor-react'
import { Button } from '../Button'
import { Logo } from '../Logo'

import * as S from './styles'

export function Header() {
  return (
    <S.Wrapper>
      <Logo />

      <S.ButtonContainer>
        <Button
          label="Brasília, DF"
          color="purpleDark"
          backgroundColor="purpleLight"
          hoverColor="purpleLight"
          icon={{ icon: <MapPin weight="fill" />, color: 'purple' }}
        />
        <Button
          backgroundColor="yellowLight"
          hoverColor="yellow"
          icon={{ icon: <ShoppingCart weight="fill" />, color: 'yellowDark' }}
        />
      </S.ButtonContainer>
    </S.Wrapper>
  )
}
