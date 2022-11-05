import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { Control, Controller, UseFormRegister } from 'react-hook-form'
import { addressFormData } from '../..'
import * as RadioGroup from '@radix-ui/react-radio-group'
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
import { useContext } from 'react'
import { FormAdressContext } from '../../../../contexts/FormAdressContext'

interface IAdressForm {
  register: UseFormRegister<addressFormData>
  control: Control<addressFormData>
}

export function AddressForm({ register, control }: IAdressForm) {
  const { adressForm } = useContext(FormAdressContext)

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
        {/*  */}
      </PaymentMethodContainer>
    </AdressFormContainer>
  )
}
