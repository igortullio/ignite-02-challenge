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
    color: ${theme.colors.white};
    background-color: ${theme.colors.yellow};
    padding: 0.755rem 0.5rem;

    font-weight: ${theme.fonts.text.weights.bold};

    &:hover {
      background: ${theme.colors.yellowDark};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    height: 2.375rem;
    color: ${theme.colors.white};
    background-color: ${theme.colors.purpleDark};
    padding: 0.5rem;

    &:hover {
      background: ${theme.colors.purple};
    }
  `,
  tertiary: (theme: DefaultTheme) => css`
    height: 2rem;
    color: ${theme.colors.text};
    background: ${theme.colors.button};
    padding: 0 0.5rem;

    font-size: ${theme.fonts.text.sizes[1]};
    line-height: ${({ theme }) => theme.fonts.text.heights.extended};

    svg {
      color: ${theme.colors.purple};
    }

    &:hover {
      background: ${theme.colors.hover};
    }
  `,
  quaternary: (theme: DefaultTheme) => css`
    height: 2.375rem;
    color: ${theme.colors.white};
    background: ${theme.colors.yellowLight};
    padding: 0.5rem;

    svg {
      color: ${theme.colors.yellowDark};
    }

    &:hover {
      background: ${theme.colors.yellow};
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
