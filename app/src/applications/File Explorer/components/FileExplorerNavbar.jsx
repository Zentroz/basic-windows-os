import React from 'react';

const FileExplorerNavbar = ({ allCurrentDir, changeDir }) => {

  return (
    <div className='file-explorer-navbar w-full h-[7%] bg-slate-500 px-1'>
      <button className='file-explorer-navbar-address-button px-1 rounded-md hover:bg-zinc-700 hover:bg-opacity-40' onClick={() => changeDir(0)}>Home/</button>
      {allCurrentDir.map((dir, i) =>
        <button key={i} className='file-explorer-navbar-address-button px-1 rounded-md hover:bg-zinc-700 hover:bg-opacity-40' onClick={() => changeDir(dir["_id"])}>{dir["name"]}/</button>
      )
      }
    </div >
  )
};

export default FileExplorerNavbar;