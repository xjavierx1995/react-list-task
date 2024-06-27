import { useSelector } from "react-redux";
import { ListItem } from "../../components/ListItem";
import { RootState } from "../../store";
import "./task-page.css";
import { Button } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { AddTaskModal } from "../../components/AddTaskModal";

export const TaskPage = () => {
  const tasks = useSelector((state: RootState) => state.taskList.myTasks);

  return (
    <div className="task-page">
      <div className="task-page-header">
        <div></div>
        <div data-testid="my-task-title" className="task-page-title">
          {" "}
          My Tasks{" "}
        </div>
        <Link to={`/`}>
          <Button
            leftIcon={<CloseIcon />}
            colorScheme="teal"
            variant="ghost"
            size="sm"
            data-testid="my-task-btn-exit"
          ></Button>
        </Link>
      </div>
      <div className="task-page-content">
        <AddTaskModal data-testid="my-task-modal" />
        {tasks.map((task) => (
          <ListItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};
