import React, { useState } from "react";

const Scoreboard = (props) => {
  const { score } = props;

  return (
    <div className="ui centered grid">
      <div>
        <h3>Score</h3>
      </div>
      <div>{score}</div>
      <div></div>
    </div>
  );
};

export default Scoreboard;
