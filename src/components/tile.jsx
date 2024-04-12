import "./tile_lines.css";

function Tile(props) {
  return (
    <div
      after={props.val ? "" : props.playerTurn}
      onClick={() => props.onClick}
      className={
        props.border +
        "text-3xl flex justify-center items-center border-blue-500 border-solid cursor-pointer duration-0 hover:opacity-" +
        (props.val ? 0 : 40) +
        " hover:after:content-[attr(after)]"
      }
    >
      {props.val}
    </div>
  );
}

export default Tile;
