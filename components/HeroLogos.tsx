const logos = [
  "AFFSTAR",
  "iGB AFFILIATE",
  "SiGMA",
  "AFFJOBS",
  "CASINO GURU",
];

export default function HeroLogos() {
  return (
    <div className="mt-10">
      <p className="mb-4 text-xs text-[#8a8a8a]">
        Trusted by affiliates worldwide
      </p>

      <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-black tracking-tight text-[#b8b8b8] sm:text-base">
        {logos.map((logo) => (
          <span key={logo}>{logo}</span>
        ))}
      </div>
    </div>
  );
}