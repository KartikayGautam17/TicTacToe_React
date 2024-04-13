import gameState from "./gameState";
function ResetGame({ game_State, onReset }) {
  if (game_State === gameState.inProgress) return <div></div>;
  return (
    <button
      onClick={onReset}
      className="flex justify-center items-center mt-5 w-28 h-16 border-2 text-center rounded-full hover:bg-yellow-500 duration-500"
    >
      Reset Board
    </button>
  );
}
export default ResetGame;
