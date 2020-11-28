import { useEffect } from "react";
import Card from "./Card";

const Gameboard = (props) => {
  // useEffect(() => {
  //   const shuffleCard = () => {};
  // });

  return (
    <div className="ui four column internally celled grid">
      <Card {...props} />
    </div>
  );
};

export default Gameboard;
