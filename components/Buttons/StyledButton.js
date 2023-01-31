import styled, { css } from "styled-components";

const StyledButton = styled.button`
  width: fit-content;
  border-radius: 5px;
  border: none;

  ${({ type }) => {
    if (type === "submit") {
      return css`
        margin: 1em auto;
        padding: 0.7em;
        background: #04bf45;
        color: whitesmoke;
        width: 10rem;
      `;
    } else if (type === "delete") {
      return css`
        position: absolute;
        right: 0.7rem;
        bottom: 0.5rem;
        z-index: 0;
        background: whitesmoke;
        color: red;
        padding: 0.2rem 0.2rem 0 0.2rem;
        margin: 0;
        width: 2rem;
        border: 1px solid red;
      `;
    } else if (type === "edit") {
      return css`
        position: absolute;
        right: 3.5rem;
        bottom: 0.5rem;
        z-index: 0;
        overflow: hidden;
        background: whitesmoke;
        color: #04bf45;
        padding: 0.2rem 0.2rem 0 0.2rem;
        margin: 0;
        width: 2rem;
        border: 1px solid #04bf45;
      `;
    } else if (type === "language") {
      return css`
        background: whitesmoke;
        color: #f27405;
        margin: 0;
        padding: 0.7em;
        border: 2px solid #f27405;
      `;
    } else if (type === "language-selected") {
      return css`
        background: #f27405;
        color: whitesmoke;
        margin: 0;
        padding: 0.7em;
        border: 2px solid #f27405;
      `;
    } else if (type === "discard") {
      return css`
        position: absolute;
        top: 1.7rem;
        right: 0.5rem;
        padding: 0.4rem 0.4rem 0 0.4rem;
        color: #f27405;
        border: 2px solid #f27405;
      `;
    } else if (type === "favorite") {
      return css`
        position: absolute;
        color: #f27405;
        right: 0.7rem;
        top: 0.2rem;
        padding: 0;
        margin: 0;
        color: #f27405;
        background: none;
      `;
    } else if (type === "nav-favorite") {
      return css`
        position: absolute;
        top: 3.5rem;
        right: 0.1rem;
        padding: 0.4rem 0.4rem 0 0.4rem;
        margin: 0;
        border: 1px solid #f27405;
        color: #f27405;
      `;
    }
  }}
`;
export default StyledButton;
