import Logo from "@/assets/images/logo-black.svg";
import UserIcon from "@/assets/images/user-icon.svg";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import GardenCoconutTreeImg from "@/assets/images/garden-coconut-tree.svg";
import GuardImg from "@/assets/images/guard.svg";
import HomeImg from "@/assets/images/home.svg";
import IndoorRenovationImg from "@/assets/images/indoor-renovation.svg";
import TradesToolsImg from "@/assets/images/trades-tools.svg";

export interface CategoryProps {
	name: string;
	url: string;
	img?: string;
	subcategories?: CategoryProps[];
}

export const categories = [
	{
		name: "Trades & Specialized Crafts",
		url: "/trades",
		description:
			"Skilled craftsmanship experts for all your specialist needs. From plumbing and wiring to stunning traditional Moroccan plasterwork and bespoke iron designs.",
		img: TradesToolsImg,
		subcategories: [
			{ name: "Plumber", url: "/trades/plumber" },
			{ name: "Electrician", url: "/trades/electrician" },
			{ name: "Painter", url: "/trades/painter" },
			{ name: "Locksmith", url: "/trades/locksmith" },
			{ name: "Handyman", url: "/trades/handyman" },
		],
	},
	{
		name: "Exterior & Garden",
		url: "/exterior-garden",
		description:
			"Upgrade your outdoor spaces—curb appeal, functionality, and green living in mind. We connect you with experts for gardens, terraces, roofs, driveways, and supporting systems.",
		img: GardenCoconutTreeImg,
		subcategories: [
			{
				name: "Solar Heater & AC Installation",
				url: "/exterior-garden/solar-heater-ac-installation",
			},
			{
				name: "Masonry & Concrete Work",
				url: "/exterior-garden/masonry-concrete-work",
			},
			{ name: "Window & Doors", url: "/exterior-garden/window-doors" },
			{
				name: "Garden & Landscaping",
				url: "/exterior-garden/garden-landscaping",
			},
		],
	},
	{
		name: "Indoor Renovation",
		url: "/indoor-renovation",
		description:
			"Transform your interiors—whether modern upgrades, full remodels or cozy rental conversions. We'll help you find trusted craftsmen for every room.",
		img: IndoorRenovationImg,
		subcategories: [
			{
				name: "Full Renovation / Buildout",
				url: "/indoor-renovation/full-renovation-buildout",
			},
			{
				name: "Renovating Bathrooms",
				url: "/indoor-renovation/renovating-bathrooms",
			},
			{ name: "Floor Laying", url: "/indoor-renovation/floor-laying" },
		],
	},
];

