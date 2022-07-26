import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Card } from './components/Card'
import {
  CardList,
  CheckoutInformation,
  CheckoutTitle,
  PaymentHeader,
  PaymentHeaderIcon,
  PaymentHeaderInfo,
  PaymentInformation,
  PaymentSubtitle,
  PaymentTitle,
  Summary,
  SummaryCard,
  SummaryFooter,
  SummaryTitle,
  ValuesContainer,
  ValuesItem,
  ValuesTotal,
  VenueForm,
  VenueFormLine,
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
          <VenueForm>
            <VenueFormLine templateColumns="200px">
              <Input placeholder="CPF" />
            </VenueFormLine>
            <VenueFormLine templateColumns="1fr">
              <Input placeholder="Rua" />
            </VenueFormLine>
            <VenueFormLine templateColumns="200px 1fr">
              <Input placeholder="Número" />
              <Input placeholder="Complemento" />
            </VenueFormLine>
            <VenueFormLine templateColumns="200px 1fr 60px">
              <Input placeholder="Bairro" />
              <Input placeholder="Cidade" />
              <Input placeholder="UF" size={2} />
            </VenueFormLine>
          </VenueForm>
        </VenueInformation>
        <PaymentInformation>
          <PaymentHeader>
            <PaymentHeaderIcon>
              <CurrencyDollar size={22} />
            </PaymentHeaderIcon>
            <PaymentHeaderInfo>
              <PaymentTitle>Pagamento</PaymentTitle>
              <PaymentSubtitle>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </PaymentSubtitle>
            </PaymentHeaderInfo>
          </PaymentHeader>
        </PaymentInformation>
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
