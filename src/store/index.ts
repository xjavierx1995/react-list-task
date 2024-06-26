import { configureStore } from "@reduxjs/toolkit";
import listReducer, { ListSlice } from "./list.store";

export interface AppStore {
  taskList: ListSlice;
}

export default configureStore({
  reducer: {
    taskList: listReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
