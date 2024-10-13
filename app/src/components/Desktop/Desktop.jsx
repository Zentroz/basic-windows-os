import React, { useEffect } from 'react';
import AppFilesContainer from './AppFilesContainer';
import Windows from '../AppWindow/Windows';
import DesktopMenu from '../ContextMenus/DesktopMenu';
import NotificationPopUp from '../Notifications/NotificationPopUp';
import { showContextMenu } from '../../utils/windowMethods';

const Desktop = () => {

  useEffect(() => {
    const desktop = document.querySelector(".desktop");
    desktop.style.backgroundImage = "url(public/desktopWallpaper.jpg)";
    desktop.style.backgroundSize = "100% 100%";
  }, [])

  // Context Menu
  window.addEventListener("contextmenu", (e) => {
    const classList = e.target.classList;
    if (classList[0] == "app-file-container") {
      showContextMenu("desktop-context-menu", e.clientX, e.clientY);
    }
  });

  return (
    <div
      className='desktop bg-blue-100 w-screen h-[92vh] overflow-hidden -z-10 bg-no-repeat'
    >
      <AppFilesContainer />
      <Windows />
      <DesktopMenu />
      <NotificationPopUp />
    </div >
  )
};

export default Desktop;