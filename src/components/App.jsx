import React, { useState } from "react";

function App() {
  setInterval(newTime, 1000);
  let time = new Date().toLocaleTimeString();
  const [now, setTime] = useState(time);
  function newTime() {
    const updatedTime = new Date().toLocaleTimeString();
    setTime(updatedTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={newTime}>Get Time</button>
    </div>
  );
}

export default App;
