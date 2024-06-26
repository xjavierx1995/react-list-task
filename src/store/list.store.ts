import { createSlice } from "@reduxjs/toolkit";

export interface ListSlice {
  tasks: ITask[];
  myTasks: ITask[];
  loading: boolean;
}

export interface ITask {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
}

const initialState: ListSlice = {
  tasks: [],
  myTasks: [],
  loading: false,
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    manageLoading: (state, action) => {
      state.loading = action.payload;
    },
    setList: (state, action) => {
      state.tasks = action.payload;
    },
    addTask: (state, action) => {
      state.myTasks = [...action.payload, ...state.myTasks];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setList, addTask, manageLoading } = listSlice.actions;

export default listSlice.reducer;
