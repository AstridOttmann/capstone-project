import styled, { css } from "styled-components";

const StyledButton = styled.button`
  width: 200px;
  margin: 1em auto;
  padding: 0.7em;
  border-radius: 5px;
  border: none;
  _background: #04bf45;
  _color: whitesmoke;

  ${({ type }) => {
    if (type === "submit") {
      return css`
        background: #04bf45;
        color: whitesmoke;
      `;
    } else if (type === "delete") {
      return css`
        background: whitesmoke;
        color: red;
        padding: 0.2em 0;
        width: 50px;
        border: 2px solid red;
      `;
    }
  }}
`;
export default StyledButton;
