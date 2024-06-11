import React, { useReducer } from 'react'

const initialstate=0;
const reducer=(state,action)=>{
    switch (action) {
        case 'Increase':
            console.log('increase');
            return state+1;
        case 'Decrease':
            return state-1;
        default:
            return state;
    }
}
function Reduce() {
   const[state,dispatch]=useReducer(reducer,initialstate)
  return (
    <div>
     <button onClick={()=>{dispatch('Increase')}}>+</button> 
     {state}
     <button onClick={()=>{dispatch('Decrease')}}>-</button>
    </div>
  )
}

export default Reduce
