import React, { useCallback, useState } from 'react'

function Parent() {
    const[countval,setCountVal]=useState(0);
    const handleClick=useCallback(()=>{
        setCountVal(countval+2)
    },[countval])
    console.log('Inside Parent');
  return (
    <div>
      Count value is: {countval}
      <ChildComp Click={handleClick}/>
    </div>
  )
}

export default Parent

function ChildComp({Click}) {
    console.log('Inside Child');
    return(
        <button onClick={Click}>Count val</button>
    )
}