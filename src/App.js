import React from "react";
import { useState } from "react";
import "./App.css";

const GuGuDan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setResult("정답");
      setValue("");
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setResult("");
    } else {
      setResult("땡");
      setValue("");
    }
  };

  return (
    <>
      <div>
        {first} 곱하기 {second}는?
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button>입력</button>
      </form>
      <div>{result}</div>
    </>
  );
};

export default GuGuDan;
