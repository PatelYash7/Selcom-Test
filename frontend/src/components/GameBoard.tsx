import { useState } from "react";
const GameBoard = ({
  player1,
  player2,
  onGameEnd,
}: {
  player1: string;
  player2: string;
  onGameEnd: (winner: string) => void;
}) => {
  const [board, setBoard] = useState<any[]>(Array(9).fill(null));
  const [isPlayer1Turn, setIsPlayer1Turn] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);

  const checkWinner = (squares: any[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isPlayer1Turn ? "X" : "O";
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      const winnerName = gameWinner === "X" ? player1 : player2;
      setWinner(winnerName);
      onGameEnd(winnerName);
    } else if (!newBoard.includes(null)) {
      // Draw game
      onGameEnd("Draw");
    } else {
      setIsPlayer1Turn(!isPlayer1Turn);
    }
  };

  return (
    <div className="game-board text-center space-y-4">
      <h3 className="text-xl font-semibold text-gray-700">
        {isPlayer1Turn ? `${player1}'s Turn (X)` : `${player2}'s Turn (O)`}
      </h3>
      <div className="grid grid-cols-3 gap-2 w-fit mx-auto">
        {board.map((cell, index) => (
          <button
            key={index}
            className="w-24 h-24 flex items-center justify-center text-4xl font-bold 
                   bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors
                   disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-100"
            onClick={() => handleClick(index)}
            disabled={!!cell || !!winner}
          >
            {cell}
          </button>
        ))}
      </div>
      {winner && (
        <div className="mt-6 w-full ">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            {winner === "Draw" ? "It's a Draw!" : `Winner: ${winner}!`}
          </h2>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => {
                window.location.reload();
              }}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameBoard;
