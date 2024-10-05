import { createContext, useState } from "react";
import { colorConstants } from "../Constants/constants";

const StylesContext = createContext({
  fontBaseSize: 1.6,
  setFontBaseSize: (value: number) => {},
  primaryColor: colorConstants.primary,
  setPrimaryColor: (value: string) => {},
  secondaryColor: "#000",
  setSecondaryColor: (value: string) => {},
  backgroundColor: "#000",
  setBackgroundColor: (value: string) => {},
  textColor: "#000",
  setTextColor: (value: string) => {},
});

export const StylesProvider = ({ children }: { children: React.ReactNode }) => {
  const [fontBaseSize, setFontBaseSize] = useState(1.6);
  const [primaryColor, setPrimaryColor] = useState(colorConstants.primary);
  const [secondaryColor, setSecondaryColor] = useState("#000");
  const [backgroundColor, setBackgroundColor] = useState("#000");
  const [textColor, setTextColor] = useState("#000");

  return (
    <StylesContext.Provider
      value={{
        fontBaseSize,
        setFontBaseSize,
        primaryColor,
        setPrimaryColor,
        secondaryColor,
        setSecondaryColor,
        backgroundColor,
        setBackgroundColor,
        textColor,
        setTextColor,
      }}
    >
      {children}
    </StylesContext.Provider>
  );
};

export default StylesContext;
