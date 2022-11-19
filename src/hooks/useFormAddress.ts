import { useState } from 'react'

export type paymentOptions = 'credit' | 'debit' | 'cash'

interface FormAdressType {
  cep: string
  street: string
  address: string
  complement?: string
  district: string
  city: string
  state: string
  paymentMethod: paymentOptions
}

const storageKey = '@ignite-coffee-delivery___v1___address'

export function useFormAddress() {
  const initialState: FormAdressType = JSON.parse(
    localStorage.getItem(storageKey)!,
  ) || {
    address: '',
    cep: '',
    city: '',
    district: '',
    paymentMethod: 'cash',
    state: '',
    street: '',
    complement: '',
  }
  const [addressFormData, setAddressFormData] =
    useState<FormAdressType>(initialState)

  function handleSetAddressData(data: FormAdressType) {
    localStorage.setItem(storageKey, JSON.stringify(data))
    setAddressFormData(data)
  }

  return {
    addressFormData,
    handleSetAddressData,
  }
}
