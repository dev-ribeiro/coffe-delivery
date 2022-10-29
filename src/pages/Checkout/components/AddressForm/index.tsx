import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  AdressFormContainer,
  AdressFormInfo,
  FormInfoAndInputsWrapper,
  FormInputsWrapper,
  Input,
  PaymentInfoWrapper,
  PaymentMethodContainer,
  PaymentOptionsWrapper,
} from './styles'

export function AddressForm() {
  return (
    <AdressFormContainer>
      <h2>Complete seu pedido</h2>
      <FormInfoAndInputsWrapper>
        <AdressFormInfo>
          <MapPinLine size={22} />
          <div>
            <h3>Endereço de entrega</h3>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </AdressFormInfo>
        <FormInputsWrapper>
          <Input
            type="text"
            placeholder="CEP"
            inputName="cep"
            className="cep"
          />
          <Input type="text" placeholder="Rua" inputName="street" />
          <Input type="number" placeholder="Número" inputName="adress" />
          <Input
            type="text"
            placeholder="Complemento"
            inputName="complement"
            className="complement"
          />
          {/* <label htmlFor="complement">Opcional</label> */}
          <Input type="text" placeholder="Bairro" inputName="district" />
          <Input type="text" placeholder="Cidade" inputName="city" />
          <Input type="text" placeholder="UF" inputName="state" />
        </FormInputsWrapper>
      </FormInfoAndInputsWrapper>
      <PaymentMethodContainer>
        <PaymentInfoWrapper>
          <CurrencyDollar size={22} />
          <div>
            <h3>Pagamento</h3>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar.
            </span>
          </div>
        </PaymentInfoWrapper>
        <PaymentOptionsWrapper>
          <button type="submit">
            <CreditCard size={16} />
            <span>CARTÃO DE CRÉDITO</span>
          </button>
          <button type="submit">
            <Bank size={16} />
            <span>CARTÃO DE DÉBITO</span>
          </button>
          <button type="submit">
            <Money size={16} />
            <span>DINHEIRO</span>
          </button>
        </PaymentOptionsWrapper>
      </PaymentMethodContainer>
    </AdressFormContainer>
  )
}
