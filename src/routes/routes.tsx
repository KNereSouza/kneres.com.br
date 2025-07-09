import { createBrowserRouter } from "react-router";
import { Home } from "../pages/index.tsx";
import { Blog } from "../pages/blog/page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);

export default router;
