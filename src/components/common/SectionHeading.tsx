export default function SectionHeading({
	title,
	description,
}: {
	title: string;
	description?: string;
}) {
	return (
		<div className="w-full flex items-center justify-center text-center flex-col gap-4 ">
			<h2 className="text-primaryDark font-bold text-2xl md:text-3xl lg:text-4xl ">{title}</h2>

			{description && (
				<p className="w-[90%]  lg:w-[60%] text-base text-[#404C67] text-center">
					{description}
				</p>
			)}
		</div>
	);
}
