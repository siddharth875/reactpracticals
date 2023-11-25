import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../Components/Card'

function App() {
  let arr = [
    {
      name: "Siddharth",
      link: "Click to see"
    },
    {
      name: "Sarthak",
      link: "Click Here"
    }
  ]

  return (
    <>
    <h1 className='bg-green-400 text-black inline-block rounded-xl p-4 mb-4'>Tailwind Css</h1>    
    <Card name = {arr[0].name} link= {arr[0].link}/>
    <Card name= {arr[1].name} link= {arr[1].link}/>
    </>
  )
}

export default App
