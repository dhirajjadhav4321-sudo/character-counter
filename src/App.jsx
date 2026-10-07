import React, { useState } from 'react'

const App = () => {
  const[count,setcount]=useState(0)
  return (
    <div>
<input onChange={(e)=>setcount(e.target.value)}/>
length{count.length}
    </div>
  )
}

export default App