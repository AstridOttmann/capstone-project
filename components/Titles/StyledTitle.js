import styled, { css } from "styled-components";
const StyledTitle = styled.h1`
  font-size: 32px;
  text-transform: uppercase;
  color: var(--font-color);
  text-align: center;

  ${({ page }) => {
    if (page === "words") {
      return css`
        margin-top: 3.2rem;
        font-size: 1.8rem;
      `;
    }
    if (page === "single") {
      return css`
        display: inline;
        font-size: 1.8rem;
        margin-top: 0;
      `;
    }
  }}
`;
export default StyledTitle;
