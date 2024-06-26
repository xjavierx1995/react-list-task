import { axiosInstance } from "../plugins/axios";
import { setList } from "../store/list.store";

export const getListTask = () => {
  return async (dispatch: (action: unknown) => void) => {
    const { data } = await axiosInstance.get("/elements");
    dispatch(setList(data));
  };
};
