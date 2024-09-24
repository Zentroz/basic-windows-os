import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  sessions: [
    { _id: 1, name: "Notepad", displayMode: 1 }
  ]
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