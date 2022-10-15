import styled from "styled-components";

export const HomeContainer = styled.main`
    width: 100%;
    height: 34rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    * {
        line-height: 1.3;
    }
`

export const ContentWrapperContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 66px;
`

export const SloganContainer = styled.section`
    max-width: 36.75rem;

    display: flex;
    flex-direction: column;
    gap: 16px;

    text-align: justify;

    h1 {
        font-size: 3rem;
        font-family: 'Baloo 2', monospace;
        font-weight: bold;
    }

    span {
        font-size: 1.25rem;
        font-family: 'Roboto', monospace;
        color: ${props => props.theme['gray-800']};
    }
`

export const InfoContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 20px;
    column-gap: 40px;

    font-family: 'Roboto', monospace;

    div {
        height: 32px;

        display: flex;
        align-items: center;
        gap: 12px;

        span {
            font-size: 1rem;
            font-family: 'Roboto', monospace;
            color: ${props => props.theme['gray-500']};
        }
    }
`

const ICON_COLORS = {
    cart: 'yellow-dark',
    timer: 'yellow',
    package: 'gray-500',
    coffe: 'purple'
} as const

interface IconsProps {
    wrapperColor: keyof typeof ICON_COLORS
}

export const IconWrapper = styled.div<IconsProps>`
    padding: 8px;

    color: ${props => props.theme['white']};
    background-color: ${props => props.theme[ICON_COLORS[props.wrapperColor]]};

    border-radius: 999px;
`
