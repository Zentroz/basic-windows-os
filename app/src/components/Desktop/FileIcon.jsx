import React, { useEffect, useRef } from 'react';

const FileIcon = ({ icon, size, extension }) => {
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

  const iconPath = `src/assets/${extension}Icon.png`;

  return (
    <img className={`file-icon`}
      src={icon ? icon : iconPath}
      alt="file-icon" ref={iconRef} />
  )
};

export default FileIcon;