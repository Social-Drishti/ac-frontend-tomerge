export default function Guidance() {
  const cards = [
    {
      title: "Birth Chart Reading",
      subtitle: "Personal blueprint",
      desc: "Understand your core personality traits, emotional nature, and natural strengths. Discover the life themes and challenges written in your stars.",
      link: "Explore →",
    },
    {
      title: "Compatibility Analysis",
      subtitle: "Relationship dynamics",
      desc: "Explore emotional compatibility and communication patterns between you and others. Perfect for love, family, and business partnerships.",
      link: "Explore →",
    },
    {
      title: "Career & Life Direction",
      subtitle: "Professional alignment",
      desc: "Identify your career strengths, optimal work style, and growth opportunities. Find the best timing for major life changes.",
      link: "Explore →",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
        {/* <span className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium text-indigo-800 mb-4">
          Guidance
        </span> */}
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Your Path Through the Stars
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Unlock the wisdom written in your birth moment.
        </p>
        <p className="mt-2 text-md text-gray-500 max-w-2xl mx-auto">
          Astrology offers clear guidance across key life areas, helping you
          understand yourself and navigate relationships, career, and personal
          growth.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group rounded-2xl bg-white p-8 shadow-md transition hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-6 aspect-video rounded-xl bg-gray-200 flex items-center justify-center text-gray-400">
                {/* Placeholder – replace with image */}
                {/* <span className="text-6xl">✦</span> */}
              </div>
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="mt-2 font-medium text-indigo-600">
                {card.subtitle}
              </p>
              <p className="mt-4 text-gray-600">{card.desc}</p>
              <a
                href="#"
                className="mt-6 inline-block text-indigo-600 hover:text-indigo-800 font-medium"
              >
                {card.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
