import "./App.css";
import Createnotes from "./components/createnotes/Createnotes";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Viewnotes from "./components/viewnotes/Viewnotes";

function App() {
  return (
    <Container fluid>
      <Row style={{ height: "100vh" }}>
        <Createnotes />

        <Viewnotes />
      </Row>
    </Container>
  );
}

export default App;
