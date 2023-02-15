import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  margin-top: 1rem;
  position: relative;
  padding: 2rem 0;

  ${({ variant }) => {
    if (variant === "basic") {
      return css`
        border: none;
        background: none
        margin: 0;
      `;
    }
    // if (variant === "translate") {
    //   return css`
    //     margin-bottom: 4rem;
    //   `;
    // }
  }}
`;
export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  ${({ variant }) => {
    if (variant === "entry_text") {
      return css`
        justify-content: flex-start;
        align-items: flex-start;
        width: 70%;
      `;
    }
    if (variant === "entry_icons") {
      return css`
        justify-content: flex-end;
        align-items: flex-end;
        width: 30%;
      `;
    }
    if (variant === "bottom_page") {
      return css`
        margin-bottom: 7rem;
      `;
    }
    if (variant === "translation_entry") {
      return css`
        gap: 0.2rem;
        justify-content: center;
        align-items: flex-start;
        border: 4px solid var(--dark-primary-color);
        border-radius: 40px;
        padding: 1rem;
        margin: 1rem;
        margin-bottom: 1rem;
      `;
    }
  }}
`;

export const StyledMessageArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin: 0;
  margin-bottom: 1rem;
  padding-top: 3rem;
  background: var(--primary-color);
  border: 3px solid var(--dark-primary-color);
  border-radius: 0 0 40px 40px;

  ${({ variant }) => {
    if (variant === "translate") {
      return css`
        margin-bottom: 1rem;
        padding-top: 2rem;
      `;
    }
  }}
`;

export const StyledArticle = styled.article`
  width: 92%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin: 0 auto 1rem auto;
  padding: 0;
  font-size: 1.2rem;
  color: var(--primary-color);
  background: var(--dark-primary-color);
  border: 4px solid var(--dark-primary-color);
  border-radius: 40px;
  opacity: 0.8;
`;

export const StyledLanguageField = styled.small`
  padding-left: 1rem;
`;
export const StyledWordField = styled.p`
  margin: 0;
  padding-left: 1rem;
  word-wrap: break-word;
  white-space: pre-line;
`;
