import { Trash } from 'phosphor-react'
import { FormEvent, useContext } from 'react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import { ICoffees } from '../../../../reducers/coffees/reducer'
import {
  CoffeeCartWrapper,
  CoffeeCheckoutHeaderContainer,
  CoffeeItemContainerCheckout,
  CounterCartWrapperInCheckout,
  CounterCheckoutContainer,
} from './styles'

export function CoffeeItemCheckout({
  id,
  imagePath,
  title,
  amountSelected,
  price,
}: ICoffees) {
  const { addItem, removeItem, removeFromCheckout } = useContext(CoffeeContext)

  const onRemoveFromCheckout = () => {
    removeFromCheckout(id)
  }

  const onAddItem = () => {
    addItem(id)
  }
  const onRemoveItem = () => {
    removeItem(id)
  }

  return (
    <CoffeeItemContainerCheckout id={id}>
      <img src={imagePath} alt="" />
      <CoffeeCartWrapper>
        <CoffeeCheckoutHeaderContainer>
          <h4>{title}</h4>
          <span>
            {(amountSelected * price).toFixed(2).toString().replace('.', ',')}
          </span>
        </CoffeeCheckoutHeaderContainer>
        <CounterCheckoutContainer>
          <CounterCartWrapperInCheckout>
            <button onClick={onRemoveItem}>-</button>
            <span>{amountSelected}</span>
            <button onClick={onAddItem}>+</button>
          </CounterCartWrapperInCheckout>
          <button onClick={onRemoveFromCheckout}>
            <Trash size={16} />
            <span>REMOVER</span>
          </button>
        </CounterCheckoutContainer>
      </CoffeeCartWrapper>
    </CoffeeItemContainerCheckout>
  )
}
