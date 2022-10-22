import { ShoppingCart } from "phosphor-react";
import { CoffeeCategories, CoffeeCategoriesWrapper, CoffeeDescription, CoffeeInfoWrapper, CoffeeItemContainer, CoffeePrice, CoffeePricesWrapper, CoffeeTitle, CounterCartWrapper } from "./styles";
import { useContext } from "react";
import { CoffeeCounterContext, ICoffees } from "../../../../contexts/CoffeeContexts";

export function CoffeeItem({ categories, description, image_path, title }: ICoffees) {
    const { addCoffeeToCart, removeCoffeeToCart } = useContext(CoffeeCounterContext)

    return (
        <CoffeeItemContainer>
            <img src={image_path} alt="" />
            <CoffeeCategoriesWrapper>
                <CoffeeCategories>{categories.map(category => <CoffeeCategories>{category.toUpperCase()}</CoffeeCategories>)}</CoffeeCategories>
            </CoffeeCategoriesWrapper>
            <CoffeeInfoWrapper>
                <CoffeeTitle>{title}</CoffeeTitle>
                <CoffeeDescription>{description}</CoffeeDescription>
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
