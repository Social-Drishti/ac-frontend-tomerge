import { useRef } from "react";
import { Link } from "react-router-dom";

export default function ServicesCarousel() {
  const carouselRef = useRef(null);

  const services = [
    {
      img: "/services-image/Transit-Reading.png",
      link: "/reading/transits",
    },
    {
      img: "/services-image/Muhurta.png",
      link: "/reading/muhurta",
    },
    {
      img: "/services-image/remedial-astrology.png",
      link: "/reading/remedial",
    },
    {
      img: "/services-image/Horary.png",
      link: "/reading/horary",
    },
    {
      img: "/services-image/lab-kitab.png",
      link: "/reading/lal-kitab",
    },
    {
      img: "/services-image/Career-astrology.png",
      link: "/reading/career-astrology",
    },
    {
      img: "/services-image/Compatibility.png",
      link: "/reading/compatibility",
    },
    {
      img: "/services-image/Natal-chart.png",
      link: "/reading/natal-chart",
    },
  ];

  const scroll = (direction) => {
    if (!carouselRef.current) return;
    const scrollAmount = 320;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6 relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-transparent border-0 p-0 hover:shadow-none"
        >
          <img
            src="/buttons/left-arrow.png"
            alt="Previous"
            className="h-6 w-auto"
          />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-transparent border-0 p-0 hover:bg-transparent hover:transform-none hover:shadow-none"
        >
          <img
            src="/buttons/right-arrow.png"
            alt="Next"
            className="h-6 w-auto"
          />
        </button>
        <div
          ref={carouselRef}
          className="flex gap-10 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar px-14"
        >
          {services.map((service, i) => (
            <Link
              to={service.link}
              key={i}
              className="min-w-[180px] snap-center text-center group no-underline"
            >
              <div className="mx-auto h-36 w-36 transition duration-300 group-hover:scale-110">
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-full w-full object-cover drop-shadow-[0_8px_12px_rgba(0,0,0,0.4)]"
                  style={{
                    filter:
                      "drop-shadow(2px 4px 6px rgba(0,0,0,0.5)) drop-shadow(-1px -2px 4px rgba(255,255,255,0.3))",
                  }}
                  loading="lazy"
                />
              </div>
              <p
                className="mt-4 font-semibold text-gray-800 group-hover:text-[#5f6b3a] transition-colors"
                style={{
                  textShadow:
                    "1px 1px 1px rgba(255,255,255,0.8), -1px -1px 1px rgba(0,0,0,0.2)",
                }}
              >
                {service.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
