import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme } from "./styles/themes";
import { ThemeContext } from "./context/themeContext";
import { GlobalStyle } from "./styles/GlobalStyle";
import Home from "./Pages/Home";
import TrailLevels from "./Pages/TrailLevels";
import Login from "./Pages/Login";
import Modules from "./Pages/Modules";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState(darkTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/TrailLevels" element={<TrailLevels />} />
            <Route path="/Modules" element={<Modules />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
