import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  applications: [
    {
      name: "Notepad",
      icon: 'src/applications/Notepad/assets/icon.png',
    }
  ]
}

const installedApplicationSlice = createSlice({
  name: "installedApplications",
  initialState,
  reducers: {
  }
})

export default installedApplicationSlice.reducer;