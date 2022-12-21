import React, { useState } from "react";
import "./style.scss";

function InputWIthSearch() {
  const [val, setVal] = useState("");
  const data = ["Java", "JavaScript", "React js", "Python", "C", "C++"];
  return (
    <div className="main">
      <input list="data" onChange={(e) => setVal(e.target.value)} placeholder="Search" />
      <datalist id="data">
        {data.map((op) => (
          <option>{op}</option>
        ))}
      </datalist>

      <h1>{val}</h1>
    </div>
  );
}
export default InputWIthSearch;
