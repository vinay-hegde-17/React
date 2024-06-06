import React from "react";
import useCopyToClipboard from "./useCopyToClipboard";

function MyComponent() {
  const [isCopied, handleCopy] = useCopyToClipboard();

  const handleClick = () => {
    handleCopy("Actual copied text");
  };

  return (
    <div>
      <button onClick={handleClick}>Copy Text</button>
      {isCopied && <span>Text copied to clipboard!</span>}
    </div>
  );
}

export default MyComponent;
