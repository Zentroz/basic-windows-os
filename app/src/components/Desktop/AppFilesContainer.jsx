import React from 'react';
import { useSelector } from 'react-redux';
import Application from './Application';

const AppFilesContainer = () => {
  const applications = useSelector(state => state.installedApplication.applications);

  return (
    <div className='app-file-container grid grid-cols-12 items-center justify-items-center mx-auto grid-rows-6 w-screen h-full p-2 gap-1'>
      {applications.map((app, i) =>
        <Application key={i} name={app["name"]} icon={app["icon"]} />
      )}
    </div>
  )
};

export default AppFilesContainer;