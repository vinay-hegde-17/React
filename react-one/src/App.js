import './App.css';

function App() {
  const welcome={
    greeting:"Welcome! ",
    title:"React"
  }
  return (
    <div className="App">
      <h1>Hello {welcome.greeting} {welcome.title}</h1>
      <label htmlFor='search'>Search:</label>
      <input id='search' type='text'></input>
    </div>
  );
}

export default App;
