import styled from 'styled-components'

export const SelectedCoffesContainer = styled.section`
  padding: 2.5rem;
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
