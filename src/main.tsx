import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { GlobalStyles } from "./styles/index"
import { ThemeProvider } from "styled-components"

const theme = {
  backgroundColor: "#212529",
  secondaryBackgroundColor: "#23272B",
  ForegroundColor: "#F8F9FA",
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)

