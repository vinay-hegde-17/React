import React, { useEffect, useState } from 'react'

function Hooksval() {
    const[valupdate,setValupdate]=useState("React")

    useEffect(()=>{
    document.title=`Current value is ${valupdate}`
    console.log(`Title value is ${document.title}`);
    },[valupdate])
  return (
    <div>
      <button onClick={()=>{setValupdate(prevVal => (prevVal === "React" ? "JavaScript Library" : "React"))}}>Update</button>
      <br/>
      This is {valupdate}
    </div>
  )
}

export default Hooksval
