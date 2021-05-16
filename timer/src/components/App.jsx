import React, { useState } from "react";

function App() {
  let now = new Date().toLocaleTimeString().substring(0, 8);

  const [time, setTime] = useState(now);

  function updateTime() {
    let newTime = new Date().toLocaleTimeString().substring(0, 8);
    setTime(newTime);
  }

  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
