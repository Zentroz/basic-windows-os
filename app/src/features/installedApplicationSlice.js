import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  applications: [
    {
      name: "File Explorer",
      type: "application",
      icon: 'src/applications/File Explorer/assets/icon.png',
      supportedExtensions: []
    },
    {
      name: "Notepad",
      type: "application",
      icon: 'src/applications/Notepad/assets/icon.png',
      supportedExtensions: ["txt"]
    },
    {
      name: "Calculator",
      type: "application",
      icon: 'src/applications/Calculator/assets/icon.png',
      supportedExtensions: []
    },
  ]
}

const installedApplicationSlice = createSlice({
  name: "installedApplications",
  initialState,
  reducers: {
  }
})

export default installedApplicationSlice.reducer;