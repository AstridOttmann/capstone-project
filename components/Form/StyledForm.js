import styled, { css } from "styled-components";
const StyledForm = styled.form`
  display: flex;
  ${({ type }) => {
    if (type === "search") {
      return css`
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 0.2rem;
        margin-bottom: 1rem;
      `;
    } else if (type === "add-edit") {
      return css`
        position: relative;
        flex-direction: column;
        gap: 0.5em;
        margin-bottom: 3rem;
      `;
    }
  }}
`;
export default StyledForm;
