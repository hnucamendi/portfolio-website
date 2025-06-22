import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { GlobalStyles } from "./styles/index"
import { ThemeProvider } from "styled-components"

const theme = {
  Background: {
    One: "#212529",
    Two: "#343a40",
    Three: "#495057"
  },
  Foreground: {
    One: "#F8F9FA",
    Two: "#f1f3f5",
    Three: "#e9ecef"
  },
  Text: {
    H1: { PX: 61, REM: 3.8125 },
    H2: { PX: 49, REM: 3.0625 },
    H3: { PX: 39, REM: 2.4375 },
    H4: { PX: 31, REM: 1.9375 },
    H5: { PX: 25, REM: 1.5625 },
    H6: { PX: 20, REM: 1.25 },
    Normal: { PX: 16, REM: 1 },
    Small: { PX: 13, REM: 0.8125 },
    XSmall: { PX: 10, REM: 0.625 },
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)

