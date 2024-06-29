import React, { useRef, useState } from 'react'

function Refer() {
    const[refVal,setrefVal]=useState("React");
    const refElement=useRef(null);
    console.log(refElement);

function handleReset(){
    setrefVal('')
    refElement.current.focus()
}

function handleColor() {
    refElement.current.style.color='blue'
}
  return (
    <div>
      <input ref= {refElement} type='text' value={refVal} onChange={(e)=>{setrefVal(e.target.value)}}></input>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleColor}>Color</button>
    </div>
  )
}

export default Refer
