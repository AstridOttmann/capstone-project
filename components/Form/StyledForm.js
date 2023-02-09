import styled, { css } from "styled-components";
const StyledForm = styled.form`
  display: flex;
  ${({ variant }) => {
    if (variant === "search") {
      return css`
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 0.2rem;
        margin-bottom: 1rem;
      `;
    } else if (variant === "add") {
      return css`
        position: relative;
        flex-direction: column;
        gap: 0.5em;
        margin-bottom: 3rem;
      `;
    } else if (variant === "edit") {
      return css`
        position: absolute;
        top: 5.8rem;
        width: 100%;
        left: 50%;
        transform: translateX(-50%);
        flex-direction: column;
        gap: 0.5em;
        margin-bottom: 3rem;
        background: whitesmoke;
        padding: 2rem;
      `;
    } else if (variant === "translate") {
      return css`
        position: relative;
        flex-direction: column;
        gap: 0.5em;
        margin-bottom: 2.5rem;
      `;
    }
  }}
`;
export default StyledForm;
