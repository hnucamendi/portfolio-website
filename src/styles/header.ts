import styled from "styled-components"


// Header //
export default styled.div`
@import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Vampiro+One&display=swap');

.navbar{
  display: flex;
  justify-content: space-evenly;
  padding: 15px 0;
}

.navbar span {
  font-size: ${({ theme }) => theme.Text.H1.REM}rem;
}

.navbar span:nth-child(odd) {
  font-family: "Dela Gothic One", system-ui;
  font-weight: 400;
  font-style: normal;
  color: ${({ theme }) => theme.Background.Two}
}

.navbar span:nth-child(even) {
  font-family: "Vampiro One", system-ui;
  font-weight: 400;
  font-style: normal;
}

.sticky {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .navbar {
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }

  .navbar span {
    font-size: 1.5rem;
  }
}
`
