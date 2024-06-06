import "./App.css";
import Another from "./Another";
import Simple from "./Simple";
import { useState } from "react";
import ImperativeComponent from "./ImperativeComponet";
import Data from "./Data";

function getData(data) {
  console.log(data);
}

function Counter() {
  const[count,setCount]=useState(0);
  return <div>
    <button onClick={()=>{setCount(count+1)}}>Update</button>
    {count}
  </div>
}
function HOC(props){
  return <div>
  <h3 style={{color:'red'}}><props.cmp/></h3>
  </div>
}
function App() {
  return (
    <div className="App">
    <Another getData={getData}/>
    <Simple/>
    <h1>HOC</h1>
    <HOC cmp={Counter}/>
    <ImperativeComponent/>
    <Data/>
    </div>
  );
}

export default App;
