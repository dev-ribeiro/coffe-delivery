import { ShoppingCart } from "phosphor-react";
import { CoffeeItemContainer } from "./styles";
import expresso from '../../../../images/store/expresso.png'

export function CoffeeItem() {
    return (
        <CoffeeItemContainer>
            <img src={expresso} alt="" />
            <span>TRADICIONAL</span>
            <h4>Expresso tradicional</h4>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div>
                <p>R$ 9,90</p>
                <span>+</span>
                <span>1</span>
                <span>-</span>
                <ShoppingCart size={16} fill="true"/>
            </div>
        </CoffeeItemContainer>
    )
}
