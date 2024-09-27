import React from 'react'

const ItemIcon = ({ name, type, extension, size }) => {
  const sizes = {
    "s": "6",
    "md": "10",
    "lg": "16"
  }
  let path = (type == "folder" ? 'src/assets/folderIcon.png' : `src/assets/${extension}Icon.png`);

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
    <img className={`window-explorer-item-icon w-${sizes[size]} h-${sizes[size]}`} src={path} alt="item-icon" />
  )
}

export default ItemIcon