import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.product.yellow};
  }

  body {
    background: ${({ theme }) => theme.colors.base.background};
    color: ${({ theme }) => theme.colors.base.text};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: ${({ theme }) =>
      `'${theme.fonts.text.family.default}', ${theme.fonts.text.family.alternative}`};
    font-weight: ${({ theme }) => theme.fonts.text.weights.regular};
    font-size: ${({ theme }) => theme.fonts.text.sizes[3]};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) =>
      `'${theme.fonts.header.family.default}', ${theme.fonts.header.family.alternative}`};
    font-weight: ${({ theme }) => theme.fonts.header.weights.bold};
  }
`
