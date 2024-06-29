import React, { useMemo, useState } from 'react'

function HMemo() {
    const[add,setAdd]=useState(0);
    const[minus,setMinus]=useState(100);

const multi= useMemo(function multiply(){
    console.log("Multiplication is going");
    return add*10;
},[add])

  return (
    <div>
      <h3>Use Memo Example</h3>
      {multi}
      <br></br>
      <button onClick={()=>{setAdd(add+1)}}>Add</button>
      <span>{add}</span>
      <br></br>
      <button onClick={()=>{setMinus(minus-1)}}>Substract</button>
      <span>{minus}</span>
    </div>
  )
}

export default HMemo
