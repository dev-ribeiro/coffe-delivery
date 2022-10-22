import { ShoppingCart } from "phosphor-react";
import { CoffeeCategories, CoffeeCategoriesWrapper, CoffeeDescription, CoffeeInfoWrapper, CoffeeItemContainer, CoffeePrice, CoffeePricesWrapper, CoffeeTitle, CounterCartWrapper } from "./styles";
import expresso from '../../../../images/store/expresso.png'
import { useContext } from "react";
import { CoffeeCounterContext } from "../../../../contexts/CoffeeCounter";

export function CoffeeItem() {
    const { addCoffeeToCart, removeCoffeeToCart } = useContext(CoffeeCounterContext)

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
                        <button className='minun' onClick={removeCoffeeToCart}>-</button>
                        <span className='counter'>1</span>
                        <button className='plus' onClick={addCoffeeToCart}>+</button>
                    </div>
                    <div className='cartWrapper'>
                        <ShoppingCart size={16} weight='fill' />
                    </div>
                </CounterCartWrapper>
            </CoffeePricesWrapper>
        </CoffeeItemContainer>
    )
}
