import WithCounter from "./WithCounter"

function HigherOrder(props) {  
    const{count,incrementCount} = props;  
  return (
    <div>
      <button onClick={incrementCount}>Click me</button>
      <h3>Count is {count}</h3>
    </div>
  )
}

export default WithCounter(HigherOrder,5)
