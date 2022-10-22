import { ShoppingCart } from "phosphor-react";
import { CoffeeCategories, CoffeeCategoriesWrapper, CoffeeDescription, CoffeeInfoWrapper, CoffeeItemContainer, CoffeePrice, CoffeePricesWrapper, CoffeeTitle, CounterCartWrapper } from "./styles";
import expresso from '../../../../images/store/expresso.png'

export function CoffeeItem() {
    return (
        <CoffeeItemContainer>
            <img src={expresso} alt="" />
            <CoffeeCategoriesWrapper>
                <CoffeeCategories>TRADICIONAL</CoffeeCategories>
            </CoffeeCategoriesWrapper>
            <CoffeeInfoWrapper>
                <CoffeeTitle>Expresso tradicional</CoffeeTitle>
                <CoffeeDescription>O tradicional café feito com água quente e grãos moídos</CoffeeDescription>
            </CoffeeInfoWrapper>
            <CoffeePricesWrapper>
                <CoffeePrice>
                    <span className='prefix'>R${' '}</span>
                    <span className='price'>9,90</span>
                </CoffeePrice>
                <CounterCartWrapper>
                    <div className='counterWrapper'>
                        <span className='minun'>-</span>
                        <span className='counter'>1</span>
                        <span className='plus'>+</span>
                    </div>
                    <div className='cartWrapper'>
                        <ShoppingCart size={16} weight='fill' />
                    </div>
                </CounterCartWrapper>
            </CoffeePricesWrapper>
        </CoffeeItemContainer>
    )
}
