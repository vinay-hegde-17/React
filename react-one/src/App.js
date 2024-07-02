import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import HookObj from "./HookObj";
import Hooksval from "./Hooksval";
import Map from "./Map";
import btnModule from "./Button.module.css"
import Password from "./Password";

function App() {
  let template='';
  const [pshow,setPshow]=useState(false);
  const [status,setStatus]=useState(false);
  if(pshow){
template=<Cards/>
{/* <>
<button onClick={()=>setPshow(!pshow)}>Hide</button>
<p>Welcome to to WS</p>
</> */}
  }

  else{
    // template=<button onClick={()=>setPshow(!pshow)}>Show</button>
    template=<Cards/>
  }

  let hinfo={
    email: "sample@gmail.com",
    phno : "9897435171"
  }

  let objval={
    email: "sample@gmail.com",
    phno : "9897435171",
    loc : {
      state_loc:"KA",
      country:"India"
    }
  }

  let displayData=()=>{
   alert('Welcome')
  }

  let addData=(a,b)=>{
console.log(a+b);
alert(a+b)
  }
  return (
<>
  <Header hinfo={hinfo} cname="XYZ">
  <h3>Welcome to Header tag</h3>
  </Header>
  <br/> <br/>
  <button onClick={()=>setStatus(!status)}>
    {(status)?'Hide':'Show'}
  </button>
  {
    (status)?<p>Ternary Button working</p>:" "
  }
  <br/>
  <Map/>
  <br/>
  <Card/>
  <Card/>
  <Card/>
  <Footer val={objval}/>
  <br/>
  <br/>
  <Hooksval/>
  <HookObj/>
  <button onClick={displayData}>Alett!!!!!!</button>
  <button onClick={()=>addData(20,30)}>Add</button>
{template}
<br/>
<button className={btnModule.error}>Error</button>
<button className={btnModule.warning}>Warning</button>
<Password/>
</>

  );
}
export default App;

function Card() {
 return (
  <div style={{ display: "flex", flexDirection: "row", gap: "10px", background:"grey" }}>
  <h1 style={{
    background: "lightblue", 
    flex: "1",
    marginBottom: "10px",
    padding: "10px",
    textAlign: "center",
  }}>Card 1</h1>

  <h1 style={{
    background: "lightblue", 
    flex: "1",
    marginBottom: "10px",
    padding: "10px",
    textAlign: "center",
  }}>Card 2</h1>

  <h1 style={{
    background: "lightblue", 
    flex: "1",
    marginBottom: "10px",
    padding: "10px",
    textAlign: "center",
  }}>Card 3</h1>
</div>

 ) 
}

let Cards=()=>{
  return(
    <h1>lorem-text</h1>
  )
}