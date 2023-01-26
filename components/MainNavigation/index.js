import Link from "next/link";
import StyledNav from "./StyledNavigation";
import SVGIcon from "../Icons/SVGIcon";
import { useRouter } from "next/router";

const MainNavigation = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      <StyledNav variant="main">
        <Link href="/">
          {currentRoute === "/" ? (
            <SVGIcon
              variant="homeActive"
              width="3rem"
              color="#F27405"
              aria-label="variant"
            />
          ) : (
            <SVGIcon
              variant="home"
              width="3rem"
              color="whitesmoke"
              aria-label="variant"
            />
          )}
        </Link>
        <Link href="/words">
          {currentRoute === "/words" ? (
            <SVGIcon
              variant="wordsActive"
              width="3rem"
              color="#F27405"
              aria-label="variant"
            />
          ) : (
            <SVGIcon
              variant="words"
              width="3rem"
              color="whitesmoke"
              aria-label="variant"
            />
          )}
        </Link>
      </StyledNav>
    </>
  );
};

export default MainNavigation;
