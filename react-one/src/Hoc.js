import React, { useState } from 'react'

function Hover() {
const[hidden,setHidden]=useState(true)
return <div className='container'
onMouseEnter={()=>{setHidden(false)}}
onMouseLeave={()=>{setHidden(true)}}> 
{hidden?null:<h3>Mouse Hovered</h3>}
</div>  
}

function Higher(props) {
   return <div>
    <h4 style={{color:'red'}}>{props.cmpo}</h4>
    <h4 style={{color:'green'}}>{props.cmpo}</h4>
    <h4 style={{color:'blue'}}>{props.cmpo}</h4>
   </div> 
}
function Hoc() {
  return (
    <div>
      <Higher cmpo={<Hover/>}/>
    </div>
  )
}

export default Hoc
