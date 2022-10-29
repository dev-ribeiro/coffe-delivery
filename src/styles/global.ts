import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        max-width: 100vw;
        background-color: ${(props) => props.theme['gray-100']};
    }

    button {
        cursor: pointer;
    }
`
