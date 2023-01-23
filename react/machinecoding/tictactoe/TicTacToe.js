import { useState } from "react";
import "./tictactoe.css";

const TicTacToe = () => {
  const [boardValue, setBoardValue] = useState(Array(9).fill(null));

  function getPlayerSymbol() {
    return boardValue.filter(Boolean).length % 2 === 0 ? "X" : "O";
  }

  const setValue = (idx) => {
    let symbol = getPlayerSymbol();
    let temp = [...boardValue];
    temp[idx] = symbol;
    setBoardValue(temp);
  };

  function selectSquare(val) {
    return (
      <div className="col" onClick={() => setValue(val)}>
        {boardValue[val]}
      </div>
    );
  }

  return (
    <>
      <div className="row">
        {selectSquare(0)}
        {selectSquare(1)}
        {selectSquare(2)}
      </div>
      <div className="row">
        {selectSquare(3)}
        {selectSquare(4)}
        {selectSquare(5)}
      </div>
      <div className="row">
        {selectSquare(6)}
        {selectSquare(7)}
        {selectSquare(8)}
      </div>
    </>
  );
};

export default TicTacToe;
