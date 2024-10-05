import { useState } from "react";
import Button from "../../../UI/Button/Button";
import Card from "../../../UI/Card/Card";
import buttonClasses from "../ButtonMenu.module.css";
import { ButtonStyle } from "../../../Interfaces/button-interfaces";
import { colorConstants } from "../../../Constants/constants";

const ButtonCustomRow = ({
  fontWeight,
  borderRadius,
  paddingVertical,
  paddingHorizontal,
  border,

  buttonType,
}: {
  fontWeight: number;
  borderRadius: number;
  paddingVertical: number;
  paddingHorizontal: number;
  border: number;

  buttonType?: ButtonStyle;
}) => {
  const [color, setColor] = useState(colorConstants.textContrast);
  const [backgroundColor, setBackgroundColor] = useState(
    colorConstants.primary
  );
  const [borderColor, setBorderColor] = useState(colorConstants.dark);
  const [buttonContent, setButtonContent] = useState(buttonType || "Button");

  return (
    <div className={buttonClasses["row"]}>
      <Card className={buttonClasses["button-visualizer-container"]}>
        <Button
          fontWeight={fontWeight}
          borderRadius={borderRadius}
          paddingVertical={paddingVertical}
          paddingHorizontal={paddingHorizontal}
          //
          border={border}
          //
          //
          buttonStyle={{
            color: color,
            backgroundColor: backgroundColor,
            borderColor: borderColor,
          }}
          //
          buttonType={buttonType}
        >
          {buttonContent}
        </Button>
      </Card>
      <Card>
        <div>
          <input
            type="text"
            value={buttonContent}
            onChange={(e) => setButtonContent(e.target.value)}
          />
        </div>
        <div>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <p>{color}</p>
          {/* <p>default: 4px</p> */}
        </div>
        <div>
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
          <p>{backgroundColor}</p>
          {/* <p>default: 4px</p> */}
        </div>
        <div>
          <input
            type="color"
            value={borderColor}
            onChange={(e) => setBorderColor(e.target.value)}
          />
          <p>{borderColor}</p>
          {/* <p>default: 4px</p> */}
        </div>
      </Card>

      <Card>
        <pre>
          {`
.button.primary {
color: ${color},
backgroundColor: ${backgroundColor},
borderColor: ${borderColor},
}
`}
        </pre>
      </Card>
    </div>
  );
};

export default ButtonCustomRow;
