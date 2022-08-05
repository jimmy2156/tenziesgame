
import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import { nanoid } from 'nanoid';

function App() {
  let [dice, setdice] = useState(olddice => olddice.map(die => {
    return die.isHeld ? die : {
      {value: Math.ceil(Math.random()*6),
      isHeld: true,
      id: nanoid()
    }}
  }))
  function allNewDice() {
   const newDice = []
   for (let i = 0; i < 10; i++) {
    newDice.push({value: Math.ceil(Math.random()*6),
    isHeld: true,
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

  const diceRoll = dice.map((die) => <Main key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />)
  function diceRolling() {
    setdice(allNewDice())
  }
  return (
    <div className="App">
      <div className="app2">
      <div className="dice">
      {diceRoll}
      <button className="button" onClick={diceRolling}>Roll the dice</button>
    </div></div> </div>
  );
}

export default App;
