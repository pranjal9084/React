import { useCallback, useEffect, useState, useRef } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "1234567890"
    if(charAllowed) str += "~!@#$%^&*-_+=[]{}`"

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length +1);
      pass += str.charAt(char);
      
    }
    setPassword(pass)
  } , [length, numberAllowed, charAllowed, setPassword])

  // const copyPasswordToClipboard = () => {
  //   if (passwordRef.current) {
  //     passwordRef.current.select();
  //     document.execCommand("copy");
  //     // alert("Password copied to clipboard!");
  //   }

  // }

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999)
    window.navigator.clipboard.writeText(password)

  }, [password])

useEffect(() => {
  passwordGenerator()
}, [length, charAllowed, numberAllowed, passwordGenerator])

  return (
    <>
      {/* <h1 className='flex flex-wrap text-4xl text-center justify-center bg-center mt-5 rounded-4xl inset-0 p-2' style={{backgroundColor:"red"}}>Password generator</h1> */}
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="text-black flex shadow rounded-lg overflow-hidden bg-white mb-4">
      <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          
        />
        <button className="outline-none bg-blue-500 text-white px-3 py-0.5  hover:bg-blue-800 hover:text-xl"
          onClick={copyPasswordToClipboard}        
        >Copy</button>
        </div>
        <div className='flex text-sm gap-x-3'>
      <div className='flex items-center gap-x-3'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setlength(e.target.value)}}
          />
          <label>Length: {length}</label>

          <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>

      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
          </div>
      </div>
      </div>
      
    </>
  )
}

export default App
