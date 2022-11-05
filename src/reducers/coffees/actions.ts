import { ICoffees } from './reducer'

export enum CoffeeActionsType {
  INCREMENT_AMOUNT_SELECTED = 'INCREMENT_AMOUNT_SELECTED',
  DECREASE_AMMOUNT_SELECTED = 'DECREASE_AMMOUNT_SELECTED',
  SELECT_CURRENT_COFFEE_TO_CART = 'SELECT_CURRENT_COFFEE_TO_CART',
  REMOVE_CURRENT_COFFEE_FROM_CART = 'REMOVE_CURRENT_COFFEE_FROM_CART',
}

export function incrementAmountSelected(id: string) {
  return {
    type: CoffeeActionsType.INCREMENT_AMOUNT_SELECTED,
    payload: {
      id,
    },
  }
}

export function decreaseAmountSelected(id: string) {
  return {
    type: CoffeeActionsType.DECREASE_AMMOUNT_SELECTED,
    payload: {
      id,
    },
  }
}

export function selectCurrentCoffeeToCart(id: string) {
  return {
    type: CoffeeActionsType.SELECT_CURRENT_COFFEE_TO_CART,
    payload: {
      id,
    },
  }
}

export function removeCurrentCoffeeFromCart(id: string) {
  return {
    type: CoffeeActionsType.REMOVE_CURRENT_COFFEE_FROM_CART,
    payload: {
      id,
    },
  }
}
