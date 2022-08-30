import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    messages: [],
  },
  reducers: {
    chat: (state, action) => {
      state.messages = action.payload;
    },
    addChat: (state, action) => {
      state.messages=[...state.messages, action.payload]
    },
  },
});

export const { chat, addChat } = messageSlice.actions;

export const selectMessage = (state) => state.message.messages;

export default messageSlice.reducer;