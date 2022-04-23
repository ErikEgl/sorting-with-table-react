import React from "react";
import Info from "./components/Info/Info";
import CardsWrap from "./components/Cards/Cards";
import WeeksGenerator from "./components/WeeksGenerator/WeeksGenerator";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <Info/>
      <WeeksGenerator/>
    </>
  );
}

export default App;
