import React, { useState } from "react";

function Button(props) {
  return <button onClick={props.onHandle}>Click</button>;
}

function Simple() {
  const [val, setval] = useState(0);
  function onHandleClick() {
    setval(val + 1);
  }
  return (
    <div>
      <Button onHandle={onHandleClick} />
      {val}
    </div>
  );
}

export default Simple;
