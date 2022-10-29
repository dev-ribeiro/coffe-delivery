import styled from 'styled-components'

export const SelectedCoffesContainer = styled.section`
  padding: 2.5rem;
`

export const CartCoffeesCheckoutWrapper = styled.div`
  padding: 2.5rem;
  width: 28rem;

  background-color: ${(props) => props.theme['gray-350']};
  border-radius: 6px 44px;
`

export const BillContainer = styled.div`
  margin-top: 24px;
  width: 368px;

  display: flex;
  flex-direction: column;
  gap: 12px;

  * {
    font-family: 'Roboto', sans-serif;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    span {
      font-size: 14px;
    }

    h5 {
      color: ${(props) => props.theme['gray-800']};
      font-size: 20px;
    }
  }
`

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px 8px;
  margin-top: 24px;

  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['yellow-dark']};
`
