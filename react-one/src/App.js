import './App.css';

function getGreeet(greet) {
  return greet;
}

function App() {

  return (
    <div className="App">
      <h1>Hello {getGreeet('Welcome')}</h1>
      <label htmlFor='search'>Search:</label>
      <input id='search' type='text'></input>
    </div>
  );
}

export default App;
