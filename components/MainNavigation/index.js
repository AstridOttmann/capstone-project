import Link from "next/link";
import HomeIcon from "../Icons/HomeIcon";
import WordsIcon from "../Icons/WordsIcon";
import StyledNav from "./StyledNavigation";

export default function MainNavigation() {
  return (
    <>
      <StyledNav>
        <Link href="/">
          <HomeIcon />
        </Link>
        <Link href="/words">
          <WordsIcon />
        </Link>
      </StyledNav>
    </>
  );
}
