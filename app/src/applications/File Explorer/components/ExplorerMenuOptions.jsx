import React from 'react';

const ExplorerMenuOptions = ({ name, menuRef, func }) => {
  return (
    <div
      className='context-menu-options px-2 w-44 h-8 rounded-sm select-none hover:bg-blue-400 hover:bg-opacity-10'
      onClick={() => { func(); menuRef.current.style.display = "none" }}
    >
      {name}
    </div>
  )
}

export default ExplorerMenuOptions;
