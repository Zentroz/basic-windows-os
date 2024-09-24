import React from 'react';
import AppFilesContainer from './AppFilesContainer';
import Windows from '../AppWindow/Windows';

const Desktop = () => {
  return (
    <div
      className='desktop bg-blue-100 w-screen h-[92vh] overflow-hidden'
    >
      {/* <AppFilesContainer /> */}
      <Windows />
    </div>
  )
};

export default Desktop;