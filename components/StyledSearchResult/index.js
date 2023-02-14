import styled, { css } from "styled-components";

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
