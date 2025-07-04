import Layout from "@/components/common/Layout";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import ResetPassword from "@/pages/auth/ResetPassword";
import VerifyOtp from "@/pages/auth/VerifyOtp";
import Categories from "@/pages/categories/Categories";
import Contact from "@/pages/contact";
import Home from "@/pages/home/Home";
import MyPost from "@/pages/post/MyPost";
import PostJob from "@/pages/post/PostJob";
import Trades from "@/pages/services/trades";
import Plumber from "@/pages/services/trades/Plumber";

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
	{
		path: "/register",
		element: Register,
	},
	{
		path: "/login",
		element: Login,
	},
	{
		path: "/forgot-password",
		element: ForgotPassword,
	},
	{
		path: "/verify-otp",
		element: VerifyOtp,
	},
	{
		path: "/reset-password",
		element: ResetPassword,
	},
	{
		path: "/my-post",
		element: MyPost,
		layout: Layout,
	},
	{
		path: "/contact",
		element: Contact,
		layout: Layout,
	},
	{
		path: "/trades",
		element: Trades,
		layout: Layout,
	},
	{
		path: "/trades/plumber",
		element: Plumber,
		layout: Layout,
	},
];
