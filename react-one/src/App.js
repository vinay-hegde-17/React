import { useState } from "react";
import ParentComponent from "./Another";
import "./App.css";

const Search = () => {
  // let searchTerm = '';
  // const handleChange = (event) => {
  // searchTerm = event.target.value;
  // };
  const[searchTerm ,setsearchTerm]=useState('')
  
   const handlefunction =(event)=> {
    setsearchTerm(event.target.value)
  }
  return (
  <div>
  <label htmlFor="search">Search: </label>
  <input id="search" type="text" onChange={handlefunction} />
  <p>
  Searching for <strong>{searchTerm}</strong>.
  </p>
  </div>
  );
  };
  
function App() {
  return (
    <div className="App">
    <Search/>
    <ParentComponent/>
    </div>
  );
}

export default App;
