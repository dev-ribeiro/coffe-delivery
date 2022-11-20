import { useContext, useEffect, useState } from 'react'
import { CoffeeContext } from '../contexts/CoffeeContext'

interface CheckoutCartType {
  categories: string[]
  id: string
  title: string
  price: number
  description: string
  imagePath: string
  amountSelected: number
  isCheckoutCart: boolean
}

export function useCheckoutCart() {
  const { coffees } = useContext(CoffeeContext)
  const [checkoutCart, setCheckoutCart] = useState<CheckoutCartType[]>([])

  useEffect(() => {
    const shippedCoffees = coffees.filter((coffee) => {
      return coffee.isCheckoutCart === true
    })

    setCheckoutCart(shippedCoffees)
  }, [coffees])

  const summaryBill = checkoutCart.reduce((acc, coffee) => {
    return (acc += coffee.amountSelected * coffee.price)
  }, 0)

  return {
    checkoutCart,
    summaryBill,
  }
}
