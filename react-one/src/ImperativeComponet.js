import React, { useRef } from "react";

function ImperativeComponent() {
  const divRef = useRef(null);

  const handleClick = () => {
    const newDiv = document.createElement("div");
    newDiv.id=Math.random();
    newDiv.textContent = "New Content";
    divRef.current.appendChild(newDiv);
    console.log(newDiv);
    console.log(Math.random);
  };

  return (
    <div >
      <div id="myfirstdiv" ref={divRef} style={{border:'1px solid red'}}>Existing Content</div>
      <button id="myfirstbutton" onClick={handleClick} style={{border:'1px solid red'}}>Add New Content Imperatively</button>
    </div>
  );
}
export default ImperativeComponent