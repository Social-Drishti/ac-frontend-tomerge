export default function Clarity() {
  return (
    <section className="py-20 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 md:grid-cols-2 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Know yourself deeply
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Astrology reveals patterns in your personality and behavior.
              Understanding these patterns empowers you to make intentional
              decisions about your future.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="rounded-lg bg-indigo-600 px-8 py-3 text-white font-medium hover:bg-indigo-700 transition">
                Start now
              </button>
              <button className="rounded-lg border border-gray-300 px-8 py-3 text-gray-700 hover:bg-gray-100 transition">
                Read more →
              </button>
            </div>
          </div>

          {/* RIGHT – CALCULATOR CARD */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl border border-amber-200 bg-amber-50/50 p-10 shadow-lg overflow-hidden aspect-square flex flex-col justify-center">
              {/* Transparent Kundli Chart Background */}
              <img
                src="/kundli-chart.svg"
                alt=""
                aria-hidden="true"
                className="absolute pointer-events-none"
                style={{
                  width: "90%",
                  height: "90%",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  opacity: 0.2,
                }}
              />

              <h3 className="relative z-10 text-xl font-semibold text-gray-800 text-center mb-6">
                Get Your Free Janam Kundali
              </h3>

              <div className="relative z-10 space-y-4">
                {/* Name + Gender */}
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-md border border-gray-300 bg-[#faf7f2]/80 px-3 py-2 text-sm focus:ring-1 focus:ring-red-500 outline-none"
                  />

                  <select className="w-full rounded-md border border-gray-300 bg-[#faf7f2]/80 px-3 py-2 text-sm focus:ring-1 focus:ring-red-500 outline-none">
                    <option>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Birth Date */}
                <div>
                  <label className="mb-1 block text-xs font-medium text-gray-700">
                    Birth Date
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <select className="w-full rounded-md border border-gray-300 bg-[#faf7f2]/80 px-2 py-2 text-sm outline-none">
                      <option>Day</option>
                    </select>
                    <select className="w-full rounded-md border border-gray-300 bg-[#faf7f2]/80 px-2 py-2 text-sm outline-none">
                      <option>Month</option>
                    </select>
                    <select className="w-full rounded-md border border-gray-300 bg-[#faf7f2]/80 px-2 py-2 text-sm outline-none">
                      <option>Year</option>
                    </select>
                  </div>
                </div>

                {/* Birth Time */}
                <div>
                  <label className="mb-1 block text-xs font-medium text-gray-700">
                    Birth Time
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <select className="w-full rounded-md border border-gray-300 bg-[#faf7f2]/80 px-2 py-2 text-sm outline-none">
                      <option>Hour</option>
                    </select>
                    <select className="w-full rounded-md border border-gray-300 bg-[#faf7f2]/80 px-2 py-2 text-sm outline-none">
                      <option>Min</option>
                    </select>
                    <select className="w-full rounded-md border border-gray-300 bg-[#faf7f2]/80 px-2 py-2 text-sm outline-none">
                      <option>AM/PM</option>
                    </select>
                  </div>
                </div>

                {/* Birth Place */}
                <input
                  type="text"
                  placeholder="Place of Birth"
                  className="w-full rounded-md border border-gray-300 bg-[#faf7f2]/80 px-3 py-2 text-sm focus:ring-1 focus:ring-red-500 outline-none"
                />

                {/* CTA */}
                <button className="w-full rounded-full bg-red-600 py-2.5 text-sm font-semibold text-white hover:bg-red-700 transition">
                  Get Your Kundali Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
