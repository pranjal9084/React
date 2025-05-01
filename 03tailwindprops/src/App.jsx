import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card  from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const obj = {
    name: "Science of Chemistry",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, adipisci.",
    image: "https://images.unsplash.com/photo-1612839291950-4f2a1b3c5d7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
  }

  
  return (
    <>

    <h1 className="bg-green-500 text-black text-4xl font-extralight p-5 rounded-2xl mb-6">
      Hello world!
    </h1>
     {/* i want to create something good */}
     <Card  userName = "Pranjal" btnText = "Click here"/>
     <><br></br></>
      <Card  userName = "User Name" />
     
    </>
  )
}

export default App
