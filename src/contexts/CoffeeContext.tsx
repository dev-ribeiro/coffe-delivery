import { createContext, ReactNode, useState } from 'react'

export interface ICoffees {
  categories: string[]
  id: string
  title: string
  price: number
  description: string
  imagePath: string
  sendToCart?: boolean
  amountSelected: number
}

interface ICoffeeContextType {
  coffees: ICoffees[]
  updateCoffesData: (data: ICoffees[]) => void
  handleAmountSelecteds: (id: string, operation: 'sum' | 'decrease') => void
  verifyCoffeesToCheckout: () => ICoffees[]
  removeCoffeeToCheckout: (id: string) => void
  handleSendCoffeeToCart: (id: string, operation: 'send' | 'remove') => void
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

  const handleSendCoffeeToCart = (id: string, operation: 'send' | 'remove') => {
    if (operation === 'send') {
      coffees.map((coffee) => {
        if (coffee.id === id) {
          console.log(coffee)
          return { ...coffee, sendToCart: true }
        } else {
          return coffee
        }
      })
    } else {
      console.log('REMOVER')
    }
  }

  const verifyCoffeesToCheckout = () => {
    const selectedCoffes: ICoffees[] = coffees.filter(
      (coffee) => coffee.amountSelected !== 0,
    )

    return selectedCoffes
  }

  const removeCoffeeToCheckout = (id: string) => {
    const update = coffees.map((coffee) => {
      if (coffee.id === id) {
        return { ...coffee, amountSelected: 0 }
      } else {
        return coffee
      }
    })

    setCoffees(update)
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffees,
        updateCoffesData,
        handleAmountSelecteds,
        verifyCoffeesToCheckout,
        removeCoffeeToCheckout,
        handleSendCoffeeToCart,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
