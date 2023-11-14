import { createSlice } from '@reduxjs/toolkit'

interface iInsightsCounterState {
}

// Define the initial state using that type
const initialState: iInsightsCounterState = {
}

export const counterSlice = createSlice({
  name: 'insights',
  initialState,
  reducers: {
  },
})

// export const { } = counterSlice.actions;
