import { categories } from "@/components/common/Header";
import { Link } from "react-router-dom";
import TradeToolsImg from "@/assets/images/trades-tools.svg";

const CategoryList = () => {
	return (
		<section className="py-24">
			<div className="container grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
				{categories.map((category, index) => (
					<div
						key={index}
						className="bg-white border border-primary rounded-lg p-8 relative"
					>
						<div className="flex items-center gap-4 mb-5">
							<img
								src={category.img}
								alt={category.name}
								className="max-w-full"
							/>
							<h3 className="text-lg font-semibold text-primaryDark">
								{category.name}
							</h3>
						</div>
						<p className="text-[#676767] text-sm mb-4">
							{category.description}
						</p>
						<div className="grid grid-cols-2 gap-2">
							<ul className="list-none space-y-4">
								{category.subcategories
									.slice(
										0,
										Math.ceil(
											category.subcategories.length / 2
										)
									)
									.map((subcategory, subIndex) => (
										<li
											key={subIndex}
											className="text-primaryDark text-sm font-medium"
										>
											<Link
												to={subcategory.url}
												className="hover:text-primary transition-all duration-300 hover:underline"
											>
												{subcategory.name}
											</Link>
										</li>
									))}
							</ul>
							<ul className="list-none space-y-4">
								{category.subcategories
									.slice(
										Math.ceil(
											category.subcategories.length / 2
										)
									)
									.map((subcategory, subIndex) => (
										<li
											key={subIndex}
											className="text-primaryDark text-sm font-medium"
										>
											<Link
												to={subcategory.url}
												className="hover:text-primary transition-all duration-300 hover:underline"
											>
												{subcategory.name}
											</Link>
										</li>
									))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default CategoryList;
