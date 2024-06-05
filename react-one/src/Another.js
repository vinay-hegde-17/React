import React, { useState } from 'react'

function Another(props) {
  const[name, setName]=useState();
  function handleSubmit(event){
    event.preventDefault();
    props.getData(name);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
        <button>Submit</button>
      </form>
    </div>
  ) 
}

export default Another
