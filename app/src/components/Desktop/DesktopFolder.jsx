import React from 'react';
import DesktopFolderIcon from './DesktopFolderIcon';
import { useDispatch } from 'react-redux';
import { addSession } from '../../features/windowSessionSlice'

const DesktopFolder = ({ id, name }) => {
  const dispatch = useDispatch();
  const OpenFolder = () => {
    dispatch(addSession({
      name: "File Explorer",
      displayMode: 1,
      openFile: id
    }))
  }
  return (
    <div
      className='application flex flex-col items-center justify-center w-full h-full rounded-lg hover:bg-blue-400 hover:bg-opacity-20 select-none'
      onDoubleClick={OpenFolder}
    >
      <DesktopFolderIcon size={"md"} />
      <span className='folder-name text-center text-sm'>{name}</span>
    </div>
  )
};

export default DesktopFolder;