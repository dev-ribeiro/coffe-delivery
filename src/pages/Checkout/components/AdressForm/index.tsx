import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import {
  AdressFormContainer,
  AdressInformationsContainer,
  AdressInputsGroup,
  CheckoutCartContainer,
  DeliveryPanelContainer,
  OrderSummary,
  OrderSummaryContainer,
  PaymentOptionContainer,
} from './styles'

export function AdressForm() {
  return (
    <AdressFormContainer>
      <DeliveryPanelContainer>
        <AdressInformationsContainer>
          <header>
            <MapPinLine size={22} />
            <h2>Endereço de entrega</h2>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </header>
          <AdressInputsGroup>
            <input placeholder="CEP" type="text" />
            <input placeholder="Rua" type="text" />
            <input placeholder="Número" type="text" />
            <input placeholder="Complemento" type="text" />
            <input placeholder="Bairro" type="text" />
            <input placeholder="Cidade" type="text" />
            <input placeholder="UF" type="text" />
          </AdressInputsGroup>
        </AdressInformationsContainer>
        <PaymentOptionContainer>
          <header>
            <CurrencyDollar size={22} />
            <h2>Pagamento</h2>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </header>
        </PaymentOptionContainer>
      </DeliveryPanelContainer>
      <OrderSummaryContainer>
        <CheckoutCartContainer></CheckoutCartContainer>
        <OrderSummary>
          <span>Total de itens</span>
          <span>R$ 29,70</span>
          <span>Entrega</span>
          <span>R$ 3,50</span>
          <h2>Total</h2>
          <h2>R$ 33,70</h2>
        </OrderSummary>
      </OrderSummaryContainer>
    </AdressFormContainer>
  )
}
