import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logo from '../../images/logo.svg'
import {
  CartWrapper,
  HeaderContainer,
  LocationContainer,
  ShoppingCartContainer,
} from './styles'

export function Header() {
  //   const { count } = useContext(CoffeeCounterContext)
  const count = 0 ?? 1

  return (
    <HeaderContainer>
      <a href="/">
        <img src={logo} alt="" />
      </a>
      <ShoppingCartContainer>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <span>Fortaleza - Ce</span>
        </LocationContainer>
        {count !== 0 ? (
          <CartWrapper>
            <NavLink className="cart" to="/checkout">
              <ShoppingCart size={22} weight="fill" />
            </NavLink>
            <span>{count}</span>
          </CartWrapper>
        ) : (
          <NavLink className="cart" to="/checkout">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        )}
      </ShoppingCartContainer>
    </HeaderContainer>
  )
}
