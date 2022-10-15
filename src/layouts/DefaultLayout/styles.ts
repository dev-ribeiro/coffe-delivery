import styled from "styled-components";

export const LayoutContainer = styled.div`
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${props => props.theme['gray-100']};
`