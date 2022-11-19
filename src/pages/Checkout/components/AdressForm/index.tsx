/* eslint-disable array-callback-return */
import * as RadioGroup from '@radix-ui/react-radio-group'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import { CoffeeItemCheckout } from '../CoffeeItemCheckout'
import {
  AdressFormContainer,
  AdressInformationHeader,
  AdressInformationsContainer,
  AdressInput,
  AdressInputsGroup,
  AdressInputWrapper,
  CheckoutCartContainer,
  DeliveryPanelContainer,
  OrderSummary,
  OrderSummaryContainer,
  PaymentHeaderContainer,
  PaymentOptionContainer,
  PaymentOptionsWrapper,
} from './styles'

export function AdressForm() {
  const { coffees } = useContext(CoffeeContext)
  const { control } = useForm()

  return (
    <AdressFormContainer>
      <DeliveryPanelContainer>
        <h2>Complete seu pedido</h2>
        <AdressInformationsContainer>
          <AdressInformationHeader>
            <MapPinLine size={22} />
            <div>
              <h2>Endereço de entrega</h2>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </AdressInformationHeader>
          <AdressInputsGroup>
            <AdressInputWrapper inputGroupName="cep">
              <AdressInput name="cep" type="text" />
              <label htmlFor="cep">CEP</label>
            </AdressInputWrapper>
            <AdressInputWrapper inputGroupName="street">
              <AdressInput name="street" type="text" />
              <label htmlFor="street">Rua</label>
            </AdressInputWrapper>
            <AdressInputWrapper inputGroupName="address">
              <AdressInput name="address" type="text" />
              <label htmlFor="address">Número</label>
            </AdressInputWrapper>
            <AdressInputWrapper inputGroupName="complement">
              <AdressInput name="complement" type="text" />
              <label htmlFor="complement">Complemento</label>
            </AdressInputWrapper>
            <AdressInputWrapper inputGroupName="district">
              <AdressInput name="district" type="text" />
              <label htmlFor="district">Bairro</label>
            </AdressInputWrapper>
            <AdressInputWrapper inputGroupName="city">
              <AdressInput name="city" type="text" />
              <label htmlFor="city">Cidade</label>
            </AdressInputWrapper>
            <AdressInputWrapper inputGroupName="state">
              <AdressInput name="state" type="text" />
              <label htmlFor="state">UF</label>
            </AdressInputWrapper>
          </AdressInputsGroup>
        </AdressInformationsContainer>
        <PaymentOptionContainer>
          <PaymentHeaderContainer>
            <CurrencyDollar size={22} />
            <div>
              <h2>Pagamento</h2>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </PaymentHeaderContainer>
          <Controller
            control={control}
            name="paymentMethod"
            render={({ field }) => {
              return (
                <PaymentOptionsWrapper
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <RadioGroup.Item value="credit" asChild>
                    <button>
                      <CreditCard size={16} />
                      <span>CARTÃO DE CRÉDITO</span>
                    </button>
                  </RadioGroup.Item>
                  <RadioGroup.Item value="debit" asChild>
                    <button>
                      <Bank size={16} />
                      <span>CARTÃO DE DÉBITO</span>
                    </button>
                  </RadioGroup.Item>
                  <RadioGroup.Item value="cash" asChild>
                    <button>
                      <Money size={16} />
                      <span>DINHEIRO</span>
                    </button>
                  </RadioGroup.Item>
                </PaymentOptionsWrapper>
              )
            }}
          />
        </PaymentOptionContainer>
      </DeliveryPanelContainer>
      <OrderSummaryContainer>
        <h2>Cafés selecionados</h2>
        <div>
          <CheckoutCartContainer>
            {coffees.map((coffee, index) => {
              if (index < 2) {
                return <CoffeeItemCheckout key={coffee.id} {...coffee} />
              }
            })}
          </CheckoutCartContainer>
          <OrderSummary>
            <span>Total de itens</span>
            <span>R$ 29,70</span>
            <span>Entrega</span>
            <span>R$ 3,50</span>
            <span>Total</span>
            <span>R$ 33,70</span>
          </OrderSummary>
          <button type="submit">CONFIRMAR PEDIDO</button>
        </div>
      </OrderSummaryContainer>
    </AdressFormContainer>
  )
}
