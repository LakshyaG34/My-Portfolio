import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notifications",
  initialState: {
    list: [],
    unreadCount: 0,
  },
  reducers: {
    addNotification: (state, action) => {
      state.list.unshift({
        ...action.payload,
        read: false,
      });
      state.unreadCount += 1;
    },

    markAllRead: (state) => {
      state.list.forEach((n) => (n.read = true));
      state.unreadCount = 0;
    },
  },
});

export const { addNotification, markAllRead } =
  notificationSlice.actions;

export default notificationSlice.reducer;