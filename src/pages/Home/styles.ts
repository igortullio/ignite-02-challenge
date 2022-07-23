import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;
  margin: 1rem 0;
`

export const Information = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1rem;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.title};
`

export const Paragrath = styled.p`
  font-size: ${({ theme }) => theme.fonts.text.sizes[5]};
  color: ${({ theme }) => theme.colors.subtitle};
`

export const InformationList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 1.25rem;
  column-gap: 1rem;
  justify-items: baseline;
`

export const InformationItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`

export const Menu = styled.section``

export const MenuTitle = styled.h2`
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: ${({ theme }) => theme.fonts.header.sizes[2]};
`

export const CoffeeList = styled.ul`
  margin-top: 3rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, 16rem);
  grid-gap: 3rem;
  justify-content: space-between;
`
