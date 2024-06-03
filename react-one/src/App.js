import './App.css';

const list = [
  {
  title: 'React',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
  },
  {
  title: 'Redux',
  url: 'https://redux.js.org/',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,
  },
  ];
function App() {

  return (
    <div className="App">
      <h1>My hacker story</h1>
      <label htmlFor='search'>Search:</label>
      <input id='search' type='text'></input>
      <ul>
        {
          list.map(function (item) {
            return <ul key={item.objectID}>
              {item.title}
              <br></br>
              {item.author}
            </ul>
          })
        }
      </ul>
    </div>
  );
}

export default App;
