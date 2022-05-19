import React, { useState } from 'react';
import "./Ticktactoe.css"
const Ticktactoe = () => {
  
const [turn,setTurn]=useState("X");
 
const[cell,setCell]=useState(Array(9).fill(""));
const[winner,setWinner]=useState()  
//check winner condtion 

 const checkForWinner = (squares) =>{
let combinations={
  inrowwise:[
    [0,1,2],
    [3,4,5],
    [6,7,8],
],
indigonal:[
  [0,4,8],
  [2,4,6]
],
indown:[
  [0,3,6],[1,4,7],[2,5,8]
],
};
for(let combo in combinations){
  combinations[combo].forEach((pattern)=>{
    if(
      squares[pattern[0]] === '' ||
      squares[pattern[1]]==="" ||
      squares[pattern[2]]===""
    ){
//do nothing
    }
    else if(
      squares[pattern[0]]===squares[pattern[1]]&&
      squares[pattern[1]]===squares[pattern[2]]
    )
    {
setWinner(squares[pattern[0]])
    }
  });
}
};



//create click function

const handleClick=(num)=>{
// alert(num)
//double click change stop condition
if(cell[num]!==""){
  alert("click on empty cell")
  return;
}
let squares=[...cell]
//TURN CHANGE CONDITIION &show
if(turn==="X"){
  squares[num]="X";
  setTurn("O");
}else{
  squares[num]="O";
  setTurn("X");
};
 checkForWinner(squares)
setCell(squares)
console.log(squares)

  };
  const handleRestart=()=>{
    setWinner(null)
    setCell(Array(9).fill(""))
  }
  
  const Box =({num})=>{
    return (<td onClick={()=>handleClick(num)}>{cell[num]}</td>)
      };

  return (
    <>
<div>
      <h1>! * TIK TAC TOE GAME PLAY * !</h1>
    </div>
    <div style={{border:"3px solid brown",fontWeight:"bolder",fontSize:"182%",margin:"auto",maxWidth:"fit-content"}} >
      Turn :  {turn}
  </div>
  <div className='container'>
<table>
  <tbody>
    <tr>
      <Box num={0}/>
      <Box num={1}/>
      <Box num={2}/>
    </tr>
    <tr>
      <Box num={3}/>
      <Box num={4}/>
      <Box num={5}/>
    </tr>
    <tr>
      <Box num={6}/>
      <Box num={7}/>
      <Box num={8}/>
    </tr>
  </tbody>
</table>
{winner && (
  <>
  <h2 style={{border:"3px solid black"}}>{winner} is Winner</h2>
  <button style={{padding:"10px 120px",backgroundColor:"green",color:"white",fontSize:"120%"}}  onClick={()=>handleRestart()}>play Again</button>
  </>
)}
  </div>
   </>
    
  );
}

export default Ticktactoe;
