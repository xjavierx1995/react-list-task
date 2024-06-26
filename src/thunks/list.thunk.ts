import { axiosInstance } from "../plugins/axios";
import { ITask, addTask, manageLoading, setList } from "../store/list.store";

export const getListTask = () => {
  return async (dispatch: (action: unknown) => void) => {
    dispatch(manageLoading(true));
    const { data } = await axiosInstance.get<ITask[]>("/elements");
    dispatch(setList(data));
    dispatch(manageLoading(false));
  };
};

export const addListTask = (newTask: ITask) => {
  return async (dispatch: (action: unknown) => void) => {
    dispatch(addTask(newTask));
  };
};
