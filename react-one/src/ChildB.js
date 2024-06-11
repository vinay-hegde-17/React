import React, { useContext } from 'react'
import {daydata,placedata} from './App'
import Context from './Context'
function ChildB() {
    const day=useContext(daydata)
    const place=useContext(placedata)
  return (
    <div>
      Inside the Child B {day} {place}
      <Context/>
    </div>
  )
}

export default ChildB
