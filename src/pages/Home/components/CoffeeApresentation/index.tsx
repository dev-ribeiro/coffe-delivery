import { CoffeeApresentationContainer, ContentWrapper, IconWrapper, InfoContainer, SloganContainer } from "./styles";
import banner from '../../../../images/banner.png'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function CoffeeApresentation() {
    return (
        <CoffeeApresentationContainer>
            <ContentWrapper>
                <SloganContainer>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
                </SloganContainer>
                <InfoContainer>
                    <div>
                        <IconWrapper wrapperColor='cart'><ShoppingCart size={16} weight='fill' /></IconWrapper>
                        <span>Compra simples e segura</span>
                    </div>
                    <div>
                        <IconWrapper wrapperColor='package'><Package size={16} weight='fill' /></IconWrapper>
                        <span>Embalagem mantém o café intacto</span>
                    </div>
                    <div>
                        <IconWrapper wrapperColor='timer'><Timer size={16} weight='fill' /></IconWrapper>
                        <span>Entrega rápida e rastreada</span>
                    </div>
                    <div>
                        <IconWrapper wrapperColor='coffe'><Coffee size={16} weight='fill' /></IconWrapper>
                        <span>O café chega fresquinho até você</span>
                    </div>
                </InfoContainer>
            </ContentWrapper>
            <img src={banner} alt="" />
        </CoffeeApresentationContainer>
    )
}
