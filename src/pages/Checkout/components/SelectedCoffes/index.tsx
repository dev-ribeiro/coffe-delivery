import { useContext, useEffect, useState } from 'react'
import { CoffeeItem } from '../../../../components/CoffeItem'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import {
  BillContainer,
  CartCoffeesCheckoutWrapper,
  SelectedCoffesContainer,
  SubmitButton,
} from './styles'

export function SelectedCoffes() {
  const { verifyCoffeesToCheckout } = useContext(CoffeeContext)
  const coffeesToCheckout = verifyCoffeesToCheckout()
  const getAmountOfCoffees = coffeesToCheckout.reduce((acc, coffee) => {
    return acc + coffee.amountSelected
  }, 0)
  const finalPrice = getAmountOfCoffees * 9.9

  return (
    <SelectedCoffesContainer>
      <h2>Cafés selecionados</h2>
      <CartCoffeesCheckoutWrapper>
        {coffeesToCheckout.map((coffee) => {
          return (
            <CoffeeItem
              id={coffee.id}
              key={coffee.id}
              title={coffee.title}
              description={coffee.description}
              categories={coffee.categories}
              image_path={coffee.image_path}
              amountSelected={coffee.amountSelected}
              layout="checkout"
            />
          )
        })}
        <BillContainer>
          <div>
            <span>Total de itens</span>
            <span>R$ {finalPrice.toFixed(2).toString().replace('.', ',')}</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>R$ {(5).toFixed(2).toString().replace('.', ',')}</span>
          </div>
          <div>
            <h5>Total</h5>
            <h5>{(finalPrice + 5).toFixed(2).toString().replace('.', ',')}</h5>
          </div>
        </BillContainer>
        <SubmitButton type="submit">CONFIRMAR PEDIDO</SubmitButton>
      </CartCoffeesCheckoutWrapper>
    </SelectedCoffesContainer>
  )
}
