import "./App.css";


 const handleFunction=(event)=>{
  console.log(event);
  console.log(event.target.value);
 }

function App() {
  return (
    <div className="App">
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" onChange={handleFunction}></input>
    </div>
  );
}

export default App;
