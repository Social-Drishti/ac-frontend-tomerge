import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const zodiacSigns = [
  {
    name: "Aries",
    symbol: "♈",
    dates: "Mar 21 - Apr 19",
    element: "Fire",
    ruling: "Mars",
    horoscope:
      "Today brings exciting opportunities for leadership. Your natural courage and initiative will be recognized. Financial matters look promising, but avoid impulsive decisions. Romance is in the air for single Aries.",
    lucky: { number: 7, color: "Red", day: "Tuesday" },
    gradient: "from-red-500 to-orange-500",
  },
  {
    name: "Taurus",
    symbol: "♉",
    dates: "Apr 20 - May 20",
    element: "Earth",
    ruling: "Venus",
    horoscope:
      "Focus on practical matters and financial stability today. Your patience will be rewarded. A creative project may come to fruition. Take time to enjoy life's simple pleasures and connect with loved ones.",
    lucky: { number: 6, color: "Green", day: "Friday" },
    gradient: "from-green-600 to-emerald-500",
  },
  {
    name: "Gemini",
    symbol: "♊",
    dates: "May 21 - Jun 20",
    element: "Air",
    ruling: "Mercury",
    horoscope:
      "Communication is your superpower today. New connections and networking opportunities arise. Your versatility helps you adapt to changing circumstances. Stay curious and open to learning.",
    lucky: { number: 5, color: "Yellow", day: "Wednesday" },
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    name: "Cancer",
    symbol: "♋",
    dates: "Jun 21 - Jul 22",
    element: "Water",
    ruling: "Moon",
    horoscope:
      "Your intuition is particularly strong today. Family matters take priority. Create a nurturing environment for yourself and others. Trust your emotional intelligence to guide important decisions.",
    lucky: { number: 2, color: "Silver", day: "Monday" },
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    name: "Leo",
    symbol: "♌",
    dates: "Jul 23 - Aug 22",
    element: "Fire",
    ruling: "Sun",
    horoscope:
      "Your charisma shines brightly today. Creative projects flourish under your guidance. Recognition and appreciation come your way. Share your warmth and generosity with others.",
    lucky: { number: 1, color: "Gold", day: "Sunday" },
    gradient: "from-yellow-600 to-orange-600",
  },
  {
    name: "Virgo",
    symbol: "♍",
    dates: "Aug 23 - Sep 22",
    element: "Earth",
    ruling: "Mercury",
    horoscope:
      "Your analytical skills are in high demand. Organization and attention to detail bring success. Health and wellness activities are favored. Help others with your practical wisdom.",
    lucky: { number: 5, color: "Navy", day: "Wednesday" },
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    name: "Libra",
    symbol: "♎",
    dates: "Sep 23 - Oct 22",
    element: "Air",
    ruling: "Venus",
    horoscope:
      "Balance and harmony are your focus today. Relationships deepen through honest communication. Your diplomatic skills resolve conflicts. Beauty and art inspire you.",
    lucky: { number: 6, color: "Pink", day: "Friday" },
    gradient: "from-pink-500 to-rose-500",
  },
  {
    name: "Scorpio",
    symbol: "♏",
    dates: "Oct 23 - Nov 21",
    element: "Water",
    ruling: "Pluto",
    horoscope:
      "Deep transformation is underway. Your intensity and focus help you achieve goals. Trust your instincts in financial matters. Emotional connections reach new depths.",
    lucky: { number: 9, color: "Maroon", day: "Tuesday" },
    gradient: "from-red-900 to-orange-900",
  },
  {
    name: "Sagittarius",
    symbol: "♐",
    dates: "Nov 22 - Dec 21",
    element: "Fire",
    ruling: "Jupiter",
    horoscope:
      "Adventure calls to you today. Expand your horizons through learning or travel. Your optimism is contagious. Share your philosophical insights with others.",
    lucky: { number: 3, color: "Purple", day: "Thursday" },
    gradient: "from-purple-600 to-violet-600",
  },
  {
    name: "Capricorn",
    symbol: "♑",
    dates: "Dec 22 - Jan 19",
    element: "Earth",
    ruling: "Saturn",
    horoscope:
      "Your discipline and ambition drive success today. Long-term goals come into focus. Professional recognition is likely. Build solid foundations for future growth.",
    lucky: { number: 8, color: "Brown", day: "Saturday" },
    gradient: "from-stone-700 to-amber-800",
  },
  {
    name: "Aquarius",
    symbol: "♒",
    dates: "Jan 20 - Feb 18",
    element: "Air",
    ruling: "Uranus",
    horoscope:
      "Innovation and originality set you apart. Group activities and social causes inspire you. Your unique perspective brings fresh solutions. Embrace your individuality.",
    lucky: { number: 4, color: "Turquoise", day: "Saturday" },
    gradient: "from-cyan-600 to-blue-600",
  },
  {
    name: "Pisces",
    symbol: "♓",
    dates: "Feb 19 - Mar 20",
    element: "Water",
    ruling: "Neptune",
    horoscope:
      "Your creativity and compassion shine today. Spiritual practices bring clarity. Artistic endeavors flourish. Trust your dreams and intuitive insights.",
    lucky: { number: 7, color: "Sea Green", day: "Thursday" },
    gradient: "from-teal-500 to-green-500",
  },
];

