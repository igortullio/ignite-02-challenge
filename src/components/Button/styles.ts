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
    quantity,
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
    position: relative;

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

interface BadgeProps extends Pick<ButtonProps, 'backgroundColor'> {}

export const Badge = styled.span<BadgeProps>`
  ${({ theme, backgroundColor }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors[backgroundColor || 'yellowDark']};
    font-size: ${theme.fonts.text.sizes[1]};
    font-weight: ${theme.fonts.text.weights.bold};

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    border-radius: 50%;
    width: 1.25rem;
    height: 1.25rem;
    top: -0.5rem;
    right: -0.5rem;
  `}
`
