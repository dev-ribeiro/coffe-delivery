import { useContext, useEffect } from 'react'
import { CoffeeItem } from '../CoffeItem'
import { CoffeeStroreContainer, StoreContainer } from './styles'
import coffesData from '../../../../data/data.json'
import { CoffeeCounterContext, ICoffees } from '../../../../contexts/CoffeeContexts'

export function CoffeeStrore() {
    const { coffees, updateCoffesData } = useContext(CoffeeCounterContext)

    useEffect(() => {
        const db: ICoffees[] = coffesData

        updateCoffesData(db)
    }, [])

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
                        />
                    )
                })}
            </StoreContainer>
        </CoffeeStroreContainer>
    )
}
