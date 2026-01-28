import AnimatedNumber from "../components/ui/AnimatedNumber";

export default function Impact() {
  const stats = [
    { value: "8,000+", label: "Charts read and analyzed" },
    { value: "15", label: "Years of astrological practice" },
    { value: "94%", label: "Clients report meaningful insights" },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
        {/* <span className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-800 mb-4">
          Impact
        </span> */}
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Numbers that speak to our work
        </h2>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          We've guided thousands through astro journeys. These figures reflect
          the lives we've touched and clarity gained.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <AnimatedNumber
                value={stat.value}
                className="text-5xl md:text-6xl font-bold text-indigo-600"
              />
              <p className="mt-4 text-lg text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <button className="rounded-lg border border-gray-300 px-8 py-3 hover:bg-gray-100">
            View more
          </button>
          <button className="rounded-lg bg-indigo-600 px-8 py-3 text-white hover:bg-indigo-700">
            Learn →
          </button>
        </div>
      </div>
    </section>
  );
}
