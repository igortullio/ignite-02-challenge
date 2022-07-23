import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 16rem;
  height: 19.375rem;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;

  text-align: center;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  img {
    width: 120px;
    height: 120px;
    margin-top: -3rem;
  }
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 0.25rem;
`

export const Types = styled.ul`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  flex-wrap: wrap;
`

export const Type = styled.li`
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.yellowLight};

  font-size: ${({ theme }) => theme.fonts.text.sizes[0]};
  font-weight: ${({ theme }) => theme.fonts.text.weights.bold};
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.yellowDark};
`

export const Name = styled.h3`
  font-size: ${({ theme }) => theme.fonts.header.sizes[1]};
  font-weight: ${({ theme }) => theme.fonts.header.weights.bold};
  color: ${({ theme }) => theme.colors.subtitle};
`

export const Description = styled.span`
  font-size: ${({ theme }) => theme.fonts.text.sizes[2]};
  color: ${({ theme }) => theme.colors.label};
`

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;

  div {
    display: flex;
    gap: 0.25rem;
  }
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
`

export const Price = styled.h4`
  font-size: ${({ theme }) => theme.fonts.header.sizes[2]};
  font-weight: ${({ theme }) => theme.fonts.header.weights.extraBold};
`
