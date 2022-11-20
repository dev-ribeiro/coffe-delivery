import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const AdressFormContainer = styled.form`
  flex: 1;
  display: flex;
  gap: 32px;
`

export const DeliveryPanelContainer = styled.div`
  margin-top: 2.5rem;
  width: 40rem;
  display: flex;
  gap: 0.75rem;
  flex-direction: column;

  & > h2 {
    font-size: 1.125rem;
    font-family: 'Baloo 2', monospace;
  }
`

export const AdressInformationsContainer = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px;
`

export const AdressInformationHeader = styled.header`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  div {
    h2 {
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      font-weight: 400;
    }
    span {
      color: ${(props) => props.theme['gray-500']};
      font-size: 0.875rem;
    }
  }
`

const INPUTS_NAME = {
  cep: 'cep',
  street: 'street',
  address: 'address',
  complement: 'complement',
  district: 'district',
  city: 'city',
  state: 'state',
} as const

interface InputWrapperProps {
  inputGroupName: keyof typeof INPUTS_NAME
}

export const AdressInputsGroup = styled.div`
  display: grid;
  gap: 1rem;
  grid-template:
    'cep cep cep cep cep' 1fr
    'street street street street street' 1fr
    'address address complement complement complement' 1fr
    'district district city city state' 1fr
    /1fr 1fr 1fr 2fr 3.75rem;

  div:first-child {
    width: 12.5rem;
  }
`

export const AdressInputWrapper = styled.div<InputWrapperProps>`
  grid-area: ${(props) => props.inputGroupName};
  height: 2.625rem;
  position: relative;

  label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0.75rem;
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-450']};
  }

  .optional::placeholder {
    width: 100%;
    text-align: end;
    font-style: italic;
    font-size: 0.75rem;
    font-family: 'Roboto', sans-serif;
  }
`

export const AdressInput = styled.input`
  height: 100%;
  width: 100%;
  padding: 0.75rem;
  height: 2.625rem;
  border: none;
  display: inline;
  border: 1px solid ${(props) => props.theme['gray-350']};
  background: ${(props) => props.theme['gray-300']};

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    display: none;
  }
`

export const PaymentOptionContainer = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px;
`

export const PaymentOptionsWrapper = styled(RadioGroup.Root)`
  display: flex;
  gap: 0.75rem;
  justify-content: center;

  button {
    padding: 1rem;
    width: 11.166875rem;
    gap: 0.75rem;

    display: flex;
    align-items: center;

    border: none;
    border-radius: 6px;
    background: ${(props) => props.theme['gray-350']};

    svg {
      color: ${(props) => props.theme.purple};
    }

    span {
      font-size: 12px;
      line-height: 160%;
      color: ${(props) => props.theme['gray-500']};
    }

    &[data-state='checked'] {
      border: 1px solid ${(props) => props.theme.purple};
      background: ${(props) => props.theme['purple-light']};
    }
  }
`

export const PaymentHeaderContainer = styled.header`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme.purple};
  }

  div {
    h2 {
      margin-bottom: 2px;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1rem;
      color: ${(props) => props.theme['gray-800']};
    }
    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['gray-500']};
    }
  }
`

export const OrderSummaryContainer = styled.div`
  margin-top: 2.5rem;
  display: flex;
  gap: 0.75rem;
  flex-direction: column;

  & > h2 {
    font-family: 'Baloo 2', monospace;
    font-size: 1.125rem;
  }

  & > div {
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    background: ${(props) => props.theme['gray-200']};

    button[type='submit'] {
      width: 100%;
      height: 2.875rem;
      font-size: 0.875rem;
      border: none;
      background: ${(props) => props.theme.yellow};

      a {
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: ${(props) => props.theme.white};
      }

      &:hover {
        background: ${(props) => props.theme['yellow-dark']};
      }
    }
  }
`

export const CheckoutCartContainer = styled.div``

export const OrderSummary = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  justify-items: stretch;

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-500']};
  }

  span:nth-child(even) {
    text-align: end;
  }

  span:nth-last-child(-n + 2) {
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme['gray-800']};
  }
`
