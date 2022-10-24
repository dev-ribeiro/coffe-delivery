import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeeCounterContext } from '../../contexts/CoffeeContexts'
import logo from '../../images/logo.svg'
import {
  CartWrapper,
  HeaderContainer,
  LocationContainer,
  ShoppingCartContainer,
} from './styles'

export function Header() {
  const { count } = useContext(CoffeeCounterContext)

  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <ShoppingCartContainer>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <span>Fortaleza - Ce</span>
        </LocationContainer>
        {count != 0 ? (
          <CartWrapper>
            <a className="cart" href="/checkout">
              <ShoppingCart size={22} weight="fill" />
            </a>
            <span>{count}</span>
          </CartWrapper>
        ) : (
          <a className="cart" href="/checkout">
            <ShoppingCart size={22} weight="fill" />
          </a>
        )}
      </ShoppingCartContainer>
    </HeaderContainer>
  )
}
