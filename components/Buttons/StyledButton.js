import styled, { css } from "styled-components";

const StyledButton = styled.button`
  font-family: inherit;
  width: fit-content;
  color: var(--dark-primary-color);
  background: var(--primary-color);
  border-radius: 50%;
  border: 4px solid var(--dark-primary-color);
  margin: 0 auto;
  cursor: pointer;

  ${({ variant, isFavorite, isActive }) => {
    // dices button && speaker button && save === basic
    if (variant === "basic") {
      return css`
        border: none;
        margin: 0;
        /* padding: 0; */
        background: ${isActive
          ? "var(--dark-primary-color)"
          : "var(--primary-color)"};
        color: ${isActive
          ? "var(--primary-color)"
          : "var(--dark-primary-color)"};
      `;
    }
    if (variant === "dices") {
      return css`
        position: absolute;
        top: -3rem;
        left: -0.5rem;
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
        position: absolute;
        top: 0rem;
        right: 0.5rem;
        border: none;
      `;
    }
    if (variant === "close") {
      return css`
        position: absolute;
        background: none;
        top: -1.8rem;
        right: -0.5rem;
        border: none;
      `;
    }
    if (variant === "eye") {
      return css`
        _position: absolute;
        background: none;
        color: var(--dark-primary-color)
        top: 20rem;
        left: 10rem;
        border: none;
      `;
    }
    if (variant === "language") {
      return css`
        min-width: fit-content;
        text-transform: uppercase;
        border-radius: 90px;
        padding: 0.2rem 0.4rem;
        margin-bottom: 0.3rem;
        border: 3px solid var(--dark-primary-color);
        opacity: ${isActive ? 1 : 0.4};
      `;
    }

    if (variant === "goBack") {
      return css`
        margin-bottom: 1rem;
        border: none;
      `;
    }
    if (variant === "delete") {
      return css`
        padding-left: 1rem;
        margin: 0;
        border: none;
      `;
    }
    if (variant === "seeMore") {
      return css`
        border: none;
        margin: 0;
        padding: 0;
      `;
    }
    if (variant === "edit") {
      return css`
        color: var(--primary-color);
        background: var(--dark-primary-color);
        padding: 0.6rem 0.6rem 0.2rem 0.6rem;
      `;
    }

    if (variant === "discard") {
      return css`
        position: absolute;
        top: 1rem;
        right: 1rem;
        padding: 0.6rem 0.6rem 0.2rem 0.6rem;
      `;
    }

    if (variant === "favorite") {
      return css`
        right: 0.7rem;
        top: 0.2rem;
        padding: 0;
        margin: 0;
        border: none;
        opacity: ${isFavorite ? 1 : 0.4};
      `;
    }
    if (variant === "favorite_bright") {
      return css`
        color: var(--primary-color);
        background: var(--dark-primary-color);
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
        right: 0.3rem;
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
    if (variant === "save") {
      return css`
        color: var(--primary-color);
        background: none;
        border: none;
        margin: 0;
      `;
    }
    if (variant === "translate") {
      return css`
        color: var(--primary-color);
        background: var(--dark-primary-color);
        border: none;
        margin: 0;
        padding-top: 0.8rem;
      `;
    }
  }}
`;
export default StyledButton;
