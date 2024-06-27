import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListTask } from "../../thunks/list.thunk";
import { ListItem } from "../../components/ListItem";
import { AppStore, RootState } from "../../store";
import "./list-page.css";
import { Button, Spinner } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { ITask } from "../../store/list.store";

export const ListPage = () => {
  const tasks = useSelector((state: RootState) => state.taskList.tasks);

  const loading = useSelector((state: RootState) => state.taskList.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListTask());
  }, [dispatch]);

  return (
    <div className="list-page">
      <div className="list-page-header">
        <div></div>
        <div className="list-page-title" data-testid="task-list-title">
          {" "}
          Tasks List{" "}
        </div>
        <Link to={`/`}>
          <Button
            leftIcon={<CloseIcon />}
            colorScheme="teal"
            variant="ghost"
            size="sm"
            data-testid="task-list-btn-exit"
          ></Button>
        </Link>
      </div>
      <div className="list-page-content">
        {loading && (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        )}

        {tasks.map((task: ITask) => (
          <ListItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};
