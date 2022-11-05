import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme } from "./styles/themes";
import Button from "./components/Button/Button";
import { ThemeContext } from "./context/themeContext";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  const [theme, setTheme] = useState(darkTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <h1 style={{ color: theme.bgColor1 }}>Hello World</h1>
        <Button />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
