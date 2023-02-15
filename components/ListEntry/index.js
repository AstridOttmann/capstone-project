import styled from "styled-components";

const StyledEntry = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  border: 4px solid var(--dark-primary-color);
  border-radius: 40px;
  margin: 1em 0.5rem;
  padding: 0.5em;
  list-style: none;
`;

export default function ListEntry({ children }) {
  return <StyledEntry>{children}</StyledEntry>;
}
