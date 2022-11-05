import { Trash } from 'phosphor-react'
import { ICoffees } from '../../reducers/coffees/reducer'
import {
  CoffeeCartWrapper,
  CoffeeCheckoutHeaderContainer,
  CoffeeItemContainerCheckout,
  CounterCartWrapperInCheckout,
  CounterCheckoutContainer,
} from './styles'

export function CoffeeItemCheckou({
  id,
  categories,
  description,
  imagePath,
  title,
  amountSelected,
  price,
}: ICoffees) {
  return (
    <CoffeeItemContainerCheckout>
      <img src={imagePath} alt="" />
      <CoffeeCartWrapper>
        <CoffeeCheckoutHeaderContainer>
          <h4>{title}</h4>
          <span>
            {(amountSelected * 9.9).toFixed(2).toString().replace('.', ',')}
          </span>
        </CoffeeCheckoutHeaderContainer>
        <CounterCheckoutContainer>
          <CounterCartWrapperInCheckout>
            <button>-</button>
            <span>{amountSelected}</span>
            <button>+</button>
          </CounterCartWrapperInCheckout>
          <button>
            <Trash size={16} />
            <span>REMOVER</span>
          </button>
        </CounterCheckoutContainer>
      </CoffeeCartWrapper>
    </CoffeeItemContainerCheckout>
  )
}
