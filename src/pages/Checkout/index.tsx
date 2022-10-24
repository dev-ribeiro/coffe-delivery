import { AddressForm } from "./components/AddressForm";
import { CheckoutContainer } from "./styles";

export function CheckoutPage() {
    return (
        <CheckoutContainer>
            <h2>Complete seu pedido</h2>
            <AddressForm/>
        </CheckoutContainer>
    )
}
