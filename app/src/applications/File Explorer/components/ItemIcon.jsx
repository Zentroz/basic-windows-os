import React, { useEffect, useRef } from 'react'

const ItemIcon = ({ name, type, extension, size }) => {
  const iconRef = useRef();
  const sizes = {
    "s": 1.5,
    "md": 2.5,
    "lg": 4
  }
  let path = (type == "folder" ? '/icons/folderIcon.png' : `/icons/${extension == "nd" ? "file" : extension}Icon.png`);

  useEffect(() => {
    const w = `${sizes[size]}rem`;
    const h = `${sizes[size]}rem`;
    iconRef.current.style.width = w;
    iconRef.current.style.height = h;
  }, [])


  switch (name) {
    case "Desktop":
      path = "/icons/desktopFolderIcon.png"
      break;

    case "Pictures":
      path = "/icons/pictureFolderIcon.png"
      break;
    case "Music":
      path = "/icons/musicFolderIcon.png"
      break;

    default:
      break;
  }

  return (
    <img className={`window-explorer-item-icon`} src={path} alt="item-icon" ref={iconRef} />
  )
}

export default ItemIcon