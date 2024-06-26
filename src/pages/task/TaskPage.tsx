import { useSelector } from "react-redux";
import { ListItem } from "../../components/ListItem";
import { AppStore } from "../../store";
import "./task-page.css";
import { Button } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { AddTaskModal } from "../../components/AddTaskModal";

export const TaskPage = () => {
  const tasks = useSelector((state: AppStore) => state.taskList.myTasks);

  return (
    <div className="task-page">
      <div className="task-page-header">
        <div></div>
        <div className="task-page-title"> My Tasks </div>
        <Link to={`/`}>
          <Button
            leftIcon={<CloseIcon />}
            colorScheme="teal"
            variant="ghost"
            size="sm"
          ></Button>
        </Link>
      </div>
      <div className="task-page-content">
        <AddTaskModal />
        {tasks.map((task) => (
          <ListItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};
