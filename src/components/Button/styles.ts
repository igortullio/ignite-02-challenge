import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps, IconProps } from '.'

const modifiers = {
  fullWidth: () => css`
    width: 100%;
  `,
  fullHeight: () => css`
    height: 100%;
  `,
  hasIcon: (theme: DefaultTheme, icon: IconProps) => css`
    svg {
      color: ${theme.colors[icon.color]};

      &:hover {
        color: ${theme.colors[icon.hoverColor || icon.color]};
      }
    }
  `,
}

interface WrapperProps extends Omit<ButtonProps, 'label'> {}

export const Wrapper = styled.button<WrapperProps>`
  ${({
    theme,
    fullWidth,
    fullHeight,
    color,
    backgroundColor,
    hoverColor,
    icon,
  }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding: 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    border: none;
    text-transform: uppercase;

    color: ${theme.colors[color || 'white']};
    background-color: ${theme.colors[backgroundColor || 'yellow']};

    &:hover {
      background: ${theme.colors[hoverColor || 'yellowDark']};
    }

    ${fullWidth && modifiers.fullWidth()}
    ${fullHeight && modifiers.fullHeight()}
    ${!!icon && modifiers.hasIcon(theme, icon)}
  `}
`
