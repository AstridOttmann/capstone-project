import styled, { css } from "styled-components";

export const StyledLabel = styled.label`
  color: var(--primary-color);
  font-size: 1rem;
  text-align: center;
  text-transform: uppercase;
`;
export const StyledInput = styled.input`
  font-family: inherit;
  color: inherit;
  font-size: 1rem;
  width: 100%;
  background: var(--primary-color);
  border: 4px solid var(--dark-primary-color);
  border-radius: 50px;
  padding: 0.5rem;
`;
export const StyledInputWrapper = styled.div`
  flex-grow: 4;

  ${({ variant }) => {
    if (variant === "search_result") {
      return css`
        display: flex;
        margin: 0;
        background: var(--dark-primary-color);
        color: var(--primary-color);
      `;
    }
  }}
`;

export const StyledWordFields = styled.p`
  padding: 0;
  margin: 0;
  word-wrap: break-word;
  white-space: pre-line;
`;

export const StyledLanguageLine = styled.small`
  word-wrap: break-word;
  text-transform: uppercase;
  width: 100%;
  text-align: end;
  /* overflow-y: scroll;
  flex-shrink: 3; */

  ${({ variant }) => {
    if (variant === "translation_entry") {
      return css`
        border: none;
        /* padding: 0 1.5rem 0.2rem 0; */
        text-align: start;
      `;
    }
  }}
`;

export const StyledSelect = styled.select`
  font-family: inherit;
  color: inherit;
  font-size: 1rem;
  width: 100%;
  background: var(--primary-color);

  border: 4px solid var(--dark-primary-color);
  border-radius: 50px;
  padding: 0.5rem;
`;

export const StyledTextarea = styled.textarea`
  font-family: inherit;
  color: inherit;
  font-size: 1rem;
  background: var(--primary-color);
  border: 4px solid var(--dark-primary-color);
  border-radius: 30px;
  padding: 0.5rem;
`;
export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  ${({ variant }) => {
    if (variant === "translation_result") {
      return css`
        justify-content: space-between;
        border: none;
        padding: 0 2rem 1rem 2rem;
        margin: 0;
        gap: 1.5rem;
      `;
    }
    if (variant === "delete_popup") {
      return css`
        justify-content: space-around;
        _border: none;
        _padding: 0 2rem 1rem 2rem;
        margin: 0;
        _gap: 1.5rem;
      `;
    }
  }}
`;
