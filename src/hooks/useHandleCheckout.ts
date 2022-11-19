import React, { useContext, useState } from 'react'
import { CoffeeContext } from '../contexts/CoffeeContext'

export function useHandleCheckout() {
  const [coffeeId, setCoffeeId] = useState('')
  const { addItem, removeItem, addToCheckout, removeFromCheckout } =
    useContext(CoffeeContext)

  function getCoffeeIdInformation(id: string) {
    setCoffeeId(id)
  }

  function handleAddItem(event: React.MouseEvent) {
    event.preventDefault()
    addItem(coffeeId)
  }
  function handleRemoveItem(event: React.MouseEvent) {
    event.preventDefault()
    removeItem(coffeeId)
  }

  function handleSendToCheckout(event: React.MouseEvent) {
    event.preventDefault()
    addToCheckout(coffeeId)
  }

  const handleRemoveItemFromCheckout = (event: React.MouseEvent) => {
    event.preventDefault()
    removeFromCheckout(coffeeId)
  }

  return {
    getCoffeeIdInformation,
    handleAddItem,
    handleRemoveItem,
    handleSendToCheckout,
    handleRemoveItemFromCheckout,
  }
}
