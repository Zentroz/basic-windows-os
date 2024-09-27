import React from 'react';
import { useDispatch } from 'react-redux';
import { removeSession, minimizeWindow } from '../../features/windowSessionSlice'

const NavigationButtons = ({ parentSessionId }) => {
  const dispatch = useDispatch();
  const RemoveSession = () => {
    console.log("Removing...");
    dispatch(removeSession(parentSessionId));
  }
  const MinimizeWindow = () => {
    console.log("Minimizing...");
    dispatch(minimizeWindow(parentSessionId));
  }

  return (
    <div className='navigation-buttons justify-end h-[100%] w-[30%] float-right flex gap-1'>
      {/* Minimize Button */}
      <button
        className='navigation-minimize-button w-[16%] hover:bg-blue-400 hover:bg-opacity-10 text-white'
        onClick={MinimizeWindow}
      >-</button>
      {/* Exit Button */}
      <button
        className='navigation-exit-button w-[16%] hover:bg-red-500 rounded-tr-md text-white'
        onClick={RemoveSession}
      >x</button>
    </div>
  )
};

export default NavigationButtons;