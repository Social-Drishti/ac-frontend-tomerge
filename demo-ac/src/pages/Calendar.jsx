import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./Calendar.css";

// Hindu Time Conversion Component
const HinduTimeWidget = () => {
  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Calculate Hindu Time units
  const calculateHinduTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // Total seconds since midnight
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;

    // 1 day (86400 seconds) = 60 Ghati
    // 1 Ghati = 1440 seconds
    const ghati = Math.floor(totalSeconds / 1440);
    const remainingAfterGhati = totalSeconds % 1440;

    // 1 Pala/Vighati = 24 seconds
    const pala = Math.floor(remainingAfterGhati / 24);
    const remainingAfterPala = remainingAfterGhati % 24;

    // 1 Lipta/Vipala = 0.4 seconds
    const lipta = Math.floor(remainingAfterPala / 0.4);

    return { ghati, pala, lipta };
  };

  const hinduTime = calculateHinduTime(currentTime);

  const panchangData = {
    tithi: "Panchami",
    paksha: "Shukla Paksha",
    masa: "Maaha",
    year: "2082",
    sunrise: "07:21 AM",
    sunset: "18:21 PM",
    date: currentTime.toLocaleDateString("en-IN"),
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Hindu Time Clock */}
      <div className="rounded-xl shadow-lg p-6 calendar-card">
        <h2 className="text-2xl text-orange-600 mb-4 text-center font-bold">
          Hindu Time
        </h2>

        {/* Hindu Time Display */}
        <div className="bg-white rounded-lg p-6 mb-4 text-center">
          <div className="text-4xl text-orange-700 mb-2">
            {String(hinduTime.ghati).padStart(2, "0")} :{" "}
            {String(hinduTime.pala).padStart(2, "0")} :{" "}
            {String(hinduTime.lipta).padStart(2, "0")}
          </div>
          <div className="text-sm text-gray-600">Ghati : Pala : Lipta</div>
        </div>

        {/* Standard Time Display */}
        <div className="bg-orange-50 rounded-lg p-4 mb-4 text-center">
          <div className="text-2xl text-gray-700">
            {currentTime.toLocaleTimeString("en-IN", { hour12: false })}
          </div>
          <div className="text-xs text-gray-600">HH : MM : SS</div>
        </div>

        {/* Hindu Time Units Information */}
        <div className="bg-orange-50 rounded-lg p-4 text-xs text-gray-700 space-y-1">
          <p className="text-orange-600 mb-2">Hindu Time:</p>
          <p>1 day (24 hours) = 60 Ghatis</p>
          <p>1 Ghati = 60 Vighati (Pala/Kala)</p>
          <p>1 Vighati = 60 Lipta (Vipala/Vikala)</p>
          <p>1 Lipta = 60 Vilipta</p>
          <p>1 Vilipta = 60 Para</p>
          <p>1 Para = 60 Tatpara</p>
        </div>
      </div>

      {/* Panchang Details */}
      <div className="rounded-xl shadow-lg p-6 calendar-card">
        <h2 className="text-2xl text-orange-600 mb-4 text-center">
          Today's Panchang
        </h2>

        <div className="space-y-3">
          {/* Date */}
          <div className="bg-white rounded-lg p-4">
            <div className="text-sm text-gray-600">Date</div>
            <div className="text-xl text-gray-800">{panchangData.date}</div>
          </div>

          {/* Tithi */}
          <div className="bg-white rounded-lg p-4">
            <div className="text-sm text-gray-600">Tithi</div>
            <div className="text-xl font-semibold text-orange-700">
              {panchangData.tithi}
            </div>
          </div>

          {/* Paksha & Month */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-lg p-4">
              <div className="text-xs text-gray-600">Paksha</div>
              <div className="text-sm font-semibold text-gray-800">
                {panchangData.paksha}
              </div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-xs text-gray-600">Vikram Samvat</div>
              <div className="text-sm font-semibold text-gray-800">
                {panchangData.year}
              </div>
            </div>
          </div>

          {/* Sun Timings */}
          <div className="bg-orange-50 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">🌅</span>
                <div>
                  <div className="text-xs text-gray-600">Sunrise</div>
                  <div className="text-lg text-gray-800">
                    {panchangData.sunrise}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🌇</span>
                <div>
                  <div className="text-xs text-gray-600">Sunset</div>
                  <div className="text-lg text-gray-800">
                    {panchangData.sunset}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FESTIVALS = {
  "2026-01-26": { name: "Republic Day", type: "National" },
  "2026-02-19": { name: "Maha Shivaratri", type: "Hindu" },
  "2026-03-15": { name: "Holi", type: "Hindu" },
  "2026-03-30": { name: "Ram Navami", type: "Hindu" },
  "2026-04-21": { name: "Mahavir Jayanti", type: "Hindu" },
  "2026-05-15": { name: "Buddha Purnima", type: "Hindu" },
  "2026-08-15": { name: "Independence Day", type: "National" },
  "2026-08-30": { name: "Janmashtami", type: "Hindu" },
  "2026-10-02": { name: "Gandhi Jayanti", type: "National" },
  "2026-10-03": { name: "Dussehra", type: "Hindu" },
  "2026-10-23": { name: "Diwali", type: "Hindu" },
  "2026-10-24": { name: "Govardhan Puja", type: "Hindu" },
  "2026-11-01": { name: "Bhai Dooj", type: "Hindu" },
};

const PANCHANG_DATA = {
  nakshatra: [
    "Ashwini",
    "Bharani",
    "Kritika",
    "Rohini",
    "Mrigashira",
    "Ardra",
    "Punarvasu",
    "Pushya",
    "Ashlesha",
    "Magha",
    "Purva Phalguni",
    "Uttara Phalguni",
    "Hasta",
    "Chitra",
    "Swati",
    "Vishakha",
    "Anuradha",
    "Jyeshtha",
    "Mula",
    "Purva Ashadha",
    "Uttara Ashadha",
    "Shravana",
    "Dhanishtha",
    "Shatabhisha",
    "Purva Bhadrapada",
    "Uttara Bhadrapada",
    "Revati",
  ],
  yoga: [
    "Viskumbha",
    "Preeti",
    "Ayushman",
    "Saubhagya",
    "Shobhan",
    "Atiganda",
    "Sukarma",
    "Dhriti",
    "Shula",
    "Ganda",
    "Vriddhi",
    "Dhruva",
    "Vyaghata",
    "Harshana",
    "Vajra",
    "Siddhi",
    "Saadhya",
    "Shubha",
    "Shukla",
    "Brahma",
    "Indra",
    "Vaidhriti",
    "Parigha",
    "Shiva",
    "Siddha",
    "Sadhak",
    "Vimala",
  ],
  karana: [
    "Bava",
    "Balava",
    "Kaulava",
    "Taitila",
    "Gara",
    "Vanija",
    "Vishti",
    "Shakuni",
    "Chatushpada",
    "Naga",
    "Kimstughna",
  ],
};
const getMoonPhase = (date) => {
  // Known new moon date: January 29, 2026
  const knownNewMoon = new Date(2026, 0, 29, 12, 0, 0);
  const diffMs = date - knownNewMoon;
  const diffDays = diffMs / (1000 * 60 * 60 * 24);

  // Synodic month (lunar cycle) is 29.53059 days
  const lunarCycle = 29.53059;

  // Calculate phase (0-29.53059 days)
  let phase = diffDays % lunarCycle;
  if (phase < 0) phase += lunarCycle;

  return phase;
};

const getTithiAndPaksha = (phase) => {
  const tithiNumber = Math.floor(phase / 0.984) + 1;

  if (tithiNumber <= 15) {
    return {
      tithi: tithiNumber,
      paksha: "Shukla Paksha",
    };
  } else {
    return {
      tithi: tithiNumber - 15,
      paksha: "Krishna Paksha",
    };
  }
};

const getPaksha = (phase) => {
  return phase <= 15 ? "Shukla Paksha" : "Krishna Paksha";
};

const MoonPhase = ({ phase, size = 60 }) => {
  // 0 days = New Moon
  // 7.38 days = First Quarter
  // 14.76 days = Full Moon
  // 22.14 days = Last Quarter
  // 29.53 days = New Moon (cycle repeats)

  const lunarCycle = 29.53059;
  let illumination;
  let isWaxing = phase <= lunarCycle / 2;

  if (isWaxing) {
    // Waxing: New Moon (0) to Full Moon (14.76)
    illumination = phase / (lunarCycle / 2);
  } else {
    // Waning: Full Moon (14.76) to New Moon (29.53)
    illumination = (lunarCycle - phase) / (lunarCycle / 2);
  }

  // Clamp between 0 and 1
  illumination = Math.max(0, Math.min(1, illumination));

  // Calculate the visible portion
  const shadowOffset = isWaxing
    ? size / 2 - (size / 2) * illumination // Shadow from right during waxing
    : -size / 2 + (size / 2) * illumination; // Shadow from left during waning

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <defs>
        <mask id={`moonMask-${phase}`}>
          <circle cx={size / 2} cy={size / 2} r={size / 2} fill="white" />
          {/* Shadow ellipse for moon phase */}
          <ellipse
            cx={size / 2 + shadowOffset}
            cy={size / 2}
            rx={size / 2}
            ry={size / 2}
            fill="black"
          />
        </mask>
      </defs>

      {/* Dark side of moon */}
      <circle cx={size / 2} cy={size / 2} r={size / 2} fill="#374151" />

      {/* Illuminated side of moon */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2}
        fill="#E5E7EB"
        mask={`url(#moonMask-${phase})`}
      />

      {/* Border */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2}
        fill="none"
        stroke="#6B7280"
        strokeWidth="1"
      />
    </svg>
  );
};

