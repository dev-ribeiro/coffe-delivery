import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { AddressForm } from './components/AddressForm'
import { SelectedCoffes } from './components/SelectedCoffes'
import { CheckoutContainer } from './styles'

const registerAddressFormSchema = zod.object({
  cep: zod.string().max(8, 'CEP pode possuir no máximo 8 dígitos'),
  street: zod.string().min(1, 'Este campo não pode estar vazio'),
  address: zod.string().min(1, 'Este campo não pode estar vazio'),
  complement: zod.string().min(1, 'Este campo não pode estar vazio'),
  district: zod.string().min(1, 'Este campo não pode estar vazio'),
  city: zod.string().min(1, 'Este campo não pode estar vazio'),
  state: zod.string().min(1, 'Este campo não pode estar vazio'),
  paymentMethod: zod.string(),
})

export type addressFormData = zod.infer<typeof registerAddressFormSchema>

export function CheckoutPage() {
  const { handleSubmit, register } = useForm<addressFormData>({
    resolver: zodResolver(registerAddressFormSchema),
    defaultValues: {
      address: '',
      cep: '',
      street: '',
      city: '',
      complement: '',
      district: '',
      state: '',
      paymentMethod: 'cash',
    },
  })

  const onSubmitForm = (data: any) => {
    console.log(data)
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(onSubmitForm)}>
      <AddressForm register={register} />
      <SelectedCoffes />
    </CheckoutContainer>
  )
}
