import React from 'react';
import { useSelector } from 'react-redux';
import Items from './Items';

const Folders = ({ parentDir, folders, changeDir }) => {
  const files = useSelector(state => state.files).filter((file) => file["directory"] == parentDir);

  const items = [...folders, ...files];

  return (
    <div className='file-explorer-folders flex flex-col p-2 col-span-3 border-l-2'>
      {items.map((item, i) =>
        <Items key={i} item={item} changeDir={changeDir} />
      )}
    </div>
  )
};

export default Folders;