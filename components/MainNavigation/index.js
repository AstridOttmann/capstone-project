import Link from "next/link";
import HomeIcon from "../Icons/HomeIcon";
import WordsIcon from "../Icons/WordsIcon";
import styled from "styled-components";

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0.05rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-evenly;
  background: #525af2;
  width: 368px;
  margin: 0 auto;
  padding: 0.1em 1em;
  border-radius: 5px;
`;

export default function MainNavigation() {
  return (
    <>
      <StyledNav>
        <Link href="">
          <HomeIcon />
        </Link>
        <Link href="">
          <WordsIcon />
        </Link>
      </StyledNav>
    </>
  );
}
