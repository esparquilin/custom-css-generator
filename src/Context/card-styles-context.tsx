import { createContext, useState } from "react";

const CardStylesContext = createContext({
  cardBackgroundColor: "#fff",
  setCardBackgroundColor: (value: string) => {},
});

export const CardStylesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cardBackgroundColor, setCardBackgroundColor] = useState("#bbb");

  return (
    <CardStylesContext.Provider
      value={{
        cardBackgroundColor,
        setCardBackgroundColor,
      }}
    >
      {children}
    </CardStylesContext.Provider>
  );
};

export default CardStylesContext;
