export default function ProviderSectionHeading({
	title,
	description,
}: {
	title: string;
	description?: string;
}) {
	return (
		<div className="w-full flex items-center justify-center text-center flex-col gap-6 ">
			<h2 className="text-providerWhitePrimary font-bold text-2xl md:text-3xl lg:text-4xl ">{title}</h2>

			{description && (
				<p className="w-[90%]  lg:w-[60%] text-base text-providerWhiteSecondary text-center">
					{description}
				</p>
			)}
		</div>
	);
}
