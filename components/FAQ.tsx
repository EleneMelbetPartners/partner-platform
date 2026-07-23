const questions = [
	{
		question: "How do I join Melbet Partners?",
		answer:
			"Click the Become a Partner button, complete the registration form and wait for your account to be reviewed.",
	},
	{
		question: "How do affiliate payments work?",
		answer:
			"Your earnings depend on the agreed cooperation model and the results generated through your tracking links.",
	},
	{
		question: "Will I get a personal manager?",
		answer:
			"Yes. You can contact a manager for help with registration, promotional materials and campaign development.",
	},
	{
		question: "Where can I see my results?",
		answer:
			"Your affiliate account provides access to statistics, conversions, registrations and other campaign data.",
	},
];

export default function FAQ() {
	return (
		<section id="faq" className="bg-white py-24">
			<div className="mx-auto max-w-4xl px-8">
				<div className="text-center">
					<p className="text-sm font-semibold uppercase tracking-[4px] text-[#D4AF37]">
						Frequently Asked Questions
					</p>

					<h2 className="mt-4 text-5xl font-bold text-[#111111]">
						Everything You Need to Know
					</h2>

					<p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#666666]">
						Find answers to the most common questions about joining and working
						with Melbet Partners.
					</p>
				</div>

				<div className="mt-16 space-y-4">
					{questions.map((item) => (
						<details
							key={item.question}
							className="group rounded-2xl border border-[#EFE7D5] bg-[#FAF8F2] p-6"
						>
							<summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-bold text-[#111111]">
								{item.question}

								<span className="text-3xl font-light text-[#D4AF37] transition group-open:rotate-45">
									+
								</span>
							</summary>

							<p className="mt-4 max-w-3xl leading-8 text-[#666666]">
								{item.answer}
							</p>
						</details>
					))}
				</div>
			</div>
		</section>
	);
}
