import { Link } from "react-router-dom";

export default function Guidance() {
  const cards = [
    {
      title: "Birth Chart Reading",
      desc: "Understand your core personality traits, emotional nature, and natural strengths. Discover the life themes and challenges written in your stars.",
      link: "Explore →",
      image: "/guidances-image/Birth-Chart-Reading.png",
      route: "/birth-chart-analysis",
    },
    {
      title: "Compatibility Analysis",
      desc: "Explore emotional compatibility and communication patterns between you and others. Perfect for love, family, and business partnerships.",
      link: "Explore →",
      image: "/guidances-image/Compatibility-Analysis.png",
      route: "/compatibility",
    },
    {
      title: "Career & Life Direction",
      desc: "Identify your career strengths, optimal work style, and growth opportunities. Find the best timing for major life changes.",
      link: "Explore →",
      image: "/guidances-image/Career-Direction.png",
      route: "/career-astrology",
    },
  ];

  return (
    <section className="py-2">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group transition hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-6 aspect-video rounded-xl overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="mt-2 font-medium text-indigo-600">
                {card.subtitle}
              </p>
              <p className="mt-4 text-gray-600">{card.desc}</p>
              <Link
                to={card.route}
                className="mt-6 inline-block text-indigo-600 hover:text-indigo-800 font-medium"
              >
                {card.link}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
