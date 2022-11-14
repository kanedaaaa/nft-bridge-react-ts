import React from "react";
import "./App.css";
import Button from "./components/button/Button";

import Metamask from "./components/metamask/Metamask";

function App() {
  const dummyFunc = () => {};

  return (
    <div className="App">
      <Metamask />
      <Button text="ETH => Polygon" func={dummyFunc} />
    </div>
  );
}

export default App;
