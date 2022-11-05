/* eslint-disable camelcase */
import { ShoppingCart } from 'phosphor-react'
import {
  CoffeeCategories,
  CoffeeCategoriesWrapper,
  CoffeeInfoWrapper,
  CoffeeItemContainerStore,
  CoffeePrice,
  CoffeePricesWrapper,
  CounterCartWrapper,
} from './styles'
import { priceFormatter } from '../../../../utils/formatter'
import { ICoffees } from '../../../../reducers/coffees/reducer'
import { useContext } from 'react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'

export function CoffeeItem({
  id,
  categories,
  description,
  amountSelected,
  imagePath,
  price,
  title,
}: ICoffees) {
  const { addItem, removeItem, addToCheckout } = useContext(CoffeeContext)

  const onAddItem = () => {
    addItem(id)
  }
  const onRemoveItem = () => {
    removeItem(id)
  }

  const onAddToCheckout = () => {
    addToCheckout(id)
  }

  return (
    <CoffeeItemContainerStore id={id}>
      <img src={imagePath} alt="" />
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
          <span className="price">{priceFormatter.format(price)}</span>
        </CoffeePrice>
        <CounterCartWrapper>
          <div className="counterWrapper">
            <button className="minun" onClick={onRemoveItem}>
              -
            </button>
            <span className="counter">{amountSelected}</span>
            <button className="plus" onClick={onAddItem}>
              +
            </button>
          </div>
          <button className="cartWrapper" onClick={onAddToCheckout}>
            <ShoppingCart size={16} weight="fill" />
          </button>
        </CounterCartWrapper>
      </CoffeePricesWrapper>
    </CoffeeItemContainerStore>
  )
}
