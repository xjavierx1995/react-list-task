import { Button } from "@chakra-ui/react";
import "./home.css";
import { Link } from "react-router-dom";
export const HomePage = () => {
  // const [categories, setcategories] = useState(['One punch']);

  // const onAddCategory = (category) => {

  //   if (categories.includes(category)) return;
  //   setcategories([category, ...categories]);
  // }

  return (
    <div className="home-page">
      <Link to={`/tasks`}>
        <Button w="25vw" m={2} colorScheme="teal">
          Task
        </Button>
      </Link>
      <Link to={`/list`}>
        <Button w="25vw" colorScheme="teal">
          List
        </Button>
      </Link>
    </div>
  );
};
