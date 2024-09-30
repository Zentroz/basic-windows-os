import React, { useRef } from 'react';
import CalculatorButton from './components/CalculatorButton';

const Calculator = ({ id }) => {
  const numsArray = Array.from({ length: 9 }, (_, i) => i + 1);

  const inputRef = useRef();

  const otherNumsandButtons = {
    ".": () => {
      inputRef.current.value += ".";
    },
    "0": () => {
      inputRef.current.value += "0";
    },
    "=": () => {
      inputRef.current.value = eval(inputRef.current.value);
    },
  }
  const signButtons = ["/", "*", "-", "+"];

  return (
    <div className='application-window w-full h-full bg-[#191919] p-2 select-none'>
      <input className='calculator-input-field px-4 focus:outline-none w-full h-[12%] bg-transparent cursor-default text-[3rem] text-right' type="text" readOnly ref={inputRef} />
      <div className='flex h-[88%]'>
        <div className='calculator-number-container p-5 grid grid-rows-4 grid-cols-3 gap-4 w-[60%]'>
          {numsArray.map((num, i) => <CalculatorButton key={i} value={num} inputRef={inputRef} />)}
          {Object.entries(otherNumsandButtons).map((btn, i) =>
            <CalculatorButton key={i} value={btn[0]} func={btn[1]} inputRef={inputRef} />
          )}
        </div>
        <div className='calculator-sign-buttons py-5 gap-4 grid grid-rows-4'>
          {signButtons.map((sign, i) =>
            <CalculatorButton key={i} value={sign} inputRef={inputRef} />
          )}
        </div>
      </div>
    </div>
  )
};

export default Calculator;