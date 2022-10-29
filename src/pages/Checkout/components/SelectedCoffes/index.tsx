import { useContext, useEffect, useState } from 'react'
import { CoffeeItem } from '../../../../components/CoffeItem'
import {
  CoffeeCounterContext,
  ICoffees,
} from '../../../../contexts/CoffeeContext'
import {
  BillContainer,
  CartCoffeesCheckoutWrapper,
  SelectedCoffesContainer,
} from './styles'

export function SelectedCoffes() {
  const { coffees } = useContext(CoffeeCounterContext)

  return (
    <SelectedCoffesContainer>
      <h2>Cafés selecionados</h2>
      <CartCoffeesCheckoutWrapper>
        {coffees.map((coffee, index) => {
          if (index <= 1) {
            return (
              <CoffeeItem
                key={JSON.stringify(coffee)}
                title={coffee.title}
                description={coffee.description}
                categories={coffee.categories}
                image_path={coffee.image_path}
                layout="checkout"
              />
            )
          } else {
            return <></>
          }
        })}
        <BillContainer>
          <div>
            <span>Total de itens</span>
            <span>R$ 9,90</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>R$ 9,90</span>
          </div>
          <div>
            <h5>Total</h5>
            <h5>R$ 19,80</h5>
          </div>
        </BillContainer>
      </CartCoffeesCheckoutWrapper>
    </SelectedCoffesContainer>
  )
}
