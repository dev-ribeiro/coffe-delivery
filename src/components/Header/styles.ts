import styled from "styled-components";

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
        background-color: ${props => props.theme['yellow-light']};

        svg {
            color: ${props => props.theme['yellow-dark']};
        }
    }

`

export const LocationContainer = styled.div`
    color: ${props => props.theme['purple']};

    span {
        line-height: 1.3;
        color: ${props => props.theme['purple-dark']};
    }
`
