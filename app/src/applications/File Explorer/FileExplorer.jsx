import React, { useState, useEffect } from 'react';
import Sidepanel from './components/Sidepanel';
import Folders from './components/Folders';
import FileExplorerNavbar from './components/FileExplorerNavbar';
import { useSelector, useDispatch } from 'react-redux';
import { addFile } from '../../features/filesSlice';
import { AddContent } from '../../utils/fileContents';

const FileExplorer = ({ currentDirectory }) => {
  const dispatch = useDispatch();
  const allDir = useSelector(state => state.directory);
  const [currentDir, setCurrentDir] = useState(0);
  const folders = allDir.filter((dir) => dir["parentDir"] == currentDir);

  const ChangeDir = (name) => {
    setCurrentDir(name);
  }

  return (
    <div className='application-window w-full h-full bg-[#191919]'>
      <FileExplorerNavbar currentDirectory={"Home"} />
      <div className='h-[93%] grid grid-cols-4'>
        <Sidepanel changeDir={ChangeDir} />
        <Folders parentDir={currentDir} folders={folders} changeDir={ChangeDir} />
      </div>
    </div>
  )
};

export default FileExplorer;