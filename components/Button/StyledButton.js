import { ST } from "next/dist/shared/lib/utils";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 200px;
  margin: 1em auto;
  padding: 0.7em;
  border-radius: 5px;
  border: none;
  background: #04bf45;
  color: whitesmoke;
  &:hover {
    cursor: pointer;
  }
`;
export default StyledButton;
