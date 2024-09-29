import React from 'react';
import DesktopFolderIcon from './DesktopFolderIcon';

const DesktopFolder = ({ name }) => {
  return (
    <div
      className='application flex flex-col items-center justify-center w-full h-full rounded-lg hover:bg-blue-400 hover:bg-opacity-20 select-none'
    // onDoubleClick={RunApplication}
    >
      <DesktopFolderIcon size={"md"} />
      <span className='folder-name text-center text-sm'>{name}</span>
    </div>
  )
};

export default DesktopFolder;