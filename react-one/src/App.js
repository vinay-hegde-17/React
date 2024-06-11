import "./App.css";
import Another from "./Another";
import Simple from "./Simple";
import { createContext, useState } from "react";
import ImperativeComponent from "./ImperativeComponet";
import MyComponent from "./MyComponent";
import Lift from "./Lift";
import MyForm from "./MyForm";
import Hoc from "./Hoc";
import Create from "./Create";
import Clock from "./Clock";
import LoginForm from "./LoginForm";
import Modal from "./Modal";
import DataFetchingComponent from "./DataFetchingComponent";
import DocumentTitleUpdater from "./DocumentTitleUpdater";
import EventSubscriptionComponent from "./EventSubscriptionComponent";
import SyncedInputs from "./SyncedInputs";
import ChildA from "./ChildA";
import Reduce from "./Reduce";
import Reduceval from "./Reduceval";

function getData(data) {
  console.log(data);
}

function Counter() {
  const[count,setCount]=useState(0);
  console.log(count);
  return <div>
    <button onClick={()=>{setCount(count+1)}}>Update</button>
    {count}
  </div>
}
function HOC(props){
  return <div>
  <h3 style={{color:'red'}}><props.cmp/></h3>
  <h3 style={{color:'blue'}}><props.cmp/></h3>
  <h3 style={{color:'green'}}><props.cmp/></h3>
  </div>
}
const daydata=createContext();
const placedata=createContext();

function App() {
  const day='Monday'
  const place='Bangalore'
  return (
    <div className="App">
    {/* <Another getData={getData}/>
    <Simple/>
    <h1>HOC</h1>
    <HOC cmp={Counter}/>
    <ImperativeComponent/>
    <MyComponent/>
    <Lift/>
    <MyForm/>
    <Hoc/> */}
     {/* <Create/> */}
    {/* <Clock/> */}
    {/* <Counter/> */}
    {/* <LoginForm/>
    <Modal/>
    <DataFetchingComponent/>
    <DocumentTitleUpdater/>
    <EventSubscriptionComponent/>
    <SyncedInputs/> */}
    <daydata.Provider value={day}>
    <placedata.Provider value={place}>
    <ChildA/>
    </placedata.Provider>
    </daydata.Provider>
    <Reduce/>
    <Reduceval/>
    </div>
  );
}
export {daydata,placedata}
export default App;
