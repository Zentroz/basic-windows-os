import React, { useEffect } from 'react';
import AppFilesContainer from './AppFilesContainer';
import Windows from '../AppWindow/Windows';
import { AddContent } from '../../utils/fileContents';
import { useDispatch } from 'react-redux';
import { addFile } from '../../features/filesSlice';

const Desktop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const desktop = document.querySelector(".desktop");
    desktop.style.backgroundImage = "url(src/assets/desktopWallpaper.jpg)";
    desktop.style.backgroundSize = "100% 100%";
  }, [])

  return (
    <div
      className='desktop bg-blue-100 w-screen h-[92vh] overflow-hidden -z-10 bg-no-repeat'
    >
      <AppFilesContainer />
      <Windows />
    </div >
  )
};

export default Desktop;