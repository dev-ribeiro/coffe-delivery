import { createContext, ReactNode, useState } from 'react'

export interface ICoffees {
  categories: string[]
  title: string
  description: string
  image_path: string
  amountSelected?: number
}

interface ICoffeeCounterContextType {
  count: number
  coffees: ICoffees[]
  addCoffeeToCart: () => void
  removeCoffeeToCart: () => void
  updateCoffesData: (data: ICoffees[]) => void
}

export const CoffeeCounterContext = createContext(
  {} as ICoffeeCounterContextType,
)

interface ICoffeeCounterContextProviderProps {
  children: ReactNode
}

export function CoffeeCounterContextProvider({
  children,
}: ICoffeeCounterContextProviderProps) {
  const [coffees, setCoffees] = useState<ICoffees[]>([])
  const [count, setCount] = useState(0)

  function addCoffeeToCart() {
    setCount((state) => state + 1)
  }

  function removeCoffeeToCart() {
    setCount((state) => state - 1)
  }

  function updateCoffesData(data: ICoffees[]) {
    setCoffees(data)
  }

  return (
    <CoffeeCounterContext.Provider
      value={{
        count,
        coffees,
        addCoffeeToCart,
        removeCoffeeToCart,
        updateCoffesData,
      }}
    >
      {children}
    </CoffeeCounterContext.Provider>
  )
}
