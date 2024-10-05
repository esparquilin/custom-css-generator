import { useContext, useEffect, useState } from "react";
import StylesContext from "../../Context/styles-context";
import { ButtonStyle } from "../../Interfaces/button-interfaces";

interface ButtonProps {
  children?: React.ReactNode;
  //
  fontWeight: number;
  borderRadius: number;
  paddingVertical: number;
  paddingHorizontal: number;

  //
  border: number;
  //
  buttonStyle?: ButtonSyledProps;
  buttonType?: ButtonStyle;
}

const Button: React.FC<ButtonProps> = ({
  children,
  fontWeight,
  borderRadius,
  paddingVertical,
  paddingHorizontal,
  border,
  buttonStyle,
  buttonType,
}) => {
  const { fontBaseSize, primaryColor } = useContext(StylesContext);

  // useEffect(() => {
  //   localStorage.setItem(
  //     "Button",
  //     JSON.stringify({
  //       fontWeight: fontWeight,
  //       borderRadius: borderRadius + "px",
  //       paddingVertical: paddingVertical + "px",
  //       paddingHorizontal: paddingHorizontal + "px",
  //       //
  //       border: border + "px",
  //     })
  //   );
  // }, [fontWeight, borderRadius, paddingVertical, paddingHorizontal, border]);

  return (
    <button
      style={{
        transition: `all 0.2s ease`,
        cursor: `pointer`,
        borderStyle: `solid`,
        //
        //borderColor: borderColor,
        borderWidth: `${border}px`,
        //
        fontWeight: fontWeight,
        fontSize: `${fontBaseSize}rem`,
        borderRadius: `${borderRadius}px`,
        padding: `${paddingVertical}px ${paddingHorizontal}px`,
        //
        //
        backgroundColor:
          buttonType === "primary"
            ? primaryColor
            : buttonStyle?.backgroundColor,
        color: buttonStyle?.color,
        borderColor: buttonStyle?.borderColor,
        //
      }}
    >
      {children || "Button"}
    </button>
  );
};

//Todo falta hacer la parte de hover >:)) que no se puede modificar en styles

export default Button;

interface ButtonSyledProps {
  backgroundColor: string;
  color: string;
  borderColor: string;
}
