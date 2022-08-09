import { Bank, CreditCard, CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { CartContext, PaymentOption } from '../../contexts/CartContext'
import { formatCurrency } from '../../utils/currencyUtil'
import { Card } from './components/Card'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import * as S from './styles'

const venueFormValidationSchema = zod.object({
  document: zod.string().min(1, { message: 'Informe o CPF' }),
  street: zod.string().min(1, { message: 'Informe a rua' }),
  number: zod.string().min(1, { message: 'Informe o número' }),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1, { message: 'Informe o bairro' }),
  city: zod.string().min(1, { message: 'Informe a cidade' }),
  district: zod
    .string()
    .min(2, { message: 'Informe o estado' })
    .max(2, { message: 'O estado precisa ter no máximo 2 caracteres' }),
  payment: zod.string(),
})

type VenueFormData = zod.infer<typeof venueFormValidationSchema>

export function Checkout() {
  const navigate = useNavigate()
  const { items, itemsValue, updateDelivery, updatePayment } =
    useContext(CartContext)
  const { register, handleSubmit, watch } = useForm<VenueFormData>({
    resolver: zodResolver(venueFormValidationSchema),
    defaultValues: {
      document: '',
      street: '',
      number: '',
      neighborhood: '',
      city: '',
      district: '',
    },
  })

  useEffect(() => {
    if (items.length < 1) navigate('/')
  }, [items, navigate])

  const deliveryPrice = 3.5

  const isButtonDisable =
    !watch('document') ||
    !watch('street') ||
    !watch('number') ||
    !watch('neighborhood') ||
    !watch('city') ||
    !watch('district') ||
    watch('district').length !== 2 ||
    !watch('payment')

  function handleAddVenueInfo(data: VenueFormData) {
    updateDelivery(data)
    updatePayment(data.payment as PaymentOption)

    navigate('/success')
  }

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
              <S.Input
                id="document"
                type="text"
                placeholder="CPF"
                {...register('document')}
              />
            </S.VenueFormLine>
            <S.VenueFormLine templateColumns="1fr">
              <S.Input
                id="street"
                type="text"
                placeholder="Rua"
                {...register('street')}
              />
            </S.VenueFormLine>
            <S.VenueFormLine templateColumns="200px 1fr">
              <S.Input
                id="number"
                type="text"
                placeholder="Número"
                {...register('number')}
              />
              <S.Input
                id="complement"
                type="text"
                placeholder="Complemento"
                {...register('complement')}
              />
            </S.VenueFormLine>
            <S.VenueFormLine templateColumns="200px 1fr 60px">
              <S.Input
                id="neighborhood"
                type="text"
                placeholder="Bairro"
                {...register('neighborhood')}
              />
              <S.Input
                id="city"
                type="text"
                placeholder="Cidade"
                {...register('city')}
              />
              <S.Input
                id="district"
                type="text"
                placeholder="UF"
                {...register('district')}
              />
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
          <S.PaymentOptionContainer>
            <S.RadioContainer>
              <S.Radio
                id="cartão de crédito"
                type="radio"
                value="credit"
                {...register('payment')}
              />
              <S.RadioLabel htmlFor={'cartão de crédito'}>
                {<CreditCard size={16} />}
                cartão de crédito
              </S.RadioLabel>
            </S.RadioContainer>

            <S.RadioContainer>
              <S.Radio
                id="cartão de débito"
                type="radio"
                value="debit"
                {...register('payment')}
              />
              <S.RadioLabel htmlFor={'cartão de débito'}>
                {<Bank size={16} />}
                cartão de débito
              </S.RadioLabel>
            </S.RadioContainer>

            <S.RadioContainer>
              <S.Radio
                id="dinheiro"
                type="radio"
                value="cash"
                {...register('payment')}
              />
              <S.RadioLabel htmlFor={'dinheiro'}>
                {<Bank size={16} />}
                dinheiro
              </S.RadioLabel>
            </S.RadioContainer>
          </S.PaymentOptionContainer>
        </S.PaymentInformation>
      </S.CheckoutInformation>

      <S.Summary>
        <S.SummaryTitle>Cafés selecionados</S.SummaryTitle>

        <S.SummaryCard>
          <S.CardList>
            {items.map((item) => (
              <Card key={item.name} {...item} />
            ))}
          </S.CardList>
          <S.SummaryFooter>
            <S.ValuesContainer>
              <S.ValuesItem>Total dos items</S.ValuesItem>
              <S.ValuesItem>{formatCurrency(itemsValue)}</S.ValuesItem>
            </S.ValuesContainer>
            <S.ValuesContainer>
              <S.ValuesItem>Entrega</S.ValuesItem>
              <S.ValuesItem>{formatCurrency(deliveryPrice)}</S.ValuesItem>
            </S.ValuesContainer>
            <S.ValuesContainer>
              <S.ValuesTotal>Total</S.ValuesTotal>
              <S.ValuesTotal>
                {formatCurrency(itemsValue + deliveryPrice)}
              </S.ValuesTotal>
            </S.ValuesContainer>
            <Button
              label="Confirmar pedido"
              fullWidth
              disabled={isButtonDisable}
              onClick={handleSubmit(handleAddVenueInfo)}
            />
          </S.SummaryFooter>
        </S.SummaryCard>
      </S.Summary>
    </S.Wrapper>
  )
}
