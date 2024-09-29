import React from 'react';
import FileIcon from './FileIcon';
import { useSelector, useDispatch } from 'react-redux';
import { addSession } from '../../features/windowSessionSlice';
import { showNotification } from '../../utils/windowMethods';

const File = ({ id, name, icon, extension }) => {
  const dispatch = useDispatch();
  const application = useSelector(state => state.installedApplication.applications).find((app) => app["supportedExtensions"].includes(extension));

  const OpenFile = () => {
    if (!application) { showNotification("System", "Unsupported file!"); return; }
    dispatch(addSession({
      name: application["name"],
      displayMode: 1,
      openFile: id
    }))
  }

  return (
    <div
      className='file flex flex-col items-center justify-center w-full h-full rounded-lg hover:bg-blue-400 hover:bg-opacity-20 select-none'
      onDoubleClick={OpenFile}
      id={id}
    >
      <FileIcon icon={icon ? icon : undefined} size={"md"} extension={extension} />
      <span className='file-name text-center text-sm'>{`${name}.${extension}`}</span>
    </div>
  )
};

export default File;