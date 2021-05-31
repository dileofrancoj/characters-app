import "./App.css";
import { Container } from "react-bootstrap";
import Search from "./components/Search";
import Characters from "./components/Characters";

function App(): JSX.Element {
  return (
    <Container>
      <Search />
      <Characters />
    </Container>
  );
}

export default App;
