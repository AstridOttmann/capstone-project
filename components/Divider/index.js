import styled, { css } from "styled-components";

export default function Divider({ variant }) {
  return <StyledDivider variant={variant} role="none" />;
}

const StyledDivider = styled.hr`
  border: none;
  border-radius: 50px;
  width: 50%;
  margin: 0.5rem auto 0.5rem auto;
  height: 5px;
  background: var(--dark-primary-color);

  ${({ variant }) => {
    if (variant === "list_entry") {
      return css`
        width: 70%;
        margin: 0;
      `;
    }
    if (variant === "single_entry") {
      return css`
        display: block;
        border: none;
        background: var(--primary-color);
      `;
    }
    if (variant === "bottom_page") {
      return css`
        margin-bottom: 4rem;
        display: block;
        border: none;
        background: var(--dark-primary-color);
      `;
    }
  }}
`;
