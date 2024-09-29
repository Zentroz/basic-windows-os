import React, { useEffect } from 'react';
import AppFilesContainer from './AppFilesContainer';
import Windows from '../AppWindow/Windows';
import DesktopMenu from '../ContextMenus/DesktopMenu';
import NotificationPopUp from '../Notifications/NotificationPopUp';

const Desktop = () => {

  useEffect(() => {
    const desktop = document.querySelector(".desktop");
    desktop.style.backgroundImage = "url(src/assets/desktopWallpaper.jpg)";
    desktop.style.backgroundSize = "100% 100%";
  }, [])

  // Context Menu
  window.addEventListener("contextmenu", (e) => {
    const classList = e.target.classList;
    if (classList[0] == "app-file-container") {
      const menu = document.getElementById("desktop-context-menu");
      menu.style.left = e.clientX + "px";
      menu.style.top = e.clientY + "px";
      menu.style.display = "inline";
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