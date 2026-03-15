import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div id="main">
      <button id="click" onClick={() => setVisible(true)}>
        Click
      </button>

      <p id="para" className={visible ? "show" : "hide"}>
        Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
      </p>
    </div>
  );
};

export default App;