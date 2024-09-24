import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  sessions: [
    { _id: 1, name: "Application" }
  ]
};

const windowSessionSlice = createSlice({
  name: "windowSessions",
  initialState,
  reducers: {
    addSession: () => {

    }
  }
});

// export { addSession } from windowSessionSlice.actions;
export default windowSessionSlice.reducer;