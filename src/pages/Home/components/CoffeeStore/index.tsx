import { CoffeeItem } from '../CoffeItem'
import { CoffeeStroreContainer, StoreContainer } from './styles'

export function CoffeeStrore() {
    return (
        <CoffeeStroreContainer>
            <h3>Nossos cafés</h3>
            <StoreContainer>
                <CoffeeItem/>
                <CoffeeItem/>
                <CoffeeItem/>
                <CoffeeItem/>
                <CoffeeItem/>
                <CoffeeItem/>
                <CoffeeItem/>
            </StoreContainer>
        </CoffeeStroreContainer>
    )
}
