import Link from "next/link";
import StyledNav from "./StyledNavigation";
import SVGIcon from "../Icons/SVGIcon";
import { useRouter } from "next/router";

const MainNavigation = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      <StyledNav>
        <Link href="/">
          {currentRoute === "/" ? (
            <SVGIcon variant="homefilled" width="3rem" color="#F27405" />
          ) : (
            <SVGIcon variant="home" width="3rem" color="whitesmoke" />
          )}
        </Link>
        <Link href="/words">
          {currentRoute === "/words" ? (
            <SVGIcon variant="wordsfilled" width="3rem" color="#F27405" />
          ) : (
            <SVGIcon variant="words" width="3rem" color="whitesmoke" />
          )}
        </Link>
      </StyledNav>
    </>
  );
};

export default MainNavigation;
