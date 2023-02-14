import styled from "styled-components";
import Header from "../Header";
import MainNavigation from "../MainNavigation";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
      <MainNavigation />
    </>
  );
}

const StyledMain = styled.main`
  position: relative;
  top: 5rem;
  bottom: 4rem;
  _margin-bottom: 3rem;
  _padding: 0 30px 6rem 30px;
  word-wrap: break-word;
`;
