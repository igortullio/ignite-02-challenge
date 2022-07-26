import { MapPinLine } from 'phosphor-react'
import { Button } from '../../components/Button'
import { Card } from './components/Card'
import {
  CardList,
  CheckoutInformation,
  CheckoutTitle,
  PaymentInformation,
  Summary,
  SummaryCard,
  SummaryFooter,
  SummaryTitle,
  ValuesContainer,
  ValuesItem,
  ValuesTotal,
  VenueHeader,
  VenueHeaderIcon,
  VenueHeaderInfo,
  VenueInformation,
  VenueSubtitle,
  VenueTitle,
  Wrapper,
} from './styles'

export function Checkout() {
  return (
    <Wrapper>
      <CheckoutInformation>
        <CheckoutTitle>Complete seu pedido</CheckoutTitle>
        <VenueInformation>
          <VenueHeader>
            <VenueHeaderIcon>
              <MapPinLine size={22} />
            </VenueHeaderIcon>
            <VenueHeaderInfo>
              <VenueTitle>Endereço de Entrega</VenueTitle>
              <VenueSubtitle>
                Informe o endereço onde deseja receber seu pedido
              </VenueSubtitle>
            </VenueHeaderInfo>
          </VenueHeader>
        </VenueInformation>
        <PaymentInformation></PaymentInformation>
      </CheckoutInformation>

      <Summary>
        <SummaryTitle>Cafés selecionados</SummaryTitle>
        <SummaryCard>
          <CardList>
            <Card />
            <Card />
            <Card />
          </CardList>

          <SummaryFooter>
            <ValuesContainer>
              <ValuesItem>Total de items</ValuesItem>
              <ValuesItem>R$ 29,70</ValuesItem>
            </ValuesContainer>
            <ValuesContainer>
              <ValuesItem>Entrega</ValuesItem>
              <ValuesItem>R$ 3,50</ValuesItem>
            </ValuesContainer>
            <ValuesContainer>
              <ValuesTotal>Total</ValuesTotal>
              <ValuesTotal>R$ 33,20</ValuesTotal>
            </ValuesContainer>
            <Button label="Confirmar pedido" fullWidth />
          </SummaryFooter>
        </SummaryCard>
      </Summary>
    </Wrapper>
  )
}
