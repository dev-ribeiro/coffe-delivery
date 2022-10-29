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
  selectedCoffees: ICoffees[]
  updateCoffesData: (data: ICoffees[]) => void
  handleAmountSelecteds: (id: string, operation: 'sum' | 'decrease') => void
}

export const CoffeeContext = createContext({} as ICoffeeContextType)

interface ICoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: ICoffeeContextProviderProps) {
  const [coffees, setCoffees] = useState<ICoffees[]>([])
  const [selectedCoffees, setSelectedCoffees] = useState<ICoffees[]>([])

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

  const sendCoffeesToCheckout = () => {
    const findPurchases: ICoffees[] = coffees.filter((coffee) => {
      return coffee.amountSelected !== 0
    })

    setSelectedCoffees(findPurchases)
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffees,
        selectedCoffees,
        updateCoffesData,
        handleAmountSelecteds,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
