import styled from 'styled-components'

export const AdressFormContainer = styled.section`
  padding: 2.5rem;
  width: 40rem;
`

export const FormInfoAndInputsWrapper = styled.div`
  padding: 2.5rem;

  border-radius: 6px;
  background: ${(props) => props.theme['gray-200']};
`

export const AdressFormInfo = styled.header`
  margin-bottom: 2.5rem;

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

const INPUTS_NAME = {
  cep: 'cep',
  street: 'street',
  adress: 'adress',
  complement: 'complement',
  district: 'district',
  city: 'city',
  state: 'state',
} as const

interface InputProps {
  inputName: keyof typeof INPUTS_NAME
}

export const FormInputsWrapper = styled.div`
  display: grid;
  grid-template:
    'cep cep cep' 42px
    'street street street' 42px
    'adress complement complement' 42px
    'district city state' 42px/
    1fr 1fr 60px;
  gap: 16px;

  .cep {
    width: 200px;
  }
`

export const Input = styled.input<InputProps>`
  padding: 0.75rem;
  grid-area: ${(props) => props.inputName};

  border: none;
  border-radius: 4px;
  background: ${(props) => props.theme['gray-300']};

  &::placeholder {
    color: ${(props) => props.theme['gray-450']};
    font-family: 'Roboto', sans-serif;
  }
`
