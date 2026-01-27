import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Transits() {
  const [selectedDate, setSelectedDate] = useState("2026-01-27");
  const [selectedMonth, setSelectedMonth] = useState("January 2026");

  const planetaryEvents = [
    {
      date: "January 6, 2026, Tuesday",
      time: "08:19 AM",
      event: "Shukra & Mangal Yuddha",
      type: "conjunction",
    },
    {
      date: "January 6, 2026, Tuesday",
      time: "09:59 PM",
      event: "Surya & Shukra at 0°",
      type: "conjunction",
    },
    {
      date: "January 7, 2026, Wednesday",
      time: "12:04 AM",
      event: "Budha enters in P Ashadha",
      type: "transit",
    },
    {
      date: "January 8, 2026, Thursday",
      time: "08:09 AM",
      event: "Shukra & Mangal at 0°",
      type: "conjunction",
    },
    {
      date: "January 9, 2026, Friday",
      time: "05:04 PM",
      event: "Surya & Mangal at 0°",
      type: "conjunction",
    },
    {
      date: "January 9, 2026, Friday",
      time: "11:02 PM",
      event: "Shukra & Guru at 180°",
      type: "opposition",
    },
    {
      date: "January 10, 2026, Saturday",
      time: "12:26 PM",
      event: "Shukra enters in U Ashadha",
      type: "transit",
    },
    {
      date: "January 10, 2026, Saturday",
      time: "02:09 PM",
      event: "Surya & Guru at 180°",
      type: "opposition",
    },
    {
      date: "January 10, 2026, Saturday",
      time: "07:52 PM",
      event: "Mangal & Guru at 180°",
      type: "opposition",
    },
    {
      date: "January 11, 2026, Sunday",
      time: "08:42 AM",
      event: "Surya enters in U Ashadha",
      type: "transit",
    },
    {
      date: "January 11, 2026, Sunday",
      time: "09:18 PM",
      event: "Mangal enters in U Ashadha",
      type: "transit",
    },
    {
      date: "January 13, 2026, Tuesday",
      time: "12:15 AM",
      event: "Surya & Chandra Vyatipata",
      type: "special",
    },
    {
      date: "January 13, 2026, Tuesday",
      time: "04:02 AM",
      event: "Shukra enters in Makara",
      type: "transit",
    },
    {
      date: "January 14, 2026, Wednesday",
      time: "01:45 PM",
      event: "Budha & Guru at 180°",
      type: "opposition",
    },
    {
      date: "January 14, 2026, Wednesday",
      time: "03:13 PM",
      event: "Surya enters in Makara",
      type: "transit",
    },
    {
      date: "January 15, 2026, Thursday",
      time: "09:23 AM",
      event: "Budha enters in U Ashadha",
      type: "transit",
    },
    {
      date: "January 15, 2026, Thursday",
      time: "11:46 AM",
      event: "Shukra & Shani at 60°",
      type: "sextile",
    },
    {
      date: "January 16, 2026, Friday",
      time: "04:36 AM",
      event: "Mangal enters in Makara",
      type: "transit",
    },
    {
      date: "January 17, 2026, Saturday",
      time: "10:27 AM",
      event: "Budha enters in Makara",
      type: "transit",
    },
    {
      date: "January 17, 2026, Saturday",
      time: "04:08 PM",
      event: "Surya & Shani at 60°",
      type: "sextile",
    },
    {
      date: "January 18, 2026, Sunday",
      time: "04:25 AM",
      event: "Budha & Mangal Yuddha",
      type: "conjunction",
    },
    {
      date: "January 18, 2026, Sunday",
      time: "01:07 PM",
      event: "Budha & Mangal at 0°",
      type: "conjunction",
    },
    {
      date: "January 19, 2026, Monday",
      time: "09:37 AM",
      event: "Budha & Shani at 60°",
      type: "sextile",
    },
    {
      date: "January 20, 2026, Tuesday",
      time: "01:09 AM",
      event: "Arun transits Krittika Pada",
      type: "transit",
    },
    {
      date: "January 20, 2026, Tuesday",
      time: "11:28 AM",
      event: "Mangal & Shani at 60°",
      type: "sextile",
    },
    {
      date: "January 20, 2026, Tuesday",
      time: "12:13 PM",
      event: "Shani enters in U Bhadrapada",
      type: "transit",
    },
    {
      date: "January 21, 2026, Wednesday",
      time: "02:54 AM",
      event: "Shukra enters in Shravana",
      type: "transit",
    },
    {
      date: "January 21, 2026, Wednesday",
      time: "09:15 PM",
      event: "Surya & Budha at 0°",
      type: "conjunction",
    },
    {
      date: "January 23, 2026, Friday",
      time: "10:27 AM",
      event: "Budha enters in Shravana",
      type: "transit",
    },
    {
      date: "January 24, 2026, Saturday",
      time: "10:56 AM",
      event: "Surya enters in Shravana",
      type: "transit",
    },
    {
      date: "January 25, 2026, Sunday",
      time: "07:09 AM",
      event: "Ketu transits P Phalguni Pada",
      type: "transit",
    },
    {
      date: "January 26, 2026, Monday",
      time: "12:22 PM",
      event: "Surya & Chandra Vaidhriti",
      type: "special",
    },
    {
      date: "January 28, 2026, Wednesday",
      time: "07:25 AM",
      event: "Budha & Shukra Yuddha",
      type: "conjunction",
    },
    {
      date: "January 29, 2026, Thursday",
      time: "12:46 AM",
      event: "Mangal enters in Shravana",
      type: "transit",
    },
    {
      date: "January 29, 2026, Thursday",
      time: "03:42 PM",
      event: "Budha & Shukra at 0°",
      type: "conjunction",
    },
    {
      date: "January 30, 2026, Friday",
      time: "10:53 AM",
      event: "Guru transits Punarvasu Pada",
      type: "transit",
    },
    {
      date: "January 31, 2026, Saturday",
      time: "02:26 AM",
      event: "Budha & Guru at 150°",
      type: "aspect",
    },
    {
      date: "January 31, 2026, Saturday",
      time: "03:27 AM",
      event: "Budha enters in Dhanishtha",
      type: "transit",
    },
    {
      date: "January 31, 2026, Saturday",
      time: "03:07 PM",
      event: "Shukra & Guru at 150°",
      type: "aspect",
    },
    {
      date: "January 31, 2026, Saturday",
      time: "05:41 PM",
      event: "Shukra enters in Dhanishtha",
      type: "transit",
    },
  ];

  const getEventTypeColor = (type) => {
    switch (type) {
      case "conjunction":
        return "bg-red-100 text-red-800 border-red-200";
      case "opposition":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "transit":
        return "bg-green-100 text-green-800 border-green-200";
      case "sextile":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "aspect":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "special":
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Planetary Events & Transits
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understand current planetary movements and their cosmic
              influences. Track important astrological events happening this
              month.
            </p>
          </div>

          {/* Date Selector */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium text-gray-700">
                  Current Date:
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-700">
                  Location:
                </span>
                <span className="text-sm text-gray-600">New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Events Calendar */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedMonth} Planetary Events
              </h2>
              <div className="text-sm text-gray-500">
                {planetaryEvents.length} events this month
              </div>
            </div>

            {/* Event Type Legend */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm font-medium text-gray-700 mb-3">
                Event Types:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "conjunction",
                  "opposition",
                  "transit",
                  "sextile",
                  "aspect",
                  "special",
                ].map((type) => (
                  <span
                    key={type}
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${getEventTypeColor(type)}`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </span>
                ))}
              </div>
            </div>

            {/* Events List */}
            <div className="space-y-4">
              {planetaryEvents.map((event, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-medium text-gray-600">
                          {event.date}
                        </span>
                        <span className="text-sm text-gray-500">
                          {event.time}
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium border ${getEventTypeColor(event.type)}`}
                        >
                          {event.type}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {event.event}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Information Section */}
          <div className="mt-8 bg-indigo-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-indigo-900 mb-3">
              Understanding Planetary Events
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-indigo-800">
              <div>
                <p className="font-medium mb-2">Key Event Types:</p>
                <ul className="space-y-1">
                  <li>
                    • <strong>Conjunctions (0°):</strong> Planets align,
                    energies combine
                  </li>
                  <li>
                    • <strong>Oppositions (180°):</strong> Planets face each
                    other, tension and balance
                  </li>
                  <li>
                    • <strong>Transits:</strong> Planets moving into new signs
                    or nakshatras
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-2">Timing & Location:</p>
                <ul className="space-y-1">
                  <li>• Times are calculated for New Delhi, India</li>
                  <li>• Events may vary slightly based on your location</li>
                  <li>• Use this data for general astrological planning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
