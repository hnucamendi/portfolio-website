import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { GlobalStyles } from "./styles/index"
import { ThemeProvider } from "styled-components"

// Open Color Palette - https://yeun.github.io/open-color/
const theme = {
  Background: {
    One: "#212529",   // Gray 9
    Two: "#343a40",   // Gray 8
    Three: "#495057"  // Gray 7
  },
  Foreground: {
    One: "#f8f9fa",   // Gray 0
    Two: "#f1f3f5",   // Gray 1
    Three: "#e9ecef"  // Gray 2
  },
  Accent: {
    Primary: "#22b8cf",   // Cyan 5
    Light: "#3bc9db",     // Cyan 4
    Dark: "#15aabf",      // Cyan 6
    Darker: "#1098ad"     // Cyan 7
  },
  Text: {
    Muted: "#868e96",     // Gray 6
    H1: { PX: 61, REM: 3.8125 },
    H2: { PX: 49, REM: 3.0625 },
    H3: { PX: 39, REM: 2.4375 },
    H4: { PX: 31, REM: 1.9375 },
    H5: { PX: 25, REM: 1.5625 },
    H6: { PX: 20, REM: 1.25 },
    Normal: { PX: 16, REM: 1 },
    Small: { PX: 13, REM: 0.8125 },
    XSmall: { PX: 10, REM: 0.625 },
  },
  Spacing: {
    XS: "0.5rem",
    SM: "1rem",
    MD: "1.5rem",
    LG: "2rem",
    XL: "3rem",
    XXL: "4rem",
    Section: "6rem"
  },
  Shadow: {
    SM: "0 1px 2px rgba(0, 0, 0, 0.1)",
    MD: "0 4px 6px rgba(0, 0, 0, 0.1)",
    LG: "0 10px 15px rgba(0, 0, 0, 0.1)",
    Hover: "0 10px 25px rgba(0, 0, 0, 0.15)"
  },
  Transition: {
    Fast: "150ms ease",
    Normal: "250ms ease",
    Slow: "350ms ease"
  },
  BorderRadius: {
    SM: "8px",
    MD: "12px",
    LG: "16px",
    Full: "9999px"
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

