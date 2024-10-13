import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addFile } from '../../../features/filesSlice';
import { addDirectory } from '../../../features/directorySlice';
import ExplorerMenuOptions from './ExplorerMenuOptions';
import { showNotification } from '../../../utils/windowMethods';
import { isInsideElement } from '../../../utils/utilMethods';

const ExplorerContextMenu = ({ currentDir }) => {
  const dispatch = useDispatch();
  const menuRef = useRef();

  window.addEventListener("mousedown", (e) => {
    if (!isInsideElement(menuRef.current.id, e.clientX, e.clientY)) {
      menuRef.current.style.display = "none";
    }
  })

  const options = {
    "New File": () => {
      if (currentDir == 0) {
        showNotification("System", "Can't create folder or files here.")
        return;
      }
      dispatch(addFile({
        name: "untitled",
        extension: "nd",
        directory: currentDir,
        content: ""
      }));
    },
    "New Folder": () => {
      if (currentDir == 0) {
        showNotification("System", "Can't create folder or files here.")
        return;
      }
      dispatch(addDirectory({ name: "New Folder", parentDir: currentDir }));
    },
    "Cut": () => { },
    "Copy": () => { }
  }

  return (
    <span
      className='explorer-context-menu absolute hidden bg-opacity-80 backdrop-blur-sm z-30 bg-zinc-900 p-1 rounded-sm'
      id='explorer-context-menu'
      ref={menuRef}
    >
      {Object.entries(options).map((opt, i) => <ExplorerMenuOptions key={i} name={opt[0]} func={opt[1]} menuRef={menuRef} />)}
    </span>
  )
}

export default ExplorerContextMenu;