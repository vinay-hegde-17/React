import React, { useState } from "react";

function SyncedInputs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [text, setText] = useState("");

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

function Input({ label, text, onChange, onChangeText }) {
  function handleChange(e) {
    onChangeText(e.target.value);
    onChange();
  }

  return (
    <label>
      {label}
      <input value={text} onChange={handleChange} />
    </label>
  );
}
export default SyncedInputs
