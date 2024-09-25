import React from 'react';

const ApplicationIcon = ({ icon, size }) => {
  const sizes = {
    "sm": "5",
    "lg": "10",
    "xl": "16"
  }
  return (
    <img className={`notepad-icon w-${sizes[size]} h-${sizes[size]}`} src={icon} alt="notepad-icon" />
  )
};

export default ApplicationIcon;