import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;

  gap: 3rem;
  margin: 1rem 0;
`

export const InformationHeaderContainer = styled.div``

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fonts.header.sizes[2]};
  color: ${({ theme }) => theme.colors.yellowDark};
`

export const Subtitle = styled.span`
  font-size: ${({ theme }) => theme.fonts.text.sizes[5]};
  color: ${({ theme }) => theme.colors.subtitle};
`

export const Information = styled.div`
  display: flex;
  justify-content: space-between;
`

export const InformationContentBorder = styled.div`
  background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  border-radius: 6px 36px;
  padding: 1px;
`

export const InformationContent = styled.div`
  height: 100%;
  padding: 2.5rem;
  border-radius: 6px 36px;
  background-color: ${({ theme }) => theme.colors.background};

  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: space-around;
`

export const InformationItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`

export const InformationImage = styled.img``
