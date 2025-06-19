import Layout from "@/components/common/Layout";
import Categories from "@/pages/Categories/Categories";
import Home from "@/pages/Home/Home";
import PostJob from "@/pages/PostJob/PostJob";

export interface Route {
	path: string;
	element: JSX.Element;
	layout?: JSX.Element;
}

export const routes = [
	{
		path: "/",
		element: Home,
		layout: Layout,
	},
	{
		path: "/categories",
		element: Categories,
		layout: Layout,
	},
	{
		path: "/post-job",
		element: PostJob,
		layout: Layout,
	},
];
