import React, { useState,useMemo } from 'react'

function Factorial() {
    const[num,setNum]=useState(0);
    const[inc,setInc]=useState(0);
     
    const findFactorial=()=>{
         setInc(i=>i+1)
    }
    console.log(inc);

    const changeFactoial=(e)=>{
         setNum(e.target.value);
    }

function factorialOf(n) {
    console.log("Factorial function called");
    return n<=0?1:n* factorialOf(n-1)
}

const factorial= useMemo(()=>factorialOf(num),[num])
  return (
    <div>
       Factorial of a 
      <input type='number' value={num} onChange={changeFactoial}></input>
      is {factorial}
      <button onClick={findFactorial}>Render</button>
    </div>
  )
}

export default Factorial
