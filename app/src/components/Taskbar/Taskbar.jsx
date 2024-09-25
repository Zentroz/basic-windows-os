import React from 'react';
import WindowButton from './WindowButton';

const Taskbar = () => {
  return (
    <div
      className='taskbar w-screen h-[8vh] bg-blue-400 py-1 px-2'
    >
      <WindowButton />
    </div>
  )
};

export default Taskbar;