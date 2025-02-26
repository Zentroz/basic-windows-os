import React, { useEffect, useRef, useState } from 'react';
import NotepadNavbar from './components/NotepadNavbar';
import { useSelector } from 'react-redux';
import { GetContent } from '../../utils/fileContents';

const Notepad = ({ fileOpen }) => {
  const textArea = useRef();
  const [FileOpened, setFileOpened] = useState(fileOpen);

  const file = useSelector(state => state.files).find((file => file["_id"] == FileOpened));

  useEffect(() => {
    if (FileOpened) {
      textArea.current.value = GetContent(file["_id"]);
    }
  }, [FileOpened])

  return (
    <div className='application-window w-full h-full'>
      <NotepadNavbar fileOpen={FileOpened} setFileOpen={setFileOpened} />
      <textarea className='notepad-textarea w-full h-[93%] focus:outline-none p-1 resize-none text-black' name="notepad-textarea" ref={textArea}></textarea>
    </div>
  )
};

export default Notepad;