import Link from "next/link";
import SVGIcon from "@/components/Icons/SVGIcon";
import styled from "styled-components";

export default function RoutingLink({ href }) {
  return (
    <StyledLink href={href}>
      show entry
      <SVGIcon
        variant="arrow"
        width="2rem"
        color="#04BF45"
        aria-label="variant"
      />
    </StyledLink>
  );
}
const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
`;
