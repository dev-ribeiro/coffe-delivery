import styled from 'styled-components'

export const AdressFormContainer = styled.section`
  padding: 2.5rem;
  width: 40rem;
`

export const AdressFormInfo = styled.header`
  margin: 2.5rem 0;

  display: flex;
  gap: 8px;

  font-family: 'Roboto', sans-serif;

  & > svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  h3 {
    font-size: 1rem;
    font-weight: 500;
  }

  span {
    font-size: 0.875rem;
  }
`
