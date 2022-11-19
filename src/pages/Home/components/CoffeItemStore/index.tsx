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
import { useEffect } from 'react'
import { useHandleCheckout } from '../../../../hooks/useHandleCheckout'

export function CoffeeItem({
  id,
  categories,
  description,
  amountSelected,
  imagePath,
  price,
  title,
}: ICoffees) {
  const {
    getCoffeeIdInformation,
    handleAddItem,
    handleRemoveItem,
    handleSendToCheckout,
  } = useHandleCheckout()

  useEffect(() => {
    getCoffeeIdInformation(id)
  }, [getCoffeeIdInformation, id])

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
            <button className="minun" onClick={handleRemoveItem}>
              -
            </button>
            <span className="counter">{amountSelected}</span>
            <button className="plus" onClick={handleAddItem}>
              +
            </button>
          </div>
          <button className="cartWrapper" onClick={handleSendToCheckout}>
            <ShoppingCart size={16} weight="fill" />
          </button>
        </CounterCartWrapper>
      </CoffeePricesWrapper>
    </CoffeeItemContainerStore>
  )
}
