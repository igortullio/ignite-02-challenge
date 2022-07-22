import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  height: 32px;
  gap: 0.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.base.button};

  button {
    background-color: ${({ theme }) => theme.colors.base.button};
    color: ${({ theme }) => theme.colors.product.purple};

    :focus {
      box-shadow: none;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.base.button};
      color: ${({ theme }) => theme.colors.product.purpleDark};
    }
  }
`

export const Value = styled.span`
  color: ${({ theme }) => theme.colors.base.text};
`
