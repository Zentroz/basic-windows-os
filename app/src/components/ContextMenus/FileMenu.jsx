import React, { useRef } from 'react';
import MenuOption from './MenuOption'
import { isInsideElement } from '../../utils/utilMethods'
import { useDispatch, useSelector } from 'react-redux';
import { addSession } from '../../features/windowSessionSlice';
import { showNotification } from '../../utils/windowMethods';

const FileMenu = ({ fileId }) => {
  // Hooks
  const menuRef = useRef();
  const dispatch = useDispatch();

  // Retrieving file and all application from store
  const file = useSelector(state => state.files).find((file) => file["_id"] == fileId);
  const extension = file?.extension || "";
  const allApplication = useSelector(state => state.installedApplication.applications);

  // Hide context menu when clicked outside
  window.addEventListener("mousedown", (e) => {
    if (!isInsideElement(menuRef.current.id, e.clientX, e.clientY)) {
      menuRef.current.style.display = "none";
    }
  });

  // Options to show in menu
  const options = {
    "Open": () => {
      // Check supported application
      const application = allApplication.find((app) => app["supportedExtensions"].includes(extension));
      // Show notification if doesn't support application
      if (!application) { showNotification("System", "Unsupported file!"); return; }
      // Open application if supported
      dispatch(addSession({
        name: application["name"],
        displayMode: 1,
        openFile: fileId
      }))
    }
  }

  return (
    <span
      className='context-menu absolute top-0 left-0 hidden bg-opacity-80 backdrop-blur-sm z-30 bg-zinc-900 p-1 rounded-sm'
      id='file-context-menu'
      ref={menuRef}
    >
      {Object.entries(options).map((opt, i) => <MenuOption key={i} name={opt[0]} func={opt[1]} menuRef={menuRef} />)}
    </span>
  );
};

export default FileMenu;