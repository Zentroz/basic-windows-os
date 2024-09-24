import React, { useRef } from 'react';
import NavigationBar from './NavigationBar';

const AppWindow = ({ windowSessionId }) => {
  const appWindow = useRef();
  return (
    <div
      className='app-window absolute bg-green-100 w-[60vw] h-[65vh] border-2 border-gray-800'
      id={windowSessionId}
      ref={appWindow}
    >
      <NavigationBar parentSessionId={windowSessionId} />
    </div>
  )
};

export default AppWindow;