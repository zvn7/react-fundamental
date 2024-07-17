import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Blog from "../pages/blogs/";
import SinglePost from "../pages/blogs/_id";
import { postById, posts } from "../apis/loader";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/blog",
				element: <Blog />,
				loader: posts,
			},
			{
				path: "/blog/:id",
				element: <SinglePost />,
				loader: postById,
			},
		],
	},
]);
