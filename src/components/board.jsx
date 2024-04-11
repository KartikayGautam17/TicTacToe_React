import Tile from "./Tile";
import Strike from "./Strike";

function Board() {
  return (
    <div className="w-3/4 h-[50vh] border-2 mx-auto mt-16 flex justify-center items-center">
      <div
        className="w-4/5 h-4/5 grid grid-rows-[repeat(3,1fr)]  grid-cols-[repeat(3,1fr)] justify-center border-2"
        id="main-grid"
      >
        <Tile border="bb br " id="1" />
        <Tile border="br bl bb " id="2" />
        <Tile border="bl bb " id="3" />
        <Tile border="bb br bt " id="4" />
        <Tile border="border-2 " id="5" />
        <Tile border="bb bl bt " id="6" />
        <Tile border="br bt " id="7" />
        <Tile border="bt br bl " id="8" />
        <Tile border="bl bt " id="9" />
      </div>
    </div>
  );
}

export default Board;
