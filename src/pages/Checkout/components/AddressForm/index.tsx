import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { AdressFormContainer, AdressFormInfo } from './styles'

export function AddressForm() {
  return (
    <AdressFormContainer>
      <h2>Complete seu pedido</h2>
      <form>
        <AdressFormInfo>
          <MapPinLine size={22} />
          <div>
            <h3>Endereço de entrega</h3>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </AdressFormInfo>
        <div>
          <input type="text" placeholder="CEP" className="cep" />
          <input type="text" placeholder="Rua" />
          <input type="number" className="address" placeholder="Número" />
          <input type="text" className="complement" placeholder="Complemento" />
          {/* <label htmlFor="complement">Opcional</label> */}
          <input type="text" className="district" placeholder="Bairro" />
          <input type="text" className="city" placeholder="Cidade" />
          <input type="text" className="state" placeholder="UF" />
        </div>
        <div>
          <header>
            <CurrencyDollar size={22} />
            <div>
              <h3>Pagamento</h3>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja
                pagar.
              </span>
            </div>
          </header>
          <div className="payment-options">
            <button type="submit">
              <CreditCard size={16} />
              CARTÃO DE CRÉDITO
            </button>
            <button type="submit">
              <Bank size={16} />
              CARTÃO DE DÉBITO
            </button>
            <button type="submit">
              <Money size={16} />
              DINHEIRO
            </button>
          </div>
        </div>
      </form>
    </AdressFormContainer>
  )
}
