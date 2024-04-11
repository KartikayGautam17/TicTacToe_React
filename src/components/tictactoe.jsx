import Board from "./Board";

function TicTacToe() {
  return (
    <>
      <div className="font-font_awe w-full h-screen">
        <div className="text-3xl h-[10vh] mt-1 flex justify-center items-center border-2">
          Tic Tac Toe
        </div>
        <Board />
      </div>
    </>
  );
}

export default TicTacToe;
