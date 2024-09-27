import React from 'react';

const FileIcon = ({ icon, size, extension }) => {
  const sizes = {
    "s": 1.5,
    "md": 2.5,
    "lg": 4
  }

  const w = `${sizes[size]}rem`;
  const h = `${sizes[size]}rem`;

  const iconPath = `src/assets/${extension}Icon.png`;

  return (
    <img className={`notepad-icon w-[${w}] h-[${h}]`}
      src={icon ? icon : iconPath}
      alt="notepad-icon" />
  )
};

export default FileIcon;