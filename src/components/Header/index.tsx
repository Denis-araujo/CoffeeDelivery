import { ShoppingCart, MapPin } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import Logo from '../../assets/Logo.svg'
import { CoffeeContext } from '../../context/CoffeeContext'
import { HeaderContainer, HeaderContent, HeaderNavbar } from './styles'

export function Header() {
  const { products } = useContext(CoffeeContext)

  // criar variavel para lista de coffee vazias

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} alt="" />
      </NavLink>

      <HeaderContent>
        <span>
          <MapPin weight="fill" size={22} /> Porto Alegre, RS
        </span>
        <HeaderNavbar>
          <NavLink to="/coffeePayment">
            {products.length > 0 ? <span>{products.length}</span> : <br />}
            <ShoppingCart weight="fill" size={22} />
          </NavLink>
        </HeaderNavbar>
      </HeaderContent>
    </HeaderContainer>
  )
}
