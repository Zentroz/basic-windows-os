import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addSession } from '../../../features/windowSessionSlice';

const Items = ({ item, changeDir }) => {
  const dispatch = useDispatch();
  const application = useSelector(state => state.installedApplication.applications).find((app) => app["supportedExtensions"].includes(item["extension"]));

  const ChangeDir = () => {
    if (item["type"] == "folder") {
      changeDir(item["_id"]);
    }
    if (item["type"] == "file") {
      if (!application) { console.log("Unsupported File"); return; }
      dispatch(addSession({
        name: application["name"],
        displayMode: 1,
        openFile: item["_id"]
      }))
    }
  }

  return (
    <div className='hover:bg-blue-400 hover:bg-opacity-30 select-none'
      onDoubleClick={ChangeDir}
    >
      {item["name"]}
    </div>
  )
};

export default Items;