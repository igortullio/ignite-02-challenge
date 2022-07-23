import styled from 'styled-components'
import { defaultTheme } from '../../styles/theme/default'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`

export const CIRCLE_COLORS = {
  yellow: defaultTheme.colors.yellow,
  yellowDark: defaultTheme.colors.yellowDark,
  black: defaultTheme.colors.text,
  purple: defaultTheme.colors.purple,
} as const

interface CircleProps {
  circleColor: keyof typeof CIRCLE_COLORS
}

export const Circle = styled.span<CircleProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;
  background-color: ${({ circleColor }) => CIRCLE_COLORS[circleColor]};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.background};
`
