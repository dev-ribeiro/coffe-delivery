import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import logo from '../../images/logo.svg'
import {
  CartWrapper,
  HeaderContainer,
  LocationContainer,
  ShoppingCartContainer,
} from './styles'

export function Header() {
  const { coffees } = useContext(CoffeeContext)

  const checkoutCart = coffees.filter((coffee) => {
    return coffee.isCheckoutCart === true
  })

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <ShoppingCartContainer>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <span>Fortaleza - Ce</span>
        </LocationContainer>
        {checkoutCart.length !== 0 ? (
          <CartWrapper>
            <NavLink className="cart" to="/checkout">
              <ShoppingCart size={22} weight="fill" />
            </NavLink>
            <span>{checkoutCart.length}</span>
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
