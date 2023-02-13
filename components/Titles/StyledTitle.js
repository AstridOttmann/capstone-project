import styled, { css } from "styled-components";
const StyledTitle = styled.h1`
  font-size: 32px;
  text-transform: uppercase;
  color: var(--font-color);

  ${({ page }) => {
    if (page === "words") {
      return css`
        margin-top: 3.2rem;
        font-size: 1.8rem;
      `;
    }
  }}
`;
export default StyledTitle;
