import { AddressForm } from './components/AddressForm'
import { SelectedCoffes } from './components/SelectedCoffes'
import { CheckoutContainer } from './styles'

export function CheckoutPage() {
  return (
    <CheckoutContainer>
      <AddressForm />
      <SelectedCoffes />
    </CheckoutContainer>
  )
}
