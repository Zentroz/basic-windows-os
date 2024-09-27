import React from 'react'

const ItemIcon = ({ name, type, extension, size }) => {
  const sizes = {
    "s": 1.5,
    "md": 2.5,
    "lg": 4
  }
  let path = (type == "folder" ? 'src/assets/folderIcon.png' : `src/assets/${extension}Icon.png`);

  const w = `${sizes[size]}rem`;
  const h = `${sizes[size]}rem`;


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
  console.log(w, h);

  return (
    <img className={`window-explorer-item-icon  w-[${w}] h-[${h}]`} src={path} alt="item-icon" />
  )
}

export default ItemIcon