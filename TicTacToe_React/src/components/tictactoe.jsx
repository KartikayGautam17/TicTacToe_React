import Board from "./board";
import GameOver from "./GameOver";
import gameState from "./gameState";

import { useState, useEffect } from "react";

const Player_X = "X";
const Player_Y = "O";

const win_combos = [
  //Rows
  { combo: [0, 1, 2], strikeCombo: "strike-row-t" },
  { combo: [3, 4, 5], strikeCombo: "strike-row-m" },
  { combo: [6, 7, 8], strikeCombo: "strike-row-b" },
  //Columns
  { combo: [0, 3, 6], strikeCombo: "strike-col-l" },
  { combo: [1, 4, 7], strikeCombo: "strike-col-m" },
  { combo: [2, 5, 8], strikeCombo: "strike-col-r" },
  //Diagnols
  { combo: [0, 4, 8], strikeCombo: "strike-dia-l" },
  { combo: [2, 4, 6], strikeCombo: "strike-dia-r" },
];

function WinCheck(tile_values, setStrikeCombo, setGameState, GameState) {
  if (GameState != gameState.inProgress) return;
  for (const { combo, strikeCombo } of win_combos) {
    const t1 = tile_values[combo[0]];
    const t2 = tile_values[combo[1]];
    const t3 = tile_values[combo[2]];
    if (t1 && t2 && t3) {
      if (t1 === t2 && t2 === t3) {
        setStrikeCombo(strikeCombo);
        if (t1 === Player_X) setGameState(gameState.Xwins);
        else setGameState(gameState.Owins);
        return;
      }
    }
  }
  const check_draw = tile_values.every((tile) => tile !== null);
  if (check_draw) setGameState(gameState.draw);
}

function TicTacToe() {
  const [tile_values, set_tile_val] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(Player_X);
  const [strikeCombo, set_strikeCombo] = useState(null);
  const [GameState, setGameState] = useState(gameState.inProgress);
  useEffect(() => {
    WinCheck(tile_values, set_strikeCombo, setGameState, GameState);
  }, [tile_values]);
  const Working = (chad) => {
    return chad;
  };
  const HandleTileClick = (index) => {
    if (tile_values[index]) return;
    const newTiles = [...tile_values];
    newTiles[index] = playerTurn;
    set_tile_val(newTiles);
    setPlayerTurn(() => {
      if (playerTurn === Player_X) return Player_Y;
      else return Player_X;
    });
  };

  return (
    <>
      <div className="font-font_awe w-full h-screen overflow-hidden">
        <div className="text-3xl h-[10vh] mt-1 flex justify-center items-center border-2">
          Tic Tac Toe
        </div>
        <div className="flex flex-col justify-center items-center">
          <Board
            playerTurn={playerTurn}
            tile_val={tile_values}
            onTileClick={Working}
            strike_combo={strikeCombo}
          />
          <GameOver game_State={GameState} />
        </div>
      </div>
    </>
  );
}

export default TicTacToe;
