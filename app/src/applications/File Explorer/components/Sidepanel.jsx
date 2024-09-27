import React from 'react';
import { useSelector } from 'react-redux';
import Items from './Items';

const Sidepanel = ({ changeDir }) => {
  const quickAccessfolders = useSelector(state => state.directory).filter((dir) => dir["parentDir"] == 3)
  return (
    <div className='file-explorer-side-panel col-span-1 py-2'>
      {quickAccessfolders.map((folder, i) =>
        <Items key={i} item={folder} changeDir={changeDir} />
      )}
    </div>
  )
};

export default Sidepanel;