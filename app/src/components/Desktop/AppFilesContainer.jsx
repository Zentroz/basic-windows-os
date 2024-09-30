import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Application from './Application';
import File from './File';
import DesktopFolder from './DesktopFolder';
import FileMenu from '../ContextMenus/FileMenu';

const AppFilesContainer = () => {
  const applications = useSelector(state => state.installedApplication.applications);
  const files = useSelector(state => state.files).filter(
    (file) => file["directory"] === 4
  );
  const folders = useSelector(state => state.directory).filter((foldr) => foldr["parentDir"] == 4);

  const allDesktopItems = [...applications, ...folders, ...files];

  const [fileMenuId, setFileMenuId] = useState();

  return (
    <>
      <div className='app-file-container grid grid-cols-12 items-center justify-items-center mx-auto grid-rows-6 w-screen h-full p-2 gap-1'>
        {allDesktopItems.map((item, i) =>
          item["type"] == "application" ?
            <Application key={i} name={item["name"]} icon={item["icon"]} /> :
            item["type"] == "folder" ? <DesktopFolder key={i} id={item["_id"]} name={item["name"]} /> :
              <File key={i} name={item["name"]} extension={item["extension"]} id={item["_id"]} setFileMenu={setFileMenuId} />
        )}
      </div>
      <FileMenu fileId={fileMenuId} />
    </>
  )
};

export default AppFilesContainer;