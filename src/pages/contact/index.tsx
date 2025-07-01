export default function Contact() {
	return (
		<section className="py-28">
			<div className="container max-w-3xl">
				<div className="w-full flex flex-col gap-3 text-center items-center">
					<h3 className="font-bold text-4xl">
						Do you need to get in touch with
					</h3>
					<h3 className="text-primary text-4xl font-bold">
						Swish.ma?
					</h3>
					<p className="text-sm">
						Find opening hours for customer service and contact
						information for Swish.ma.
					</p>
				</div>

				<div className="w-full pt-20 pb-8 flex flex-col gap-3">
					<h5 className="font-semibold text-lg">
						E-Post:{" "}
						<span className="text-primary">swish.ma@gmail.com</span>
					</h5>
					<h5 className="font-semibold text-lg">
						Telephone: +41 1235 235 22 00
					</h5>
				</div>

				<div className="w-full py-8 flex flex-col gap-3">
					<h4 className="font-bold text-2xl">
						Opening hours customer service
					</h4>

					<div className="w-full flex flex-col gap-2 py-3">
						<span>Weekdays: 9:00 am - 9:00 pm</span>
						<span>Holidays: Closed</span>
						<span>Weekends: 9:00 am - 9:00 pm</span>
					</div>
				</div>

				<div className="w-full py-8 flex flex-col gap-3">
					<h4 className="font-bold text-2xl">Mailing Address</h4>

					<div className="w-full flex flex-col gap-2 py-3">
						<span>Swish.ma Marketplaces AS</span>
						<span>P.O. Box 2876 Tøyen</span>
						<span>0608 Oslo</span>
					</div>
				</div>
			</div>
		</section>
	);
}
