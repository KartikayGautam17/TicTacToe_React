import React from "react";
import "./tailwind.css";

import TicTacToe from "./components/tictactoe";

function App() {
  return (
    <>
      <TicTacToe />
      <div className="bg-red-500">Just a normal div</div>
    </>
  );
}

export default App;
