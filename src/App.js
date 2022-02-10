import "./App.css";
import { Container } from "react-bootstrap";
import Slider from "./components/slider";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Container style={{ width: 940, padding: 0 }} className="container-main">
        <div className="header-main">
          <div className=" header-small"></div>
          <div className=" header">
            <h1>Skup drugih elemenata na stranici</h1>
          </div>
        </div>
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
        <div className="d-flex flex-row-reverse row-button">
          <div className="col-5">
            <button type="button" className=" btn-1"></button>
            <button type="button" className="btn-2"></button>
          </div>
        </div>
      </Container>
      <div className="footer">
        <h1>Skup drugih elemenata na stranici</h1>
      </div>
    </div>
  );
}

export default App;
