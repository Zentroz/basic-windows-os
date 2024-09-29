import React, { useEffect, useRef } from 'react'

const ItemIcon = ({ name, type, extension, size }) => {
  const iconRef = useRef();
  const sizes = {
    "s": 1.5,
    "md": 2.5,
    "lg": 4
  }
  let path = (type == "folder" ? 'src/assets/folderIcon.png' : `src/assets/${extension}Icon.png`);

  useEffect(() => {
    const w = `${sizes[size]}rem`;
    const h = `${sizes[size]}rem`;
    iconRef.current.style.width = w;
    iconRef.current.style.height = h;
  }, [])


  switch (name) {
    case "Desktop":
      path = "src/assets/desktopFolderIcon.png"
      break;

    case "Pictures":
      path = "src/assets/pictureFolderIcon.png"
      break;
    case "Music":
      path = "src/assets/musicFolderIcon.png"
      break;

    default:
      break;
  }

  return (
    <img className={`window-explorer-item-icon`} src={path} alt="item-icon" ref={iconRef} />
  )
}

export default ItemIcon