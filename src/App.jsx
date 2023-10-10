import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);

  const contentLedyStyle = {
    color: "pink",
    fontSize: "18px",
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <ColorfulMessage color="blue" message="お元気ですか？" />
      <ColorfulMessage color="pink" message="元気です!" />
      <button onClick={onClickCountUp}>カウントアップ!</button>
      <p>( ͡° ͜ʖ ͡°)</p>
    </>
  );
};

export default App;
