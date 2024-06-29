import React, { useContext } from 'react'
// import { data1,data2,data3 } from './ChildA';
import { data } from './ChildA';

function Context() {
    // const lang=useContext(data1);
    // const langtype=useContext(data2);
    // const countValues=useContext(data3);

    const lang=useContext(data.data1);
    const langtype=useContext(data.data2);
    const countValues=useContext(data.data3);

  return (
    <div>
      Im currently working on {lang} and its a {langtype}
      <h3>Count is {countValues}</h3>
    </div>
  )
}

export default Context
