import React from 'react'

function Footer(props) {
    return (
        <div style={{height:"40px",width:"100%",backgroundColor:"red"}}>
          <h2>Welcome to Footer section</h2>
          {props.val.email} | {props.val.loc.state_loc}
        </div>
      )
}

export default Footer
