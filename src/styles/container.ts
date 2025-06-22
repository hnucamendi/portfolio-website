import styled from "styled-components"


// Main - About me - Body // 
export default styled.div`
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
