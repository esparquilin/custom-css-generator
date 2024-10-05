import { useContext } from "react";
import StylesContext from "../../Context/styles-context";

const Wapper = ({ children }: { children: React.ReactNode }) => {
  const { backgroundColor } = useContext(StylesContext);

  return (
    <div
      style={{
        backgroundColor,
      }}
    >
      {children}
    </div>
  );
};

export default Wapper;
