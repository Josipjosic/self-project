import "./App.css";
import { Container } from "react-bootstrap";
import Slider from "./components/slider";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Container className="container">
        <div className="row">
          <div className="col-8">
            <Slider />
          </div>
          <div className="col-4">
            <h3>Lorem ipsum dolor sit amet consectetuer adipiscing elit</h3>
            <p>
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
