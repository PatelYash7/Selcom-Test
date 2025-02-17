import { TGame } from "../utils/type";

const GameHistory = ({ history }: { history: TGame[] }) => {
  return (
    <div className="game-history mt-8 bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Match History</h2>
        <button
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-1 px-4 rounded-lg transition-colors"
        >
          Sign Out
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left text-gray-600">Player 1</th>
              <th className="p-3 text-left text-gray-600">Player 2</th>
              <th className="p-3 text-left text-gray-600">Winner</th>
              <th className="p-3 text-left text-gray-600">Date</th>
            </tr>
          </thead>
          <tbody className="[&>tr:nth-child(even)]:bg-gray-50">
            {history.map((game) => (
              <tr key={game._id} className="border-t border-gray-200">
                <td className="p-3 text-gray-700">{game.player1}</td>
                <td className="p-3 text-gray-700">{game.player2}</td>
                <td className="p-3 text-gray-700 font-semibold">
                  {game.winner}
                </td>
                <td className="p-3 text-gray-500">
                  {new Date(game.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GameHistory;
