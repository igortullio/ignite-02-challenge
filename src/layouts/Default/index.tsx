import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Wrapper } from './styles'

export function Default() {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  )
}
