import React, { useState } from "react";
import "./App.css";


function Menu() {
     const [menustatus, setMenustatus] = useState(false);

  return (
    <div className="App">  
      <button
        className="micon"
        onClick={() => {
          setMenustatus(!menustatus);
        }}
      >
        {menustatus ? <span>&times;</span> : <span>&#9776;</span>}
      </button>

      <div className={`menu ${menustatus ? "activeMenu" : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Course</li>
          <li>Gallery</li>
          <li>Course</li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
