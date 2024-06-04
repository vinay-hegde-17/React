import React from 'react'

function Another(props) {
  return (
    <div>
     <ul>
        {props.list.map((val)=>{
            return(
                <li key={val.author}>
                <h1>{val.author}</h1>
            </li>
            )
        })}
    </ul> 
    </div>
  )
}

export default Another
