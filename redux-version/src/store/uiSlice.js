import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    theme: 'light',
    notification: null,
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    showNotification: (state, action) => {
      state.notification = action.payload;
    },
    hideNotification: (state) => {
      state.notification = null;
    },
  },
});

export const { setTheme, showNotification, hideNotification } = uiSlice.actions;
export default uiSlice.reducer;
