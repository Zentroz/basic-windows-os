import React from 'react';

const FileExplorerNavbar = ({ currentDirectory }) => {

  return (
    <div className='file-explorer-navbar w-full h-[7%] bg-slate-500 px-1'>
      <span>{currentDirectory}</span>
    </div>
  )
};

export default FileExplorerNavbar;