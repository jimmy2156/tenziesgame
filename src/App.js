
import { useEffect, useState } from 'react';
import './App.css';
import Main from './components/Main';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti'

function App() {
  let [dice, setdice] = useState(allNewDice())
  let [tenzies, settenzies] = useState(false)
  function allNewDice() {
   const newDice = []
   for (let i = 0; i < 10; i++) {
    newDice.push({value: Math.ceil(Math.random()*6),
    isHeld: false,
    id: nanoid()
  })
   }
   return newDice
  }
  function holdDice(id) {
         setdice(olddice => olddice.map(die => {
          return die.id === id ? {...die, isHeld: !die.isHeld} : die
         }))
  }

  const diceRoll = dice.map((die) => <Main value={die.value} isHeld={die.isHeld} id={die.id} holdDice={() => holdDice(die.id)}/>)
  function diceRolling() { 
    if (!tenzies) {
      
         setdice(olddice => olddice.map(die => {
      return (die.isHeld ? die : {
         value: Math.ceil(Math.random()*6),
         isHeld: false,
         id: nanoid()
      }
     ) }))}
     else {
      settenzies(false)
      setdice(allNewDice())
     }
  }
  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstHeld = dice[0].value
    const sameValue = dice.every(die => die.value === firstHeld)
    if (allHeld && sameValue) {
      settenzies(true) }
    
  }, [dice])
  return (
    <div className="App">
      <div className="app2">
      <div className="dice">
{ tenzies &&  <Confetti />}
      {diceRoll} 
      
      
   
     <div className='button11'><button className="button" onClick={() => diceRolling()}>{ tenzies ? "Reset New Game" : "Roll the Dice" }</button></div>
     </div></div></div>
  );
}

export default App;
