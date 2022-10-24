import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${(props) => props.theme['gray-100']};
`
