import React from 'react';
import { useSelector } from 'react-redux';
import AppWindow from './AppWindow';

const Windows = () => {
  const windowSessions = useSelector(state => state.windowSessionSlice.sessions);

  return (
    <div>
      {windowSessions.map((window) =>
        <AppWindow key={window["_id"]} applicationName={window["name"]} windowSessionId={window["_id"]} displayMode={window["displayMode"]} />
      )}
    </div>
  )
};

export default Windows;