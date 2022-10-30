import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  DeliveryBrief,
  SuccessInfoContainer,
  SuccessPurchaseContainer,
} from './styles'
import delivery from '../../images/delivery.svg'

export function SuccessPurchasePage() {
  return (
    <SuccessPurchaseContainer>
      <SuccessInfoContainer>
        <h2>Uhu! Pedido confirmado</h2>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </SuccessInfoContainer>
      <DeliveryBrief>
        <div>
          <MapPin size={16} />
          <span>
            Entrega em <b>Rua Oscar França, 397</b>
          </span>
          <span>Bom Jardim - Fortaleza, CE</span>
        </div>
        <div>
          <Timer size={16} />
          <span>Previsão de entrega</span>
          <span>20 min - 30 min</span>
        </div>
        <div>
          <CurrencyDollar size={16} />
          <span>Pagamento na entrega</span>
          <b>Cartão de crédito</b>
        </div>
      </DeliveryBrief>
      <img src={delivery} alt="" />
    </SuccessPurchaseContainer>
  )
}
