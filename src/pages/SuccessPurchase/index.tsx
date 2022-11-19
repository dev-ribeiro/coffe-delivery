import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  DeliveryBrief,
  IconWrapper,
  SuccessInfoContainer,
  SuccessPurchaseContainer,
} from './styles'
import delivery from '../../images/delivery.svg'
import { useContext } from 'react'

export function SuccessPurchasePage() {
  return (
    <SuccessPurchaseContainer>
      <div>
        <SuccessInfoContainer>
          <h2>Uhu! Pedido confirmado</h2>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </SuccessInfoContainer>
        <DeliveryBrief>
          {/* <section>
            <IconWrapper>
              <MapPin size={16} weight="fill" />
            </IconWrapper>
            <div>
              <span>
                Entrega em <b>{`${(adressForm.street, adressForm.address)}`}</b>
              </span>
              <span>{`${adressForm.city} - ${adressForm.city}`}</span>
            </div>
          </section> */}
          <section>
            <IconWrapper>
              <Timer size={16} weight="fill" />
            </IconWrapper>
            <div>
              <span>Previsão de entrega</span>
              <b>20 min - 30 min</b>
            </div>
          </section>
          <section>
            <IconWrapper>
              <CurrencyDollar size={16} />
            </IconWrapper>
            <div>
              <span>Pagamento na entrega</span>
              {/* <b>{adressForm.paymentMethod}</b> */}
            </div>
          </section>
        </DeliveryBrief>
      </div>
      <img src={delivery} alt="" />
    </SuccessPurchaseContainer>
  )
}
