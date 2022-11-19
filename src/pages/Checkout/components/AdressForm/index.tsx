/* eslint-disable array-callback-return */
import * as RadioGroup from '@radix-ui/react-radio-group'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import React, { useContext, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import { useCheckoutCart } from '../../../../hooks/useCheckoutCart'
import { useFormAddress } from '../../../../hooks/useFormAddress'
import { priceFormatter } from '../../../../utils/formatter'
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

interface FormAdressType {
  cep: string
  street: string
  address: string
  complement?: string
  district: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}

export function AdressForm() {
  const { checkouCart, summaryBill } = useCheckoutCart()
  const { control, handleSubmit, register } = useForm()
  const { handleSetAddressData } = useFormAddress()

  function getInformationOfAddressForm(data: any) {
    const addressData: FormAdressType = data
    handleSetAddressData(addressData)
  }

  return (
    <AdressFormContainer onSubmit={handleSubmit(getInformationOfAddressForm)}>
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
              <AdressInput
                type="text"
                {...register('cep')}
                placeholder=" "
                required
              />
              <label htmlFor="cep">CEP</label>
            </AdressInputWrapper>
            <AdressInputWrapper inputGroupName="street">
              <AdressInput
                {...register('street')}
                type="text"
                placeholder=" "
                required
              />
              <label htmlFor="street">Rua</label>
            </AdressInputWrapper>
            <AdressInputWrapper inputGroupName="address">
              <AdressInput
                {...register('address')}
                type="text"
                placeholder=" "
                required
              />
              <label htmlFor="address">Número</label>
            </AdressInputWrapper>
            <AdressInputWrapper inputGroupName="complement">
              <AdressInput
                {...register('complement')}
                type="text"
                placeholder="Opcional"
                className="optional"
              />
              <label htmlFor="complement">Complemento</label>
            </AdressInputWrapper>
            <AdressInputWrapper inputGroupName="district">
              <AdressInput
                {...register('district')}
                type="text"
                placeholder=" "
                required
              />
              <label htmlFor="district">Bairro</label>
            </AdressInputWrapper>
            <AdressInputWrapper inputGroupName="city">
              <AdressInput
                {...register('city')}
                type="text"
                placeholder=" "
                required
              />
              <label htmlFor="city">Cidade</label>
            </AdressInputWrapper>
            <AdressInputWrapper inputGroupName="state">
              <AdressInput
                {...register('state')}
                type="text"
                placeholder=" "
                required
              />
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
            {checkouCart.map((coffee) => {
              return <CoffeeItemCheckout key={coffee.id} {...coffee} />
            })}
          </CheckoutCartContainer>
          <OrderSummary>
            <span>Total de itens</span>
            <span>{priceFormatter.format(summaryBill)}</span>
            <span>Entrega</span>
            <span>R$ 3,50</span>
            <span>Total</span>
            <span>{priceFormatter.format(summaryBill + 3.5)}</span>
          </OrderSummary>
          <button type="submit">CONFIRMAR PEDIDO</button>
        </div>
      </OrderSummaryContainer>
    </AdressFormContainer>
  )
}
