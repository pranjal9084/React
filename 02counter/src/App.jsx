import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)
  // let counter= 14

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    }
  }
const decreaseVal = () => {
  if(counter > 0){
    setCounter(counter - 1)
  }
}
  return (
    <>
      <h1>CHAI AUR CODE</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>
        Add counter {counter}
      </button>

      <button onClick={decreaseVal}>
        Decrease value : {counter}
      </button>
    </>
  )
}

export default App
