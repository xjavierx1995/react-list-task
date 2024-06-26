import { createBrowserRouter, Navigate } from "react-router-dom";

import { HomePage } from "../pages/home/HomePage";
import { ListPage } from "../pages/list/ListPage";
import { TaskPage } from "../pages/task/TaskPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/list",
    Component: ListPage,
  },
  {
    path: "/tasks",
    Component: TaskPage,
  },
  {
    path: "*",
    Component: () => <Navigate to="/" />,
  },
]);

export default router;
