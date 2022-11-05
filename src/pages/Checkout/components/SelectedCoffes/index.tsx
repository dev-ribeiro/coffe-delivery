import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CoffeeItemCheckout } from '../CoffeeItemCheckout'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import {
  BillContainer,
  CartCoffeesCheckoutWrapper,
  SelectedCoffesContainer,
  SubmitButton,
} from './styles'
import { priceFormatter } from '../../../../utils/formatter'

export function SelectedCoffes() {
  const { coffees } = useContext(CoffeeContext)

  const checkoutCart = coffees.filter((coffee) => {
    return coffee.isCheckoutCart === true
  })

  const bill = checkoutCart.reduce((acc, coffee) => {
    return (acc += coffee.price * coffee.amountSelected)
  }, 0)

  return (
    <SelectedCoffesContainer>
      <h2>Cafés selecionados</h2>
      <CartCoffeesCheckoutWrapper>
        {checkoutCart ? (
          checkoutCart.map((coffee) => {
            return (
              <CoffeeItemCheckout
                id={coffee.id}
                key={coffee.id}
                title={coffee.title}
                imagePath={coffee.imagePath}
                amountSelected={coffee.amountSelected}
                categories={coffee.categories}
                price={coffee.price}
                description={coffee.description}
                isCheckoutCart={coffee.isCheckoutCart}
              />
            )
          })
        ) : (
          <div></div>
        )}
        <BillContainer>
          <div>
            <span>Total de itens</span>
            <span>{priceFormatter.format(bill)}</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>{priceFormatter.format(5)}</span>
          </div>
          <div>
            <h5>Total</h5>
            <h5>{priceFormatter.format(bill + 5)}</h5>
          </div>
        </BillContainer>
        <NavLink to={'/success'}>
          <SubmitButton type="submit">CONFIRMAR PEDIDO</SubmitButton>
        </NavLink>
      </CartCoffeesCheckoutWrapper>
    </SelectedCoffesContainer>
  )
}
