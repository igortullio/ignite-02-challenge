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

  display: flex;
  flex-direction: column;
  gap: 2rem;
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

export const VenueForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.input};
  border: 1px solid ${({ theme }) => theme.colors.button};
  border-radius: 4px;
  padding: 0.75rem;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fonts.text.sizes[2]};
`

export const RadioContainer = styled.div``

export const RadioLabel = styled.label`
  border: 1px solid ${({ theme }) => theme.colors.button};
  background-color: ${({ theme }) => theme.colors.button};
  border-radius: 6px;
  padding: 1rem;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  cursor: pointer;

  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fonts.text.sizes[1]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }

  svg {
    color: ${({ theme }) => theme.colors.purple};

    &:hover {
      color: ${({ theme }) => theme.colors.purpleDark};
    }
  }
`

export const Radio = styled.input`
  display: none;

  &:checked + label {
    border: 1px solid ${({ theme }) => theme.colors.purple};
    background-color: ${({ theme }) => theme.colors.purpleLight};
  }
`

export interface VenueFormLineProps {
  templateColumns: string
}

export const VenueFormLine = styled.div<VenueFormLineProps>`
  display: grid;
  grid-template-columns: ${({ templateColumns }) => templateColumns};
  gap: 1rem;
`

export const PaymentInformation = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  padding: 2.5rem;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const PaymentHeader = styled.header`
  display: flex;
  gap: 0.5rem;
`

export const PaymentHeaderIcon = styled.div`
  color: ${({ theme }) => theme.colors.purple};
`

export const PaymentHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const PaymentTitle = styled.span``

export const PaymentSubtitle = styled.span``

export const PaymentOptionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
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

  a {
    text-decoration: none;
  }

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
