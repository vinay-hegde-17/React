import React, { useState } from "react";

function HookObj() {
  const [objValues, setobjValues] = useState({ first_name: "", last_name: "" });
  return (
    <div>
      <input
        type="text"
        value={objValues.first_name}
        onChange={(e) => {
          setobjValues({ ...objValues, first_name: e.target.value });
        }}
      ></input>
      <input
        type="text"
        value={objValues.last_name}
        onChange={(e) => {
          setobjValues({ ...objValues, last_name: e.target.value });
        }}
      ></input>
      {objValues.first_name}
      {objValues.last_name}
    </div>
  );
}

export default HookObj;
