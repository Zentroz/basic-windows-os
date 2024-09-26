import React, { useState } from 'react';
import Sidepanel from './components/Sidepanel';
import Folders from './components/Folders';
import FileExplorerNavbar from './components/FileExplorerNavbar';
import { useSelector } from 'react-redux';

const FileExplorer = ({ currentDirectory }) => {
  const allDir = useSelector(state => state.directory);
  const [currentDir, setCurrentDir] = useState(0);
  const folders = allDir.filter((dir) => dir["parentDir"] == currentDir);

  const ChangeDir = (name) => {
    setCurrentDir(name);
  }

  return (
    <div className='application-window w-full h-full bg-slate-600'>
      <FileExplorerNavbar currentDirectory={"Home"} />
      <div className='h-[93%] grid grid-cols-4'>
        <Sidepanel />
        <Folders parentDir={currentDir} folders={folders} changeDir={ChangeDir} />
      </div>
    </div>
  )
};

export default FileExplorer;