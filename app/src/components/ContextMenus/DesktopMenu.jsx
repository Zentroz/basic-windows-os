import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addDirectory } from '../../features/directorySlice';
import { addFile } from '../../features/filesSlice'
import { isInsideElement } from '../../utils/utilMethods'
import MenuOption from './MenuOption';

const DesktopMenu = () => {
  const menuRef = useRef();
  const dispatch = useDispatch();

  window.addEventListener("mousedown", (e) => {
    if (!isInsideElement(menuRef.current.id, e.clientX, e.clientY)) {
      menuRef.current.style.display = "none";
    }
  })

  const options = {
    "New File": () => {
      dispatch(addFile({
        name: "untitled",
        extension: "nd",
        directory: 4,
        content: ""
      }));
    },
    "New Folder": () => {
      dispatch(addDirectory({ name: "New Folder", parentDir: 4 }));
    },
    "Settings": () => {
    }
  }

  return (
    <span
      className='context-menu absolute top-0 left-0 hidden bg-opacity-80 backdrop-blur-sm z-30 bg-zinc-900 p-1 rounded-sm'
      id='desktop-context-menu'
      ref={menuRef}
    >
      {Object.entries(options).map((opt, i) => <MenuOption key={i} name={opt[0]} func={opt[1]} menuRef={menuRef} />)}
    </span>
  )
};

export default DesktopMenu;