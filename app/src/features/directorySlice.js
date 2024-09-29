import { createSlice, nanoid } from "@reduxjs/toolkit";
import { showNotification } from "../utils/windowMethods";

const initialState = [
  {
    _id: 0,
    name: "root",
    type: "folder",
    parentDir: null
  },
  {
    _id: 1,
    name: "C",
    type: "folder",
    parentDir: 0
  },
  {
    _id: 2,
    name: "D",
    type: "folder",
    parentDir: 0
  },
  {
    _id: 3,
    name: "user",
    type: "folder",
    parentDir: 1
  },
  {
    _id: 4,
    name: "Desktop",
    type: "folder",
    parentDir: 3
  },
  {
    _id: 5,
    name: "Pictures",
    type: "folder",
    parentDir: 3
  },
  {
    _id: 6,
    name: "Music",
    type: "folder",
    parentDir: 3
  },
]

const directorySlice = createSlice({
  name: "directories",
  initialState,
  reducers: {
    addDirectory: (state, action) => {
      const { name, parentDir } = action.payload;
      const folderExists = state.filter((folder) => folder["name"] == name && folder["parentDir"] == parentDir);

      if (folderExists.length > 0) { showNotification("File explorer", `Folder with name "${name}" already exists in the directory.`); return }

      state.push({
        _id: nanoid(),
        name,
        type: "folder",
        parentDir
      });
    },
    removeDirectory: (state, action) => { },
  }
});

export const { addDirectory } = directorySlice.actions;
export default directorySlice.reducer;