import "./tile_lines.css";

function Tile(props) {
  return (
    <div
      className={
        props.border +
        "flex justify-center items-center border-solid border-yellow-400 hover:bg-yellow-400 cursor-pointer duration-300 "
      }
    >
      Tiles
    </div>
  );
}

export default Tile;
