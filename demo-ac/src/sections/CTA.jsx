export default function CTA() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36 text-white">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black" />

      {/* Decorative Glow */}
      <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-600/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 bg-indigo-600/20 blur-3xl" />

      {/* Content */}
      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
          Discover What Your Birth Chart Reveals
        </h2>

        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Gain clarity on your career, relationships, and life direction through
          personalized astrology insights.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
          <button className="rounded-xl bg-white px-10 py-4 text-base font-semibold text-gray-900 shadow-lg hover:bg-gray-100 transition">
            Book for appointment          </button>

          <button className="rounded-xl border border-white/40 px-10 py-4 text-base font-semibold text-white hover:bg-white/10 transition">
            Free Reading           </button>
        </div>

        {/* Trust Hint */}
        {/* <p className="mt-6 text-sm text-gray-400">
          No spam • 100% confidential • Trusted by thousands
        </p> */}
      </div>
    </section>
  )
}
