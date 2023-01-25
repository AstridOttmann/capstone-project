import styled, { css } from "styled-components";

const StyledButton = styled.button`
  width: 200px;
  margin: 1em auto;
  padding: 0.7em;
  border-radius: 5px;
  border: none;

  ${({ type }) => {
    if (type === "submit") {
      return css`
        background: #04bf45;
        color: whitesmoke;
      `;
    } else if (type === "delete") {
      return css`
        position: absolute;
        right: 1rem;
        bottom: 0.5rem;
        z-index: 0;
        overflow: hidden;
        background: whitesmoke;
        color: red;
        padding: 0.2em 0;
        width: 50px;
        border: 2px solid red;
      `;
    } else if (type === "language") {
      return css`
        background: whitesmoke;
        color: #f27405;
        margin: 0;
        width: 5em;
        border: 2px solid #f27405;
      `;
    } else if (type === "language-selected") {
      return css`
        background: #f27405;
        color: whitesmoke;
        margin: 0;
        width: 5em;
        border: 2px solid #f27405;
      `;
    }
  }}
`;
export default StyledButton;
