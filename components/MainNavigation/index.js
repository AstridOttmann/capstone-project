import Link from "next/link";
import { HomeIconEmpty } from "../Icons/HomeIcon";
import { WordsIconEmpty } from "../Icons/WordsIcon";
import StyledNav from "./StyledNavigation";

export default function MainNavigation() {
  return (
    <>
      <StyledNav>
        <Link href="/">
          <HomeIconEmpty />
        </Link>
        <Link href="/words">
          <WordsIconEmpty />
        </Link>
      </StyledNav>
    </>
  );
}
