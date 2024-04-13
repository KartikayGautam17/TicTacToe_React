import gameState from "./gameState";

function GameOver({ game_State }) {
  const classGameOver =
    "w-32 h-14 rounded-full border-2 border-dashed text-center flex items-center justify-center  border-blue-500";
  if (game_State == gameState.inProgress) return <></>;
  else if (game_State == gameState.Owins)
    return <div className={classGameOver}>O Wins</div>;
  else if (game_State == gameState.Xwins)
    return <div className={classGameOver}>X Wins</div>;
  else if (game_State == gameState.draw)
    return <div className={classGameOver}>Draw</div>;
}
export default GameOver;
