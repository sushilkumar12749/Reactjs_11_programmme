import React from 'react'
import { useState } from 'react'

const App = () => {
  
  const [num, setNum] = useState(0)
  return (
    <div  className="flex flex-col items-center justify-center  h-screen ">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">YOUR NUMBER IS : {num} </h2>
      <div className="space-x-4">
      <button onClick={()=>setNum(num+1)}className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"> Increment</button>
      <button onClick={()=>setNum(num-1)}  className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"> Decrement</button>
    </div>
    </div>
  )
}

export default App
