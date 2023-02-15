import styled, { css } from "styled-components";

const StyledNav = styled.nav`
  position: fixed;
  width: 368px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 1rem;
  background: var(--primary-color);
  z-index: 1;

  ${({ variant }) => {
    if (variant === "main") {
      return css`
        bottom: 0;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      `;
    }
    if (variant === "language") {
      return css`
        top: 5.5rem;
      `;
    }
  }}
`;
export default StyledNav;
