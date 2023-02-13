import Link from "next/link";
import StyledNav from "../Navigation/StyledNavigation";
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
              color="var(--dark-primary-color)"
              aria-label="homeActive"
            />
          ) : (
            <SVGIcon
              variant="home"
              color="var(--dark-primary-color)"
              width="3rem"
              aria-label="home"
            />
          )}
        </Link>
        <Link href="/words">
          {currentRoute === "/words" || currentRoute === `/words/${id}` ? (
            <SVGIcon
              variant="wordsActive"
              width="3rem"
              color="var(--dark-primary-color)"
              aria-label="wordsActive"
            />
          ) : (
            <SVGIcon
              variant="words"
              color="var(--dark-primary-color)"
              width="3rem"
              aria-label="words"
            />
          )}
        </Link>
      </StyledNav>
    </>
  );
};

export default MainNavigation;
