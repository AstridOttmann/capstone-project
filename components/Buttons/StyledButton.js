import styled, { css } from "styled-components";

const StyledButton = styled.button`
  width: fit-content;
  border-radius: 5px;
  border: none;

  ${({ variant }) => {
    if (variant === "submit") {
      return css`
        margin: 1em auto;
        padding: 0.7em;
        background: #04bf45;
        color: white;
        width: 10rem;
      `;
    } else if (variant === "delete") {
      return css`
        position: relative;
        background: none;
        color: red;
        padding: 0.2rem 0.2rem 0 0.2rem;
        margin-top: 1rem;
      `;
    } else if (variant === "edit") {
      return css`
        position: absolute;
        top: 1.7rem;
        right: 2rem;
        padding: 0.6rem 0.6rem 0.2rem 0.6rem;
        color: #04bf45;
        border: 2px solid #04bf45;
      `;
    } else if (variant === "discard") {
      return css`
        position: absolute;
        top: 1.7rem;
        right: 2rem;
        padding: 0.6rem 0.6rem 0.2rem 0.6rem;
        color: #f27405;
        border: 2px solid #f27405;
      `;
    } else if (variant === "language") {
      return css`
        background: whitesmoke;
        color: #f27405;
        margin: 0;
        padding: 0.6rem;
        border: 2px solid #f27405;
      `;
    } else if (variant === "language-selected") {
      return css`
        background: #f27405;
        color: whitesmoke;
        margin: 0;
        padding: 0.6rem;
        border: 2px solid #f27405;
      `;
    } else if (variant === "favorite") {
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
    } else if (variant === "nav-favorite") {
      return css`
        position: absolute;
        top: 3.5rem;
        right: 0.1rem;
        padding: 0.4rem 0.4rem 0 0.4rem;
        margin: 0;
        border: 1px solid #f27405;
        color: #f27405;
      `;
    } else if (variant === "seeMore") {
      return css`
        position: absolute;
        right: 0.5rem;
        bottom: 0.4rem;
        z-index: 0;
        overflow: hidden;
        background: whitesmoke;
        color: #04bf45;
        padding: 0.2rem 0.3rem 0 0.3rem;
        border: 2px solid #04bf45;
        _border-radius: 50%;
      `;
    } else if (variant === "goBack") {
      return css`
        padding: 0.4rem 0.4rem 0 0.4rem;
        color: #04bf45;
        border: 2px solid #04bf45;
        margin-bottom: 5rem;
      `;
    } else if (variant === "speaker") {
      return css`
        position: relative;
        _top: 0.2rem;
        _right: 3.2rem;
        color: #04bf45;
        background: none;
        padding: 0;
      `;
    }
  }}
`;
export default StyledButton;
