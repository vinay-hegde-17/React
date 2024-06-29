import React from "react";

const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

const IconButton = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

const Apply = () => (
  <div>
    <Button onClick={() => console.log("Button clicked")}>Click Me</Button>
    <IconButton onClick={() => console.log("Icon button clicked")}>
      Edit
    </IconButton>
  </div>
);

export default Apply;
