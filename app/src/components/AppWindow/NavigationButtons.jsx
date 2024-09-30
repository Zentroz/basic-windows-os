import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { removeSession, minimizeWindow } from '../../features/windowSessionSlice'

const NavigationButtons = ({ parentSessionId, setMaximized }) => {
  const dispatch = useDispatch();
  const minimizeButton = useRef();
  const maximizeButton = useRef();
  const exitButton = useRef();

  const RemoveSession = () => {
    console.log("Removing...");
    dispatch(removeSession(parentSessionId));
  }
  const MaximizeWindow = () => {
    console.log("Maximizing...");
    const appWindow = document.getElementById(parentSessionId);
    setMaximized(prevValue => {
      if (!prevValue == true) {
        appWindow.style.top = "0px";
        appWindow.style.left = "0px";
        appWindow.style.borderRadius = "0px";
        appWindow.style.width = "100vw";
        appWindow.style.height = "92vh";
        exitButton.current.style.borderTopRightRadius = "0px"
        return (!prevValue);
      }
      appWindow.style.top = "10vh";
      appWindow.style.left = "18vw";
      appWindow.style.borderRadius = "0.375rem";
      appWindow.style.width = "60vw";
      appWindow.style.height = "65vh";
      exitButton.current.style.borderTopRightRadius = "0.375rem"
      return (!prevValue);
    });
  }
  const MinimizeWindow = () => {
    console.log("Minimizing...");
    dispatch(minimizeWindow(parentSessionId));
  }

  return (
    <div className='navigation-buttons justify-end h-[100%] w-[30%] max-w-64 float-right flex gap-1'>
      {/* Minimize Button */}
      <button
        className='navigation-button w-[16%] hover:bg-blue-400 hover:bg-opacity-10 text-white'
        id='navigation-minimize-button'
        onClick={MinimizeWindow}
        ref={minimizeButton}
      >-</button>
      {/* Maximize Button */}
      <button
        className='navigation-button w-[16%] hover:bg-blue-400 hover:bg-opacity-10 text-white'
        id='navigation-minimize-button'
        onClick={MaximizeWindow}
        ref={maximizeButton}
      >O</button>
      {/* Exit Button */}
      <button
        className='navigation-button w-[16%] hover:bg-red-500 rounded-tr-md text-white'
        onClick={RemoveSession}
        id='navigation-exit-button'
        ref={exitButton}
      >x</button>
    </div >
  )
};

export default NavigationButtons;