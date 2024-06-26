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
      <Button w="25vw" m={2} colorScheme="blue">
        Task
      </Button>
      <Button w="25vw" colorScheme="blue">
        <Link to={`/list`}>List</Link>
      </Button>
    </div>
  );
};
