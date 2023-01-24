import styled from "styled-components";

const StyledEntry = styled.li`
  border: 1px dashed black;
  border-radius: 10px;
  margin: 1em;
  padding: 0.5em;
`;

export default function ListEntry({ children }) {
  return <StyledEntry>{children}</StyledEntry>;
}
