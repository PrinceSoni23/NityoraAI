import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import { getCompany } from '@/utilities/getCompany';

interface AuthState {
  user: Record<string, unknown> | null;
  company: Record<string, unknown> | null;
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: AuthState = {
  user: null,
  company: null,
  accessToken: null,
  refreshToken: null,
};

// ✅ Async thunk to handle user data + company details
export const setUserData = createAsyncThunk(
  'auth/setUserData',
  async (payload: {
    user: Record<string, unknown>;
    accessToken: string;
    refreshToken: string;
  }) => {
    const { user, accessToken, refreshToken } = payload;

    // ✅ Fetch company details if `user.company` exists and is a string
    const companyData = typeof user?.company === 'string'
      ? await getCompany(user.company as string)
      : null;

    return { user, company: companyData, accessToken, refreshToken };
  }
);

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearUserData: (state) => {
      state.user = null;
      state.company = null;
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setUserData.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.company = action.payload.company; // ✅ Company data stored here
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    });
  },
});

export const { clearUserData } = userSlice.actions;

export default userSlice.reducer;
