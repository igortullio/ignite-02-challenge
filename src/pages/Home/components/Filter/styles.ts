import styled from 'styled-components'

export const FilterTypeInput = styled.input`
  display: none;

  &:checked + label {
    background-color: ${({ theme }) => theme.colors.yellowLight};
  }
`

export const FilterTypeLabel = styled.label`
  font-size: ${({ theme }) => theme.fonts.text.sizes[0]};
  font-weight: ${({ theme }) => theme.fonts.text.weights.bold};
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.yellowDark};

  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.colors.yellowDark};
  background-color: ${({ theme }) => theme.colors.background};
`
