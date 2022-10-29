/* eslint-disable camelcase */
import { ShoppingCart, Trash } from 'phosphor-react'
import {
  CoffeeCartWrapper,
  CoffeeCategories,
  CoffeeCategoriesWrapper,
  CoffeeCheckoutHeaderContainer,
  CoffeeInfoWrapper,
  CoffeeItemContainerCheckout,
  CoffeeItemContainerStore,
  CoffeePrice,
  CoffeePricesWrapper,
  CounterCartWrapper,
  CounterCartWrapperInCheckout,
  CounterCheckoutContainer,
} from './styles'
import { useContext } from 'react'
import { CoffeeCounterContext, ICoffees } from '../../contexts/CoffeeContext'

interface ICoffeesItemProps extends ICoffees {
  layout?: 'store' | 'checkout'
}

export function CoffeeItem({
  categories,
  description,
  image_path,
  title,
  layout,
}: ICoffeesItemProps) {
  const { addCoffeeToCart, removeCoffeeToCart } =
    useContext(CoffeeCounterContext)

  return (
    <>
      {layout === 'store' || !layout ? (
        <CoffeeItemContainerStore>
          <img src={image_path} alt="" />
          <CoffeeCategoriesWrapper>
            {categories.map((category, index) => (
              <CoffeeCategories key={index}>
                {category.toUpperCase()}
              </CoffeeCategories>
            ))}
          </CoffeeCategoriesWrapper>
          <CoffeeInfoWrapper>
            <h4>{title}</h4>
            <span>{description}</span>
          </CoffeeInfoWrapper>
          <CoffeePricesWrapper>
            <CoffeePrice>
              <span className="prefix">R$ </span>
              <span className="price">9,90</span>
            </CoffeePrice>
            <CounterCartWrapper>
              <div className="counterWrapper">
                <button className="minun" onClick={removeCoffeeToCart}>
                  -
                </button>
                <span className="counter">1</span>
                <button className="plus" onClick={addCoffeeToCart}>
                  +
                </button>
              </div>
              <div className="cartWrapper">
                <ShoppingCart size={16} weight="fill" />
              </div>
            </CounterCartWrapper>
          </CoffeePricesWrapper>
        </CoffeeItemContainerStore>
      ) : (
        <CoffeeItemContainerCheckout>
          <img src={image_path} alt="" />
          <CoffeeCartWrapper>
            <CoffeeCheckoutHeaderContainer>
              <h4>{title}</h4>
              <span>9,90</span>
            </CoffeeCheckoutHeaderContainer>
            <CounterCheckoutContainer>
              <CounterCartWrapperInCheckout>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </CounterCartWrapperInCheckout>
              <button>
                <Trash size={16} />
                <span>REMOVER</span>
              </button>
            </CounterCheckoutContainer>
          </CoffeeCartWrapper>
        </CoffeeItemContainerCheckout>
      )}
    </>
  )
}
