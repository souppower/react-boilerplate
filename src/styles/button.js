import styled from 'styled-components';

// prettier-ignore
// language=SCSS
export const BaseButton = styled.button`
  & {
    border-radius: 5px;
    border: none;
    color: white;
    padding: 15px;
  }
`;

// prettier-ignore
// language=SCSS
export const BlueButton = BaseButton.extend`
  & {
    background: cornflowerblue;
  }
`;

// prettier-ignore
// language=SCSS
export const RedButton = BaseButton.extend`
  & {
    background: orangered;
  }
`;