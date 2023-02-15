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
  word-wrap: break-word;
`;
