import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.yellow};
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: ${({ theme }) =>
      `'${theme.fonts.text.family.default}', ${theme.fonts.text.family.alternative}`};
    font-weight: ${({ theme }) => theme.fonts.text.weights.regular};
    font-size: ${({ theme }) => theme.fonts.text.sizes[3]};
    line-height: ${({ theme }) => theme.fonts.text.heights.default};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) =>
      `'${theme.fonts.header.family.default}', ${theme.fonts.header.family.alternative}`};
    font-weight: ${({ theme }) => theme.fonts.header.weights.extraBold};
    font-size: ${({ theme }) => theme.fonts.header.sizes[3]};
    line-height: ${({ theme }) => theme.fonts.header.heights.default};
  }

  ul {
    list-style-type: none
  }
`
