import { createSlice, nanoid } from "@reduxjs/toolkit";
import Notepad from "../applications/Notepad/Notepad";

const initialState = {
  sessions: []
};

const windowSessionSlice = createSlice({
  name: "windowSessions",
  initialState,
  reducers: {
    addSession: (state, action) => {
      const { name, displayMode } = action.payload;
      state.sessions.push({
        _id: nanoid(),
        name,
        displayMode
      });
    },
    removeSession: (state, action) => {
      state.sessions = state.sessions.filter((session) => session["_id"] !== action.payload);
    },
    minimizeWindow: (state, action) => {
      const index = state.sessions.findIndex((session) => session["_id"] == action.payload);
      state.sessions[index].displayMode = 0;
    }
  }
});

export const { addSession, removeSession, minimizeWindow } = windowSessionSlice.actions;
export default windowSessionSlice.reducer;