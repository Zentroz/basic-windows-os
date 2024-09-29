import React, { useEffect, useRef } from 'react';

const NotificationPopUp = ({ appName, content }) => {
  const ref = useRef();
  useEffect(() => {
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.right = 5 + "px";
  }, [ref])


  return (
    <div
      className='notification-pop-up hidden absolute right-[-260px] top-1 z-40 w-64 bg-zinc-800 transition-[right] duration-1000 rounded-md p-2 select-none backdrop-blur-sm bg-opacity-60'
      ref={ref}
    >
      <h1 className='notification-popup-heading text-xl font-bold'>{appName}</h1>
      <span className='notification-popup-content text-sm break-words whitespace-normal'>{content}</span>
    </div>
  )
};

export default NotificationPopUp;