import React, { useEffect, useRef } from 'react';
import NavigationBar from './NavigationBar';

const AppWindow = ({ displayMode, applicationName, windowSessionId, Application, fileOpen, width, heigth, resizeable }) => {
  const appWindow = useRef();

  const FocusWindow = (e) => {
    if (e.button == 0) {
      // Decrease Z-index of others one focused
      const allWindows = document.querySelectorAll(".app-window");
      // appWindow.current.style.zIndex = "20";
      allWindows.forEach(window => {
        if (window == appWindow.current) {
          window.style.zIndex = "20";
          return;
        }
        window.style.zIndex = "10";
      });
    }
  }

  return (
    <div
      className={`app-window ${displayMode != 0 ? "absolute" : "hidden"} top-[10vh] left-[18vw] w-[60vw] h-[65vh] rounded-t-md bg-green-100 border-2 border-gray-800`}
      id={windowSessionId}
      onMouseDown={FocusWindow}
      ref={appWindow}
    >
      <div className='flex flex-col w-full h-full'>
        <NavigationBar applicationName={applicationName} parentSessionId={windowSessionId} resizeable={resizeable} />
        <div className='application w-full flex-1 bg-red-200'>
          <Application fileOpen={fileOpen} id={windowSessionId} />
        </div>
      </div>
    </div >
  )
};

export default AppWindow;