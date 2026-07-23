export default function HeroLaptop() {
  return (
    <div className="relative flex min-h-[560px] items-center justify-center lg:justify-end">
      {/* Background glow */}
      <div className="absolute right-8 top-16 h-[420px] w-[420px] rounded-full bg-[#E3B21B]/20 blur-[90px]" />

      {/* Decorative lines */}
      <div className="absolute right-0 top-24 h-px w-52 bg-[#D8AA24]/40" />
      <div className="absolute bottom-24 left-8 h-px w-40 bg-[#D8AA24]/30" />

      {/* Laptop wrapper */}
      <div className="relative w-full max-w-[720px] translate-x-6 rotate-[-7deg] lg:translate-x-16">
        {/* Screen frame */}
        <div className="overflow-hidden rounded-[28px] border border-[#d9d9d9] bg-[#202020] p-[10px] shadow-[0_35px_80px_rgba(0,0,0,0.20)]">
          {/* Screen */}
          <div className="overflow-hidden rounded-[20px] bg-[#f7f7f7]">
            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-[#dedede] bg-white px-7 py-5">
              <div>
                <div className="h-3 w-32 rounded-full bg-[#d5d5d5]" />
                <div className="mt-2 h-2 w-20 rounded-full bg-[#ececec]" />
              </div>

              <div className="rounded-full bg-[#E0AD17] px-4 py-2 text-[11px] font-bold uppercase text-white">
                Active
              </div>
            </div>

            {/* Dashboard */}
            <div className="grid gap-5 p-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-xs text-[#8a8a8a]">Revenue</p>
                  <p className="mt-2 text-3xl font-black text-[#151515]">
                    $24.8K
                  </p>
                  <p className="mt-2 text-xs font-semibold text-[#D8AA24]">
                    +18.4%
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-xs text-[#8a8a8a]">Clicks</p>
                  <p className="mt-2 text-3xl font-black text-[#151515]">
                    18.2K
                  </p>
                  <p className="mt-2 text-xs font-semibold text-[#D8AA24]">
                    +12.7%
                  </p>
                </div>

                <div className="rounded-2xl bg-[#171717] p-5 text-white shadow-sm">
                  <p className="text-xs text-white/60">Conversion</p>
                  <p className="mt-2 text-3xl font-black">7.8%</p>
                  <p className="mt-2 text-xs font-semibold text-[#E0AD17]">
                    Strong
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[1.4fr_0.6fr] gap-4">
                {/* Chart */}
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-[#202020]">
                        Performance
                      </p>
                      <p className="mt-1 text-xs text-[#999]">
                        Last 30 days
                      </p>
                    </div>

                    <div className="rounded-full bg-[#f4e8bb] px-3 py-1 text-[10px] font-bold text-[#9b7410]">
                      +22%
                    </div>
                  </div>

                  <div className="mt-8 flex h-48 items-end gap-3">
                    <div className="h-[34%] w-full rounded-t-lg bg-[#F1D88E]" />
                    <div className="h-[48%] w-full rounded-t-lg bg-[#EACB6C]" />
                    <div className="h-[42%] w-full rounded-t-lg bg-[#F0D98F]" />
                    <div className="h-[68%] w-full rounded-t-lg bg-[#E5BC3D]" />
                    <div className="h-[60%] w-full rounded-t-lg bg-[#EBCF77]" />
                    <div className="h-[84%] w-full rounded-t-lg bg-[#DDAA16]" />
                    <div className="h-[74%] w-full rounded-t-lg bg-[#E4BD42]" />
                  </div>
                </div>

                {/* Side stats */}
                <div className="grid gap-4">
                  <div className="rounded-2xl bg-[#E1AE18] p-5 text-white shadow-sm">
                    <p className="text-xs text-white/75">New partners</p>
                    <p className="mt-2 text-3xl font-black">428</p>
                  </div>

                  <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <p className="text-xs text-[#8a8a8a]">Payouts</p>
                    <p className="mt-2 text-2xl font-black text-[#202020]">
                      $92K
                    </p>

                    <div className="mt-4 h-2 rounded-full bg-[#ececec]">
                      <div className="h-2 w-[76%] rounded-full bg-[#D8AA24]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Laptop base */}
        <div className="relative mx-auto h-5 w-[92%] rounded-b-[24px] bg-gradient-to-b from-[#d9d9d9] to-[#a8a8a8] shadow-[0_18px_25px_rgba(0,0,0,0.22)]">
          <div className="absolute left-1/2 top-0 h-2 w-24 -translate-x-1/2 rounded-b-lg bg-[#8f8f8f]" />
        </div>
      </div>
    </div>
  );
}