import StyledHeader from "./StyledHeader";
import styled from "styled-components";

export default function Header() {
  return (
    <>
      <StyledHeader>
        <StyledTitle>Language Helper</StyledTitle>
      </StyledHeader>
    </>
  );
}
const StyledTitle = styled.h1`
  _margin-top: 3.2rem;
  font-size: 1.8rem;
`;
