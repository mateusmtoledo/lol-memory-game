import Game from "./components/Game";
import { GlobalStyle } from "./components/styles/Global.styled";
import Header from "./components/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Game />
    </>
  );
}

export default App;
