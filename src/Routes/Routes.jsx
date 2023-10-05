import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/news.json"),
            },
            {
                path: "/news/:id",
                element: <NewsDetails></NewsDetails>,
                loader: () => fetch("/news.json"),
            },
        ],
    },
]);

export default router;
