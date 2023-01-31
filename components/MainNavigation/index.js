import Link from "next/link";
import StyledNav from "./StyledNavigation";
import SVGIcon from "../Icons/SVGIcon";
import { useRouter } from "next/router";

const MainNavigation = () => {
  const router = useRouter();
  const { id } = router.query;
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
              aria-label="homeActive"
            />
          ) : (
            <SVGIcon
              variant="home"
              width="3rem"
              color="whitesmoke"
              aria-label="home"
            />
          )}
        </Link>
        <Link href="/words">
          {currentRoute === "/words" || currentRoute === `/words/${id}` ? (
            <SVGIcon
              variant="wordsActive"
              width="3rem"
              color="#F27405"
              aria-label="wordsActive"
            />
          ) : (
            <SVGIcon
              variant="words"
              width="3rem"
              color="whitesmoke"
              aria-label="words"
            />
          )}
        </Link>
      </StyledNav>
    </>
  );
};

export default MainNavigation;
