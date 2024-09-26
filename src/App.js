import "./CSS.css/global.css";
import Cell from "./components/Cell";
import { useEffect, useState } from "react";
import Play from "./components/Play";

const winningCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage] = useState("");
  const [player1Name, setPlayer1Name] = useState("player1");
  const [player2Name, setPlayer2Name] = useState("player2");

  useEffect(() => {
    winningCombo.forEach((combo) => {
      const circleWins = combo.every((cell) => cells[cell] === "circle");
      const crossWins = combo.every((cell) => cells[cell] === "cross");
      if (circleWins) {
        setWinningMessage(`${player1Name} wins!`);
      } else if (crossWins) {
        setWinningMessage(`${player2Name} wins!`);
      }
    });
  }, [cells, player1Name, player2Name]);

  useEffect(() => {
    if (cells.every((cell) => cell !== "") && !winningMessage) {
      setWinningMessage("Draw!");
    }
  }, [cells, winningMessage]);

  return (
    <div className="content">
      <h1 className="h1">Tic-Tac-Toy</h1>
      <ol id="players">
        <Play initialName={player1Name} symbol="X" onNameChange={setPlayer1Name} />
        <Play initialName={player2Name} symbol="Y" onNameChange={setPlayer2Name} />
      </ol>
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell
            winningMessage={winningMessage}
            cell={cell}
            cells={cells}
            setCells={setCells}
            id={index}
            go={go}
            setGo={setGo}
            key={index}
          />
        ))}
      </div>
      <div className="h1">{winningMessage}</div>
      {!winningMessage && (
        <div className="h1">{`It's now ${go === "circle" ? player1Name : player2Name}'s turn!`}</div>
      )}
    </div>
  );
}
