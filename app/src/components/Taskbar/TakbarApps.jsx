import React from 'react';
import { useSelector } from 'react-redux';

const TakbarApps = () => {
  const windowSessions = useSelector(state => state.windowSession.sessions);
  return (
    <div
      className=''
    >

    </div>
  )
};

export default TakbarApps;