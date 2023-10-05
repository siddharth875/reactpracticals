import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let subtract = ()=> {if(count>0){
    setCount(count-1)}}
  let add = ()=>{if(count<20)setCount(count+1)}
  return (
    <>
       <h1>Counter</h1>
       <h2>{count}</h2>
      <div className="card">
        <button onClick={add}>
          Increase Count: {count}
        </button>
        <br />
        <br />
        <button onClick={subtract}>
          Decrease Count: {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
