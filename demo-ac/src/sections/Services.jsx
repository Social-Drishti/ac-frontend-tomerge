import { useRef } from "react"

export default function ServicesCarousel() {
  const carouselRef = useRef(null)

  const services = [
    {
      title: "Natal Chart",
      img: "https://img.icons8.com/?size=100&id=15342&format=png&color=000000:",
    },
    {
      title: "Compatibility",
      img: "https://img.icons8.com/color/96/like--v1.png",
    },
    {
      title: "Career Astrology",
      img: "https://img.icons8.com/color/96/briefcase.png",
    },
    {
      title: "Transit Reading",
      img: "https://img.icons8.com/color/96/full-moon.png",
    },
    {
      title: "Muhurta",
      img: "https://img.icons8.com/color/96/calendar--v1.png",
    },
    {
      title: "Remedial Astrology",
      img: "https://img.icons8.com/color/96/healing.png",
    },
    {
      title: "Horary (Prashna)",
      img: "https://img.icons8.com/color/96/help.png",
    },
    {
      title: "Lal Kitab",
      img: "https://img.icons8.com/color/96/book.png",
    },
  ]

  const scroll = (direction) => {
    if (!carouselRef.current) return
    const scrollAmount = 320

    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6 relative">

        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-gray-900 text-white flex items-center justify-center shadow hover:bg-gray-800"
        >
          ‹
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-gray-900 text-white flex items-center justify-center shadow hover:bg-gray-800"
        >
          ›
        </button>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-12 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar px-14"
        >
          {services.map((service, i) => (
            <div
              key={i}
              className="min-w-[160px] snap-center text-center group cursor-pointer"
            >
              <div className="mx-auto h-24 w-24 rounded-full bg-gray-900 flex items-center justify-center shadow-md transition duration-300 group-hover:scale-110">
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-12 w-12"
                  loading="lazy"
                />
              </div>
              <p className="mt-4 font-semibold text-gray-800">
                {service.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
