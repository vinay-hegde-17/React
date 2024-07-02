import React, { useState } from 'react'

function Password() {
    const[pstatus,setPstatus]=useState(false)
    const handleClick=()=>{
        setPstatus(!pstatus)
    }
  return (
    <div>
      <input type={pstatus?'text':'password'}></input>
      <button onClick={handleClick}>{(pstatus)?'Hide':'Show'}</button>
    </div>
  )
}

export default Password
