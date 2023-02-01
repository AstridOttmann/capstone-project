import styled from "styled-components";

export default function Divider() {
  return <StyledDivider role="none" />;
}

const StyledDivider = styled.hr`
  border: none;
  width: 80%;
  margin: 2rem auto 0 auto;
  height: 1px;
  background: #494fbf;
`;
