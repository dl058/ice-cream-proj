import "./App.css";
import Ad from "./components/Ad";
import AdDesigner from "./components/AdDesigner";
import Header from "./components/Header";
import Votes from "./components/Votes";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <Header user="Leeza" />
      <main>
        <AdDesigner />
        <Votes />
      </main>
    </>
  );
}

export default App;
