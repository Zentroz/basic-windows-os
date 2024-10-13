import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addSession } from '../../../features/windowSessionSlice';
import ItemIcon from './ItemIcon';
import { showNotification } from '../../../utils/windowMethods';

const Items = ({ item, changeDir }) => {
  const dispatch = useDispatch();
  const application = useSelector(state => state.installedApplication.applications).find((app) => app["supportedExtensions"].includes(item["extension"]));

  const performAction = () => {
    if (item["type"] == "folder") {
      changeDir(item["_id"]);
    }
    if (item["type"] == "file") {
      if (!application) { showNotification("System", "Unsupported file!"); return; }
      dispatch(addSession({
        name: application["name"],
        displayMode: 1,
        openFile: item["_id"]
      }))
    }
  }

  return (
    <div className='file-explorer-item flex gap-2 px-2 rounded-md hover:bg-blue-400 hover:bg-opacity-10 select-none'
      onDoubleClick={performAction}
    >
      <ItemIcon name={item["name"]} type={item["type"]} extension={item["extension"]} size={"s"} />
      <span>{item["name"]}</span>
    </div>
  )
};

export default Items;