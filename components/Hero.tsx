export default function Hero() {
	return (
		<section className="bg-[#FAF8F2] px-8 py-20 text-[#111111]">
			<div className="mx-auto max-w-7xl">
				<div className="grid items-center gap-16 lg:grid-cols-2">
					<div>
						<p className="mb-4 text-lg font-semibold tracking-widest text-[#D4AF37]">
							MELBET PARTNERS
						</p>

						<h1 className="text-5xl font-extrabold leading-tight sm:text-6xl">
							START EARNING
							<br />
							WITH <span className="text-[#D4AF37]">CONFIDENCE</span>
						</h1>

						<p className="mt-8 max-w-xl text-xl leading-9 text-[#555555]">
							We support you at every step — from registration to your first
							affiliate income. Your success is our priority.
						</p>

						<div className="mt-10 flex flex-wrap gap-5">
							<a
								href="https://mlbt.cc/MelbetPartners"
								className="rounded-xl bg-[#D4AF37] px-8 py-4 font-semibold text-black transition hover:bg-[#C49B1E]"
							>
								Become a Partner
							</a>

							<a
								href="https://t.me/elenamelbetpartners"
								target="_blank"
								rel="noreferrer"
								className="rounded-xl border border-[#D4AF37] px-8 py-4 font-semibold transition hover:bg-[#D4AF37]"
							>
								Talk to a Manager
							</a>
						</div>
					</div>

					<div className="flex justify-center">
						<div className="w-full max-w-xl">
							<div className="rounded-t-3xl border-[10px] border-[#111111] bg-[#111111] p-3 shadow-2xl">
								<div className="min-h-[390px] rounded-xl bg-[#1B1B1B] p-8">
									<div className="flex items-center justify-between">
										<div>
											<p className="text-sm text-gray-400">Affiliate Dashboard</p>
											<p className="mt-2 text-2xl font-bold text-white">Welcome back</p>
										</div>
										<div className="h-10 w-10 rounded-full bg-[#D4AF37]" />
									</div>

									<div className="mt-10 grid gap-4 sm:grid-cols-3">
										{[
											["Clicks", "12,480", "text-white"],
											["Registrations", "1,286", "text-white"],
											["Earnings", "$8,940", "text-[#D4AF37]"],
										].map(([label, value, color]) => (
											<div key={label} className="rounded-xl bg-white/5 p-4">
												<p className="text-sm text-gray-400">{label}</p>
												<p className={`mt-2 text-2xl font-bold ${color}`}>{value}</p>
											</div>
										))}
									</div>

									<div className="mt-8 rounded-xl bg-white/5 p-6">
										<div className="flex h-40 items-end gap-3">
											{[35, 55, 45, 75, 65, 90].map((height, index) => (
												<div
													key={height}
													className="flex-1 rounded-t bg-[#D4AF37]"
													style={{ height: `${height}%`, opacity: 0.3 + index * 0.14 }}
												/>
											))}
										</div>
									</div>
								</div>
							</div>

							<div className="mx-auto h-5 w-[94%] rounded-b-2xl bg-[#C8C8C8]" />
							<div className="mx-auto h-3 w-[65%] rounded-b-full bg-[#AFAFAF]" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
