import {
  createContext,
  ReactNode,
  Reducer,
  ReducerAction,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { v4 as uuidv4 } from 'uuid'
import coffeesData from '../data/data.json'
import {
  CoffeeActionsType,
  decreaseAmountSelected,
  incrementAmountSelected,
  removeCurrentCoffeeFromCart,
  selectCurrentCoffeeToCart,
} from '../reducers/coffees/actions'
import { CoffeeReducer, ICoffees } from '../reducers/coffees/reducer'

interface ICoffeeContextType {
  coffees: ICoffees[]
  addItem: (id: string) => void
  removeItem: (id: string) => void
  addToCheckout: (id: string) => void
  removeFromCheckout: (id: string) => void
}

export const CoffeeContext = createContext({} as ICoffeeContextType)

interface ICoffeeContextProviderProps {
  children: ReactNode
}

const initialCoffeeData: ICoffees[] = coffeesData.map((coffee) => {
  return {
    ...coffee,
    id: uuidv4(),
    amountSelected: 0,
    price: 9.9,
    isCheckoutCart: false,
  }
})

export function CoffeeContextProvider({
  children,
}: ICoffeeContextProviderProps) {
  const [coffeeState, dispatch] = useReducer(CoffeeReducer, {
    coffees: initialCoffeeData,
  })

  const { coffees } = coffeeState

  const addItem = (id: string) => {
    dispatch(incrementAmountSelected(id))
  }

  const removeItem = (id: string) => {
    dispatch(decreaseAmountSelected(id))
  }

  const addToCheckout = (id: string) => {
    dispatch(selectCurrentCoffeeToCart(id))
  }

  const removeFromCheckout = (id: string) => {
    dispatch(removeCurrentCoffeeFromCart(id))
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffees,
        addItem,
        removeItem,
        addToCheckout,
        removeFromCheckout,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
