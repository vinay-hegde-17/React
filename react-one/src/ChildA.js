import React, { createContext, useState } from "react";
import ChildC from "./ChildC";

const data1 = createContext();
const data2 = createContext();
const data3 = createContext();
const data={
  "data1":data1,
  "data2":data2,
  "data3":data3
}
function ChildA() {
  const name = "React";
  const type = "JS Library";
  const [val, setVal] = useState(0);
  
  console.log(`val has been updated to ${val}`);

  return (
    <div>
      Inside a Child A
      <data1.Provider value={name}>
        <data2.Provider value={type}>
          <data3.Provider value={val}>
            <ChildC />
          </data3.Provider>
        </data2.Provider>
      </data1.Provider>
      <button
        onClick = {() => {
          setVal(val + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}
// export { data1, data2, data3 };
export {data};
export default ChildA;
