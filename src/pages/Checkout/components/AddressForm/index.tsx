import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { FieldValues, useForm, UseFormRegister } from 'react-hook-form'
import { addressFormData } from '../..'
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

interface IAdressForm {
  register: UseFormRegister<addressFormData>
}

export function AddressForm({ register }: IAdressForm) {
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
            required
            {...register('cep')}
          />
          <Input
            type="text"
            placeholder="Rua"
            inputName="street"
            required
            {...register('street')}
          />
          <Input
            type="number"
            placeholder="Número"
            inputName="address"
            required
            {...register('address')}
          />
          <Input
            type="text"
            placeholder="Complemento"
            inputName="complement"
            className="complement"
            {...register('complement')}
          />
          <Input
            type="text"
            placeholder="Bairro"
            inputName="district"
            required
            {...register('district')}
          />
          <Input
            type="text"
            placeholder="Cidade"
            inputName="city"
            required
            {...register('city')}
          />
          <Input
            type="text"
            placeholder="UF"
            inputName="state"
            required
            {...register('state')}
          />
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
