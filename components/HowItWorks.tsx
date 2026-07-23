export default function HowItWorks() {
  return (
    <section className="bg-[#FAF8F2] py-24">
      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[4px] text-[#D4AF37]">
            Simple Process
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#111111]">
            How It Works
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#666666]">
            Start earning in just a few simple steps.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl bg-white p-10 shadow-sm">
            <div className="mb-6 text-5xl font-bold text-[#D4AF37]">
              01
            </div>

            <h3 className="text-2xl font-bold">
              Register
            </h3>

            <p className="mt-4 text-[#666666] leading-8">
              Sign up using our affiliate registration form.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-10 shadow-sm">
            <div className="mb-6 text-5xl font-bold text-[#D4AF37]">
              02
            </div>

            <h3 className="text-2xl font-bold">
              Get Your Links
            </h3>

            <p className="mt-4 text-[#666666] leading-8">
              Receive tracking links and marketing materials.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-10 shadow-sm">
            <div className="mb-6 text-5xl font-bold text-[#D4AF37]">
              03
            </div>

            <h3 className="text-2xl font-bold">
              Earn Money
            </h3>

            <p className="mt-4 text-[#666666] leading-8">
              Bring new players and receive affiliate commissions.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}