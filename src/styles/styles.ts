import styled from "styled-components"

// Header //
export const Header = styled.div`
.navbar{
  border-top: 1px solid #e6e6e6;
  padding: 15px 0;
}

.sticky {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
}

.navbar ol {
  display: flex;
  align-items: center;
  gap: 25px;
  list-style: none;
}

.navbar ol li:last-child {
  margin-left: auto;
}

.pointer-toggle {
  border: 1px solid #e6e6e6;
  background-color: inherit;
  padding: 7px;
  box-shadow: 0 3px 10px rgb(255, 255, 255, 0.2);
}

.pointer-toggle:hover {
  box-shadow: 0 3px 10px rgb(255, 255, 255, 0.5);
  transition: ease-in 0.1s;
}
`

// FOOTER // 
export const Footer = styled.div`
.footer {
  border-bottom: 1px solid #e6e6e6;
  padding: 15px 0;
  margin: 30px 0;
}

.footer ol {
  display: flex;
  align-items: center;
  gap: 25px;
  list-style: none;
}
`
export const Content = styled.div`
.projects {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.project-wrapper {
  border: 1px solid rgba(123, 255, 21, 0.19);
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  padding: 20px;
}

.status-wrapper {
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 25px;
}

.status-wrapper p,
.status-wrapper h4 {
  margin: 0 0;
}
`
// Main - About me - Body // 
export const Body = styled.div`
.about-me {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.about-me div {
  display: flex;
  align-items: center;
}

.about-me img {
  width: 450px;
  object-fit: cover;
  object-position: center;
  border-radius: 15%;
  border: 1px solid #fff;
  box-shadow: 0 0 0 5px #fff;
  transition: all 0.3s ease-in-out;
  margin: 30px;
}

.about-me img:hover {
  transform: scale(1.1);
  box-shadow: 0 0 0 5px #000;
}

.about-me p {
  line-height: 2;
}
`
