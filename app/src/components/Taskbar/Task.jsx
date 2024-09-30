import React from 'react';
import { useDispatch } from 'react-redux';
import { unMinimizeWindow } from '../../features/windowSessionSlice';

const Task = ({ sessionId, taskName, icon }) => {
  const dispatch = useDispatch();
  const unMinimizeApp = () => {
    dispatch(unMinimizeWindow(sessionId));
    // Decrease Z-index of others one focused
    const allWindows = document.querySelectorAll(".app-window");
    // appWindow.current.style.zIndex = "20";
    allWindows.forEach(window => {
      if (window.id == sessionId) {
        window.style.zIndex = "20";
        return;
      }
      window.style.zIndex = "10";
    })
  }
  return (
    <div className='taskbar-task h-full rounded-md p-1 hover:bg-blue-800 hover:bg-opacity-30' onClick={unMinimizeApp}>
      <img className='task-icon h-full' src={icon} alt="" />
    </div>
  )
};

export default Task;