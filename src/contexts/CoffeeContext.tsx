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
  selectCurrentCoffeeToCart,
} from '../reducers/coffees/actions'
import { CoffeeReducer, ICoffees } from '../reducers/coffees/reducer'

interface ICoffeeContextType {
  coffees: ICoffees[]
  checkoutCart: string[]
  addItem: (id: string) => void
  removeItem: (id: string) => void
  addToCheckout: (id: string) => void
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
  }
})

const initialCheckout: string[] = []

export function CoffeeContextProvider({
  children,
}: ICoffeeContextProviderProps) {
  const [coffeeState, dispatch] = useReducer(CoffeeReducer, {
    coffees: initialCoffeeData,
    checkoutCart: initialCheckout,
  })

  const { coffees, checkoutCart } = coffeeState

  const addItem = (id: string) => {
    dispatch(incrementAmountSelected(id))
  }

  const removeItem = (id: string) => {
    dispatch(decreaseAmountSelected(id))
  }

  const addToCheckout = (id: string) => {
    dispatch(selectCurrentCoffeeToCart(id))
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffees,
        checkoutCart,
        addItem,
        removeItem,
        addToCheckout,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
