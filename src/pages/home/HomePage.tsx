import { Button } from "@chakra-ui/react";
import "./home.css";
import { Link } from "react-router-dom";
export const HomePage = () => {
  return (
    <div className="home-page">
      <Link to={`/tasks`}>
        <Button data-testid="btn-task" w="25vw" m={2} colorScheme="teal">
          Task
        </Button>
      </Link>
      <Link to={`/list`}>
        <Button w="25vw" colorScheme="teal" data-testid="btn-list">
          List
        </Button>
      </Link>
    </div>
  );
};
