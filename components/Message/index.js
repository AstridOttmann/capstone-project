import styled from "styled-components";

const StyledMessage = styled.p`
  font-size: 1.2rem;
  margin: 0.5rem;
  word-wrap: break-word;
  white-space: pre-line;
  _margin-bottom: 3rem;
`;

export default function Message({ children }) {
  return <StyledMessage>{children}</StyledMessage>;
}
