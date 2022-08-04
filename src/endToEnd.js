import React from "react";
import { useState } from "react";

const WordRelay = () => {
  const [firstWord, setFirstWord] = useState("김은서");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (firstWord[firstWord.length - 1] === value[0]) {
      setResult("딩동댕");
      setFirstWord(value);
      setValue("");
    } else {
      setResult("땡");
      setValue("");
    }
  };
  return (
    <>
      <div>{firstWord}</div>
      <form onSubmit={onSubmitForm}>
        <input
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

export default WordRelay;
