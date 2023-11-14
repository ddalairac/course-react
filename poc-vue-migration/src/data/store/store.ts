import { configureStore } from '@reduxjs/toolkit'
import * as slices from './slices'
// import { sessionSlice } from './slices/sessionSlice'

const store = configureStore({
  reducer: {
    session: slices.sessionSlice.reducer,
    counter: slices.counterSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
