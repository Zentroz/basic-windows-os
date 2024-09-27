import { createSlice } from "@reduxjs/toolkit";
import { AddContent, EditContent } from "../utils/fileContents";

const initialState = [
  {
    _id: 1,
    name: "sample",
    type: "file",
    extension: "txt",
    directory: 4,
  },
  {
    _id: 2,
    name: "sample1",
    type: "file",
    extension: "txt",
    directory: 2,
  }
];

const fileSlice = createSlice({
  name: "desktopAppFile",
  initialState,
  reducers: {
    addFile: (state, action) => {
      const { id, name, extension, directory, content } = action.payload;
      AddContent(id, content);
      state.push({
        _id: id,
        name,
        type: "file",
        extension,
        directory,
      });
    },
    editContent: (state, action) => {
      const { id, content } = action.payload;

      EditContent(id, content);
    },
    renameFile: (state, action) => { },
    removeFile: (state, action) => { },
    changeExtension: (state, action) => { }
  }
});

export const { addFile, editContent, renameFile, removeFile, changeExtension } = fileSlice.actions;
export default fileSlice.reducer;