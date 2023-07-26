import React from "react";
import { Header } from "./Header";
import Header2 from "./Header2";

function TestHeader() {
  return (
    <div>
      <Header
        firstValue={1}
        secondValue="Hello World"
        value={{ name: "sudeep", age: 21 }}
      />

      <Header2
        firstValue={1}
        secondValue="Hello World"
        value={{ name: "sudeep", age: 21 }}
      />
    </div>
  );
}

export default TestHeader;
