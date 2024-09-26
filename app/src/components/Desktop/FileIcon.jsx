import React from 'react';

const FileIcon = ({ icon, size, extension }) => {
  const sizes = {
    "sm": "5",
    "lg": "10",
    "xl": "16"
  }

  const iconPath = `src/assets/${extension}Icon.png`;

  return (
    <img className={`notepad-icon w-${sizes[size]} h-${sizes[size]}`}
      src={icon ? icon : iconPath}
      alt="notepad-icon" />
  )
};

export default FileIcon;