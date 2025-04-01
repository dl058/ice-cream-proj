import { useState } from "react";
import Ad from "./Ad";

const AdDesigner = () => {
  const [flavor, setFlavor] = useState("What flavor?");
  const [darkTheme, setDarkTheme] = useState(false);
  const [fontSize, setFontSize] = useState(50);
  // console.log(darkTheme);
  return (
    <div className="AdDesigner">
      <h2 className="designTitle">Ad Designer</h2>
      <Ad flavor={flavor} darkTheme={darkTheme} fontSize={fontSize} />
      <p className="choice">Choices to support</p>
      <div className="choiceExample">
        <button
          className={`${flavor === "Chocolate" ? " disabled" : "active"}`}
          disabled={flavor === "Chocolate" ? true : false}
          onClick={() => {
            setFlavor("Chocolate");
          }}
        >
          Chocolate
        </button>
        <button
          className={`${flavor === "Strawberry" ? " disabled" : "active"}`}
          disabled={flavor === "Strawberry" ? true : false}
          onClick={() => {
            setFlavor("Strawberry");
          }}
        >
          Strawberry
        </button>
        <button
          className={`${flavor === "Vanilla" ? " disabled" : "active"}`}
          disabled={flavor === "Vanilla"}
          onClick={() => {
            setFlavor("Vanilla");
          }}
        >
          Vanilla
        </button>
      </div>
      <p className="dark"> Dark Mode </p>
      <button
        className="lightBtn"
        disabled={!darkTheme}
        onClick={() => setDarkTheme(false)}
      >
        Light
      </button>
      <button
        className="darkBtn"
        disabled={darkTheme === true ? true : false}
        onClick={() => setDarkTheme(true)}
      >
        Dark
      </button>{" "}
      <p className="font">Font size</p>
      <div className="fontExample">
        {" "}
        <button className="upButton" onClick={() => setFontSize(fontSize + 1)}>
          Up
        </button>
        <p className="fontNumEx">{fontSize}</p>
        <button
          className="downButton"
          onClick={() => setFontSize(fontSize - 1)}
        >
          {" "}
          Down{" "}
        </button>{" "}
      </div>
    </div>
  );
};

export default AdDesigner;
