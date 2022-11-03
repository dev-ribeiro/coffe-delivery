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
        price: 9.9,
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
              price={coffee.price}
              sendToCart={false}
              imagePath={coffee.imagePath}
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
