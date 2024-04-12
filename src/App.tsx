import React from "react";
import Header from "./components/Header"
import Body from "./components/Body"
import Content from "./components/Content"
import Footer from "./components/Footer"

const App: React.FC = () => {
  //  const body = document.querySelector("body");
  //  const pointerToggle = document.querySelector(".pointer-toggle");
  //
  //  const handlePointerToggleClick = (e: MouseEvent) => {
  //    e.preventDefault();
  //    if (body != null && pointerToggle != null) {
  //      body.classList.toggle("custom-pointer");
  //
  //      (e.target as HTMLElement).style.cursor = "";
  //
  //      if (!body.classList.contains("custom-pointer")) {
  //        (e.target as HTMLElement).style.cursor = "pointer";
  //      }
  //    }
  //  };
  //
  //  if (body != null && pointerToggle != null) {
  //    pointerToggle.addEventListener(
  //      "click",
  //      handlePointerToggleClick as EventListener
  //    );
  //  }

  return (
    <Body>
      <Header>
        <div class="navbar sticky">
          <ol>
            <li><a href="#navbar">Harold</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><button class="pointer-toggle">Toggle Pointer</button></li>
          </ol>
        </div>
      </Header>
      <Content>
      </Content>
      <Footer>
        <p>Test in the Footer from app.tsx </p>
      </Footer>
    </Body>
  )
}
export default App
