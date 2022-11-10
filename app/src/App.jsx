import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme } from "./styles/themes";
import Button from "./components/Button/Button";
import { ThemeContext } from "./context/themeContext";
import { GlobalStyle } from "./styles/GlobalStyle";
import Header from "./components/Header";
import TrailBox from "./components/TrailBox";
import Home from "./Pages/Home";

function App() {
  const [theme, setTheme] = useState(darkTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Home />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
