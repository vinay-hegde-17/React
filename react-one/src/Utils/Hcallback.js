import React, { useCallback, useState } from 'react'
import CallbackChild from './CallbackChild';

function Hcallback() {
    const [count,setCount]=useState(0);
    const [val,setVal]=useState(0);
    const Learning=useCallback(()=>{
      console.log('Inside the learning');
    },[val])
  return (
    <div>
      <h3>Use CallBack examples</h3>
      <CallbackChild learn={Learning} value={val}/>
      <h2>{count}</h2>
      <button onClick={()=>{setCount(count+1)}}>ADD</button>
      <br></br>
      <h2>{val}</h2>
      <button onClick={()=>{setVal(val+1)}}>Value Update</button>
    </div>
  )
}

export default Hcallback
