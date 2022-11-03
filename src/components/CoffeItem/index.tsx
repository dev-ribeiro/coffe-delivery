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
import React, { useContext, useEffect, useState } from 'react'
import { CoffeeContext, ICoffees } from '../../contexts/CoffeeContext'
import { priceFormatter } from '../../utils/formatter'

interface ICoffeesItemProps extends ICoffees {
  layout?: 'store' | 'checkout'
}

export function CoffeeItem({
  id,
  categories,
  description,
  imagePath,
  title,
  amountSelected,
  layout,
  price,
}: ICoffeesItemProps) {
  const {
    handleAmountSelecteds,
    verifyCoffeesToCheckout,
    removeCoffeeToCheckout,
    handleSendCoffeeToCart,
  } = useContext(CoffeeContext)

  verifyCoffeesToCheckout()

  const onAddItem = () => {
    handleAmountSelecteds(id, 'decrease')
  }

  const onRemoveItem = () => {
    handleAmountSelecteds(id, 'decrease')
  }

  const onRemoveToCart = () => {
    removeCoffeeToCheckout(id)
  }

  const onSendCoffeeToCart = () => {
    handleSendCoffeeToCart(id, 'send')
  }

  return (
    <>
      {layout === 'store' || !layout ? (
        <CoffeeItemContainerStore>
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
              <button className="cartWrapper" onClick={onSendCoffeeToCart}>
                <ShoppingCart size={16} weight="fill" />
              </button>
            </CounterCartWrapper>
          </CoffeePricesWrapper>
        </CoffeeItemContainerStore>
      ) : (
        <CoffeeItemContainerCheckout>
          <img src={imagePath} alt="" />
          <CoffeeCartWrapper>
            <CoffeeCheckoutHeaderContainer>
              <h4>{title}</h4>
              <span>
                {(amountSelected * 9.9).toFixed(2).toString().replace('.', ',')}
              </span>
            </CoffeeCheckoutHeaderContainer>
            <CounterCheckoutContainer>
              <CounterCartWrapperInCheckout>
                <button onClick={onRemoveItem}>-</button>
                <span>{amountSelected}</span>
                <button onClick={onAddItem}>+</button>
              </CounterCartWrapperInCheckout>
              <button>
                <Trash size={16} />
                <span onClick={onRemoveToCart}>REMOVER</span>
              </button>
            </CounterCheckoutContainer>
          </CoffeeCartWrapper>
        </CoffeeItemContainerCheckout>
      )}
    </>
  )
}
