import { ThemeProvider } from "styled-components";
import React, { useState } from "react";
import { darkTheme } from "./styles/themes";
import { ThemeContext } from "./context/themeContext";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home";
import TrailLevels from "./Pages/TrailLevels";
import Login from "./Pages/Login";
import Modules from "./Pages/Modules";
import Cadastre from "./Pages/Cadastre";
// import PrivateRoute from "./private-route";

function App() {
  const [theme, setTheme] = useState(darkTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route exact component={ Login } path="/" />
            <Route component={Cadastre} path="/Cadastre"  />
            <Route component={Home} path="/Home" />
            <Route component={TrailLevels} path="/TrailLevels"  />
            <Route component={Modules} path="/Modules"  />
          </Switch>
        </Router>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
