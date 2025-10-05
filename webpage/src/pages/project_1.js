import React from "react";
import '../style.css';

import { useState } from 'react';


function Project1() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  function handleClick(i) {

    if(squares[i] || calculateWinner(squares)) return;


    const nextSquares = squares.slice();

    if(xIsNext)
      nextSquares[i] = "X";
    else
      nextSquares[i] = "0";

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function handleRestartClick(){
    for(let i = 0; i < 9; i++){
      setSquares(Array(9).fill(null));
    }
    setXIsNext(true);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }


  return (
      <div style={{ marginLeft:50, float: 'left'}}>
        <h1>
          Project 1 - Tic-Tac-Toe
        </h1>

        <div>
          <p>
            Let's try the <a href="https://react.dev/learn/tutorial-tic-tac-toe"> react tutorial</a>.
          </p>
        </div>

        <div>
          {status}
        </div>

        <div> 
          <Restart onRestartClick={() => handleRestartClick()}/>
        </div>

        <div><p></p></div>

        <div style={{marginLeft: 80}}>
          <div className="board-row">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
          </div>
          <div className="board-row">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
          </div>
          <div className="board-row">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
          </div>
        </div>
        </div>
  );
}

function Square({value, onSquareClick}){

  return (
    <button 
      className="square"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function Restart({onRestartClick}){
  return(

    <button
      class="Restart"
      onClick={onRestartClick}
      > Restart</button>
  );
}

export default Project1;