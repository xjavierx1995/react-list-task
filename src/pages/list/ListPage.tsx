import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListTask } from "../../thunks/list.thunk";
import { ListItem } from "../../components/ListItem";
import { AppStore } from "../../store";
import "./list-page.css";
import { Button } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export const ListPage = () => {
  const tasks = useSelector((state: AppStore) => state.taskList.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListTask());
  }, [dispatch]);

  return (
    <div className="list-page">
      <div className="list-page-header">
        <div></div>
        <div className="list-page-title"> Tasks List </div>
        <Link to={`/`}>
          <Button
            leftIcon={<CloseIcon />}
            colorScheme="teal"
            variant="ghost"
            size="sm"
          ></Button>
        </Link>
      </div>
      <div className="list-page-content">
        {tasks.map((task) => (
          <ListItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};
