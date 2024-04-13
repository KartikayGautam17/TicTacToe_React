import Tile from "./tile";
import Strike from "./strike";
import { useState } from "react";
import gameState from "./gameState";

function Board({
  tile_val,
  onTileClick,
  playerTurn,
  strike_combo,
  game_state,
}) {
  return (
    <div className="w-3/4 h-[50vh] mx-auto mt-16 flex flex-col justify-center items-center">
      <div
        className="relative w-4/5 h-4/5 grid grid-rows-[repeat(3,1fr)]  grid-cols-[repeat(3,1fr)] justify-center"
        id="main-grid"
      >
        <Tile
          playerTurn={game_state === gameState.inProgress ? playerTurn : null}
          val={tile_val[0]}
          onClick={
            game_state === gameState.inProgress
              ? () => onTileClick(0)
              : () => {}
          }
          border="bb br "
          id="1"
        />
        <Tile
          playerTurn={game_state === gameState.inProgress ? playerTurn : null}
          onClick={
            game_state === gameState.inProgress
              ? () => onTileClick(1)
              : () => {}
          }
          val={tile_val[1]}
          border="br bl bb "
          id="2"
        />
        <Tile
          playerTurn={game_state === gameState.inProgress ? playerTurn : null}
          onClick={
            game_state === gameState.inProgress
              ? () => onTileClick(2)
              : () => {}
          }
          val={tile_val[2]}
          border="bl bb "
          id="3"
        />
        <Tile
          playerTurn={game_state === gameState.inProgress ? playerTurn : null}
          onClick={
            game_state === gameState.inProgress
              ? () => onTileClick(3)
              : () => {}
          }
          val={tile_val[3]}
          border="bb br bt "
          id="4"
        />
        <Tile
          playerTurn={game_state === gameState.inProgress ? playerTurn : null}
          onClick={
            game_state === gameState.inProgress
              ? () => onTileClick(4)
              : () => {}
          }
          val={tile_val[4]}
          border="border-2 "
          id="5"
        />
        <Tile
          playerTurn={game_state === gameState.inProgress ? playerTurn : null}
          onClick={
            game_state === gameState.inProgress
              ? () => onTileClick(5)
              : () => {}
          }
          val={tile_val[5]}
          border="bb bl bt "
          id="6"
        />
        <Tile
          playerTurn={game_state === gameState.inProgress ? playerTurn : null}
          onClick={
            game_state === gameState.inProgress
              ? () => onTileClick(6)
              : () => {}
          }
          val={tile_val[6]}
          border="br bt "
          id="7"
        />
        <Tile
          playerTurn={game_state === gameState.inProgress ? playerTurn : null}
          onClick={
            game_state === gameState.inProgress
              ? () => onTileClick(7)
              : () => {}
          }
          val={tile_val[7]}
          border="bt br bl "
          id="8"
        />
        <Tile
          playerTurn={playerTurn}
          onClick={() => onTileClick(8)}
          val={tile_val[8]}
          border="bl bt "
          id="9"
        />
        <Strike strike_combo={strike_combo} />
      </div>
    </div>
  );
}

export default Board;
