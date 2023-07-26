import React, { useState } from "react";

function HookObject() {
  const [fullName, setFullName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      HookObject
      <div>
        <input
          type="text"
          value={fullName.firstName}
          onChange={(e) =>
            setFullName({ ...fullName, firstName: e.target.value })
          }
        />

        <input
          type="text"
          value={fullName.lastName}
          onChange={(e) =>
            setFullName({ ...fullName, lastName: e.target.value })
          }
        />

        <h1>First Name: {fullName.firstName}</h1>
        <h1>Last Name: {fullName.lastName}</h1>
      </div>
    </div>
  );
}

export default HookObject;
