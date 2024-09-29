import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSession } from '../../features/windowSessionSlice';
import ApplicationIcon from './ApplicationIcon';

const Application = ({ name, icon }) => {
  const dispatch = useDispatch();

  const RunApplication = () => {
    dispatch(addSession({
      name,
      displayMode: 1
    }))
  }

  return (
    <div
      className='application flex flex-col items-center justify-center w-full h-full rounded-lg hover:bg-blue-400 hover:bg-opacity-20 select-none'
      onDoubleClick={RunApplication}
    >
      <ApplicationIcon icon={icon} size={"md"} />
      <span className='text-center'>{name}</span>
    </div>
  )
};

export default Application;