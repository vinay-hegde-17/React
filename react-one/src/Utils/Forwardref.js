import React, { useRef } from "react";
import ChildRef from "./ChildRef";

function Forwardref() {
  const refEle = useRef(null);
  function handleref() {
    refEle.current.value = "1000";
    refEle.current.style.color = "red";
    refEle.current.focus();
    console.log(refEle.current);
  }
  return (
    <div>
      <h3>Forward Ref Examples</h3>
      <ChildRef ref={refEle} />
      <button onClick={handleref}>Forward-Ref</button>
    </div>
  );
}

export default Forwardref;
