import "./WhyAstrology.css";

export default function WhyAstrology() {
  return (
    <section className="py-2">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Why astrology matters
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Gain insight into yourself and make decisions aligned with your true
          nature. The cosmos offers wisdom that transcends the ordinary.
        </p>

        {/* <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="rounded-lg bg-indigo-600 px-8 py-3 text-white hover:bg-indigo-700">
            Discover
          </button>
          <button className="rounded-lg border border-gray-300 px-8 py-3 hover:bg-gray-100">
            Learn more
          </button>
        </div> */}

        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <div className="why-astrology-card">
            <div className="why-astrology-image">
              <img src="./whyastrology-images/self-awarness.png" alt="Self Awareness" />
            </div>
          </div>
          <div className="why-astrology-card">
            <div className="why-astrology-image">
              <img src="./whyastrology-images/relationships.png" alt="Relationships" />
            </div>
          </div>
          <div className="why-astrology-card">
            <div className="why-astrology-image">
              <img src="./whyastrology-images/life-directions.png" alt="Life Direction" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
