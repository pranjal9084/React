import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

 function Myapp(){
  return (
    <h2 >Pranjal Gupta (❁´◡`❁)</h2>
  )
 }

 const anotherElement = (
  <h1>
    Hii Everyone 😊😊😊😊🤣🤣
  </h1>
 )

const reactElement = React.createElement(
  'a',
  {href : "https://google.com", target:"_blank"},
  "clickme to visit google"
)

createRoot(document.getElementById('root')).render(
  <App/>
)
