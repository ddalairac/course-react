import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { iSession } from '@/data/types/iSession';

interface iSessionState {
  isLoading:boolean;
  data: iSession;
}
// Define the initial state using that type
const initialState: iSessionState = {
  isLoading: false,
  data: {
    roles: [],
    tokens: null,
    user_info: null,
  }
}

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setSessionIsloading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setSessionData: (state, action: PayloadAction<iSession>) => {
      state.data = action.payload;
    },
  },
})

export const { setSessionData, setSessionIsloading } = sessionSlice.actions;
