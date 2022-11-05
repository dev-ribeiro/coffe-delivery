import styled from 'styled-components'

export const CoffeeItemContainerCheckout = styled.div`
  max-width: 23rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  display: flex;
  gap: 20px;

  border-bottom: 1px solid ${(props) => props.theme['gray-100']};

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const CoffeeCartWrapper = styled.div`
  width: 23rem;
  margin: auto;
`

export const CoffeeCheckoutHeaderContainer = styled.header`
  width: 100%;
  margin-bottom: 0.5rem;

  display: flex;
  justify-content: space-between;

  h4 {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    text-decoration: none;
    font-weight: 400;
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: bold;
  }
`

export const CounterCheckoutContainer = styled.div`
  display: flex;

  & > button {
    padding: 8px 4px;

    display: flex;
    align-items: center;

    border: none;
    border-radius: 6px;
    background-color: ${(props) => props.theme['gray-350']};

    svg {
      color: ${(props) => props.theme.purple};
    }
  }
`

export const CounterCartWrapperInCheckout = styled.div`
  padding: 0.25rem;
  margin-right: 0.5rem;

  display: flex;
  align-items: center;
  gap: 4px;

  border-radius: 6px;
  border-bottom: 1px solid ${(props) => props.theme['gray-100']};
  background-color: ${(props) => props.theme['gray-350']};

  button {
    width: 0.875rem;

    font-weight: bold;
    font-size: 1rem;

    background: none;
    border: none;
    color: ${(props) => props.theme.purple};
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
  }
`
