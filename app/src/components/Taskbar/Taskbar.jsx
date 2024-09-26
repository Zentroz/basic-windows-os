import React from 'react';
import WindowButton from './WindowButton';
import TaskContainer from './TaskContainer';

const Taskbar = () => {

  return (
    <div
      className='taskbar flex gap-2 w-screen h-[8vh] bg-[#191f43] border-t-[1.5px] border-slate-500 py-1 px-2'
    >
      <WindowButton />
      <TaskContainer />
    </div>
  )
};

export default Taskbar;