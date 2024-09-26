import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    _id: 1,
    name: "sample",
    type: "file",
    extension: "txt",
    directory: 4,
    content: "My name is Ashish"
  },
  {
    _id: 2,
    name: "sample1",
    type: "file",
    extension: "txt",
    directory: 2,
    content: "My name is sample1"
  }
];

const fileSlice = createSlice({
  name: "desktopAppFile",
  initialState,
  reducers: {
    addFile: (state, action) => {
      const { id, name, extension, directory, content } = action.payload;

      state.push({
        _id: id,
        name,
        type: "file",
        extension,
        directory,
        content
      });
    },
    editContent: (state, action) => {
      const { id, content } = action.payload;

      const index = state.findIndex((file) => file["_id"] == id);
      state[index]["content"] = content;
    },
    renameFile: (state, action) => { },
    removeFile: (state, action) => { },
    changeExtension: (state, action) => { }
  }
});

export const { addFile, editContent, renameFile, removeFile, changeExtension } = fileSlice.actions;
export default fileSlice.reducer;