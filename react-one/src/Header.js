import React from 'react'

function Header({hinfo,cname,children}) {
    // console.log(props.hinfo);
    // let {hinfo,cname}=props
    // console.log(hinfo);
    console.log(hinfo,cname);

  return (
    <div style={{height:"80px",width:"100%",backgroundColor:"yellow"}}>
      <h2>Header section</h2>
      {children}
      {/* <p>contact | {props.hinfo.email} | {props.hinfo.phno}</p> */}
      <p>contact | {hinfo.email} | {hinfo.phno} | {cname}</p>
      {/* <p>contact | {props.hinfo.email} | {props.hinfo.phno}</p> */}


    </div>
  )
}

export default Header
