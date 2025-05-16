import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { BrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    {/* <Header />
    <Home />
    <Footer /> */}
    </BrowserRouter>
    </>
  )
}

export default App
