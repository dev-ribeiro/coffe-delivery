import { Trash } from 'phosphor-react'
import { useEffect } from 'react'
import { useHandleCheckout } from '../../../../hooks/useHandleCheckout'
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
  const {
    getCoffeeIdInformation,
    handleAddItem,
    handleRemoveItem,
    handleRemoveItemFromCheckout,
  } = useHandleCheckout()

  useEffect(() => {
    getCoffeeIdInformation(id)
  }, [getCoffeeIdInformation, id])

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
            <button onClick={handleRemoveItem}>-</button>
            <span>{amountSelected}</span>
            <button onClick={handleAddItem}>+</button>
          </CounterCartWrapperInCheckout>
          <button onClick={handleRemoveItemFromCheckout}>
            <Trash size={16} />
            <span>REMOVER</span>
          </button>
        </CounterCheckoutContainer>
      </CoffeeCartWrapper>
    </CoffeeItemContainerCheckout>
  )
}
