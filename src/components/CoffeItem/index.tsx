/* eslint-disable camelcase */
import { ShoppingCart } from 'phosphor-react'
import {
  CoffeeCategories,
  CoffeeCategoriesWrapper,
  CoffeeInfoWrapper,
  CoffeeItemContainerCheckout,
  CoffeeItemContainerStore,
  CoffeePrice,
  CoffeePricesWrapper,
  CounterCartWrapper,
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
        </CoffeeItemContainerCheckout>
      )}
    </>
  )
}
