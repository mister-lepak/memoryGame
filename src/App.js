// import "./App.css";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import React, { useState } from "react";
import Gameboard from "./components/Gameboard";
import "./app.css";

const App = () => {
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <Header />
      <Scoreboard score={score} />
      <Gameboard score={score} setScore={setScore} />
    </div>
  );
};

export default App;
