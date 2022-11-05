import { useContext, useEffect } from 'react'
import { CoffeeItem } from '../CoffeItemStore'
import { CoffeeStroreContainer, StoreContainer } from './styles'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'

export function CoffeeStrore() {
  const { coffees } = useContext(CoffeeContext)

  return (
    <CoffeeStroreContainer>
      <h3>Nossos cafés</h3>
      <StoreContainer>
        {coffees.map((coffee) => {
          return (
            <CoffeeItem
              id={coffee.id}
              key={coffee.id}
              categories={coffee.categories}
              title={coffee.title}
              price={coffee.price}
              isCheckoutCart={coffee.isCheckoutCart}
              imagePath={coffee.imagePath}
              description={coffee.description}
              amountSelected={coffee.amountSelected}
            />
          )
        })}
      </StoreContainer>
    </CoffeeStroreContainer>
  )
}
