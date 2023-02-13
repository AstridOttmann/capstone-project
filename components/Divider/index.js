import styled from "styled-components";

export default function Divider() {
  return <StyledDivider role="none" />;
}

const StyledDivider = styled.hr`
  border: none;
  border-radius: 50px;
  width: 50%;
  margin: 0.5rem auto 0.5rem auto;
  height: 5px;
  background: var(--dark-primary-color);
`;
