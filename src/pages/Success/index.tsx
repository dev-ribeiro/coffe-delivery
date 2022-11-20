import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { useFormAddress } from '../../hooks/useFormAddress'
import deliveryBanner from '../../images/delivery.svg'
import {
  AddressBriefContainer,
  AddressBriefHeader,
  AddressInformationGroupWrapper,
  AddressInformationPanel,
  IconWrapper,
  SuccessPageContainer,
} from './styles'

export function SuccessPage() {
  const { addressFormData } = useFormAddress()
  //   console.log(addressFormData)

  return (
    <SuccessPageContainer>
      <AddressBriefContainer>
        <AddressBriefHeader>
          <h2>Uhu! Pedido confirmado</h2>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </AddressBriefHeader>
        <AddressInformationPanel>
          <div>
            <AddressInformationGroupWrapper>
              <IconWrapper variant="map">
                <MapPin size={16} weight="fill" />
              </IconWrapper>
              <span>
                Entrega em <b>Rua João Daniel Martinelli, 102</b> Farrapos -
                Porto Alegre, RS
              </span>
            </AddressInformationGroupWrapper>
            <AddressInformationGroupWrapper>
              <IconWrapper variant="timer">
                <Timer size={16} weight="fill" />
              </IconWrapper>
              <span>
                Previsão de entrega <br />
                <b>20 min - 30 min</b>
              </span>
            </AddressInformationGroupWrapper>
            <AddressInformationGroupWrapper>
              <IconWrapper variant="currency">
                <CurrencyDollar size={16} />
              </IconWrapper>
              <span>
                Pagamento na entrega
                <br /> <b>Cartão de Crédito</b>
              </span>
            </AddressInformationGroupWrapper>
          </div>
        </AddressInformationPanel>
      </AddressBriefContainer>
      <img src={deliveryBanner} alt="" />
    </SuccessPageContainer>
  )
}
