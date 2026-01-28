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
            <div className="w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">

              <h3 className="text-2xl font-semibold text-gray-800 text-center">
                Get Your Free Janam Kundali
              </h3>

              <div className="mt-8 space-y-6">

                {/* Name + Gender */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:ring-1 focus:ring-red-500 outline-none"
                  />

                  <select className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:ring-1 focus:ring-red-500 outline-none">
                    <option>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Birth Date */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Birth Date
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    <select className="input">Day</select>
                    <select className="input">Month</select>
                    <select className="input">Year</select>
                  </div>
                </div>

                {/* Birth Time */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Birth Time
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    <select className="input">Hour</select>
                    <select className="input">Minute</select>
                    <select className="input">AM / PM</select>
                  </div>
                </div>

                {/* Birth Place */}
                <input
                  type="text"
                  placeholder="Place of Birth"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:ring-1 focus:ring-red-500 outline-none"
                />

                {/* CTA */}
                <button className="w-full rounded-full bg-red-600 py-3 text-sm font-semibold text-white hover:bg-red-700 transition">
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
