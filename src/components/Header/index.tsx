import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../images/logo.svg'
import { HeaderContainer, LocationContainer, ShoppingCartContainer } from './styles'

export function Header() {
    return (
        <HeaderContainer>
            <img src={logo} alt="" />
            <ShoppingCartContainer>
                <LocationContainer>
                    <MapPin size={22} weight='fill' />
                    <span>Fortaleza - Ce</span>
                </LocationContainer>
                <div className='cart'>
                    <ShoppingCart size={22} weight='fill' />
                </div>
            </ShoppingCartContainer>
        </HeaderContainer>
    )
}