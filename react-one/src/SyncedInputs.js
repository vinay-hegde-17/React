import React, { useState } from "react";

function SyncedInputs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [text, setText] = useState("");
console.log(activeIndex);
console.log(text);
  return (
    <>
      <Input
        label="First input"
        isActive={activeIndex === 0}
        text={text}
        onChange={() => setActiveIndex(0)}
        onChangeText={setText}
      />
      <Input
        label="Second input"
        isActive={activeIndex === 1}
        text={text}
        onChange={() => setActiveIndex(1)}
        onChangeText={setText}
      />
    </>
  );
}

function Input(props) {
  function handleChange(e) {
    props.onChangeText(e.target.value);
    props.onChange();
  }

  return (
    <label>
      {props.label}
      <input value={props.text} onChange={handleChange} />
    </label>
  );
}
export default SyncedInputs
