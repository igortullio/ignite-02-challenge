import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

const modifiers = {
  fullWidth: () => css`
    width: 100%;
  `,
  fullHeight: () => css`
    height: 100%;
  `,
  primary: (theme: DefaultTheme) => css`
    height: 2.875rem;
    color: ${theme.colors.base.white};
    background-color: ${theme.colors.product.yellow};
    padding: 0.755rem 0.5rem;

    font-weight: ${theme.fonts.text.weights.bold};

    &:hover {
      background: ${theme.colors.product.yellowDark};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    height: 2.375rem;
    color: ${theme.colors.base.white};
    background-color: ${theme.colors.product.purpleDark};
    padding: 0.5rem;

    &:hover {
      background: ${theme.colors.product.purple};
    }
  `,
  tertiary: (theme: DefaultTheme) => css`
    height: 2rem;
    color: ${theme.colors.base.text};
    background: ${theme.colors.base.button};
    padding: 0 0.5rem;

    font-size: ${theme.fonts.text.sizes[1]};
    line-height: ${({ theme }) => theme.fonts.text.heights.extended};

    svg {
      color: ${theme.colors.product.purple};
    }

    &:hover {
      background: ${theme.colors.base.hover};
    }
  `,
  quaternary: (theme: DefaultTheme) => css`
    height: 2.375rem;
    color: ${theme.colors.base.white};
    background: ${theme.colors.product.yellowLight};
    padding: 0.5rem;

    svg {
      color: ${theme.colors.product.yellowDark};
    }

    &:hover {
      background: ${theme.colors.product.yellow};
    }
  `,
}

interface WrapperProps
  extends Pick<ButtonProps, 'variant' | 'fullWidth' | 'fullHeight'> {}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, variant, fullWidth, fullHeight }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    border-radius: 6px;
    cursor: pointer;
    border: none;

    text-transform: uppercase;

    ${!!variant && modifiers[variant](theme)}
    ${fullWidth && modifiers.fullWidth()}
    ${fullHeight && modifiers.fullHeight()}
  `}
`
