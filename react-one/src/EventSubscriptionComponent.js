import React, { useEffect } from "react";

function EventSubscriptionComponent() {
  useEffect(() => {
    const handleResize = () => {
      console.log("Window resized");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h1>Resize the window to see console messages</h1>
    </div>
  );
}

export default EventSubscriptionComponent;
