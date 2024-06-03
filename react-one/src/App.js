import './App.css';

function App() {
  const title='React'
  return (
    <div className="App">
      <h1>Hello {title}</h1>
      <label htmlFor='search'>Search:</label>
      <input id='search' type='text'></input>
    </div>
  );
}

export default App;
