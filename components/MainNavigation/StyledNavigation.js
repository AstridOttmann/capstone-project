import styled, { css } from "styled-components";

const StyledNav = styled.nav`
  ${({ variant }) => {
    if (variant === "main") {
      return css`
        position: fixed;
        bottom: 0.05rem;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: space-evenly;
        background: #525af2;
        width: 368px;
        margin: 0 auto;
        padding: 0.1em 1em;
        border-radius: 5px;
      `;
    } else if (variant === "language") {
      return css`
        _position: fixed;
        display: flex;
        justify-content: flex-start;
        gap: 1em;
        background: whitesmoke;
      `;
    }
  }}
`;
export default StyledNav;
