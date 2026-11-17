
import { createBrowserRouter } from "react-router";
import App from "../App";
import Create from "../pages/createComment";
import Edit from "../pages/editComment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
  },
]);
