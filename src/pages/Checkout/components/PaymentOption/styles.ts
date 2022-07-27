import styled from 'styled-components'

export const Wrapper = styled.label`
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

export const Input = styled.input`
  display: none;

  &:checked + label {
    border: 1px solid ${({ theme }) => theme.colors.purple};
    background-color: ${({ theme }) => theme.colors.purpleLight};
  }
`
