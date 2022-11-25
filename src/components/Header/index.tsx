import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import Logo from '../../assets/Logo.svg'
import { HeaderContainer, HeaderContent, HeaderNavbar } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />

      <HeaderContent>
        <span>
          <MapPin weight="fill" size={22} /> Porto Alegre, RS
        </span>
        <HeaderNavbar>
          <NavLink to="/coffeePayment">
            <ShoppingCart weight="fill" size={22} />
          </NavLink>
        </HeaderNavbar>
      </HeaderContent>
    </HeaderContainer>
  )
}
