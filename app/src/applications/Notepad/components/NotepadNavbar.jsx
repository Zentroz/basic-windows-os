import React from 'react';
import { useDispatch } from 'react-redux';
import { addFile, editContent } from '../../../features/filesSlice';
import { nanoid } from '@reduxjs/toolkit';

const NotepadNavbar = ({ fileOpen, setFileOpen }) => {
  // const [currentFile, setCurrentFile] = useState(fileOpen);
  // Save files
  const dispatch = useDispatch();
  const SaveFile = () => {
    // Create new file if any file is not open
    const content = document.querySelector(".notepad-textarea").value;
    if (!fileOpen) {
      const id = nanoid();
      dispatch(addFile({
        id,
        name: "untitled",
        extension: "txt",
        directory: "/desktop",
        content
      }));

      setFileOpen(id);
      return
    };
    // Save already open file
    dispatch(editContent({ id: fileOpen, content }));
  }

  return (
    <div className='notepad-navbar w-full h-[7%] bg-gray-400'>
      <button onClick={SaveFile}>Save</button>
    </div>
  )
};

export default NotepadNavbar;