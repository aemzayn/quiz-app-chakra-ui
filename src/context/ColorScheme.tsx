import React, { createContext, useState } from "react";
import { ColorSchemeType } from "../interfaces/index";
import { COLORS } from "../libs/constants";

export const ColorSchemeContext = createContext<ColorSchemeType | null>(null);

const ColorProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [colorScheme, setColorScheme] = useState({
    color: COLORS[0],
    pos: 0,
  });

  function changeColorTheme() {
    if (colorScheme.pos + 1 >= COLORS.length) {
      setColorScheme({ color: COLORS[0], pos: 0 });
    } else {
      setColorScheme({
        color: COLORS[colorScheme.pos + 1],
        pos: colorScheme.pos + 1,
      });
    }
  }

  return (
    <ColorSchemeContext.Provider
      value={{ colorScheme: colorScheme.color, changeColorTheme }}
    >
      {children}
    </ColorSchemeContext.Provider>
  );
};

export default ColorProvider;
