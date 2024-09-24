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
    <div className='navigation-buttons float-right flex gap-1'>
      {/* Minimize Button */}
      <button
        className='navigation-minimize-button w-8 h-[100%] bg-red-500 text-white'
        onClick={MinimizeWindow}
      >-</button>
      {/* Exit Button */}
      <button
        className='navigation-exit-button w-8 h-[100%] bg-red-500 text-white'
        onClick={RemoveSession}
      >x</button>
    </div>
  )
};

export default NavigationButtons;