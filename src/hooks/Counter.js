import React, { useEffect, useState } from 'react'

export const Counter = () => {
    const [count, setcount] = useState(0)
    const getData = ()=>{
        console.log("getData called")
    }
    useEffect(() => {
      
        getData()
      
    }, [count])
    
  return (
    <div>
        <h1>Counter
            {
                count
            }
            <button onClick={() => setcount(count + 1)}>+</button>
        </h1>
    </div>
  )
}