const SHUBH_MUHURAT_DATES = {
  "2026-01-27": {
    morning: "06:15 AM - 07:45 AM",
    afternoon: "12:30 PM - 02:00 PM",
    evening: "05:45 PM - 07:15 PM",
  },
  "2026-01-29": {
    morning: "06:30 AM - 08:00 AM",
    afternoon: "01:00 PM - 02:30 PM",
  },
  "2026-02-02": {
    morning: "07:00 AM - 08:30 AM",
    evening: "06:00 PM - 07:30 PM",
  },
  "2026-02-05": {
    morning: "06:45 AM - 08:15 AM",
    afternoon: "12:45 PM - 02:15 PM",
    evening: "05:30 PM - 07:00 PM",
  },
  "2026-02-10": {
    morning: "06:15 AM - 07:45 AM",
    afternoon: "01:15 PM - 02:45 PM",
  },
  "2026-02-15": {
    morning: "07:15 AM - 08:45 AM",
    evening: "06:15 PM - 07:45 PM",
  },
  "2026-02-19": {
    morning: "06:00 AM - 07:30 AM",
    afternoon: "12:00 PM - 01:30 PM",
    evening: "05:45 PM - 07:15 PM",
  },
  "2026-02-22": {
    morning: "06:30 AM - 08:00 AM",
    afternoon: "01:30 PM - 03:00 PM",
  },
  "2026-03-01": {
    morning: "07:00 AM - 08:30 AM",
    evening: "06:30 PM - 08:00 PM",
  },
  "2026-03-08": {
    morning: "06:45 AM - 08:15 AM",
    afternoon: "12:15 PM - 01:45 PM",
    evening: "05:15 PM - 06:45 PM",
  },
  "2026-03-12": {
    morning: "06:15 AM - 07:45 AM",
    afternoon: "01:00 PM - 02:30 PM",
  },
  "2026-03-15": {
    morning: "07:30 AM - 09:00 AM",
    evening: "06:45 PM - 08:15 PM",
  },
  "2026-03-20": {
    morning: "06:00 AM - 07:30 AM",
    afternoon: "12:30 PM - 02:00 PM",
    evening: "05:00 PM - 06:30 PM",
  },
  "2026-03-25": {
    morning: "06:45 AM - 08:15 AM",
    afternoon: "01:15 PM - 02:45 PM",
  },
};

