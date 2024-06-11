import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
function Create(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

setInterval(()=> {
    // var toDayDate = new Date();
    // console.log(toDayDate);
    root.render(<Create date={new Date()}/>)} , 1000);
    
export default Create;