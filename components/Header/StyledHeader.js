import styled from "styled-components";

const StyledHeader = styled.header`
  color: var(--dark-primary-color);
  background: var(--primary-color);
  position: fixed;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  width: 368px;
  padding: 0.3em;
  text-align: center;
`;

export default StyledHeader;
