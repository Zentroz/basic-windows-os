import React, { useEffect, useRef } from 'react';

const ApplicationIcon = ({ icon, size }) => {
  const iconRef = useRef();
  const sizes = {
    "s": 1.5,
    "md": 2.5,
    "lg": 4
  }

  useEffect(() => {
    const w = `${sizes[size]}rem`;
    const h = `${sizes[size]}rem`;
    iconRef.current.style.width = w;
    iconRef.current.style.height = h;
  }, [])


  return (
    <img className={`application-icons`} src={icon} alt="notepad-icon" ref={iconRef} />
  )
};

export default ApplicationIcon;