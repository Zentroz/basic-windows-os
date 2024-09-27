import React from 'react';

const ApplicationIcon = ({ icon, size }) => {
  const sizes = {
    "s": 1.5,
    "md": 2.5,
    "lg": 4
  }


  const w = `${sizes[size]}rem`;
  const h = `${sizes[size]}rem`;

  return (
    <img className={`notepad-icon w-[${w}] h-[${h}]`} src={icon} alt="notepad-icon" />
  )
};

export default ApplicationIcon;