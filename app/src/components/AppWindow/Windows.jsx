import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AppWindow from './AppWindow';
import Applications from '../../applications/AllApplications'

const Windows = () => {
  const windowSessions = useSelector(state => state.windowSession.sessions);
  // const apps = useSelector(state => state.installedApplication.applications);
  // console.log(windowSessions);

  return (
    <div>
      {windowSessions.map((window) => <AppWindow key={window["_id"]} applicationName={window["name"]} windowSessionId={window["_id"]} displayMode={window["displayMode"]} Application={Applications[window["name"]]} fileOpen={window["openFile"]} />)}
    </div>
  )
};

export default Windows;