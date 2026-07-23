import HeroFeatures from "./HeroFeatures";
import HeroLogos from "./HeroLogos";

export default function HeroContent() {
  return (
    <div className="relative z-10">
      <p className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-[#D8AA24]">
        Start earning with confidence
      </p>

      <h1 className="max-w-2xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-[#171717] sm:text-6xl lg:text-7xl">
        Grow your traffic.
        <span className="block text-[#D8AA24]">Increase your income.</span>
      </h1>

      <p className="mt-7 max-w-xl text-base leading-7 text-[#666] sm:text-lg">
        Join a reliable affiliate program built for ambitious partners. Get
        strong conversion rates, transparent statistics and dedicated support
        at every stage.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href="#cta"
          className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#D8AA24] px-8 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          Become a partner
        </a>

        <a
          href="#how-it-works"
          className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#d8d8d8] bg-white px-8 text-sm font-bold text-[#202020] transition hover:border-[#D8AA24]"
        >
          How it works
        </a>
      </div>

      <HeroFeatures />
      <HeroLogos />
    </div>
  );
}