import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gray-700 h-screen flex flex-col items-center justify-center'>
        <div>
          <button  className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-xl transition duration-300 ease-in-out'>
            click here
          </button>
        </div>
        <h1>pranjal gupta</h1>
      </div>
    </>
  )
}

export default App
