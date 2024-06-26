import { createSlice } from "@reduxjs/toolkit";

export interface ListSlice {
  tasks: ITask[];
}

export interface ITask {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
}

const initialState: ListSlice = {
  tasks: [],
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setList: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setList } = listSlice.actions;

export default listSlice.reducer;
