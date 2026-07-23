export default function Footer() {
	return (
		<footer className="bg-[#111111] py-16 text-white">
			<div className="mx-auto flex max-w-7xl flex-col items-center px-8 text-center">
				<div className="text-4xl font-extrabold">
					<span className="text-white">MEL</span>
					<span className="text-[#D4AF37]">BET</span>
				</div>

				<p className="mt-2 text-sm tracking-[6px] text-gray-400">PARTNERS</p>

				<p className="mt-8 max-w-2xl text-gray-400">
					Helping affiliates grow with one of the world's leading betting
					brands through professional support and high-converting offers.
				</p>

				<div className="mt-10 flex flex-wrap justify-center gap-8 text-sm">
					<a
						href="https://mlbt.cc/MelbetPartners"
						className="transition hover:text-[#D4AF37]"
					>
						Become a Partner
					</a>

					<a
						href="https://t.me/elenamelbetpartners"
						target="_blank"
						rel="noreferrer"
						className="transition hover:text-[#D4AF37]"
					>
						Telegram
					</a>

					<a href="#faq" className="transition hover:text-[#D4AF37]">
						FAQ
					</a>
				</div>

				<div className="mt-10 border-t border-gray-700 pt-8 text-sm text-gray-500">
					© 2025 Melbet Partners. All rights reserved.
				</div>
			</div>
		</footer>
	);
}
