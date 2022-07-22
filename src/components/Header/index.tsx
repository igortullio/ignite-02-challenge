import { Logo } from '../Logo'
import { Wrapper } from './styles'

export function Header() {
  return (
    <Wrapper>
      <Logo />

      <nav>
        <button>Brasília, DF</button>
      </nav>
    </Wrapper>
  )
}
