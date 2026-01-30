export default function CTA() {
  return (
    <section
      className="relative overflow-hidden py-28 md:py-36 text-white"
      style={{
        backgroundImage: 'url("/cta-background.png")',
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute " />

      {/* Content */}
      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight md:text-6xl text-white drop-shadow-lg">
          Discover What Your Birth Chart Reveals
        </h2>

        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
          Gain clarity on your career, relationships, and life direction through
          personalized astrology insights.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
          <button className="rounded-xl px-10 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-[#4a5530] transform hover:scale-105">
            Free Consultation
          </button>

          <button className="rounded-xl bg-[#8B4513] px-10 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-[#723810] transform hover:scale-105">
            Call Now
          </button>
        </div>

  
      </div>
    </section>
  );
}
