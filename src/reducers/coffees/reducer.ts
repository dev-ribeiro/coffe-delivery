import { CoffeeActionsType } from './actions'

export interface ICoffees {
  categories: string[]
  id: string
  title: string
  price: number
  description: string
  imagePath: string
  sendToCart: boolean
  amountSelected: number
}

interface ICoffeeState {
  coffees: ICoffees[]
}

export function CoffeeReducer(state: ICoffeeState, actions: any) {
  switch (actions.type) {
    case CoffeeActionsType.INCREMENT_AMOUNT_SELECTED:
      return {
        ...state,
        coffees: state.coffees.map((coffee) => {
          if (coffee.id === actions.payload.id) {
            return { ...coffee, amountSelected: coffee.amountSelected + 1 }
          }

          return coffee
        }),
      }

    case CoffeeActionsType.DECREASE_AMMOUNT_SELECTED:
      return {
        ...state,
        coffees: state.coffees.map((coffee) => {
          if (coffee.id === actions.payload.id) {
            return { ...coffee, amountSelected: coffee.amountSelected - 1 }
          }

          return coffee
        }),
      }

    // case CoffeeActionsType.SELECT_CURRENT_COFFEE_TO_CART:
    //   return state.coffees.map((coffee) => {
    //     if (coffee.id === actions.payload.id) {
    //       return { ...coffee, sendToCart: true }
    //     }

    //     return coffee
    //   })

    default:
      return state
  }
}
