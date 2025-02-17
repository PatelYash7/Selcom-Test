import { useState, useEffect } from "react";
import { startGame, getGameHistory, endGame } from "../utils/api";
import GameBoard from "./GameBoard";
import GameHistory from "./GameHistory";
import { TGame } from "../utils/type";

const Dashboard = ({ token }: { token: string }) => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const [history, setHistory] = useState<TGame[]>([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await getGameHistory(token);
        setHistory(response);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };
    fetchHistory();
  }, []);

  const handleStartGame = async () => {
    if (!player1 || !player2) return alert("Please enter both player names");
    try {
      await startGame(player1, player2, token);
      setGameStarted(true);
    } catch (error) {
      console.error("Error starting game:", error);
    }
  };

  const handleGameEnd = async (winner: string) => {
    try {
      await endGame(player1, player2, winner, token);
    } catch (error) {
      console.error("Error ending game:", error);
    }
  };

  return (
    <div className="bg-slate-200 min-h-screen">
      <div className="p-6 max-w-4xl mx-auto  space-y-8">
        {!gameStarted ? (
          <div className="game-setup flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800">New Game</h2>
            <input
              type="text"
              placeholder="Player 1 Name"
              className="border-2 border-gray-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={player1}
              onChange={(e) => setPlayer1(e.target.value)}
            />
            <input
              type="text"
              placeholder="Player 2 Name"
              className="border-2 border-gray-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={player2}
              onChange={(e) => setPlayer2(e.target.value)}
            />
            <button
              onClick={handleStartGame}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
              Start Game
            </button>
          </div>
        ) : (
          <GameBoard
            player1={player1}
            player2={player2}
            onGameEnd={handleGameEnd}
          />
        )}
        <GameHistory history={history} />
      </div>
    </div>
  );
};

export default Dashboard;
