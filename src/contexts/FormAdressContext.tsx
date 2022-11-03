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
  adressInfo: IFormAdress
  handleSubmitAddressForm: (data: IFormAdress) => void
}

export const FormAdressContext = createContext({} as IFormAdressContextType)

interface IFormAdressContextProps {
  children: ReactNode
}

export function FormAdressContextProvider({
  children,
}: IFormAdressContextProps) {
  const [adressInfo, setAdressInfo] = useState<IFormAdress>({} as IFormAdress)

  const handleSubmitAddressForm = (data: IFormAdress) => {
    setAdressInfo((state) => {
      return {
        ...state,
        cep: data.cep,
        street: data.street,
        address: data.address,
        complement: data.complement,
        district: data.district,
        city: data.city,
        state: data.state,
        paymentMethod: data.paymentMethod,
      }
    })
  }

  return (
    <FormAdressContext.Provider
      value={{
        adressInfo,
        handleSubmitAddressForm,
      }}
    >
      {children}
    </FormAdressContext.Provider>
  )
}
