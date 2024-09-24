import React from 'react';
import { useSelector } from 'react-redux';
import AppWindow from './AppWindow';

const Windows = () => {
  const windowSessions = useSelector(state => state.windowSessionSlice.sessions);

  return (
    <div>
      {windowSessions.map((window) =>
        <AppWindow key={window["_id"]} windowSessionId={window["_id"]} />
      )}
    </div>
  )
};

export default Windows;