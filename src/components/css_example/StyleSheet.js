import React from "react";
import "./style.css";
import Style from "./appstyle.module.css";
import "./appstyle.css";
function StyleSheet(props) {
  let className = props.isValue ? "demo1" : "demo2";
  const heading = {
    color: "orange",
    fontSize: "98px",
  };
  return (
    <div>
      <h1 className="demo1">Heading 1 </h1>
      <h1 className={className}>Heading 2 </h1>
      <h1 className={`${className} demo3 `}>Heading 3 </h1>

      <h1 style={heading}>Inline Css heading</h1>
      <h1 className={Style.success}>Module css headinng</h1>
      <h1 className="error">Module css error headinng</h1>
    </div>
  );
}

export default StyleSheet;
