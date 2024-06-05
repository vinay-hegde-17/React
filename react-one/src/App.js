import "./App.css";
import Another from "./Another";
import Simple from "./Simple";

function getData(data) {
  console.log(data);
}
  
function App() {
  return (
    <div className="App">
    <Another getData={getData}/>
    <Simple/>
    </div>
  );
}

export default App;
