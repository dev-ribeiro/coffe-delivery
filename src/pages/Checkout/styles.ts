import styled from 'styled-components'

export const CheckoutContainer = styled.section`
  display: grid;
  grid-template-columns: 40rem 28rem;
  justify-content: center;
  gap: 32px;

  h2 {
    margin-top: 40px;
    margin-bottom: 15px;

    color: ${(props) => props.theme['gray-800']};

    font-family: 'Baloo 2', monospace;
    font-weight: bold;
    font-size: 18px;
  }
`
