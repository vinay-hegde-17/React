/* eslint-disable no-unreachable */
import React from "react";

function Map() {
  let my_name = "lorem";
  let info = {
    name: "qwerty",
    lang: "JS",
    lib: "React",
  };
  let arr = [2, 4, 6, 8];
  let status = true;

  return (
  <div>
    <h3>The name is {my_name}</h3>
    <div>The object values are {info.name} , {info.lang} , {info.lib}</div>
    <div>{arr.map((a,index)=>
    <div key={index}>
      {a}
    </div>
    )}</div>
    {(status?<h3>Data is visible</h3>:"")}
    {10+20}
  </div>
  )
}

export default Map;
