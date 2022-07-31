import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Icon } from '../../components/Icon'
import success from '../../assets/images/success.svg'

import * as S from './styles'

export function Success() {
  return (
    <S.Wrapper>
      <S.InformationHeaderContainer>
        <S.Title>Uhu! Pedido confirmado</S.Title>
        <S.Subtitle>
          Agora é só aguardar que logo o café chegará até você
        </S.Subtitle>
      </S.InformationHeaderContainer>
      <S.Information>
        <S.InformationContentBorder>
          <S.InformationContent>
            <S.InformationItem>
              <Icon
                icon={<MapPin size={16} weight="fill" />}
                text="Entrega em Rua João Daniel Martinelli, 102; Farrapos - Porto Alegre, RS"
                color="purple"
              />
            </S.InformationItem>
            <S.InformationItem>
              <Icon
                icon={<Timer size={16} weight="fill" />}
                text="Previsão de entrega; 20min - 30min"
                color="yellow"
              />
            </S.InformationItem>
            <S.InformationItem>
              <Icon
                icon={<CurrencyDollar size={16} weight="fill" />}
                text="Pagamento na entrega; Cartão de Crédito"
                color="yellowDark"
              />
            </S.InformationItem>
          </S.InformationContent>
        </S.InformationContentBorder>
        <S.InformationImage src={success} alt="Homem andando em uma moto" />
      </S.Information>
    </S.Wrapper>
  )
}
