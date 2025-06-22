import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;700&family=Montserrat:wght@400;500;700;900&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Vampiro+One&display=swap');

:root {
  font-family: "IBM Plex Sans", sans-serif;
  line-height: 1.5;
  font-weight: 400;
  font-size: 10px;
  background-color: ${({ theme }) => theme.Background.One}
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  font-size: ${({ theme }) => theme.Text.H1.REM}rem;
}

h2 {
  font-size: ${({ theme }) => theme.Text.H2.REM}rem;
}

h3 {
  font-size: ${({ theme }) => theme.Text.H3.REM}rem;
}

h4 {
  font-size: ${({ theme }) => theme.Text.H4.REM}rem;
}

h5 {
  font-size: ${({ theme }) => theme.Text.H5.REM}rem;
}

h6 {
  font-size: ${({ theme }) => theme.Text.H6.REM}rem;
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
  color: ${({ theme }) => theme.Foreground.One}
}

p {
  margin-bottom: 30px;
  color: ${({ theme }) => theme.Foreground.One}
}

span {
  color: ${({ theme }) => theme.Foreground.One}
}

body {
  font-size: 1.4rem;
  width: 75em;
  margin: 0 auto;
}

a {
  font-family: "Montserrat", serif;
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
  color: ${({ theme }) => theme.Foreground.One};
}

a:hover {
  color: ${({ theme }) => theme.Foreground.Two};
}

a:active {
  color: ${({ theme }) => theme.Foreground.Three};
}
`
