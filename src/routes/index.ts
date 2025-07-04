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
import GardenLandscaping from "@/pages/services/exterior-garden/GardenLandscaping";
import MasonryConcrete from "@/pages/services/exterior-garden/MasonryConcrete";
import Renovation from "@/pages/services/renovation/Renovation";
import SolarHeater from "@/pages/services/exterior-garden/SolarHeater";
import WindowDoors from "@/pages/services/exterior-garden/WindowDoors";
import Trades from "@/pages/services/trades";
import Electrician from "@/pages/services/trades/Electrician";
import Handyman from "@/pages/services/trades/Handyman";
import Locksmith from "@/pages/services/trades/Locksmith";
import Painter from "@/pages/services/trades/Painter";
import Plumber from "@/pages/services/trades/Plumber";
import Bathrooms from "@/pages/services/renovation/Bathrooms";

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
	// trades
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
	{
		path: "/trades/electrician",
		element: Electrician,
		layout: Layout,
	},
	{
		path: "/trades/painter",
		element: Painter,
		layout: Layout,
	},
	{
		path: "/trades/locksmith",
		element: Locksmith,
		layout: Layout,
	},
	{
		path: "/trades/handyman",
		element: Handyman,
		layout: Layout,
	},

	// exterior-garden
	{
		path: "/exterior-garden/solar-heater-ac-installation",
		element: SolarHeater,
		layout: Layout,
	},
	{
		path: "/exterior-garden/masonry-concrete-work",
		element: MasonryConcrete,
		layout: Layout,
	},
	{
		path: "/exterior-garden/window-doors",
		element: WindowDoors,
		layout: Layout,
	},
	{
		path: "/exterior-garden/garden-landscaping",
		element: GardenLandscaping,
		layout: Layout,
	},

	// indoor-renovation
	{
		path: "/indoor-renovation/full-renovation-buildout",
		element: Renovation,
		layout: Layout,
	},
	{
		path: "/indoor-renovation/renovating-bathrooms",
		element: Bathrooms,
		layout: Layout,
	},
];
