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

interface ICoffeesItemProps extends ICoffees {
  layout?: 'store' | 'checkout'
}

export function CoffeeItem({
  id,
  categories,
  description,
  image_path,
  title,
  amountSelected,
  layout,
}: ICoffeesItemProps) {
  const {
    handleAmountSelecteds,
    verifyCoffeesToCheckout,
    removeCoffeeToCheckout,
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
                <button className="minun" onClick={onRemoveItem}>
                  -
                </button>
                <span className="counter">{amountSelected}</span>
                <button className="plus" onClick={onAddItem}>
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
