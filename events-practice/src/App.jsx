import { useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState(0)
  const [name, setName] = useState("World")
  const [color, setColor] = useState("")

  const clickHandler = (event) => {
    alert("Hey, you clicked me! :D")
  }
  const addHandler = (event) => {
    event.preventDefault;

    let tempNum = number + 1
    setNumber(tempNum)
  }

  const subtractHandler = (event) => {
        event.preventDefault;
    
    let tempNum = number - 1
    setNumber(tempNum)
  }

  const restartHandler = (event) => {
    event.preventDefault;

let tempNum = 0
setNumber(tempNum)
}

  return (
    <>
      <div className="App">
        <div>

        <h1 style={ {color: color}}>Hello {name}!</h1>
        <label>Name: </label>
        <input type="text" value={name} onChange={ e => setName(e.target.value)}/>
        <label>Color: </label>
        <input type="text" value={color} onChange={ e => setColor(e.target.value)}/>
        </div>
        <button onClick={clickHandler}>Click me!</button>
        <h4>{number}</h4>
        <button onClick={addHandler}>Add me!</button>
        <button onClick={subtractHandler}>Subtract me!</button>
        <button onClick={restartHandler}>Restart!</button>
      </div>
    </>
  )
}

export default App
