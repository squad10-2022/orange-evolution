import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { darkTheme, lightTheme } from "../styles/themes";

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    setTheme(() => (theme === darkTheme ? lightTheme : darkTheme));
  };
  return { changeTheme, theme };
};
