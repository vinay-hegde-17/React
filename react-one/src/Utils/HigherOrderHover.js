import React from 'react'
import WithCounter from './WithCounter'

function HigherOrderHover(props) {
    const{count,incrementCount} =props
  return (
    <div>
       <button onMouseOver={incrementCount}>Click me</button>
       <h3>Count is {count}</h3>
    </div>
  )
}

export default WithCounter(HigherOrderHover,10)
