import styled, { css } from "styled-components";

export default function ToastMessage({ toast }) {
  return <StyledToast action={toast}>entry has been deleted</StyledToast>;
}

const StyledToast = styled.div`
  position: fixed;
  top: 9rem;
  right: 5rem;
  background: whitesmoke;
  color: red;
  border: 2px dotted red;
  border-radius: 1rem;
  padding: 0.7rem;
  overflow: hidden;

  ${({ action }) => {
    if (action === "") {
      return css`
        transform: translateX(150%);
      `;
    } else if (action === "enter") {
      return css`
        transform: translate(-10%, 20%);
        transition: transform 1s cubic-bezier(0, 0.79, 1, 1.02);
        z-index: 1;
      `;
    } else if (action === "exit") {
      return css`
        transform: translateX(150%);
        transition: transform 0.5s cubic-bezier(0, -0.02, 0.67, 1.03);
        z-index: -1;
      `;
    }
  }}
`;
