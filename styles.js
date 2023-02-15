import { createGlobalStyle } from "styled-components";
import { Concert_One } from "@next/font/google";

const concertOne = Concert_One({ subsets: ["latin"], weight: "400" });

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  :root{
    --dark-primary-color: #8b0000;
    --primary-color: #ffe4e1;
    --shadow-color: #2f1614;
    --font-size: 20px;
   }

  body {
    margin: 0;
    font-family: ${concertOne.style.fontFamily};
    font-size: var(--font-size);
    color: var(--dark-primary-color);
    background-color: var(--primary-color); 
   }
    

  main {
    position: relative;
    top: 5rem;
    margin: 0 auto;
    max-width: 368px;
    padding: 0.5em 1em;
    word-wrap: break-word;
  }
`;
