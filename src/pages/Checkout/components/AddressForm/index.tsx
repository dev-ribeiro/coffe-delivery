import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { AdressFormContainer } from "./styles";

export function AddressForm() {


    return (
        <AdressFormContainer>
            <MapPinLine />
            <h2>Complete seu pedido</h2>
            <div>
                <h3>Endereço de entrega</h3>
                <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
            <form>
                <input type="number" />
                <input type="text" />
                <input type="text" />
                <div>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </div>
                <div>
                    <CurrencyDollar />
                    <h3>Pagamento</h3>
                    <span>Escolha a forma que deseja pagar</span>
                    <button type="submit">
                        <CreditCard/>
                        CARTÃO DE CRÉDITO
                    </button>
                    <button type="submit">
                        <Bank/>
                        CARTÃO DE DÉBITO
                    </button>
                    <button type="submit">
                        <Money/>
                        DINHEIRO
                    </button>
                </div>
            </form>
        </AdressFormContainer>
    )
}
