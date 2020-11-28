import bb8 from "../img/bb8.png";
import ren from "../img/ren.png";
import storm from "../img/stormtrooper.png";
import leia from "../img/leia.png";
import chewbacca from "../img/chewbacca.png";
import r2d2 from "../img/r2d2.png";
import c3po from "../img/c3po.png";
import obiwan from "../img/obiwan.png";
import { useState, useEffect } from "react";

const Card = (props) => {
  const { score, setScore, bestScore, setBestScore } = props;
  const [valSequence, setValSequence] = useState([0, 1, 2, 3, 4, 5, 6, 7]);
  const [isRandomized, setIsRandomized] = useState(false);
  const [charName, setCharName] = useState([
    "BB-8",
    "KyloRen",
    "Stormtrooper",
    "Leia",
    "Chewbacca",
    "R2D2",
    "C3PO",
    "ObiWan",
  ]);

  const [avatar, setAvatar] = useState([
    bb8,
    ren,
    storm,
    leia,
    chewbacca,
    r2d2,
    c3po,
    obiwan,
  ]);

  const [pickedChar, setPickedChar] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  let recordSet = [];
  let pickedCharSet = [false, false, false, false, false, false, false, false];

  const randomizeVal = () => {
    recordSet = [];
    let valSequenceCopy = [0, 0, 0, 0, 0, 0, 0, 0];
    valSequenceCopy.map((e, id) => {
      let number = Math.floor(Math.random() * (7 - 0 + 1) + 0);
      while (recordSet.includes(number)) {
        number = Math.floor(Math.random() * (7 - 0 + 1) + 0);
      }
      valSequenceCopy[id] = number;
      recordSet.push(valSequenceCopy[id]);
      return number;
    });

    setValSequence(recordSet);
  };

  useEffect(() => {
    if (!isRandomized) {
      randomizeVal();
      setIsRandomized(true);
    }
  });

  const scorePoint = (num) => {
    randomizeVal();
    if (pickedChar[num]) {
      if (bestScore < score) {
        setBestScore(score);
      }

      setScore(0);
      pickedCharSet = pickedCharSet.map((e) => {
        return false;
      });
      setPickedChar(pickedCharSet);
    } else {
      setScore(score + 1);
      pickedCharSet = [...pickedChar];
      pickedCharSet[num] = true;
      setPickedChar(pickedCharSet);
    }
  };

  return valSequence.map((num) => {
    return (
      <div className="column">
        <div className="ui fluid card">
          <div className="image">
            <img
              src={avatar[num]}
              id={charName[num]}
              onClick={(e) => {
                scorePoint(num);
              }}
            ></img>
          </div>
          <div className="content">
            <a
              className="header ui centered"
              id={charName[num]}
              onClick={(e) => {
                scorePoint(num);
              }}
            >
              {charName[num]}
            </a>
          </div>
        </div>
      </div>
    );
  });
};

export default Card;
