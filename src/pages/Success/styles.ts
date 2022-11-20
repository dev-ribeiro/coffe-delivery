import styled from 'styled-components'

export const SuccessPageContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  align-items: flex-end;
  gap: 6.375rem;
`

export const AddressBriefContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4.375rem;
`

export const AddressBriefHeader = styled.header`
  h2 {
    font-size: 2rem;
    font-family: 'Baloo 2', monospace;
    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const AddressInformationPanel = styled.div`
  position: relative;
  /* padding: 2.5rem; */

  border: solid 2px transparent;
  border-radius: 6px 36px;
  background-size: 1px;
  background-image: linear-gradient(white, white),
    radial-gradient(
      circle at top left,
      ${(props) => props.theme['yellow-dark']},
      ${(props) => props.theme.purple}
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  overflow: hidden;

  & > div {
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    background: ${(props) => props.theme['gray-100']};
  }
`

export const AddressInformationGroupWrapper = styled.div`
  height: 42px;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    width: 19.375rem;
    color: ${(props) => props.theme['gray-500']};
  }
`

interface IconWrapperProps {
  variant: 'timer' | 'map' | 'currency'
}

const ICON_COLORS = {
  timer: 'yellow',
  map: 'purple',
  currency: 'yellow-dark',
} as const

export const IconWrapper = styled.div<IconWrapperProps>`
  width: 2rem;
  height: 2rem;
  padding: 8px;
  border-radius: 999px;
  background: ${(props) => props.theme[ICON_COLORS[props.variant]]};

  svg {
    color: ${(props) => props.theme.white};
  }
`
