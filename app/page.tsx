import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen flex justify-center pt-20 bg-[#FAF8F2] text-[#111111]">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#0F0F0F]">
          START YOUR AFFILIATE JOURNEY WITH MELBET PARTNERS
        </h1>

        <p className="mt-6 text-lg text-[#444444]">
          Get personal support from experienced partner managers.
          We&apos;ll help you register, activate your account, and start earning
          with confidence.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="https://mlbt.cc/MelbetPartners"
            className="bg-[#D4AF37] text-black px-6 py-3 rounded-lg hover:bg-[#C49B1E] transition"
          >
            Become a Partner
          </Link>

          <Link
            href="https://t.me/elenamelbetpartners"
            target="_blank"
            className="border border-[#D4AF37] text-[#111111] px-6 py-3 rounded-lg hover:bg-[#D4AF37] hover:text-black transition"
          >
            Talk to a Manager
          </Link>
        </div>
      </div>
    </main>
  );
}