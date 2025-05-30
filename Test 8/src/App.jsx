import React, { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <div style={{}}>
      <button onClick={toggleShow}>{show ? "HIDE" : "SHOW"}</button>

      {show && <h1>WELCOME TO REACT!</h1>}
    </div>
  );
}

export default App;
