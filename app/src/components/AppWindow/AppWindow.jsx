import React, { useRef } from 'react';
import NavigationBar from './NavigationBar';

const AppWindow = ({ displayMode, applicationName, windowSessionId, Application }) => {
  const appWindow = useRef();
  return (
    <div
      className={`app-window ${displayMode != 0 ? "absolute" : "hidden"} top-[10vh] left-[18vw] bg-green-100 w-[60vw] h-[65vh] border-2 border-gray-800`}
      id={windowSessionId}
      ref={appWindow}
    >
      <NavigationBar applicationName={applicationName} parentSessionId={windowSessionId} />
      <div className='application w-full h-[92%] bg-red-200'>
        <Application />
      </div>
    </div >
  )
};

export default AppWindow;