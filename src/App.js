import React, { useState } from 'react';
import * as math from 'mathjs';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    setText((prevText) => prevText + val);
  };

  const calculateResult = () => {
    try {
      const input = text;
      setResult(math.evaluate(input));
    } catch (error) {
      setResult("Error");
    }
  };

  const resetInput = () => {
    setText("");
    setResult("");
  };

  const buttonColor = "#f2a33c";

  return (
    <div className='App'>
      <div className='calc-wrapper'>
        <Input text={text} result={result} />
        <div className='row'>
          <Button handleClick={() => addToText("7")} symbol={7} />
          <Button handleClick={() => addToText("8")} symbol={8} />
          <Button handleClick={() => addToText("9")} symbol={9} />
          <Button handleClick={() => addToText("/")} symbol={"/"} color={buttonColor} />
        </div>
        <div className='row'>
          <Button handleClick={() => addToText("4")} symbol={4} />
          <Button handleClick={() => addToText("5")} symbol={5} />
          <Button handleClick={() => addToText("6")} symbol={6} />
          <Button handleClick={() => addToText("*")} symbol={"*"} color={buttonColor} />
        </div>
        <div className='row'>
          <Button handleClick={() => addToText("1")} symbol={1} />
          <Button handleClick={() => addToText("2")} symbol={2} />
          <Button handleClick={() => addToText("3")} symbol={3} />
          <Button handleClick={() => addToText("+")} symbol={"+"} color={buttonColor} />
        </div>
        <div className='row'>
          <Button handleClick={() => addToText("0")} symbol={0} />
          <Button handleClick={() => addToText(".")} symbol={"."} />
          <Button handleClick={() => addToText("-")} symbol={"-"} />
          <Button handleClick={resetInput} symbol={"Clear"} color={buttonColor} />
        </div>
        <Button symbol={"Calculate"} color="red" handleClick={calculateResult} />
      </div>
    </div>
  );
};

export default App;