// Shubh Muhurat Calendar Component
const ShubhMuhuratCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 0, 27));
  const [selectedDate, setSelectedDate] = useState(new Date(2026, 0, 27));

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1),
    );
  };

  const handleDateClick = (day) => {
    setSelectedDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth(), day),
    );
  };

  const getDateKey = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const days = [];

  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const selectedDateKey = getDateKey(selectedDate);
  const selectedMuhurat = SHUBH_MUHURAT_DATES[selectedDateKey];

  return (
    <div className="rounded-xl shadow-md bg-white p-3">
      <h2 className="text-sm font-bold text-orange-600 mb-2 text-center">
        ✨ Muhurat
      </h2>

      {/* Compact Month Navigation */}
      <div className="flex justify-between items-center mb-2">
        <button
          onClick={handlePrevMonth}
          className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 text-xs rounded transition"
        >
          ←
        </button>
        <h3 className="text-xs font-semibold text-gray-800">
          {monthNames[currentDate.getMonth()].slice(0, 3)}
        </h3>
        <button
          onClick={handleNextMonth}
          className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 text-xs rounded transition"
        >
          →
        </button>
      </div>

      {/* Compact Day Names */}
      <div className="grid grid-cols-7 gap-0.5 mb-1">
        {dayNames.map((day) => (
          <div
            key={day}
            className="text-center text-gray-600 text-[9px] py-0.5"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Compact Calendar Grid */}
      <div className="grid grid-cols-7 gap-0.5 mb-2">
        {days.map((day, idx) => {
          if (!day) {
            return <div key={idx} className="p-1"></div>;
          }

          const dateObj = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            day,
          );
          const dateKey = getDateKey(dateObj);
          const isShubh = SHUBH_MUHURAT_DATES[dateKey];
          const isSelected =
            selectedDate.getDate() === day &&
            selectedDate.getMonth() === currentDate.getMonth();
          const isToday =
            new Date().getDate() === day &&
            new Date().getMonth() === currentDate.getMonth() &&
            new Date().getFullYear() === currentDate.getFullYear();

          return (
            <button
              key={idx}
              onClick={() => handleDateClick(day)}
              className={`p-1 rounded text-[10px] flex items-center justify-center transition ${
                isShubh
                  ? isSelected
                    ? "bg-orange-600 text-white font-bold"
                    : isToday
                      ? "bg-yellow-400 text-gray-900 font-bold"
                      : "bg-green-200 text-gray-900"
                  : isSelected
                    ? "bg-gray-400 text-white"
                    : isToday
                      ? "bg-blue-100 text-gray-900"
                      : "bg-gray-50 text-gray-600"
              }`}
              style={{ minHeight: "28px" }}
            >
              <span>{day}</span>
            </button>
          );
        })}
      </div>

      {/* Compact Selected Date Muhurat Details */}
      {selectedMuhurat ? (
        <div className="mt-2 p-2 bg-green-50 rounded border border-green-300">
          <h3 className="text-[10px] font-semibold text-green-700 mb-1">
            <span className="text-lg mr-2"></span>
            {monthNames[selectedDate.getMonth()].slice(0, 3)}{" "}
            {selectedDate.getDate()}
          </h3>

          <div className="space-y-1 text-[10px]">
            {selectedMuhurat.morning && (
              <div className="bg-white p-1 rounded border-l border-orange-400">
                <p className="text-[9px] text-gray-500">Morning</p>
                <p className="text-orange-600 font-medium">
                  {selectedMuhurat.morning}
                </p>
              </div>
            )}

            {selectedMuhurat.afternoon && (
              <div className="bg-white p-1 rounded border-l border-orange-400">
                <p className="text-[9px] text-gray-500">Afternoon</p>
                <p className="text-orange-600 font-medium">
                  {selectedMuhurat.afternoon}
                </p>
              </div>
            )}

            {selectedMuhurat.evening && (
              <div className="bg-white p-1 rounded border-l border-orange-400">
                <p className="text-[9px] text-gray-500">Evening</p>
                <p className="text-orange-600 font-medium">
                  {selectedMuhurat.evening}
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="mt-2 p-2 bg-gray-50 rounded text-center text-[10px]">
          <p className="text-gray-600">No Muhurat</p>
        </div>
      )}
    </div>
  );
};

const CalendarWidget = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 0, 27));
  const [selectedDate, setSelectedDate] = useState(new Date(2026, 0, 27));

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1),
    );
  };

  const handleDateClick = (day) => {
    setSelectedDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth(), day),
    );
  };

  const getDateKey = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const days = [];

  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const selectedDateKey = getDateKey(selectedDate);
  const selectedFestival = FESTIVALS[selectedDateKey];
  const getNakshatraForDate = (date) => {
    return PANCHANG_DATA.nakshatra[date.getDate() % 27];
  };
  const getYogaForDate = (date) => {
    return PANCHANG_DATA.yoga[date.getDate() % 27];
  };
  const getKaranaForDate = (date) => {
    return PANCHANG_DATA.karana[date.getDate() % 11];
  };

  const selectedPhase = getMoonPhase(selectedDate);
  const selectedTithiData = getTithiAndPaksha(selectedPhase);

  return (
    <div className="rounded-xl shadow-md bg-white p-4">
      {/* Compact Header */}
      <div className="mb-4 text-center bg-orange-600 text-white py-2 px-4 rounded-lg">
        <h2 className="text-xl font-bold">
          {selectedDate.getDate()} {monthNames[selectedDate.getMonth()]}{" "}
          {selectedDate.getFullYear()}
        </h2>
        <p className="text-sm">
          Tithi: {selectedTithiData.tithi}, {selectedTithiData.paksha}
        </p>
      </div>

      {/* Compact Month Navigation */}
      <div className="flex justify-between items-center mb-3">
        <button
          onClick={handlePrevMonth}
          className="bg-orange-500 text-white px-3 py-1 text-sm rounded-lg hover:bg-orange-600 transition"
        >
          ← Prev
        </button>
        <h2 className="text-lg text-gray-800">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <button
          onClick={handleNextMonth}
          className="bg-orange-500 text-white px-3 py-1 text-sm rounded-lg hover:bg-orange-600 transition"
        >
          Next →
        </button>
      </div>

      {/* Compact Day Names */}
      <div className="grid grid-cols-7 gap-1 mb-2 bg-gray-600 p-2 rounded-t-lg">
        {dayNames.map((day) => (
          <div key={day} className="text-center text-white text-xs py-1">
            {day}
          </div>
        ))}
      </div>

      {/* Compact Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 bg-gray-100 p-2 rounded-b-lg">
        {days.map((day, idx) => {
          if (!day) {
            return <div key={idx} className="p-3"></div>;
          }

          const dateObj = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            day,
          );
          const phase = getMoonPhase(dateObj);
          const tithiData = getTithiAndPaksha(phase);
          const isSelected =
            selectedDate.getDate() === day &&
            selectedDate.getMonth() === currentDate.getMonth();
          const isToday =
            new Date().getDate() === day &&
            new Date().getMonth() === currentDate.getMonth() &&
            new Date().getFullYear() === currentDate.getFullYear();
          const hasFestival = FESTIVALS[getDateKey(dateObj)];

          return (
            <button
              key={idx}
              onClick={() => handleDateClick(day)}
              className={`p-2 rounded text-xs flex flex-col items-center justify-center transition ${
                isToday
                  ? "bg-yellow-400 border-2 border-orange-600 font-bold"
                  : isSelected
                    ? "bg-orange-300 border-2 border-orange-500"
                    : hasFestival
                      ? "bg-orange-100 border border-red-400"
                      : "bg-white hover:bg-gray-50 border border-gray-200"
              }`}
              style={{ minHeight: "60px" }}
            >
              {/* Date Number */}
              <div
                className={`font-semibold ${isToday ? "text-white" : "text-gray-700"}`}
              >
                {day}
              </div>

              {/* Tithi - Smaller */}
              <div className="text-xs text-orange-600 mt-1">
                T{tithiData.tithi}
              </div>

              {/* Moon Phase - Tiny */}
              <div className="mt-1">
                <MoonPhase phase={phase} size={20} />
              </div>
            </button>
          );
        })}
      </div>

      {/* Compact Selected Date Info */}
      <div className="mt-4 p-3 bg-orange-50 rounded-lg">
        <h3 className="text-sm font-semibold text-orange-700 mb-2">
          {monthNames[selectedDate.getMonth()]} {selectedDate.getDate()}
        </h3>

        {selectedFestival && (
          <div className="bg-white p-2 rounded mb-2 border-l-2 border-orange-500">
            <p className="text-sm font-medium text-orange-600">
              {selectedFestival.name}
            </p>
          </div>
        )}

        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="bg-white p-2 rounded">
            <p className="text-xs text-gray-500">Nakshatra</p>
            <p className="font-bold text-orange-600">
              {getNakshatraForDate(selectedDate)}
            </p>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <p className="text-xs text-gray-600">Yoga</p>
            <p className="text-xs font-semibold text-orange-600">
              {getYogaForDate(selectedDate)}
            </p>
          </div>
          <div className="bg-white p-2 rounded">
            <p className="text-xs text-gray-500">Karana</p>
            <p className="text-xs font-semibold text-orange-600">
              {getKaranaForDate(selectedDate)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Hindu Time Clock Component
const HinduTimeClock = () => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const totalSeconds =
    time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds();
  const ghati = Math.floor(totalSeconds / 1440);
  const pala = Math.floor((totalSeconds % 1440) / 24);
  const lipta = Math.floor(((totalSeconds % 1440) % 24) / 0.4);

  return `${String(ghati).padStart(2, "0")}:${String(pala).padStart(2, "0")}:${String(lipta).padStart(2, "0")}`;
};

