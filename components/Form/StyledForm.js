import styled, { css } from "styled-components";
const StyledForm = styled.form`
  display: flex;
  margin-bottom: 3rem;
  padding: 1rem;
  border-radius: 40px;

  ${({ variant }) => {
    if (variant === "search") {
      return css`
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 0.2rem;
        margin-bottom: 1rem;
        padding: 1rem 0 1rem 0;
      `;
    }
    if (variant === "add") {
      return css`
        color: var(--dark-primary-color);
        background: var(--dark-primary-color);
        position: relative;
        width: 100%;
        flex-direction: column;
        gap: 0.5em;
        margin-bottom: -3rem;
        padding: 1.5rem;
        _opacity: 0.8;
      `;
    }
    if (variant === "edit") {
      return css`
        color: var(--dark-primary-color);
        background: var(--dark-primary-color);
        position: absolute;
        z-index: 1;
        top: 6.2rem;
        width: 90%;
        left: 50%;
        _bottom: 3rem;
        transform: translateX(-50%);
        flex-direction: column;
        gap: 0.5em;
        padding: 2rem;
        border-radius: 40px;
      `;
    }
    if (variant === "translate") {
      return css`
        position: relative;
        flex-direction: column;
        gap: 0.5em;
        padding: 1.5rem;
        margin-bottom: -3rem;
        color: var(--dark-primary-color);
        background: var(--dark-primary-color);
      `;
    }
  }}
`;
export default StyledForm;
