import React, { createContext } from 'react'
import ChildB from './ChildB'

const data1=createContext();
const data2=createContext();

function ChildA() {
    const name='React';
    const type='JS Library'
  return (
    <div>
     Inside a Child A 
    
     <data1.Provider value={name}>
        <data2.Provider value={type}>
        <ChildB/>
        </data2.Provider>
     </data1.Provider>
    </div>
  )
}
export{data1,data2}
export default ChildA
