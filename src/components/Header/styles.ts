import styled from 'styled-components'

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0;

  a:focus {
    box-shadow: none;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`
