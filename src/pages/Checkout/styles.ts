import styled from 'styled-components'

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;
  margin: 1rem 0;
`

export const CheckoutInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const CheckoutTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.header.sizes[0]};
  font-weight: ${({ theme }) => theme.fonts.header.weights.bold};
`

export const VenueInformation = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  padding: 2.5rem;
  border-radius: 6px;
`

export const VenueHeader = styled.header`
  display: flex;
  gap: 0.5rem;
`

export const VenueHeaderIcon = styled.div`
  color: ${({ theme }) => theme.colors.yellowDark};
`

export const VenueHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const VenueTitle = styled.span``

export const VenueSubtitle = styled.span``

export const PaymentInformation = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  padding: 2.5rem;
  border-radius: 6px;
`

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const SummaryTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.header.sizes[0]};
  font-weight: ${({ theme }) => theme.fonts.header.weights.bold};
`

export const SummaryCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  padding: 2.5rem;
  border-radius: 6px 36px;
`

export const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const SummaryFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1.5rem;

  button {
    font-weight: ${({ theme }) => theme.fonts.text.weights.bold};
  }
`

export const ValuesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ValuesItem = styled.span``

export const ValuesTotal = styled.span`
  font-size: ${({ theme }) => theme.fonts.text.sizes[5]};
  font-weight: ${({ theme }) => theme.fonts.text.weights.bold};
`