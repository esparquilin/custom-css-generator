import React, { createContext, useContext, useState, ReactNode } from "react";

interface ButtonStyles {
  borderRadius: number;
  paddingVertical: number;
  paddingHorizontal: number;
  fontWeight: number;
  border: number;
}

interface ButtonStylesContextProps {
  styles: ButtonStyles;
  setStyles: React.Dispatch<React.SetStateAction<ButtonStyles>>;
}

const defaultStyles: ButtonStyles = {
  borderRadius: 4,
  paddingVertical: 6,
  paddingHorizontal: 12,
  fontWeight: 400,
  border: 2,
};

export const ButtonStylesContext = createContext<ButtonStylesContextProps>({
  styles: defaultStyles,
  setStyles: () => {},
});

export const ButtonStylesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [styles, setStyles] = useState<ButtonStyles>(defaultStyles);

  return (
    <ButtonStylesContext.Provider value={{ styles, setStyles }}>
      {children}
    </ButtonStylesContext.Provider>
  );
};
