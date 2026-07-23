import HeroContent from "./HeroContent";
import HeroLaptop from "./HeroLaptop";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-20 pt-16 sm:px-10 lg:px-16 lg:pb-28 lg:pt-24">
      <div className="absolute left-0 top-20 h-px w-32 bg-[#D8AA24]/40" />
      <div className="absolute right-0 top-40 h-px w-48 bg-[#D8AA24]/30" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <HeroContent />
        <HeroLaptop />
      </div>
    </section>
  );
}