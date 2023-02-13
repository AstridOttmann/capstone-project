import styled, { css } from "styled-components";

const StyledButton = styled.button`
  width: fit-content;
  color: var(--dark-primary-color);
  background: var(--primary-color);
  font-family: inherit;
  border-radius: 50%;
  border: 5px solid var(--dark-primary-color);
  margin: 0 auto;
  cursor: pointer;

  ${({ variant, isActive }) => {
    if (variant === "basic") {
      return css`
        border: none;
      `;
    }
    if (variant === "show") {
      return css`
        display: block;
        border: none;
      `;
    }
    if (variant === "hide") {
      return css`
        border: 4px solid var(--dark-primary-color);
        position: absolute;
        top: 0rem;
        right: 1rem;
      `;
    }
    if (variant === "language") {
      return css`
        text-transform: uppercase;
        border-radius: 90px;
        padding: 0.2rem 0.4rem;
        border: 3px solid var(--dark-primary-color);
        opacity: ${isActive ? 1 : 0.4};
      `;
    }
    if (variant === "language-selected") {
      return css`
        text-transform: uppercase;
        border-radius: 90px;
        padding: 0.2rem 0.4rem;
        border: 3px solid var(--dark-primary-color);
      `;
    }
    if (variant === "goBack") {
      return css`
        margin-bottom: 5rem;
      `;
    }
    if (variant === "delete") {
      return css`
        position: relative;
        right: rem;
        padding: 0.2rem 0.2rem 0 0.2rem;
        left: 70%;
        border: none;
      `;
    }
    if (variant === "seeMore") {
      return css`
        position: absolute;
        right: 0.5rem;
        bottom: 0.4rem;
        border: none;
      `;
    }
    if (variant === "edit") {
      return css`
        position: absolute;
        top: 1.7rem;
        right: 2rem;
        padding: 0.6rem 0.6rem 0.2rem 0.6rem;
      `;
    }

    if (variant === "discard") {
      return css`
        position: absolute;
        top: 1.7rem;
        right: 2rem;
        padding: 0.6rem 0.6rem 0.2rem 0.6rem;
      `;
    }

    if (variant === "submit") {
      return css`
        margin: 1em auto;
        padding: 0.7em;
        background: #04bf45;
        color: white;
        width: 8rem;
      `;
    }

    if (variant === "button") {
      return css`
        position: relative;
        right: rem;
        background: none;
        color: red;
        padding: 0.2rem 0.2rem 0 0.2rem;
        margin-top: 1rem;
        left: 70%;
      `;
    }

    if (variant === "favorite") {
      return css`
        position: absolute;
        right: 0.7rem;
        top: 0.2rem;
        padding: 0;
        margin: 0;
        border: none;
      `;
    }
    if (variant === "nav-favorite") {
      return css`
        position: absolute;
        top: 3.5rem;
        right: 0.1rem;
        padding: 0.4rem 0.4rem 0 0.4rem;
        margin: 0;
      `;
    }
  }}
`;
export default StyledButton;
