export default function CTA() {
	return (
		<section className="bg-[#D4AF37] py-24">
			<div className="mx-auto flex max-w-7xl flex-col items-center px-8 text-center">
				<h2 className="text-5xl font-extrabold text-black">
					Ready to Start Earning?
				</h2>

				<p className="mt-6 max-w-3xl text-xl leading-9 text-black/80">
					Join the Melbet Partners program today and start building a stable
					affiliate income with the support of our experienced team.
				</p>

				<div className="mt-10 flex flex-wrap justify-center gap-5">
					<a
						href="https://mlbt.cc/MelbetPartners"
						className="rounded-xl bg-black px-8 py-4 font-semibold text-white transition hover:opacity-90"
					>
						Become a Partner
					</a>

					<a
						href="https://t.me/elenamelbetpartners"
						target="_blank"
						rel="noreferrer"
						className="rounded-xl border-2 border-black px-8 py-4 font-semibold text-black transition hover:bg-black hover:text-white"
					>
						Talk to a Manager
					</a>
				</div>
			</div>
		</section>
	);
}