export default function Header() {
	const location = useLocation();
	const languages = ["English", "Français", "العربية"];
	const [currentLanguage, setCurrentLanguage] = useState(languages[0]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<header className="w-full h-auto bg-white/50 py-3 sticky top-0 z-50 backdrop-blur-lg shadow-sm transition-all duration-300 ease-in-out">
			<div className="container flex items-center justify-between">
				<div className="logo">
					<Link to="/">
						<img src={Logo} alt="Swish.ma" className="max-w-[90%] md:max-w-full" />
					</Link>
				</div>

				<div className="nav-items flex items-center justify-around gap-4">
					<div className="hidden lg:flex items-center gap-4"> 
						<Select
						value={currentLanguage}
						onValueChange={(e) => setCurrentLanguage(e)}
					>
						<SelectTrigger className="w-[120px]">
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								{languages.map((language) => (
									<SelectItem value={language} key={language}>
										{language}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>

					<Link
						to="/register-company"
						className="hover:underline transition-all duration-300"
					>
						Register company
					</Link>

					<Link to="/post-job">
						<Button>Post a job</Button>
					</Link>
					</div>

					<Sheet>
						<SheetTrigger asChild>
							<Button
								variant="outline"
								className="rounded-full space-x-1"
							>
								<Menu />
								<img
									src={UserIcon}
									alt="User"
									className="max-w-full"
								/>
							</Button>
						</SheetTrigger>
						<SheetContent className="py-10 min-w-max sm:max-w-lg px-5">
							<NavigationMenuSheetContent />
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}

function NavigationMenuSheetContent() {
	const [currentCategory, setCurrentCategory] =
		useState<CategoryProps | null>(null);

	return (
		<div className="w-full h-screen min-w-max flex flex-col gap-2 relative overflow-hidden">
			<div
				className={cn(
					"w-full min-w-max absolute transition-transform ease-in-out duration-150",
					currentCategory ? "translate-x-[-110%]" : "translate-x-0"
				)}
			>
				<SheetHeader>
					<Link to="/login">
						<div className="flex gap-3 items-center transition-all duration-300 cursor-pointer hover:bg-slate-100 mb-2 py-4 px-2 rounded-md">
							<img
								src={UserIcon}
								alt="User"
								className="max-w-full"
							/>
							<SheetTitle className="font-medium text-base">
								Log in
							</SheetTitle>
						</div>
					</Link>
				</SheetHeader>

				<Separator className="bg-slate-200" />

				<div className="flex gap-1 flex-col items-center mt-2">
					<Link
						to="/post-job"
						className="w-full text-primary font-semibold transition-all duration-300 cursor-pointer hover:bg-slate-100 py-3 px-2 rounded-md"
					>
						Post a job
					</Link>

					<Link
						to="/"
						className="w-full text-primary font-semibold transition-all duration-300 cursor-pointer hover:bg-slate-100 py-3 px-2 rounded-md"
					>
						Register your business
					</Link>
				</div>

				<Separator className="bg-slate-200" />

				<div className="py-5 space-y-2">
					<div className="flex flex-col gap-1">
						<Link to="/categories">
							<h3 className="font-semibold text-xl text-primaryDark px-2">
								Categories
							</h3>
						</Link>
					</div>

					<div className="w-full flex flex-col gap-1">
						{categories.map((category, index) => (
							<Button
								key={index}
								variant="link"
								className="w-full flex items-center justify-between font-medium text-sm whitespace-normal break-words transition-all duration-300 cursor-pointer hover:bg-slate-100 py-3 px-2 rounded-md hover:no-underline"
								onClick={() => setCurrentCategory(category)}
							>
								{category.name}

								<ChevronRight
									size={16}
									className="text-primary pointer-events-none"
								/>
							</Button>
						))}
					</div>
				</div>

				<Separator className="bg-slate-200" />

				<div className="py-5 flex flex-col gap-1">
					<Link
						to="/my-post"
						className="w-full flex items-center justify-between font-medium text-sm transition-all duration-300 cursor-pointer hover:bg-slate-100 py-3 px-2 rounded-md"
					>
						My Post
						<ChevronRight
							size={16}
							className="text-primary pointer-events-none"
						/>
					</Link>
					<Link
						to="/"
						className="w-full flex items-center justify-between font-medium text-sm transition-all duration-300 cursor-pointer hover:bg-slate-100 py-3 px-2 rounded-md"
					>
						Message
						<ChevronRight
							size={16}
							className="text-primary pointer-events-none"
						/>
					</Link>
				</div>
			</div>

			<div
				className={cn(
					"w-full min-w-max absolute transition-transform ease-in-out duration-150",
					currentCategory ? "translate-x-0" : "translate-x-[110%]"
				)}
			>
				<SheetHeader>
					<div className="w-full py-2">
						<Button
							variant="link"
							className="text-primary hover:text-primaryDark font-semibold px-0"
							onClick={() => setCurrentCategory(null)}
						>
							<ChevronLeft
								size={16}
								className="text-primary pointer-events-none"
							/>
							Menu
						</Button>
					</div>
				</SheetHeader>

				<Separator className="bg-slate-200" />

				<div className="pt-5 space-y-5">
					{currentCategory && (
						<div className="flex flex-col gap-1">
							<Link
								to={currentCategory.url}
								className="w-full flex items-center justify-between font-semibold text-xl transition-all duration-300 cursor-pointer hover:bg-slate-100 py-3 px-2 rounded-md min-w-max"
							>
								{currentCategory.name}
								<ChevronRight
									size={16}
									className="text-primary pointer-events-none"
								/>
							</Link>
						</div>
					)}

					<ScrollArea className="h-[75vh] w-full">
						<div className="w-full flex flex-col gap-1">
							{currentCategory &&
								currentCategory?.subcategories?.map(
									(subCategoryItem, index) => (
										<Link
											key={index}
											to={subCategoryItem.url}
											className="w-full font-medium text-sm whitespace-normal break-words transition-all duration-300 cursor-pointer hover:bg-slate-100 py-3 px-2 rounded-md"
											onClick={() =>
												setCurrentCategory(
													subCategoryItem
												)
											}
										>
											{subCategoryItem.name}
										</Link>
									)
								)}
						</div>
					</ScrollArea>
				</div>
			</div>
		</div>
	);
}
