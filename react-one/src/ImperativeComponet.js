import React, { useRef } from "react";

function ImperativeComponent() {
  const divRef = useRef(null);

  const handleClick = () => {
    const newDiv = document.createElement("div");
    newDiv.textContent = "New Content";
    divRef.current.appendChild(newDiv);
    console.log(newDiv);
  };

  return (
    <div>
      <div ref={divRef}>Existing Content</div>
      <button onClick={handleClick}>Add New Content Imperatively</button>
    </div>
  );
}
export default ImperativeComponent