import classes from "./ButtonMenu.module.css";
import Button from "../../UI/Button/Button";
import { useContext, useState } from "react";
import { ButtonStyle } from "../../Interfaces/button-interfaces";
import StylesContext from "../../Context/styles-context";
import Card from "../../UI/Card/Card";
import ButtonCustomRow from "./ButtonCustomRow/ButtonCustomRow";

const ButtonMenu = () => {
  const [borderRadius, setBorderRadius] = useState(4);
  const [paddingVertical, setPaddingVertical] = useState(6);
  const [paddingHorizontal, setPaddingHorizontal] = useState(12);
  const [buttonWeight, setButtonWeight] = useState(400);
  const [border, setBorder] = useState(2);

  return (
    <>
      <div className={classes.row}>
        <Card className={classes["button-visualizer-container"]}>
          <Button
            fontWeight={buttonWeight}
            borderRadius={borderRadius}
            paddingVertical={paddingVertical}
            paddingHorizontal={paddingHorizontal}
            //
            border={border}
          />
        </Card>
        <Card className={classes.slidersContainer}>
          <div>
            <input
              type="range"
              min="0"
              max="16"
              value={borderRadius}
              onChange={(e) => setBorderRadius(parseInt(e.target.value))}
            />
            <p>{borderRadius}</p>
            <p>default: 4px</p>
          </div>
          {/*  */}
          <div>
            <input
              type="range"
              min="0"
              max="16"
              value={paddingHorizontal}
              onChange={(e) => setPaddingHorizontal(parseInt(e.target.value))}
            />
            <p>{paddingHorizontal}</p>
            <p>default: 4px</p>
          </div>
          {/*  */}
          <div>
            <input
              type="range"
              min="0"
              max="16"
              value={paddingVertical}
              onChange={(e) => setPaddingVertical(parseInt(e.target.value))}
            />
            <p>{paddingVertical}</p>
            <p>default: 4px</p>
          </div>
          {/*  */}
          <div>
            <input
              type="range"
              min="100"
              max="900"
              step="100"
              value={buttonWeight}
              onChange={(e) => setButtonWeight(parseInt(e.target.value))}
            />
            <p>{buttonWeight}</p>
            <p>default: 400</p>
          </div>
          {/*  */}
          <div>
            <input
              type="range"
              min="0"
              max="6"
              step="1"
              value={border}
              onChange={(e) => setBorder(parseInt(e.target.value))}
            />
            <p>{border}</p>
            <p>default: 400</p>
          </div>
          {/*  */}
          {/* <div>
          <input
            type="color"
            value={borderColor}
            onChange={(e) => setBorderColor(e.target.value)}
          />
          <p>{borderColor}</p>
          <p>default: 400</p>
        </div> */}
        </Card>

        {/*  */}
        <Card>
          <div>
            <pre>
              {`
.button {
  transition: all 0.2s ease;
  cursor: pointer;
  border: 0.2rem solid transparent;
  
  borderRadius: ${borderRadius}px;
  padding: ${paddingVertical}px ${paddingHorizontal}px;

  fontWeight: ${buttonWeight};
  borderWidth: ${border}px;
}
            `}
            </pre>
          </div>
        </Card>
      </div>
      <ButtonCustomRow
        fontWeight={buttonWeight}
        borderRadius={borderRadius}
        paddingVertical={paddingVertical}
        paddingHorizontal={paddingHorizontal}
        //
        border={border}
        //
        buttonType="primary"
      />

      <ButtonCustomRow
        fontWeight={buttonWeight}
        borderRadius={borderRadius}
        paddingVertical={paddingVertical}
        paddingHorizontal={paddingHorizontal}
        //
        border={border}
        //
        buttonType="secondary"
      />

      <ButtonCustomRow
        fontWeight={buttonWeight}
        borderRadius={borderRadius}
        paddingVertical={paddingVertical}
        paddingHorizontal={paddingHorizontal}
        //
        border={border}
        //
        buttonType="exit"
      />

      <ButtonCustomRow
        fontWeight={buttonWeight}
        borderRadius={borderRadius}
        paddingVertical={paddingVertical}
        paddingHorizontal={paddingHorizontal}
        //
        border={border}
        //
      />
    </>
  );
};

export default ButtonMenu;
