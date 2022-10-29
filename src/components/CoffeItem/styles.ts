import styled from 'styled-components'

export const CoffeeItemContainerStore = styled.section`
  width: 16rem;

  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${(props) => props.theme['gray-200']};

  border-bottom-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-left-radius: 36px;
  border-bottom-right-radius: 36px;

  img {
    width: 120px;
    height: 120px;

    margin-top: -40px;
  }
`

export const CoffeeCategoriesWrapper = styled.div`
  margin: 12px 0;

  display: flex;
  gap: 8px;
`

export const CoffeeCategories = styled.span`
  padding: 8px;

  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  border-radius: 8px;

  font-family: 'Roboto', sans-serif;
  font-size: 10px;
`

export const CoffeeInfoWrapper = styled.div`
  margin-bottom: 2.0625rem;

  display: flex;
  flex-direction: column;
  align-content: space-around;
  gap: 8px 0;

  h4 {
    text-align: center;
    font-family: 'Baloo 2', monospace;
    font-size: 20px;

    color: ${(props) => props.theme['gray-800']};
  }

  span {
    text-align: center;

    color: ${(props) => props.theme['gray-450']};

    font-size: 14px;
    font-family: 'Roboto', sans-serif;
  }
`

export const CoffeePricesWrapper = styled.div`
  display: flex;
  flex-direction: row;

  gap: 23px;
`

export const CoffeePrice = styled.div`
  span {
    color: ${(props) => props.theme['gray-500']};
  }

  .prefix {
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
  }

  .price {
    font-size: 24px;
    font-weight: bolder;
    font-family: 'Baloo 2', sans-serif;
  }
`

export const CounterCartWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .counterWrapper {
    padding: 8px;
    width: 72px;

    display: flex;
    justify-content: space-around;
    gap: 4px;

    border-radius: 6px;

    background-color: ${(props) => props.theme['gray-400']};

    span {
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
    }

    .plus,
    .minun {
      cursor: pointer;
      background: none;
      border: none;
      font-weight: bolder;
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  .cartWrapper {
    padding: 8px;

    display: flex;
    align-items: center;

    background-color: ${(props) => props.theme['purple-dark']};

    border-radius: 6px;

    svg {
      color: ${(props) => props.theme['gray-200']};
    }
  }
`

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
