import styled from 'styled-components'

export const SuccessPurchaseContainer = styled.section`
  margin-top: 5rem;

  display: grid;
  grid-template-columns: 34.5rem 30.75rem;
  gap: 102px;

  font-family: 'Roboto', sans-serif;

  img {
    align-self: flex-end;
  }
`

export const SuccessInfoContainer = styled.header`
  display: flex;
  flex-direction: column;

  h2 {
    text-align: left;
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    font-size: 20px;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const DeliveryBrief = styled.section`
  margin-top: 2.5rem;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 32px;

  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(
      ${(props) => props.theme.yellow},
      ${(props) => props.theme.purple}
    )
    30;
  border-radius: 10px;

  section {
    display: flex;
    align-items: center;
    gap: 12px;

    & > div {
      display: flex;
      flex-direction: column;

      color: ${(props) => props.theme['gray-500']};
      line-height: 130%;
    }
  }
`

export const IconWrapper = styled.div`
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.purple};
  border-radius: 999px;

  svg {
    color: ${(props) => props.theme.white};
  }
`
