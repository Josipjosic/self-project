import React from "react";
import "./slider.css";
import { Container } from "react-bootstrap";

function Slider() {
  return (
    <Container className="container">
      <ul className="col-12 d-flex flex-row-reverse">
        <li>
          <img
            src={require("../images/slider-image-5.jpg")}
            alt="pic5"
            style={{ height: 200, width: 260 }}
          ></img>
        </li>
        <li>
          <img
            src={require("../images/slider-image-8.jpg")}
            alt="pic8"
            style={{ height: 200, width: 180 }}
          ></img>
        </li>
        <li>
          <img
            src={require("../images/slider-image-9.jpg")}
            alt="pic9"
            style={{ height: 200, width: 220 }}
          ></img>
        </li>
        <li>
          <img
            src={require("../images/slider-image-6.jpg")}
            alt="pic4"
            style={{ height: 200, width: 120 }}
          ></img>
        </li>
        <li>
          <img
            src={require("../images/slider-image-7.jpg")}
            alt="pic5"
            style={{ height: 200, width: 180 }}
          ></img>
        </li>
        <li>
          <img
            src={require("../images/slider-image-2.jpg")}
            alt="pic6"
            style={{ height: 200, width: 120 }}
          ></img>
        </li>
        <li>
          <img
            src={require("../images/slider-image-5.jpg")}
            alt="pic7"
            style={{ height: 200, width: 180 }}
          ></img>
        </li>
        <li>
          <img
            src={require("../images/slider-image-4.jpg")}
            alt="pic8"
            style={{ height: 200, width: 180 }}
          ></img>
        </li>
        <li>
          <img
            src={require("../images/slider-image-1.jpg")}
            alt="pic9"
            style={{ height: 200, width: 220 }}
          ></img>
        </li>
      </ul>
      <ul className="col-9 d-flex flex-row-reverse">
        <li>
          <img
            src={require("../images/slider-image-1.jpg")}
            alt="pic1"
            style={{ height: 200, width: 260 }}
          ></img>
        </li>
        <li>
          <img
            src={require("../images/slider-image-2.jpg")}
            alt="pic2"
            style={{ height: 200, width: 120 }}
          ></img>
        </li>
        <li>
          <img
            src={require("../images/slider-image-3.jpg")}
            alt="pic3"
            style={{ height: 200, width: 180 }}
          ></img>
        </li>
        <li>
          <img
            src={require("../images/slider-image-4.jpg")}
            alt="pic4"
            style={{ height: 200, width: 220 }}
          ></img>
        </li>
        <li>
          <img
            src={require("../images/slider-image-5.jpg")}
            alt="pic5"
            style={{ height: 200, width: 260 }}
          ></img>
        </li>
        <li>
          <img
            src={require("../images/slider-image-6.jpg")}
            alt="pic6"
            style={{ height: 200, width: 120 }}
          ></img>
        </li>
        <li>
          <img
            src={require("../images/slider-image-7.jpg")}
            alt="pic7"
            style={{ height: 200, width: 180 }}
          ></img>
        </li>
        <li>
          <img
            src={require("../images/slider-image-8.jpg")}
            alt="pic8"
            style={{ height: 200, width: 180 }}
          ></img>
        </li>
        <li>
          <img
            src={require("../images/slider-image-9.jpg")}
            alt="pic9"
            style={{ height: 200, width: 220 }}
          ></img>
        </li>
      </ul>
    </Container>
  );
}

export default Slider;