export default function NatalChart() {
  const [selectedSign, setSelectedSign] = useState(null);
  const [viewMode, setViewMode] = useState("grid"); // grid or list

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen"
        style={{
          background: `linear-gradient(135deg, rgba(248, 250, 252, 0.95) 0%, rgba(241, 245, 249, 0.95) 100%), 
          url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect fill="%23D4AF8F" width="200" height="200"/><line x1="30" y1="20" x2="30" y2="120" stroke="%23A0826D" stroke-width="3" opacity="0.6"/><line x1="70" y1="30" x2="70" y2="130" stroke="%23A0826D" stroke-width="2.5" opacity="0.5"/><line x1="100" y1="15" x2="100" y2="140" stroke="%23A0826D" stroke-width="3" opacity="0.6"/><line x1="130" y1="25" x2="130" y2="135" stroke="%23A0826D" stroke-width="2.5" opacity="0.5"/><line x1="160" y1="20" x2="160" y2="125" stroke="%23A0826D" stroke-width="3" opacity="0.6"/><circle cx="40" cy="80" r="3" fill="%23C19A6B" opacity="0.7"/><circle cx="90" cy="70" r="2.5" fill="%23C19A6B" opacity="0.6"/><circle cx="140" cy="90" r="3" fill="%23C19A6B" opacity="0.7"/><circle cx="170" cy="60" r="2.5" fill="%23C19A6B" opacity="0.6"/></svg>')`,
          backgroundAttachment: "fixed",
        }}
      >
        {/* Header Section */}
        <div className="text-center pt-16 pb-8 px-4">
          <h1 className="text-5xl font-bold mb-4" style={{ color: "#800000" }}>
            Daily Horoscope
          </h1>
          <p className="text-xl mb-2" style={{ color: "#800000" }}>
            Discover what the stars have in store for you today
          </p>
          <p className="text-sm opacity-75" style={{ color: "#800000" }}>
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          {/* View Toggle */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setViewMode("grid")}
              className={`px-6 py-2 rounded-lg transition-all ${
                viewMode === "grid"
                  ? "bg-[#800000] text-[#f5e6d3]"
                  : "bg-[#f5e6d3] text-[#800000] border-2 border-[#800000]"
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`px-6 py-2 rounded-lg transition-all ${
                viewMode === "list"
                  ? "bg-[#800000] text-[#f5e6d3]"
                  : "bg-[#f5e6d3] text-[#800000] border-2 border-[#800000]"
              }`}
            >
              List View
            </button>
          </div>
        </div>

        {/* Zodiac Grid/List */}
        <div className="max-w-7xl mx-auto px-4 pb-16">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {zodiacSigns.map((sign) => (
                <div
                  key={sign.name}
                  onClick={() => setSelectedSign(sign)}
                  className="cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{
                    background: "#f5e6d3",
                    borderRadius: "16px",
                    border: "2px solid #800000",
                    padding: "24px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${sign.gradient} opacity-10`}
                  ></div>
                  <div className="relative z-10">
                    <div className="text-6xl text-center mb-3">
                      {sign.symbol}
                    </div>
                    <h3
                      className="text-2xl font-bold text-center mb-2"
                      style={{ color: "#800000" }}
                    >
                      {sign.name}
                    </h3>
                    <p
                      className="text-sm text-center mb-4 opacity-75"
                      style={{ color: "#800000" }}
                    >
                      {sign.dates}
                    </p>
                    <div className="text-center">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ background: "#800000", color: "#f5e6d3" }}
                      >
                        {sign.element}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {zodiacSigns.map((sign) => (
                <div
                  key={sign.name}
                  onClick={() => setSelectedSign(sign)}
                  className="cursor-pointer transform transition-all duration-300 hover:shadow-xl"
                  style={{
                    background: "#f5e6d3",
                    borderRadius: "12px",
                    border: "2px solid #800000",
                    padding: "20px",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">{sign.symbol}</div>
                    <div className="flex-1">
                      <h3
                        className="text-2xl font-bold mb-1"
                        style={{ color: "#800000" }}
                      >
                        {sign.name}
                      </h3>
                      <p
                        className="text-sm opacity-75"
                        style={{ color: "#800000" }}
                      >
                        {sign.dates} • {sign.element} • Ruled by {sign.ruling}
                      </p>
                    </div>
                    <div>
                      <span className="text-sm" style={{ color: "#800000" }}>
                        Read More →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal for Selected Sign */}
        {selectedSign && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedSign(null)}
          >
            <div
              className="max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              style={{
                background: "#f5e6d3",
                borderRadius: "20px",
                border: "3px solid #800000",
                padding: "32px",
                position: "relative",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSign(null)}
                className="absolute top-4 right-4 text-3xl hover:scale-110 transition-transform"
                style={{ color: "#800000" }}
              >
                ×
              </button>

              {/* Header */}
              <div className="text-center mb-6">
                <div className="text-8xl mb-4">{selectedSign.symbol}</div>
                <h2
                  className="text-4xl font-bold mb-2"
                  style={{ color: "#800000" }}
                >
                  {selectedSign.name}
                </h2>
                <p className="text-lg opacity-75" style={{ color: "#800000" }}>
                  {selectedSign.dates}
                </p>
                <div className="flex justify-center gap-3 mt-4">
                  <span
                    className="px-4 py-2 rounded-full text-sm font-semibold"
                    style={{ background: "#800000", color: "#f5e6d3" }}
                  >
                    {selectedSign.element}
                  </span>
                  <span
                    className="px-4 py-2 rounded-full text-sm font-semibold"
                    style={{ background: "#800000", color: "#f5e6d3" }}
                  >
                    Ruling: {selectedSign.ruling}
                  </span>
                </div>
              </div>

              {/* Horoscope */}
              <div className="mb-6">
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: "#800000" }}
                >
                  Today's Horoscope
                </h3>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "#800000" }}
                >
                  {selectedSign.horoscope}
                </p>
              </div>

              {/* Lucky Elements */}
              <div className="grid grid-cols-3 gap-4">
                <div
                  className="text-center p-4 rounded-lg"
                  style={{ background: "#d4b5a0" }}
                >
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{ color: "#800000" }}
                  >
                    {selectedSign.lucky.number}
                  </div>
                  <div
                    className="text-sm opacity-75"
                    style={{ color: "#800000" }}
                  >
                    Lucky Number
                  </div>
                </div>
                <div
                  className="text-center p-4 rounded-lg"
                  style={{ background: "#d4b5a0" }}
                >
                  <div
                    className="text-lg font-bold mb-1"
                    style={{ color: "#800000" }}
                  >
                    {selectedSign.lucky.color}
                  </div>
                  <div
                    className="text-sm opacity-75"
                    style={{ color: "#800000" }}
                  >
                    Lucky Color
                  </div>
                </div>
                <div
                  className="text-center p-4 rounded-lg"
                  style={{ background: "#d4b5a0" }}
                >
                  <div
                    className="text-lg font-bold mb-1"
                    style={{ color: "#800000" }}
                  >
                    {selectedSign.lucky.day}
                  </div>
                  <div
                    className="text-sm opacity-75"
                    style={{ color: "#800000" }}
                  >
                    Lucky Day
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 text-center">
                <button
                  className="px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
                  style={{ background: "#800000", color: "#f5e6d3" }}
                >
                  Get Personalized Reading
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
