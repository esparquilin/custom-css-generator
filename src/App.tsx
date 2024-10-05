import "./App.css";
import ButtonMenu from "./Components/ButtonMenu/ButtonMenu";
import GeneralMenu from "./Components/GeneralMenu/GeneralMenu";
import { CardStylesProvider } from "./Context/card-styles-context";
import { StylesProvider } from "./Context/styles-context";
import Wapper from "./UI/Wrapper/Wrapper";

function App() {
  return (
    <StylesProvider>
      <CardStylesProvider>
        <Wapper>
          <GeneralMenu />
          <ButtonMenu />
        </Wapper>
      </CardStylesProvider>
    </StylesProvider>
  );
}

export default App;
