import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-indigo-50">
        {/* 1. Hero Section */}
        <section
          className="px-4 py-20 md:py-32 text-center"
          style={{
            background: `linear-gradient(135deg, rgba(248, 250, 252, 0.95) 0%, rgba(241, 245, 249, 0.95) 100%), 
            url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect fill="%23D4AF8F" width="200" height="200"/><line x1="30" y1="20" x2="30" y2="120" stroke="%23A0826D" stroke-width="3" opacity="0.6"/><line x1="70" y1="30" x2="70" y2="130" stroke="%23A0826D" stroke-width="2.5" opacity="0.5"/><line x1="100" y1="15" x2="100" y2="140" stroke="%23A0826D" stroke-width="3" opacity="0.6"/><line x1="130" y1="25" x2="130" y2="135" stroke="%23A0826D" stroke-width="2.5" opacity="0.5"/><line x1="160" y1="20" x2="160" y2="125" stroke="%23A0826D" stroke-width="3" opacity="0.6"/><circle cx="40" cy="80" r="3" fill="%23C19A6B" opacity="0.7"/><circle cx="90" cy="70" r="2.5" fill="%23C19A6B" opacity="0.6"/><circle cx="140" cy="90" r="3" fill="%23C19A6B" opacity="0.7"/><circle cx="170" cy="60" r="2.5" fill="%23C19A6B" opacity="0.6"/></svg>')`,
            backgroundAttachment: "fixed",
          }}
        >
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Guided by the Stars,
              <br />
              <span className="text-orange-600">Rooted in Wisdom</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Astrology isn't about predicting the future—it's about
              understanding yourself better. We blend ancient cosmic wisdom with
              modern insights to guide your journey of self-discovery and
              personal growth.
            </p>
            <button className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Explore Our Journey
            </button>
          </div>
        </section>

        {/* 2. Who We Are */}
        <section className="px-4 py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left: Illustration Placeholder */}
              <div className="flex items-center justify-center">
                <div className="w-full h-80 md:h-96 bg-gradient-to-br from-orange-200 to-rose-200 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    {/* <div className="text-6xl mb-4">✨</div> */}
                    {/* <p className="text-gray-600 font-semibold">
                      Cosmic Illustration
                    </p> */}
                  </div>
                </div>
              </div>

              {/* Right: Brand Philosophy */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Who We Are
                </h2>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  Founded on the belief that astrology serves as a mirror to the
                  soul, we've created a space where ancient cosmic knowledge
                  meets contemporary psychological insight.
                </p>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  Our team of dedicated astrologers combines decades of
                  expertise with rigorous study of planetary movements, natal
                  charts, and transits. We're passionate about making astrology
                  accessible, practical, and transformative for everyone.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Every reading is personalized. Every insight is grounded in
                  precision. Every journey is unique.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Mission & Vision */}
        <section className="px-4 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
              Our Mission & Vision
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-100">
                {/* <div className="text-5xl mb-6">🎯</div> */}
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To empower individuals with self-awareness and clarity by
                  providing authentic, personalized astrological guidance that
                  honors both the ancient wisdom of the cosmos and the modern
                  complexities of human life.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-indigo-100">
                {/* <div className="text-5xl mb-6">🌟</div> */}
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  A world where astrology is recognized as an ethical, practical
                  tool for personal development—helping people make conscious
                  choices, understand their relationships, and align with their
                  cosmic purpose.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. What Makes Us Different */}
        <section className="px-4 py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
              What Makes Us Different
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="bg-gradient-to-br from-orange-50 to-rose-50 rounded-xl p-8 border border-orange-200 hover:shadow-lg transition-shadow duration-300">
                {/* <div className="text-4xl mb-4">🔍</div> */}
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Precision Accuracy
                </h4>
                <p className="text-gray-700 text-sm">
                  Meticulous analysis of birth data, timing, and planetary
                  positions for truly personalized insights.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200 hover:shadow-lg transition-shadow duration-300">
                {/* <div className="text-4xl mb-4">👥</div> */}
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Personalization
                </h4>
                <p className="text-gray-700 text-sm">
                  Every chart is unique, and so is every reading. We tailor
                  guidance to your specific circumstances.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200 hover:shadow-lg transition-shadow duration-300">
                {/* <div className="text-4xl mb-4">⚖️</div> */}
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Ethical Practice
                </h4>
                <p className="text-gray-700 text-sm">
                  We practice astrology with integrity, never promising
                  guaranteed outcomes or preying on fears.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8 border border-green-200 hover:shadow-lg transition-shadow duration-300">
                {/* <div className="text-4xl mb-4">🔧</div> */}
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Modern Tools
                </h4>
                <p className="text-gray-700 text-sm">
                  Ancient wisdom meets modern technology. Our platform makes
                  cosmic guidance accessible anytime, anywhere.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
              Our Astrology Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">

              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-600 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 mx-auto bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    1
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Birth Data Analysis
                  </h4>
                  <p className="text-gray-700 text-sm">
                    We analyze your exact birth time, date, and location to map
                    your unique cosmic blueprint.
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-orange-600 text-3xl">
                  →
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-indigo-600 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 mx-auto bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    2
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Planetary Interpretation
                  </h4>
                  <p className="text-gray-700 text-sm">
                    We interpret the positions and movements of planets to
                    reveal your personality, strengths, and growth areas.
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-indigo-600 text-3xl">
                  →
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-600 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 mx-auto bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    3
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Timing & Transits
                  </h4>
                  <p className="text-gray-700 text-sm">
                    We examine current planetary transits to identify optimal
                    timing for major life decisions.
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-purple-600 text-3xl">
                  →
                </div>
              </div>

              {/* Step 4 */}
              <div>
                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-rose-600 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 mx-auto bg-rose-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    4
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Practical Guidance
                  </h4>
                  <p className="text-gray-700 text-sm">
                    We deliver actionable insights and wisdom to help you
                    navigate life's journey with clarity and confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Meet the Astrologer */}
        <section className="px-4 py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
              Meet Our Lead Astrologer
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-orange-100 to-rose-100 rounded-2xl p-12 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Image Placeholder */}
                <div className="w-32 h-32 md:w-40 md:h-40 mx-auto bg-gray-300 rounded-full flex items-center justify-center mb-8 text-5xl">
                  👤
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Astrologist Name
                </h3>
                <p className="text-lg text-orange-700 font-semibold mb-6">
                  Vedic Astrology Expert & Spiritual Guide
                </p>

                <p className="text-gray-700 text-lg mb-6 italic leading-relaxed">
                  "The stars don't determine your fate—they illuminate your
                  path. Every chart tells a story, and every reading is a
                  conversation with your cosmic self."
                </p>

                <div className="flex justify-center gap-4">
                  <button className="px-6 py-2 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300">
                    Connect with Astrologer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Value 1 */}
              <div className="text-center">
                <div className="text-5xl mb-4">🛡️</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Integrity
                </h4>
                <p className="text-gray-700">
                  Honest, transparent, and ethical in every reading and
                  interaction.
                </p>
              </div>

              {/* Value 2 */}
              <div className="text-center">
                <div className="text-5xl mb-4">💖</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Compassion
                </h4>
                <p className="text-gray-700">
                  Understanding and empathetic guidance that honors your
                  journey.
                </p>
              </div>

              {/* Value 3 */}
              <div className="text-center">
                <div className="text-5xl mb-4">✨</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Accuracy
                </h4>
                <p className="text-gray-700">
                  Precise calculations and deep knowledge of astrological
                  principles.
                </p>
              </div>

              {/* Value 4 */}
              <div className="text-center">
                <div className="text-5xl mb-4">🌿</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Growth</h4>
                <p className="text-gray-700">
                  Empowering your personal development and conscious
                  decision-making.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Final CTA */}
        <section
          className="px-4 py-20 md:py-32 text-white"
          style={{
            background: `linear-gradient(to right, rgba(234, 88, 12, 0.95), rgba(225, 29, 72, 0.95)), 
            url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect fill="%23D4AF8F" width="200" height="200"/><line x1="30" y1="20" x2="30" y2="120" stroke="%23A0826D" stroke-width="3" opacity="0.6"/><line x1="70" y1="30" x2="70" y2="130" stroke="%23A0826D" stroke-width="2.5" opacity="0.5"/><line x1="100" y1="15" x2="100" y2="140" stroke="%23A0826D" stroke-width="3" opacity="0.6"/><line x1="130" y1="25" x2="130" y2="135" stroke="%23A0826D" stroke-width="2.5" opacity="0.5"/><line x1="160" y1="20" x2="160" y2="125" stroke="%23A0826D" stroke-width="3" opacity="0.6"/><circle cx="40" cy="80" r="3" fill="%23C19A6B" opacity="0.7"/><circle cx="90" cy="70" r="2.5" fill="%23C19A6B" opacity="0.6"/><circle cx="140" cy="90" r="3" fill="%23C19A6B" opacity="0.7"/><circle cx="170" cy="60" r="2.5" fill="%23C19A6B" opacity="0.6"/></svg>')`,
            backgroundAttachment: "fixed",
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Begin Your Cosmic Journey
            </h2>
            <p className="text-xl md:text-2xl mb-10 opacity-95 leading-relaxed">
              Discover the wisdom written in your stars. Unlock clarity, embrace
              your potential, and navigate life with cosmic guidance tailored
              just for you.
            </p>
            <button className="bg-white text-orange-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Get Your Reading Now
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
