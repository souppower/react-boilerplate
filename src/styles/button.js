import styled from 'styled-components'

export const BaseButton = styled.button`
  border-radius: 5px;
  border: none;
  color: white;
  padding: 15px;
`

export const BlueButton = BaseButton.extend`
  background: cornflowerblue;
`

export const RedButton = BaseButton.extend`
  background: orangered;
`
