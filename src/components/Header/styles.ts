import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;

  display: flex;
  align-items: center;
  justify-content: space-around;

  * {
    font-family: 'Roboto', monospace;
  }

  div {
    display: flex;
    align-items: center;
  }
`

export const ShoppingCartContainer = styled.div`
  height: 100%;
  gap: 12px;

  .cart {
    padding: 8px;

    border-radius: 6px;
    background-color: ${(props) => props.theme['yellow-light']};

    svg {
      color: ${(props) => props.theme['yellow-dark']};
    }
  }
`

export const LocationContainer = styled.div`
  color: ${(props) => props.theme.purple};

  span {
    line-height: 1.3;
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const CartWrapper = styled.div`
  display: flex;
  gap: 0;

  span {
    width: 20px;
    height: 20px;
    margin-left: -10px;
    margin-top: -5px;
    align-self: flex-start;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 12px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;

    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme['yellow-dark']};

    border-radius: 999px;
  }
`
