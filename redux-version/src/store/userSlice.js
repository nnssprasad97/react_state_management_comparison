import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Jane Doe',
    isLoggedIn: true,
  },
  reducers: {
    // Actions if any
  },
});

export default userSlice.reducer;
