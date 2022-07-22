import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  justify-content: space-between;
`

export const Information = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 1rem;
  }

  > div > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.base.title};
`

export const Paragrath = styled.p`
  font-size: ${({ theme }) => theme.fonts.text.sizes[5]};
  color: ${({ theme }) => theme.colors.base.subtitle};
`

export const UnorderedList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 1.25rem;
  column-gap: 1rem;
  justify-items: baseline;
`

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`

export const Menu = styled.section``
