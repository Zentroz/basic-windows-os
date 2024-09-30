import React, { useRef } from 'react';

const CalculatorButton = ({ value, func, inputRef }) => {
  const buttonRef = useRef();
  const OnClick = () => {
    inputRef.current.value += buttonRef.current.value;
  }
  return (
    <input className='calculator-buttons bg-orange-600 w-14 h-14 rounded-3xl cursor-pointer text-center' type="text" value={value} readOnly onClick={func || OnClick} ref={buttonRef} />
  )
};

export default CalculatorButton;