import React from 'react';
import WindowIcon from './Icons/WindowIcon';

const WindowButton = () => {
  return (
    <button
      className='window-button hover:bg-gray-400 hover:bg-opacity-60 rounded-md'
    >
      <WindowIcon />
    </button>
  )
};

export default WindowButton;