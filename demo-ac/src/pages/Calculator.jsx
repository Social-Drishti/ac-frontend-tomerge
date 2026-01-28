import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./Calculator.css";

export default function Calculator() {
  const [selectedCalculator, setSelectedCalculator] = useState(null);
  const [kundliData, setKundliData] = useState({
    name: "",
    date: "",
    time: "",
    place: "",
  });
  const [matchData, setMatchData] = useState({
    person1Name: "",
    person1Date: "",
    person1Time: "",
    person2Name: "",
    person2Date: "",
    person2Time: "",
  });
  const [result, setResult] = useState(null);

  const handleKundliSubmit = (e) => {
    e.preventDefault();
    setResult({
      type: "kundli",
      message: `Kundli generated for ${kundliData.name} born on ${kundliData.date} at ${kundliData.time} in ${kundliData.place}`,
    });
  };

  const handleMatchSubmit = (e) => {
    e.preventDefault();
    const score = Math.floor(Math.random() * 36) + 1;
    setResult({
      type: "match",
      score: score,
      message: `Compatibility score between ${matchData.person1Name} and ${matchData.person2Name}: ${score}/36 points`,
    });
  };

  return (
    <>
      <Navbar />
      <div className="calculator-page">
        <div className="max-w-6xl mx-auto">
          <h1 className="calculator-title text-4xl font-bold text-center mb-2">
            Astrology Calculators
          </h1>
          <p className="calculator-subtitle text-center mb-12">
            Calculate your Kundli or check compatibility with your partner
          </p>

          {/* Calculator Cards */}
          {!selectedCalculator && (
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Kundli Calculator Card */}
              <div
                className="calculator-card"
                onClick={() => setSelectedCalculator("kundli")}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">📜</div>
                  <h2 className="calculator-card-title text-2xl font-bold mb-3">
                    Kundli Calculator
                  </h2>
                  <p className="calculator-card-text">
                    Generate your personalized birth chart (Kundli) based on
                    your birth details. Discover planetary positions and their
                    influence on your life.
                  </p>
                  <button className="calculator-card-button mt-6 px-6 py-3 rounded-lg font-semibold transition-all">
                    Generate Kundli
                  </button>
                </div>
              </div>

              {/* Match Making Calculator Card */}
              <div
                className="calculator-card"
                onClick={() => setSelectedCalculator("match")}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">💑</div>
                  <h2 className="calculator-card-title text-2xl font-bold mb-3">
                    Match Making Calculator
                  </h2>
                  <p className="calculator-card-text">
                    Check compatibility between two individuals based on their
                    birth charts. Get a detailed Guna Milan score (out of 36
                    points).
                  </p>
                  <button className="calculator-card-button mt-6 px-6 py-3 rounded-lg font-semibold transition-all">
                    Check Compatibility
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Kundli Form */}
          {selectedCalculator === "kundli" && (
            <div className="calculator-form-container">
              <button
                onClick={() => {
                  setSelectedCalculator(null);
                  setResult(null);
                }}
                className="calculator-back-button mb-4 px-4 py-2 rounded"
              >
                ← Back
              </button>
              <h2 className="calculator-form-heading text-3xl font-bold mb-6 text-center">
                Generate Your Kundli
              </h2>
              <form onSubmit={handleKundliSubmit}>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="calculator-label block mb-2 font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={kundliData.name}
                      onChange={(e) =>
                        setKundliData({ ...kundliData, name: e.target.value })
                      }
                      className="calculator-input w-full p-3 rounded-lg border"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="calculator-label block mb-2 font-medium">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      required
                      value={kundliData.date}
                      onChange={(e) =>
                        setKundliData({ ...kundliData, date: e.target.value })
                      }
                      className="calculator-input w-full p-3 rounded-lg border"
                    />
                  </div>
                  <div>
                    <label className="calculator-label block mb-2 font-medium">
                      Time of Birth
                    </label>
                    <input
                      type="time"
                      required
                      value={kundliData.time}
                      onChange={(e) =>
                        setKundliData({ ...kundliData, time: e.target.value })
                      }
                      className="calculator-input w-full p-3 rounded-lg border"
                    />
                  </div>
                  <div>
                    <label className="calculator-label block mb-2 font-medium">
                      Place of Birth
                    </label>
                    <input
                      type="text"
                      required
                      value={kundliData.place}
                      onChange={(e) =>
                        setKundliData({ ...kundliData, place: e.target.value })
                      }
                      className="calculator-input w-full p-3 rounded-lg border"
                      placeholder="City, Country"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="calculator-submit-button w-full py-3 rounded-lg font-bold text-lg transition-all"
                >
                  Generate Kundli
                </button>
              </form>
            </div>
          )}

          {/* Match Making Form */}
          {selectedCalculator === "match" && (
            <div className="calculator-form-container calculator-match-form-container">
              <button
                onClick={() => {
                  setSelectedCalculator(null);
                  setResult(null);
                }}
                className="calculator-back-button mb-4 px-4 py-2 rounded"
              >
                ← Back
              </button>
              <h2 className="calculator-form-heading text-3xl font-bold mb-6 text-center">
                Match Making Calculator
              </h2>
              <form onSubmit={handleMatchSubmit}>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Person 1 */}
                  <div>
                    <h3 className="calculator-section-heading text-xl font-semibold mb-4">
                      Person 1 Details
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="calculator-label block mb-2 font-medium">
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          value={matchData.person1Name}
                          onChange={(e) =>
                            setMatchData({
                              ...matchData,
                              person1Name: e.target.value,
                            })
                          }
                          className="calculator-input w-full p-3 rounded-lg border"
                          placeholder="Enter name"
                        />
                      </div>
                      <div>
                        <label className="calculator-label block mb-2 font-medium">
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          required
                          value={matchData.person1Date}
                          onChange={(e) =>
                            setMatchData({
                              ...matchData,
                              person1Date: e.target.value,
                            })
                          }
                          className="calculator-input w-full p-3 rounded-lg border"
                        />
                      </div>
                      <div>
                        <label className="calculator-label block mb-2 font-medium">
                          Time of Birth
                        </label>
                        <input
                          type="time"
                          required
                          value={matchData.person1Time}
                          onChange={(e) =>
                            setMatchData({
                              ...matchData,
                              person1Time: e.target.value,
                            })
                          }
                          className="calculator-input w-full p-3 rounded-lg border"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Person 2 */}
                  <div>
                    <h3 className="calculator-section-heading text-xl font-semibold mb-4">
                      Person 2 Details
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="calculator-label block mb-2 font-medium">
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          value={matchData.person2Name}
                          onChange={(e) =>
                            setMatchData({
                              ...matchData,
                              person2Name: e.target.value,
                            })
                          }
                          className="calculator-input w-full p-3 rounded-lg border"
                          placeholder="Enter name"
                        />
                      </div>
                      <div>
                        <label className="calculator-label block mb-2 font-medium">
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          required
                          value={matchData.person2Date}
                          onChange={(e) =>
                            setMatchData({
                              ...matchData,
                              person2Date: e.target.value,
                            })
                          }
                          className="calculator-input w-full p-3 rounded-lg border"
                        />
                      </div>
                      <div>
                        <label className="calculator-label block mb-2 font-medium">
                          Time of Birth
                        </label>
                        <input
                          type="time"
                          required
                          value={matchData.person2Time}
                          onChange={(e) =>
                            setMatchData({
                              ...matchData,
                              person2Time: e.target.value,
                            })
                          }
                          className="calculator-input w-full p-3 rounded-lg border"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="calculator-submit-button w-full mt-8 py-3 rounded-lg font-bold text-lg transition-all"
                >
                  Check Compatibility
                </button>
              </form>
            </div>
          )}

          {/* Results Display */}
          {result && (
            <div className="calculator-results mt-8 max-w-800px mx-auto">
              <h3 className="calculator-results-title text-2xl font-bold mb-4 text-center">
                {result.type === "kundli"
                  ? "Kundli Generated ✨"
                  : "Compatibility Results 💫"}
              </h3>
              {result.type === "match" && (
                <div className="text-center mb-4">
                  <div
                    className={`text-6xl font-bold ${
                      result.score >= 18
                        ? "calculator-score-excellent"
                        : result.score >= 12
                          ? "calculator-score-good"
                          : "calculator-score-fair"
                    }`}
                  >
                    {result.score}/36
                  </div>
                  <p className="calculator-results-score-text text-lg mt-2">
                    {result.score >= 24
                      ? "Excellent Match! 🎉"
                      : result.score >= 18
                        ? "Good Match 👍"
                        : result.score >= 12
                          ? "Fair Match 🤔"
                          : "Needs Consideration ⚠️"}
                  </p>
                </div>
              )}
              <p className="calculator-results-message text-center text-lg">
                {result.message}
              </p>
              <p className="calculator-results-note text-center mt-4 text-sm">
                For detailed analysis, please consult with our expert
                astrologers.
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
