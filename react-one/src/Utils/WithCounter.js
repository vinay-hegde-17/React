import React from 'react'
import { useState } from 'react'

const WithCounter = (OldComponent,incrementBy=1) => {
  return function EnhancedComponent() {
    const[count,setCount]=useState(0)
    return(
        <OldComponent count={count} incrementCount={ () => setCount(count+incrementBy)}/>
    )
  }
}

export default WithCounter
