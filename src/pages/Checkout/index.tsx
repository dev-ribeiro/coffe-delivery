import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckoutContainer } from './styles'
import { FormEvent, useContext } from 'react'
import { FormAdressContext } from '../../contexts/FormAdressContext'
import { AdressForm } from './components/AdressForm'

const registerAddressFormSchema = zod.object({
  cep: zod.string().max(8, 'CEP pode possuir no máximo 8 dígitos'),
  street: zod.string().min(1, 'Este campo não pode estar vazio'),
  address: zod.string().min(1, 'Este campo não pode estar vazio'),
  complement: zod.string(),
  district: zod.string().min(1, 'Este campo não pode estar vazio'),
  city: zod.string().min(1, 'Este campo não pode estar vazio'),
  state: zod.string().min(1, 'Este campo não pode estar vazio'),
  paymentMethod: zod.enum(['cash', 'credit', 'debit']),
})

export type addressFormData = zod.infer<typeof registerAddressFormSchema>

export function CheckoutPage() {
  return (
    <CheckoutContainer>
      <AdressForm />
    </CheckoutContainer>
  )
}