export default function Calendar() {
  return (
    <>
      <Navbar />
      <div
        className="min-h-screen p-4 md:p-6"
        style={{
          background: `linear-gradient(to right, rgba(239, 246, 255, 0.95), rgba(238, 242, 255, 0.95))`,
        }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-6">
          Hindu Calendar 2026
        </h1>

        {/* Bento Grid Layout */}
        <div className="max-w-7xl mx-auto">
          {/* Top Row - Hindu Time & Panchang */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Hindu Time - Compact */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl shadow-md p-4">
              <h2 className="text-lg text-orange-600 mb-3 flex items-center gap-2">
                Hindu Time
              </h2>
              <div className="bg-white rounded-lg p-3 mb-3">
                <div className="text-2xl text-orange-700 text-center">
                  <HinduTimeClock />
                </div>
                <div className="text-xs text-gray-500 text-center">
                  Ghati : Pala : Lipta
                </div>
              </div>
              <div className="text-xs text-gray-600 space-y-1">
                <p>1 day = 60 Ghatis</p>
                <p>1 Ghati = 60 Pala</p>
                <p>1 Pala = 60 Lipta</p>
              </div>
            </div>

            {/* Today's Panchang - Compact */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl shadow-md p-4">
              <h2 className="text-lg text-orange-600 mb-3 flex items-center gap-2">
                Today's Panchang
              </h2>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="bg-white rounded p-2">
                  <div className="text-xs text-gray-500">Tithi</div>
                  <div className="font-semibold text-orange-700">Panchami</div>
                </div>
                <div className="bg-white rounded p-2">
                  <div className="text-xs text-gray-500">Paksha</div>
                  <div className="font-semibold">Shukla</div>
                </div>
                <div className="bg-white rounded p-2">
                  <div className="text-xs text-gray-500">Sunrise</div>
                  <div className="font-semibold">07:21 AM</div>
                </div>
                <div className="bg-white rounded p-2">
                  <div className="text-xs text-gray-500">Sunset</div>
                  <div className="">18:21 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Calendar Widget - Takes 2 columns */}
            <div className="lg:col-span-2">
              <CalendarWidget />
            </div>

            {/* Right Column - Stacked Cards */}
            <div className="space-y-4">
              {/* Upcoming Festivals - Compact */}
              <div className="bg-white rounded-xl shadow-md p-4">
                <h2 className="text-lg text-orange-600 mb-3">Festivals</h2>
                <div className="space-y-2 max-h-60 overflow-y-auto text-sm">
                  {Object.entries(FESTIVALS)
                    .sort(
                      ([dateA], [dateB]) => new Date(dateA) - new Date(dateB),
                    )
                    .slice(0, 6)
                    .map(([date, festival]) => (
                      <div
                        key={date}
                        className="border-l-3 border-orange-400 pl-3 py-1 bg-orange-50 rounded"
                      >
                        <p className="font-medium text-orange-700 text-xs">
                          {festival.name}
                        </p>
                        <p className="text-xs text-gray-600">
                          {new Date(date).toLocaleDateString("en-IN", {
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    ))}
                </div>
              </div>

              {/* Panchang Info - Compact */}
              <div className="bg-white rounded-xl shadow-md p-4">
                <h2 className="text-lg font-bold text-orange-600 mb-2">
                  Panchang
                </h2>
                <ul className="space-y-1 text-xs text-gray-600">
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>Nakshatra
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>Tithi
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>Yoga
                  </li>
                  <li className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>Karana
                  </li>
                </ul>
              </div>
            </div>

            {/* Muhurat Calendar - Compact Right Column */}
            <div className="lg:col-span-1">
              <ShubhMuhuratCalendar />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
