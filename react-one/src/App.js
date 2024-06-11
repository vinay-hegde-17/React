import "./App.css";
import Another from "./Another";
import Simple from "./Simple";
import { useState } from "react";
import ImperativeComponent from "./ImperativeComponet";
import MyComponent from "./MyComponent";
import Lift from "./Lift";
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
    <MyComponent/>
    <Lift/>
    <Data/>
    <daydata.Provider value={day}>
    <placedata.Provider value={place}>
    <ChildA/>
    </placedata.Provider>
    </daydata.Provider>
    </div>
  );
}

export default App;
