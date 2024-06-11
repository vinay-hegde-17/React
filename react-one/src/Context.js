import React, { useContext } from 'react'
import { data1,data2 } from './ChildA';

function Context() {
    const lang=useContext(data1);
    const langtype=useContext(data2);

  return (
    <div>
      Im currently working on {lang} and its a {langtype}
    </div>
  )
}

export default Context
