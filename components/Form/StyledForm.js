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
    } else if (type === "add") {
      return css`
        position: relative;
        flex-direction: column;
        gap: 0.5em;
        margin-bottom: 3rem;
      `;
    } else if (type === "edit") {
      return css`
        position: absolute;
        top: 6rem;
        width: 100%;
        left: 50%;
        transform: translateX(-50%);
        flex-direction: column;
        gap: 0.5em;
        margin-bottom: 3rem;
        background: whitesmoke;
        padding: 2rem;
      `;
    }
  }}
`;
export default StyledForm;
