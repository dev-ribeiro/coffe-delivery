import { FormEvent } from 'react'
import { AddressForm } from './components/AddressForm'
import { SelectedCoffes } from './components/SelectedCoffes'
import { CheckoutContainer } from './styles'

export function CheckoutPage() {
  const testSubmit = (event: FormEvent) => {
    event.preventDefault()
    console.log('HALLO')
  }

  return (
    <CheckoutContainer onSubmit={testSubmit}>
      <AddressForm />
      <SelectedCoffes />
    </CheckoutContainer>
  )
}
