import React, {useState} from 'react';
import * as math from 'mathjs';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';

const App = () => {
  const [text, setText] = useState("")
  const [result, setResult] = useState("")

  const addToText = (val) => {
    setText((text) => [...text, val + " "]);
  };
  const calculateResult = () => {
    const input = text.join("");

    setResult(math.evaluate(input));

  }
  const reactInput = () => {
    setText("");
    setResult("")
  }
  const buttonColor ="#f2a33c"


  return ( 
    <div className='App'>
    <div className='calc-wrapper'>
    <Input text={text} result={result}/>
    <div className='row'>
   <Button handleClick={addToText} symbol={7} />
   <Button handleClick={addToText} symbol={8}/>
   <Button handleClick={addToText} symbol={9}/>
   <Button handleClick={addToText} color={buttonColor} symbol={"/"}/>
   </div>
   <div className='row'>
   <Button handleClick={addToText} symbol={4}/>
   <Button handleClick={addToText} symbol={5}/>
   <Button handleClick={addToText} symbol={6}/>
   <Button handleClick={addToText} symbol={"*"} color={buttonColor}/>
   </div>
   <div className='row'>
   <Button handleClick={addToText} symbol={1}/>
   <Button handleClick={addToText} symbol={2}/>
   <Button handleClick={addToText} symbol={3}/>
   <Button handleClick={addToText} symbol={"+"} color={buttonColor}/>
   </div>
   <div className='row'>
   <Button handleClick={addToText} symbol={0}/>
   <Button handleClick={addToText} symbol={"."}/>
   <Button handleClick={calculateResult} symbol={"-"}/>
   <Button handleClick={reactInput} symbol={"Clear"} color={buttonColor}/>
   </div>
   <Button  symbol={"Calculate"} color="red" handleClick={calculateResult}/>
    </div>
    </div>
  );
}

export default App;
