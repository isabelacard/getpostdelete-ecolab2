import { createBrowserRouter } from "react-router";

import Home from "../pages/home";
import Posts from "../pages/posts";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Posts,
    },
    {
        path: "/posts",
        Component: Posts,
    },
    {
        path: "/home",
        Component: Home,
    },
]);

export default router;
