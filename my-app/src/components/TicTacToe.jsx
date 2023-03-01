import React, { useState } from 'react'

function TicTacToe() {
  const [cells,setCells]=useState(Array(9).fill(''))
  const [turn,setTurn]=useState("x")
  const [set,setSet]=useState([])
  const [winner,setWinner]=useState()
  let array = [...cells];

  const Cells =({num})=>{
    return <td onClick={()=>{handleClick(num)}}>{cells[num]}</td>
  }


  const checkWinner = (array) => {
    let ways = {
      horizontal: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      vertical: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
    for (let way in ways) {
      ways[way].forEach((pattern) => {
        if (
          array[pattern[0]] === "" ||
          array[pattern[1]] === "" ||
          array[pattern[2]] === ""
        ) {
          // nothing to do
        } else if (
          array[pattern[0]] === array[pattern[1]] &&
          array[pattern[1]] === array[pattern[2]]
        ) {
          setWinner(array[pattern[0]]);
          return
        } 
      });
    }
  };
  const handleClick =(num)=>{
    if(cells[num] !== ''){
      alert("Clicked twice")
      return;
    }
    if (turn === "x"){
      array[num] ='x'
      setTurn("o")}
    else {setTurn("x")
          array[num] ='o'
  } 
    setCells([...array])
  }

  checkWinner(array) 
  return (
    <div className='main-con'>
          <div className="turn">
            <h1>Tic Tac Toe</h1>
            <br />
              <h3>turn:{turn}</h3>
              </div>
    <div className='conteiner'>
        <table>
          <tbody>
            <tr>
              <Cells num={0} />
              <Cells num={1} />
              <Cells num={2} />
            </tr>
            <tr>
              <Cells num={3} />
              <Cells num={4} />
              <Cells num={5} />
            </tr>
            <tr>
              <Cells num={6} />
              <Cells num={7} />
              <Cells num={8} />
            </tr>
          </tbody>
        </table>
      {
        winner && (
          <>
            <p>{winner} is winner.</p>
          </>
        )
      }
    </div>
    </div>
  )
}

export default TicTacToe    