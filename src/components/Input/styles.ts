import styled from 'styled-components'

export const Wrapper = styled.input`
  background-color: ${({ theme }) => theme.colors.input};
  border: 1px solid ${({ theme }) => theme.colors.button};
  border-radius: 4px;
  padding: 0.75rem;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fonts.text.sizes[2]};
`
