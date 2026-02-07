import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;700&family=Montserrat:wght@400;500;600;700;900&display=swap");

:root {
  font-family: "IBM Plex Sans", sans-serif;
  line-height: 1.5;
  font-weight: 400;
  font-size: 10px;
  background-color: ${({ theme }) => theme.Background.One};
  scroll-behavior: smooth;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
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
h5,
h6 {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  line-height: 1.3;
  color: ${({ theme }) => theme.Foreground.One};
}

p {
  color: ${({ theme }) => theme.Foreground.Two};
  line-height: 1.6;
}

span {
  color: ${({ theme }) => theme.Foreground.One};
}

body {
  font-size: 1.6rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.Spacing.LG};
}

a {
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  color: ${({ theme }) => theme.Foreground.One};
  transition: color ${({ theme }) => theme.Transition.Fast};
}

a:hover {
  color: ${({ theme }) => theme.Accent.Primary};
}

a:active {
  color: ${({ theme }) => theme.Foreground.Three};
}

::selection {
  background: ${({ theme }) => theme.Background.Three};
  color: ${({ theme }) => theme.Foreground.One};
}

/* Responsive Styles */
@media (max-width: 1200px) {
  body {
    max-width: 100%;
    padding: 0 ${({ theme }) => theme.Spacing.LG};
  }
}

@media (max-width: 768px) {
  body {
    font-size: 1.4rem;
    padding: 0 ${({ theme }) => theme.Spacing.MD};
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2.2rem;
  }

  h3 {
    font-size: 2rem;
  }

  h4 {
    font-size: 1.8rem;
  }

  h5 {
    font-size: 1.6rem;
  }

  h6 {
    font-size: 1.4rem;
  }
}

@media (max-width: 480px) {
  body {
    font-size: 1.4rem;
    padding: 0 ${({ theme }) => theme.Spacing.SM};
  }
}
`;
