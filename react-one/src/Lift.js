import React, { useState } from 'react'

function InputComponet({sharedState,setSharedState}) {
   return <div>
    <input type='text' value={sharedState} onChange={(e)=>(setSharedState(e.target.value))}></input>
   </div> 
}

function DisplayComponet({sharedState}) {
  return <p>{sharedState} </p>
}
function Lift() {
    const[sharedState, setSharedState]=useState('')
  return (
    <div>
      <InputComponet sharedState={sharedState} setSharedState={setSharedState}/>
      <DisplayComponet sharedState={sharedState}/>
    </div>
  )
}

export default Lift
