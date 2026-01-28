export default function Testimonial() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image placeholder */}
          <div className="aspect-square rounded-2xl overflow-hidden bg-gray-200 shadow-xl">
            {/* Replace with real photo */}
            {/* <img src={sarahImg} alt="Sarah Mitchell" className="object-cover w-full h-full" /> */}
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-2xl">
              Testimonial photo
            </div>
          </div>

          {/* Right: Quote */}
          <div>
            <div className="text-4xl text-yellow-400 mb-6">★★★★★</div>
            <blockquote className="text-2xl font-medium italic leading-relaxed">
              "The reading changed how I see myself. Suddenly everything made sense."
            </blockquote>
            <div className="mt-8">
              <p className="font-semibold">Sarah Mitchell</p>
              <p className="text-gray-600">Entrepreneur, New York</p>
            </div>
            <div className="mt-8 flex items-center gap-3 opacity-70">
              {/* Logos – can use img or SVG */}
              <span className="text-sm font-medium">Featured on</span>
              <div className="h-6 w-24 bg-gray-300 rounded" /> {/* Webflow placeholder */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}