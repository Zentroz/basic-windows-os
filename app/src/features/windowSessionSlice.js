import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  sessions: []
};

const windowSessionSlice = createSlice({
  name: "windowSessions",
  initialState,
  reducers: {
    addSession: (state, action) => {
      const { name, displayMode, openFile, width, height, resizeable } = action.payload;
      state.sessions.push({
        _id: nanoid(),
        name,
        displayMode,
        openFile,
        width: width || "60vw",
        height: height || "65vh",
        resizeable: resizeable || true
      });
    },
    removeSession: (state, action) => {
      state.sessions = state.sessions.filter((session) => session["_id"] !== action.payload);
    },
    minimizeWindow: (state, action) => {
      const index = state.sessions.findIndex((session) => session["_id"] == action.payload);
      state.sessions[index].displayMode = 0;
    },
    unMinimizeWindow: (state, action) => {
      const index = state.sessions.findIndex((session) => session["_id"] == action.payload);
      state.sessions[index].displayMode = 1;
    }
  }
});

export const { addSession, removeSession, minimizeWindow, unMinimizeWindow } = windowSessionSlice.actions;
export default windowSessionSlice.reducer;