import { useContext, useState } from "react";
import StylesContext from "../../Context/styles-context";
import Card from "../../UI/Card/Card";
import CardStylesContext from "../../Context/card-styles-context";

const GeneralMenu = () => {
  // const { fontBase, setFontBase } = useContext(StylesContext);

  // const [h1, setH1] = useState(2.4);
  // const [h2, setH2] = useState(2.133);
  // const [h3, setH3] = useState(1.896);
  // const [h4, setH4] = useState(1.685);
  // const [h5, setH5] = useState(1.496);
  // const [h6, setH6] = useState(1.33);
  // const [p, setP] = useState(fontBase);

  const [secondary, setSecondary] = useState("#6c757d");

  const { cardBackgroundColor, setCardBackgroundColor } =
    useContext(CardStylesContext);

  const { primaryColor, setPrimaryColor, backgroundColor, setBackgroundColor } =
    useContext(StylesContext);

  return (
    //     <div>
    //       <h1
    //         style={{
    //           fontSize: `${h1 * fontBase}rem`,
    //         }}
    //       >
    //         Lorem ipsum dolor sit amet
    //       </h1>
    //       <h2
    //         style={{
    //           fontSize: `${h2 * fontBase}rem`,
    //         }}
    //       >
    //         Duis aute irure dolor in reprehenderit in
    //       </h2>
    //       <h3
    //         style={{
    //           fontSize: `${h3 * fontBase}rem`,
    //         }}
    //       >
    //         Excepteur sint occaecat
    //       </h3>
    //       <h4
    //         style={{
    //           fontSize: `${h4 * fontBase}rem`,
    //         }}
    //       >
    //         Eget ultrices blandit tempus sit
    //       </h4>
    //       <h5
    //         style={{
    //           fontSize: `${h5 * fontBase}rem`,
    //         }}
    //       >
    //         Commodo mattis sodales sagittis turpis sit
    //       </h5>
    //       <h6
    //         style={{
    //           fontSize: `${h6 * fontBase}rem`,
    //         }}
    //       >
    //         Habitant eu fermentum sagittis ipsum ornare per ante nibh lectus
    //       </h6>
    //       <p
    //         style={{
    //           fontSize: `${p}rem`,
    //         }}
    //       >
    //         Torquent nibh luctus sodales mauris justo porta. Vehicula finibus primis
    //         eget taciti; hendrerit aenean suspendisse. Ac diam parturient egestas et
    //         diam integer placerat. Sed magna rhoncus senectus tristique; integer
    //         iaculis volutpat. Ad at senectus convallis semper nam. Velit in faucibus
    //         ac finibus venenatis cursus duis mattis. Convallis eleifend augue proin
    //         venenatis; tincidunt lectus cubilia magnis metus. Nibh sollicitudin
    //         primis nascetur ultricies, ut morbi porttitor massa.
    //       </p>

    //       <div>
    //         <input
    //           type="range"
    //           min="1"
    //           max="2.4"
    //           step="0.1"
    //           value={fontBase}
    //           onChange={(e) => setFontBase(parseFloat(e.target.value))}
    //         />
    //         <p>{fontBase}</p>
    //         <p>default: 1.6rem</p>
    //       </div>

    //       {/*  */}
    //       <div
    //         style={{
    //           backgroundColor: "white",
    //         }}
    //       >
    //         <div>
    //           <pre>
    //             {`
    // :root {
    //     --font-base: ${fontBase}rem;
    //     --h1: ${h1}rem;
    //     --h2: ${h2}rem;
    //     --h3: ${h3}rem;
    //     --h4: ${h4}rem;
    //     --h5: ${h5}rem;
    //     --h6: ${h6}rem;
    //     --p: ${p}rem;
    //     }
    //             `}
    //           </pre>
    //         </div>
    //       </div>
    //     </div>
    <Card>
      <div>
        <input
          type="color"
          value={primaryColor}
          onChange={(e) => setPrimaryColor(e.target.value)}
        />
        <p>Primary</p>
      </div>

      <div>
        <input
          type="color"
          value={secondary}
          onChange={(e) => setSecondary(e.target.value)}
        />
        <p>Secondary</p>
      </div>

      <div>
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
        <p>Background</p>
      </div>

      <div>
        <input
          type="color"
          value={cardBackgroundColor}
          onChange={(e) => setCardBackgroundColor(e.target.value)}
        />
        <p>Card</p>
      </div>
    </Card>
  );
};

export default GeneralMenu;
