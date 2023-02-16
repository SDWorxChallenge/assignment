import { createGlobalStyle } from "styled-components";
import List from "./views/List";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <List />
    </>
  );
}

export default App;
