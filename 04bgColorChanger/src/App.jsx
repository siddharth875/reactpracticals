import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
   <div className="h-screen w-full"
   style={{backgroundColor: color}}>
    <div className='fixed flex flex-wrap bottom-12 justify-center inset-x-0'>
      <div className='flex flex-wrap justify-center p-3 bg-white rounded-3xl gap-2'>
        <button className='px-4 py-2 rounded-3xl text-white'
        style={{backgroundColor: "Green"}}
        onClick={()=> setColor("Green")}
        >Green</button>
         <button className='px-4 py-2 rounded-3xl text-white'
        style={{backgroundColor: "Blue"}}
        onClick={()=>setColor("Blue")}>Blue</button>
         <button className='px-4 py-2 rounded-3xl text-white'
        style={{backgroundColor: "Red"}}
        onClick={()=>setColor("Red")}>Red</button>
      </div>
    </div>
   </div>
  )
}

export default App
