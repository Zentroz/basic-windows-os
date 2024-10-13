import React, { useState, useEffect } from 'react';
import Sidepanel from './components/Sidepanel';
import Folders from './components/Folders';
import FileExplorerNavbar from './components/FileExplorerNavbar';
import { useSelector } from 'react-redux';
import ExplorerContextMenu from './components/ExplorerContextMenu';
import { showContextMenu } from '../../utils/windowMethods';

const FileExplorer = ({ fileOpen }) => {
  const allDir = useSelector(state => state.directory);

  const [currentDir, setCurrentDir] = useState(fileOpen || 0);
  const folders = allDir.filter((dir) => dir["parentDir"] == currentDir);

  const ChangeDir = (name) => {
    setCurrentDir(name);
  }

  const [allCurrentDir, setAllCurrentDir] = useState([]);

  const GetToRoot = (directory) => {
    const currDir = allDir.find((dir) => dir["_id"] == directory);
    if (currDir["parentDir"] == null) return;
    setAllCurrentDir((prevState) => [...prevState, currDir]);
    GetToRoot(currDir["parentDir"]);
  }

  useEffect(() => {
    setAllCurrentDir([])
    GetToRoot(currentDir);
  }, [currentDir])

  // Context Menu
  window.addEventListener("contextmenu", (e) => {
    const classList = e.target.classList;
    if (classList[0] == "file-explorer-side-panel") {
      showContextMenu("explorer-context-menu", e.clientX, e.clientY);
      const menu = document.getElementById("explorer-context-menu");
      console.log("Top:", menu.style.top, "Left:", menu.style.left);
      console.log("Y:", e.clientY, "X:", e.clientX);
    }
  });


  return (
    <div className='application-window w-full h-full bg-[#191919]' >
      <FileExplorerNavbar allCurrentDir={allCurrentDir.reverse()} changeDir={setCurrentDir} />
      <div className='h-[93%] grid grid-cols-4'>
        <Sidepanel changeDir={ChangeDir} />
        <Folders parentDir={currentDir} folders={folders} changeDir={ChangeDir} />
      </div>
      <ExplorerContextMenu currentDir={currentDir} />
    </div>
  )
};

export default FileExplorer;