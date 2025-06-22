import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;700&family=Montserrat:wght@400;500;700;900&display=swap");

:root {
  font-family: "IBM Plex Sans", sans-serif;
  line-height: 1.5;
  font-weight: 400;
  font-size: 10px;

  color-scheme: light dark;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  font-size: 4.209rem;
}

h2 {
  font-size: 3.157rem;
}

h3 {
  font-size: 2.369rem;
}

h4 {
  font-size: 1.777rem;
}

h5 {
  font-size: 1.333rem;
}

h1,
  h2,
  h3,
  h4,
  h5 {
  font-family: "Montserrat", serif;
  margin: 30px 0 13.8px;
  font-weight: 900;
  line-height: 1.3;
}

p {
  margin-bottom: 30px;
}

body {
  font-size: 1.4rem;
  width: 1200px;
  margin: 0 auto;
}

a {
  font-family: "Montserrat", serif;
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
  color: inherit;
}

.custom-pointer {
  cursor: url("/images/custom-cursor.png") 16 16, auto;
}

.custom-pointer a:hover {
  cursor: url("/images/custom-cursor-hover.png") 16 16, auto;
}

.custom-pointer a:active {
  cursor: url("/images/custom-cursor-active.png") 16 16, auto;
}

.pointer-toggle {
  cursor: url("/images/custom-cursor-hover.png") 16 16, auto;
}
`
