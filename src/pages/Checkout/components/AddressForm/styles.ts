import styled from "styled-components";

export const AdressFormContainer = styled.div`
    min-height: 39.3125rem;
    padding: 40px;

    background-color: ${props => props.theme['gray-200']};
`

export const InforHeaderContainer = styled.header`
    margin-top: 3.4375rem;
    margin-bottom: 2rem;

    display: flex;
    gap: 8px;

    font-family: 'Roboto', sans-serif;

    svg {
        color: ${props => props.theme['yellow-dark']};
    }

    h3 {
        color: ${props => props.theme['gray-800']};
        font-size: 1rem;
        font-weight: 400;
    }

    span{
        color: ${props => props.theme['gray-500']};
        font-size: 0.875rem;
    }
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;

    input {
        flex: 1;
        height: 42px;
        padding: 0.75rem;

        border: 1px solid ${props => props.theme['gray-350']};
        border-radius: 4px;

        background-color: ${props => props.theme['gray-300']};

        ::placeholder {
            line-height: 130%;
            font-size: 0.875rem;

            color: ${props => props.theme['gray-450']};
        }
    }

    .cep {
        width: 50%;
    }
`

export const AdressesInputWrapper = styled.div`
    div:first-child {
        margin-bottom: 1rem;

        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        gap: 12px;

        label {
            display: flex;
            align-items: center;
            justify-content: flex-start;

            font-family: 'Roboto', sans-serif;
            font-style: italic;
            color: ${props => props.theme['gray-450']};
        }
    }

    div:last-child {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        gap: 12px;

    }

`

export const PaymentWrapper = styled.div`
    margin-top: 0.75rem;

    font-family: 'Roboto', sans-serif;

    & > header {
        margin-bottom: 2rem;

        display: flex;
        gap: 8px;

        svg {
            color: ${props => props.theme['purple-dark']};
        }

        h3 {
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;

            color: ${props => props.theme['gray-800']};
        }

        span {
            font-size: 0.875rem;

            color: ${props => props.theme['gray-500']};
        }
    }

    .payment-options {
        display: flex;
        gap: 12px;

        button {
            padding: 1rem;

            display: flex;
            gap: 8px;

            border: 1px solid ${props => props.theme['gray-400']};

            svg {
                color: ${props => props.theme['purple']};
            }
        }
    }
`
