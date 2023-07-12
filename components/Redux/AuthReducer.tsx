import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    User: [] as any[],
}

const AuthSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.User = action.payload;
    },
  },
});

export const { setUser } = AuthSlice.actions;
export default AuthSlice.reducer;