import React, { createContext, MouseEvent, ReactNode, useState } from 'react'

export type paymentOptions = 'credit' | 'debit' | 'cash'

interface IFormAdress {
  cep: string
  street: string
  address: string
  complement: string
  district: string
  city: string
  state: string
  paymentMethod: paymentOptions
}

interface IFormAdressContextType {
  adressForm: IFormAdress
  handleSubmitAddressForm: (data: IFormAdress) => void
}

export const FormAdressContext = createContext({} as IFormAdressContextType)

interface IFormAdressContextProps {
  children: ReactNode
}

export function FormAdressContextProvider({
  children,
}: IFormAdressContextProps) {
  const [adressForm, setAdressForm] = useState<IFormAdress>({} as IFormAdress)

  const handleSubmitAddressForm = (data: IFormAdress) => {
    setAdressForm((state) => {
      const formData = Object.assign(state, data)
      return {
        ...state,
        ...formData,
      }
    })
  }

  return (
    <FormAdressContext.Provider
      value={{
        adressForm,
        handleSubmitAddressForm,
      }}
    >
      {children}
    </FormAdressContext.Provider>
  )
}
