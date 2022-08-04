import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext } from 'react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { CartContext } from '../../contexts/CartContext'
import { formatCurrency } from '../../utils/currencyUtil'
import { Card } from './components/Card'
import { PaymentOption } from './components/PaymentOption'

import * as S from './styles'
import { PaymentOptionContainer } from './styles'

export function Checkout() {
  const { items } = useContext(CartContext)

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )
  const deliveryPrice = 3.5

  return (
    <S.Wrapper>
      <S.CheckoutInformation>
        <S.CheckoutTitle>Complete seu pedido</S.CheckoutTitle>
        <S.VenueInformation>
          <S.VenueHeader>
            <S.VenueHeaderIcon>
              <MapPinLine size={22} />
            </S.VenueHeaderIcon>
            <S.VenueHeaderInfo>
              <S.VenueTitle>Endereço de Entrega</S.VenueTitle>
              <S.VenueSubtitle>
                Informe o endereço onde deseja receber seu pedido
              </S.VenueSubtitle>
            </S.VenueHeaderInfo>
          </S.VenueHeader>
          <S.VenueForm>
            <S.VenueFormLine templateColumns="200px">
              <Input placeholder="CPF" />
            </S.VenueFormLine>
            <S.VenueFormLine templateColumns="1fr">
              <Input placeholder="Rua" />
            </S.VenueFormLine>
            <S.VenueFormLine templateColumns="200px 1fr">
              <Input placeholder="Número" />
              <Input placeholder="Complemento" />
            </S.VenueFormLine>
            <S.VenueFormLine templateColumns="200px 1fr 60px">
              <Input placeholder="Bairro" />
              <Input placeholder="Cidade" />
              <Input placeholder="UF" size={2} />
            </S.VenueFormLine>
          </S.VenueForm>
        </S.VenueInformation>
        <S.PaymentInformation>
          <S.PaymentHeader>
            <S.PaymentHeaderIcon>
              <CurrencyDollar size={22} />
            </S.PaymentHeaderIcon>
            <S.PaymentHeaderInfo>
              <S.PaymentTitle>Pagamento</S.PaymentTitle>
              <S.PaymentSubtitle>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </S.PaymentSubtitle>
            </S.PaymentHeaderInfo>
          </S.PaymentHeader>
          <PaymentOptionContainer>
            <PaymentOption
              name="PaymentOption"
              label="cartão de crédito"
              icon={<CreditCard size={16} />}
            />
            <PaymentOption
              name="PaymentOption"
              label="cartão de débito"
              icon={<Bank size={16} />}
            />
            <PaymentOption
              name="PaymentOption"
              label="dinheiro"
              icon={<Money size={16} />}
            />
          </PaymentOptionContainer>
        </S.PaymentInformation>
      </S.CheckoutInformation>

      <S.Summary>
        <S.SummaryTitle>Cafés selecionados</S.SummaryTitle>

        <S.SummaryCard>
          {items.length ? (
            <>
              <S.CardList>
                {items.map((item) => (
                  <Card key={item.name} {...item} />
                ))}
              </S.CardList>
              <S.SummaryFooter>
                <S.ValuesContainer>
                  <S.ValuesItem>Total dos items</S.ValuesItem>
                  <S.ValuesItem>{formatCurrency(totalPrice)}</S.ValuesItem>
                </S.ValuesContainer>
                <S.ValuesContainer>
                  <S.ValuesItem>Entrega</S.ValuesItem>
                  <S.ValuesItem>{formatCurrency(deliveryPrice)}</S.ValuesItem>
                </S.ValuesContainer>
                <S.ValuesContainer>
                  <S.ValuesTotal>Total</S.ValuesTotal>
                  <S.ValuesTotal>
                    {formatCurrency(totalPrice + deliveryPrice)}
                  </S.ValuesTotal>
                </S.ValuesContainer>
                <Button label="Confirmar pedido" fullWidth />
              </S.SummaryFooter>
            </>
          ) : (
            <S.SummaryFooter>Nenhum item no carrinho</S.SummaryFooter>
          )}
        </S.SummaryCard>
      </S.Summary>
    </S.Wrapper>
  )
}
