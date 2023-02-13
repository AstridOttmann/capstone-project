import styled, { css } from "styled-components";

const StyledButton = styled.button`
  width: fit-content;
  color: var(--dark-primary-color);
  background: var(--primary-color);
  font-family: inherit;
  border-radius: 50%;
  border: 4px solid var(--dark-primary-color);
  margin: 0 auto;
  cursor: pointer;

  ${({ variant, isFavorite, isActive }) => {
    if (variant === "basic") {
      return css`
        border: none;
        background: none
        margin: 0;
        background: ${
          isActive ? "var(--dark-primary-color)" : "var(--primary-color)"
        };
        color: ${
          isActive ? "var(--primary-color)" : "var(--dark-primary-color)"
        };
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
        min-width: fit-content;
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
        _position: absolute;
        _right: 0.5rem;
        _bottom: 0.4rem;
        border: none;
        margin: 0;
        padding: 0;
      `;
    }
    if (variant === "edit") {
      return css`
        _position: absolute;
        _top: 1.7rem;
        _right: 2rem;
        color: var(--primary-color);
        background: var(--dark-primary-color);
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

    if (variant === "favorite") {
      return css`
        _position: absolute;
        right: 0.7rem;
        top: 0.2rem;
        padding: 0;
        margin: 0;
        border: none;
        opacity: ${isFavorite ? 1 : 0.4};
      `;
    }
    if (variant === "nav-favorite") {
      return css`
        position: absolute;
        top: 3.5rem;
        right: 0.1rem;
        padding: 0;
        margin: 0;
        border: none;
        opacity: ${isActive ? 1 : 0.4};
      `;
    }
    if (variant === "single_page_bin") {
      return css`
        color: var(--primary-color);
        background: var(--dark-primary-color);
      `;
    }

    if (variant === "button") {
      return css`
        position: relative;
        right: rem;
        background: none;
        padding: 0.2rem 0.2rem 0 0.2rem;
        margin-top: 1rem;
        left: 70%;
      `;
    }
  }}
`;
export default StyledButton;
