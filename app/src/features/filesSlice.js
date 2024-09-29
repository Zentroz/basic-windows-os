import { createSlice, nanoid } from "@reduxjs/toolkit";
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
      const { id, extension, directory, content } = action.payload;
      let name = action.payload.name;
      const itemExists = state.find((item) => item["name"] == name);

      if (itemExists) {
        let index = 0;
        while (true) {
          const newName = `${name}(${index})`
          const exists = state.find((item) => item["name"] == newName);
          if (!exists) { name = newName; break };
          index++;
        }
      }

      AddContent(id, content);
      state.push({
        _id: id || nanoid(),
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