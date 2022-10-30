import { createContext, ReactNode, useState } from 'react'

export interface ICoffees {
  categories: string[]
  id: string
  title: string
  description: string
  image_path: string
  amountSelected: number
}

interface ICoffeeContextType {
  coffees: ICoffees[]
  updateCoffesData: (data: ICoffees[]) => void
  handleAmountSelecteds: (id: string, operation: 'sum' | 'decrease') => void
  verifyCoffeesToCheckout: () => ICoffees[]
}

export const CoffeeContext = createContext({} as ICoffeeContextType)

interface ICoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: ICoffeeContextProviderProps) {
  const [coffees, setCoffees] = useState<ICoffees[]>([])

  const updateCoffesData = (data: ICoffees[]) => {
    setCoffees(data)
  }

  const handleAmountSelecteds = (id: string, operation: 'sum' | 'decrease') => {
    if (operation === 'sum') {
      const addCoffes = coffees.map((coffee) => {
        if (coffee.id === id) {
          return { ...coffee, amountSelected: coffee.amountSelected + 1 }
        } else {
          return coffee
        }
      })

      setCoffees(addCoffes)
    }

    if (operation === 'decrease') {
      const decreaseCoffes = coffees.map((coffee) => {
        if (coffee.id === id) {
          return { ...coffee, amountSelected: coffee.amountSelected + 1 }
        } else {
          return coffee
        }
      })
      setCoffees(decreaseCoffes)
    }
  }

  const verifyCoffeesToCheckout = () => {
    const selectedCoffes: ICoffees[] = coffees.filter(
      (coffee) => coffee.amountSelected !== 0,
    )

    return selectedCoffes
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffees,
        updateCoffesData,
        handleAmountSelecteds,
        verifyCoffeesToCheckout,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
