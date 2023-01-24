import styled, { css } from "styled-components";

export const StyledSvg = styled.svg`
  ${({ variant }) => {
    if (variant === "nav") {
      return css`
        width: 3rem;
        height: 3rem;
        color: whitesmoke;
      `;
    } else if (variant === "delete") {
      return css`
        width: 1.5rem;
        height: 1.5rem;
        background: whitesmoke;
        color: red;
        margin: 0;
      `;
    }
  }}
`;
