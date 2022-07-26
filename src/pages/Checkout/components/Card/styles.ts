import styled from 'styled-components'

export const Wrapper = styled.li`
  display: flex;
  gap: 1.25rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.button};
`

export const Image = styled.img`
  width: 4rem;
  height: 4rem;
`

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const InformationFooter = styled.footer`
  height: 100%;
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
`

export const Title = styled.span``

export const PriceContainer = styled.div`
  margin-left: auto;
  font-weight: ${({ theme }) => theme.fonts.text.weights.bold};
`

export const Price = styled.span``
