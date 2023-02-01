import styled, { css } from "styled-components";
const StyledTitle = styled.h1`
  font-size: 1.8rem;

  ${({ page }) => {
    if (page === "words") {
      return css`
        margin-top: 3.2rem;
      `;
    }
  }}
`;
export default StyledTitle;
