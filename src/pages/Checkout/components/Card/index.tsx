import { Trash } from 'phosphor-react'
import { Button } from '../../../../components/Button'
import { Count } from '../../../../components/Count'

import americano from '../../../../assets/images/americano.png'

import * as S from './styles'

export function Card() {
  return (
    <S.Wrapper>
      <S.Image src={americano} alt="" />
      <S.Information>
        <S.Title>Expresso Tradicional</S.Title>
        <S.InformationFooter>
          <Count />
          <Button
            icon={{ icon: <Trash size={16} />, color: 'purple' }}
            label="remover"
            backgroundColor="button"
            hoverColor="hover"
            color="text"
          />
        </S.InformationFooter>
      </S.Information>
      <S.PriceContainer>
        R$ <S.Price>9,90</S.Price>
      </S.PriceContainer>
    </S.Wrapper>
  )
}
