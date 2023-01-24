import Link from "next/link";
import StyledNav from "./StyledNavigation";
import SVGIcon from "../Icons/SVGIcon";

export default function MainNavigation() {
  return (
    <>
      <StyledNav>
        <Link href="/">
          <SVGIcon variant="home" width="3rem" color="whitesmoke" />
        </Link>
        <Link href="/words">
          <SVGIcon variant="words" width="3rem" color="whitesmoke" />
        </Link>
      </StyledNav>
    </>
  );
}
