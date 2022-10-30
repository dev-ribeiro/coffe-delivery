import React, { createContext, ReactNode, useState } from 'react'

interface IFormAdress {
  cep: string
  street: string
  address: string
  complement: string
  district: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}

interface IFormAdressContextType {
  adressInfo: IFormAdress
  handleUpdateAdressInfo: (data: IFormAdress) => void
}

export const FormAdressContext = createContext({} as IFormAdressContextType)

interface IFormAdressContextProps {
  children: ReactNode
}

export function FormAdressContextProvider({
  children,
}: IFormAdressContextProps) {
  const [adressInfo, setAdressInfo] = useState<IFormAdress>({
    address: '',
    cep: '',
    street: '',
    city: '',
    complement: '',
    district: '',
    state: '',
    paymentMethod: 'cash',
  })

  const handleUpdateAdressInfo = (data: IFormAdress) => {
    setAdressInfo(data)
  }

  return (
    <FormAdressContext.Provider value={{ adressInfo, handleUpdateAdressInfo }}>
      {children}
    </FormAdressContext.Provider>
  )
}
