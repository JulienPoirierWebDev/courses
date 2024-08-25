import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { GlobalStyle } from "./components/other/GlobalStyles";
import { lightTheme, darkTheme } from "./components/other/Themes";
function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Changer de thème
      </button>
    </ThemeProvider>
  );
}

export default App;
