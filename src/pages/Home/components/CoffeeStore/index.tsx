import { useContext, useEffect } from 'react'
import { CoffeeItem } from '../../../../components/CoffeItem'
import { CoffeeStroreContainer, StoreContainer } from './styles'
import coffesData from '../../../../data/data.json'
import { CoffeeContext, ICoffees } from '../../../../contexts/CoffeeContext'

export function CoffeeStrore() {
  const { coffees, updateCoffesData } = useContext(CoffeeContext)

  useEffect(() => {
    const db: ICoffees[] = coffesData.map((coffee) => {
      return {
        ...coffee,
        id: JSON.stringify(coffee),
        amountSelected: 0,
      }
    })

    updateCoffesData(db)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
              image_path={coffee.image_path}
              description={coffee.description}
              layout="store"
              amountSelected={coffee.amountSelected}
            />
          )
        })}
      </StoreContainer>
    </CoffeeStroreContainer>
  )
}
