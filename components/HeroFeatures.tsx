const features = [
  {
    title: "Personal Manager",
    text: "Dedicated support from experienced managers",
    icon: "👤",
  },
  {
    title: "Fast Registration",
    text: "Quick and easy account activation",
    icon: "⚡",
  },
  {
    title: "Weekly Payments",
    text: "Reliable weekly payments on time",
    icon: "💳",
  },
  {
    title: "Free Support",
    text: "We're here to help you grow",
    icon: "🎧",
  },
];

export default function HeroFeatures() {
  return (
    <div className="mt-8 space-y-5">
      {features.map((item) => (
        <div key={item.title} className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D8AA24] text-xl">
            {item.icon}
          </div>

          <div>
            <h3 className="font-semibold text-[#202020]">
              {item.title}
            </h3>

            <p className="mt-1 text-sm leading-6 text-[#666]">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}