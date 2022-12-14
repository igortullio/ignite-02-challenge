import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.125rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.button};

  button {
    background-color: ${({ theme }) => theme.colors.button};
    color: ${({ theme }) => theme.colors.purple};

    padding: 0 0.5rem;

    :focus {
      box-shadow: none;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.button};
      color: ${({ theme }) => theme.colors.purpleDark};
    }
  }
`

export const Value = styled.span`
  color: ${({ theme }) => theme.colors.text};
`
