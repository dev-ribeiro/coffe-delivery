import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  DeliveryBrief,
  IconWrapper,
  SuccessInfoContainer,
  SuccessPurchaseContainer,
} from './styles'
import delivery from '../../images/delivery.svg'

export function SuccessPurchasePage() {
  return (
    <SuccessPurchaseContainer>
      <div>
        <SuccessInfoContainer>
          <h2>Uhu! Pedido confirmado</h2>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </SuccessInfoContainer>
        <DeliveryBrief>
          <section>
            <IconWrapper>
              <MapPin size={16} weight="fill" />
            </IconWrapper>
            <div>
              <span>
                Entrega em <b>Rua Daniel Martinelli, 397</b>
              </span>
              <span>Porto Alegre - RS</span>
            </div>
          </section>
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
              <b>Cartão de crédito</b>
            </div>
          </section>
        </DeliveryBrief>
      </div>
      <img src={delivery} alt="" />
    </SuccessPurchaseContainer>
  )
}
