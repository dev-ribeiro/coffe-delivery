import { useContext, useEffect } from 'react'
import { CoffeeItem } from '../../../../components/CoffeItem'
import { CoffeeStroreContainer, StoreContainer } from './styles'
import coffesData from '../../../../data/data.json'
import {
  CoffeeCounterContext,
  ICoffees,
} from '../../../../contexts/CoffeeContext'

export function CoffeeStrore() {
  const { coffees, updateCoffesData } = useContext(CoffeeCounterContext)

  useEffect(() => {
    const db: ICoffees[] = coffesData

    updateCoffesData(db)
  }, [updateCoffesData])

  console.log(coffees)

  return (
    <CoffeeStroreContainer>
      <h3>Nossos cafés</h3>
      <StoreContainer>
        {coffees.map((coffee) => {
          return (
            <CoffeeItem
              key={JSON.stringify(coffee)}
              categories={coffee.categories}
              title={coffee.title}
              image_path={coffee.image_path}
              description={coffee.description}
              layout="store"
            />
          )
        })}
      </StoreContainer>
    </CoffeeStroreContainer>
  )
}
