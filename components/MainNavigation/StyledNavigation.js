import styled, { css } from "styled-components";

const StyledNav = styled.nav`
  position: fixed;
  width: 368px;
  background: whitesmoke;
  z-index: 1;

  ${({ variant }) => {
    if (variant === "main") {
      return css`
        bottom: 0.05rem;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: space-evenly;
        background: #525af2;
        _margin: 0 auto;
        padding: 0.1em 1em;
        border-radius: 5px;
      `;
    } else if (variant === "language") {
      return css`
        position: fixed;
        top: 5.5rem;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: flex-start;
        gap: 1em;
        background: whitesmoke;
        overflow-x: scroll;
      `;
    }
  }}
`;
export default StyledNav;
