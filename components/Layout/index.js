import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <StyledMain>{children}</StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  position: relative;
  top: 6rem;
  _padding: 0 30px 6rem 30px;
  word-wrap: break-word;
`;
