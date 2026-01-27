import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Calculator() {
  const [selectedDate, setSelectedDate] = useState("");
  const [content, setContent] = useState(null);

  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);
    setContent(`Content and blogs for ${date}`);
  };

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen p-8"
        style={{
          background: `linear-gradient(to right, rgba(239, 246, 255, 0.95), rgba(238, 242, 255, 0.95)), 
          url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect fill="%23D4AF8F" width="200" height="200"/><line x1="30" y1="20" x2="30" y2="120" stroke="%23A0826D" stroke-width="3" opacity="0.6"/><line x1="70" y1="30" x2="70" y2="130" stroke="%23A0826D" stroke-width="2.5" opacity="0.5"/><line x1="100" y1="15" x2="100" y2="140" stroke="%23A0826D" stroke-width="3" opacity="0.6"/><line x1="130" y1="25" x2="130" y2="135" stroke="%23A0826D" stroke-width="2.5" opacity="0.5"/><line x1="160" y1="20" x2="160" y2="125" stroke="%23A0826D" stroke-width="3" opacity="0.6"/><circle cx="40" cy="80" r="3" fill="%23C19A6B" opacity="0.7"/><circle cx="90" cy="70" r="2.5" fill="%23C19A6B" opacity="0.6"/><circle cx="140" cy="90" r="3" fill="%23C19A6B" opacity="0.7"/><circle cx="170" cy="60" r="2.5" fill="%23C19A6B" opacity="0.6"/></svg>')`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center text-orange-600 mb-6">
            Astrology Calculator
          </h1>
          <p className="text-gray-700 text-center mb-6">
            Select a date to explore astrological insights, blogs, and more.
          </p>
          <div className="text-center mb-6">
            <label
              htmlFor="date-picker"
              className="block text-lg font-medium mb-2"
            >
              Select Date:
            </label>
            <input
              type="date"
              id="date-picker"
              className="border border-gray-300 rounded-lg p-2"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>
          {content && (
            <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6">
              <h2 className="text-2xl font-bold text-orange-600 mb-4">
                Insights for {selectedDate}
              </h2>
              <p className="text-gray-700">{content}</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
