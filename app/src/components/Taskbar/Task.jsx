import React from 'react';
import { useDispatch } from 'react-redux';
import { unMinimizeWindow } from '../../features/windowSessionSlice';

const Task = ({ sessionId, taskName, icon }) => {
  const dispatch = useDispatch();
  const unMinimizeApp = () => {
    dispatch(unMinimizeWindow(sessionId));
  }
  return (
    <div className='taskbar-task h-full rounded-md p-1 hover:bg-blue-800 hover:bg-opacity-30' onClick={unMinimizeApp}>
      <img className='task-icon h-full' src={icon} alt="" />
    </div>
  )
};

export default Task;