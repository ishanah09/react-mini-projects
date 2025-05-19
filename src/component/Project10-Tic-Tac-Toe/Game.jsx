import { useEffect, useState } from "react";
import { SiPanasonic } from "react-icons/si";

export default function Game() {
  const [winner, setWinner] = useState("");
  const [board, setBoard] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const [step, setStep] = useState([board]);

  const winning_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function checkwinner(newBoard) {
    for (let combo of winning_combinations) {
      const [a, b, c] = combo;
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[b] === newBoard[c]
      ) {
        setWinner(newBoard[a]);
      }
    }
  }

  function handleclick(index) {
    if (board[index] || winner) {
      return;
    }
    let newBoard = [...board];
    newBoard[index] = currentPlayer;
    checkwinner(newBoard);
    setBoard(newBoard); //

    console.log(board);

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");

    setStep([...step, newBoard]);
  }

  function resetGame() {
    setWinner("");
    setBoard(Array(9).fill(""));
    setCurrentPlayer("X");
    setStep([step[0]]);
  }

  function handleStep(index) {
    setBoard(step[index]);
    setWinner("");
    setStep(
      step.filter((item, i) => {
        return i <= index;
      })
    );
    setCurrentPlayer(index % 2 === 0 ? "X" : "O");
  }

  return (
    <>
      <main className="w-full min-h-screen flex items-center justify-center  gap-12 ">
        <section className="flex items-center justify-center flex-col gap-8">
          <div className="w-[300px] h-[300px] bg-green-600  flex flex-wrap border-2">
            {board.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => handleclick(index)}
                  className="w-[33.33%] h-[33.33%] bg-yellow-300 border-2  flex items-center justify-center text-5xl font-semibold "
                >
                  {item}
                </button>
              );
            })}
          </div>

          {winner.length !== 0 ? (
            <h1 className="text-3xl font-semibold">
              Winner is: {winner}, Please Restart the Game
            </h1>
          ) : (
            <h1 className="text-3xl font-semibold">
              Next Player is {currentPlayer}
            </h1>
          )}

          <button
            onClick={resetGame}
            className="p-3 cursor-pointer bg-black text-white rounded-xl active:scale-[90%] hover:scale-[105%] hover:opacity-90 transition-all 1s"
          >
            Restart Game
          </button>
        </section>

        <section>
          <ul className="list-decimal flex flex-col  gap-3 ">
            {step.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleStep(index)}
                  className="py-2 px-3 bg-black text-white cursor-pointer  rounded-xl active:scale-[90%] hover:scale-[105%] hover:opacity-90 transition-all 1s"
                >
                  {index === 0 ? "GO TO START " : "GO TO STEP " + index}
                </button>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
