import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  applications: [
    {
      name: "File Explorer",
      type: "application",
      icon: '/icons/explorerIcon.png',
      supportedExtensions: []
    },
    {
      name: "Notepad",
      type: "application",
      icon: '/icons/notepadIcon.png',
      supportedExtensions: ["txt"]
    },
    {
      name: "Calculator",
      type: "application",
      icon: '/icons/calculatorIcon.png',
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