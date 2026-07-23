import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#FAF8F2] border-b border-[#EFE7D5]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

        {/* Логотип */}
        <div className="text-3xl font-extrabold tracking-tight">
          <span className="text-[#111111]">MEL</span>
          <span className="text-[#D4AF37]">BET</span>

          <div className="text-sm font-medium tracking-[6px] text-[#555555]">
            PARTNERS
          </div>
        </div>

        {/* Меню */}
        <nav className="hidden gap-8 text-sm font-medium text-[#333333] lg:flex">
          <a href="#">Why Melbet</a>
          <a href="#">How It Works</a>
          <a href="#">Benefits</a>
          <a href="#">FAQ</a>
          <a href="#">Resources</a>
          <a href="#">Contact</a>
        </nav>

        {/* Кнопки */}
        <div className="flex items-center gap-4">

          <Link
            href="https://mlbt.cc/MelbetPartners"
            className="rounded-xl bg-[#D4AF37] px-6 py-3 font-semibold text-black transition hover:bg-[#C49B1E]"
          >
            Become a Partner
          </Link>

          <Link
            href="https://t.me/elenamelbetpartners"
            target="_blank"
            className="rounded-xl border border-[#D4AF37] px-6 py-3 font-semibold text-[#111111] transition hover:bg-[#D4AF37]"
          >
            Talk to a Manager
          </Link>

        </div>

      </div>
    </header>
  );
}