export interface PlanetNames {
  english: string;
  sanskrit: string;
  hindi: string;
  symbol: string;
}

export const PLANETS: Record<string, PlanetNames> = {
  Sun: { english: 'Sun', sanskrit: 'Surya', hindi: 'सूर्य', symbol: '☉' },
  Moon: { english: 'Moon', sanskrit: 'Chandra', hindi: 'चंद्र', symbol: '☽' },
  Mars: { english: 'Mars', sanskrit: 'Mangal', hindi: 'मंगल', symbol: '♂' },
  Mercury: { english: 'Mercury', sanskrit: 'Budh', hindi: 'बुध', symbol: '☿' },
  Jupiter: { english: 'Jupiter', sanskrit: 'Guru', hindi: 'गुरु', symbol: '♃' },
  Venus: { english: 'Venus', sanskrit: 'Shukra', hindi: 'शुक्र', symbol: '♀' },
  Saturn: { english: 'Saturn', sanskrit: 'Shani', hindi: 'शनि', symbol: '♄' },
  Rahu: { english: 'Rahu', sanskrit: 'Rahu', hindi: 'राहु', symbol: '☊' },
  Ketu: { english: 'Ketu', sanskrit: 'Ketu', hindi: 'केतु', symbol: '☋' },
  Ascendant: { english: 'Ascendant', sanskrit: 'Lagna', hindi: 'लग्न', symbol: '↑' },
};

// ============ Zodiac Signs (Rashi) ============
export interface SignNames {
  english: string;
  sanskrit: string;
  hindi: string;
  number: number;
  element: string;
  ruler: string;
  symbol: string;
}

export const SIGNS: Record<string, SignNames> = {
  Aries: { english: 'Aries', sanskrit: 'Mesha', hindi: 'मेष', number: 1, element: 'Fire', ruler: 'Mars', symbol: '♈' },
  Taurus: { english: 'Taurus', sanskrit: 'Vrishabha', hindi: 'वृषभ', number: 2, element: 'Earth', ruler: 'Venus', symbol: '♉' },
  Gemini: { english: 'Gemini', sanskrit: 'Mithuna', hindi: 'मिथुन', number: 3, element: 'Air', ruler: 'Mercury', symbol: '♊' },
  Cancer: { english: 'Cancer', sanskrit: 'Karka', hindi: 'कर्क', number: 4, element: 'Water', ruler: 'Moon', symbol: '♋' },
  Leo: { english: 'Leo', sanskrit: 'Simha', hindi: 'सिंह', number: 5, element: 'Fire', ruler: 'Sun', symbol: '♌' },
  Virgo: { english: 'Virgo', sanskrit: 'Kanya', hindi: 'कन्या', number: 6, element: 'Earth', ruler: 'Mercury', symbol: '♍' },
  Libra: { english: 'Libra', sanskrit: 'Tula', hindi: 'तुला', number: 7, element: 'Air', ruler: 'Venus', symbol: '♎' },
  Scorpio: { english: 'Scorpio', sanskrit: 'Vrishchika', hindi: 'वृश्चिक', number: 8, element: 'Water', ruler: 'Mars', symbol: '♏' },
  Sagittarius: { english: 'Sagittarius', sanskrit: 'Dhanu', hindi: 'धनु', number: 9, element: 'Fire', ruler: 'Jupiter', symbol: '♐' },
  Capricorn: { english: 'Capricorn', sanskrit: 'Makara', hindi: 'मकर', number: 10, element: 'Earth', ruler: 'Saturn', symbol: '♑' },
  Aquarius: { english: 'Aquarius', sanskrit: 'Kumbha', hindi: 'कुंभ', number: 11, element: 'Air', ruler: 'Saturn', symbol: '♒' },
  Pisces: { english: 'Pisces', sanskrit: 'Meena', hindi: 'मीन', number: 12, element: 'Water', ruler: 'Jupiter', symbol: '♓' },
};




// Sign lookup by number
export const SIGNS_BY_NUMBER: Record<number, SignNames> = Object.fromEntries(
  Object.values(SIGNS).map(sign => [sign.number, sign])
);

// ============ Nakshatras ============
export interface NakshatraNames {
  english: string;
  sanskrit: string;
  hindi: string;
  number: number;
  ruler: string;
  deity: string;
}

export const NAKSHATRAS: Record<string, NakshatraNames> = {
  Ashwini: { english: 'Ashwini', sanskrit: 'Ashwini', hindi: 'अश्विनी', number: 1, ruler: 'Ketu', deity: 'Ashwini Kumaras' },
  Bharani: { english: 'Bharani', sanskrit: 'Bharani', hindi: 'भरणी', number: 2, ruler: 'Venus', deity: 'Yama' },
  Krittika: { english: 'Krittika', sanskrit: 'Krittika', hindi: 'कृत्तिका', number: 3, ruler: 'Sun', deity: 'Agni' },
  Rohini: { english: 'Rohini', sanskrit: 'Rohini', hindi: 'रोहिणी', number: 4, ruler: 'Moon', deity: 'Brahma' },
  Mrigashira: { english: 'Mrigashira', sanskrit: 'Mrigashira', hindi: 'मृगशिरा', number: 5, ruler: 'Mars', deity: 'Soma' },
  Ardra: { english: 'Ardra', sanskrit: 'Ardra', hindi: 'आर्द्रा', number: 6, ruler: 'Rahu', deity: 'Rudra' },
  Punarvasu: { english: 'Punarvasu', sanskrit: 'Punarvasu', hindi: 'पुनर्वसु', number: 7, ruler: 'Jupiter', deity: 'Aditi' },
  Pushya: { english: 'Pushya', sanskrit: 'Pushya', hindi: 'पुष्य', number: 8, ruler: 'Saturn', deity: 'Brihaspati' },
  Ashlesha: { english: 'Ashlesha', sanskrit: 'Ashlesha', hindi: 'आश्लेषा', number: 9, ruler: 'Mercury', deity: 'Nagas' },
  Magha: { english: 'Magha', sanskrit: 'Magha', hindi: 'मघा', number: 10, ruler: 'Ketu', deity: 'Pitris' },
  'Purva Phalguni': { english: 'Purva Phalguni', sanskrit: 'Purva Phalguni', hindi: 'पूर्वा फाल्गुनी', number: 11, ruler: 'Venus', deity: 'Bhaga' },
  'Uttara Phalguni': { english: 'Uttara Phalguni', sanskrit: 'Uttara Phalguni', hindi: 'उत्तरा फाल्गुनी', number: 12, ruler: 'Sun', deity: 'Aryaman' },
  Hasta: { english: 'Hasta', sanskrit: 'Hasta', hindi: 'हस्त', number: 13, ruler: 'Moon', deity: 'Savitar' },
  Chitra: { english: 'Chitra', sanskrit: 'Chitra', hindi: 'चित्रा', number: 14, ruler: 'Mars', deity: 'Vishwakarma' },
  Swati: { english: 'Swati', sanskrit: 'Swati', hindi: 'स्वाति', number: 15, ruler: 'Rahu', deity: 'Vayu' },
  Vishakha: { english: 'Vishakha', sanskrit: 'Vishakha', hindi: 'विशाखा', number: 16, ruler: 'Jupiter', deity: 'Indra-Agni' },
  Anuradha: { english: 'Anuradha', sanskrit: 'Anuradha', hindi: 'अनुराधा', number: 17, ruler: 'Saturn', deity: 'Mitra' },
  Jyeshtha: { english: 'Jyeshtha', sanskrit: 'Jyeshtha', hindi: 'ज्येष्ठा', number: 18, ruler: 'Mercury', deity: 'Indra' },
  Mula: { english: 'Mula', sanskrit: 'Mula', hindi: 'मूल', number: 19, ruler: 'Ketu', deity: 'Nirriti' },
  'Purva Ashadha': { english: 'Purva Ashadha', sanskrit: 'Purva Ashadha', hindi: 'पूर्वाषाढ़ा', number: 20, ruler: 'Venus', deity: 'Apas' },
  'Uttara Ashadha': { english: 'Uttara Ashadha', sanskrit: 'Uttara Ashadha', hindi: 'उत्तराषाढ़ा', number: 21, ruler: 'Sun', deity: 'Vishvadevas' },
  Shravana: { english: 'Shravana', sanskrit: 'Shravana', hindi: 'श्रवण', number: 22, ruler: 'Moon', deity: 'Vishnu' },
  Dhanishtha: { english: 'Dhanishtha', sanskrit: 'Dhanishtha', hindi: 'धनिष्ठा', number: 23, ruler: 'Mars', deity: 'Vasus' },
  Shatabhisha: { english: 'Shatabhisha', sanskrit: 'Shatabhisha', hindi: 'शतभिषा', number: 24, ruler: 'Rahu', deity: 'Varuna' },
  'Purva Bhadrapada': { english: 'Purva Bhadrapada', sanskrit: 'Purva Bhadrapada', hindi: 'पूर्वाभाद्रपदा', number: 25, ruler: 'Jupiter', deity: 'Aja Ekapada' },
  'Uttara Bhadrapada': { english: 'Uttara Bhadrapada', sanskrit: 'Uttara Bhadrapada', hindi: 'उत्तराभाद्रपदा', number: 26, ruler: 'Saturn', deity: 'Ahir Budhnya' },
  Revati: { english: 'Revati', sanskrit: 'Revati', hindi: 'रेवती', number: 27, ruler: 'Mercury', deity: 'Pushan' },
};

// Nakshatra lookup by number
export const NAKSHATRAS_BY_NUMBER: Record<number, NakshatraNames> = Object.fromEntries(
  Object.values(NAKSHATRAS).map(nak => [nak.number, nak])
);

// ============ Tithis ============
export interface TithiNames {
  english: string;
  sanskrit: string;
  hindi: string;
  number: number;
}

export const TITHIS: Record<number, TithiNames> = {
  1: { english: 'Pratipada', sanskrit: 'Pratipada', hindi: 'प्रतिपदा', number: 1 },
  2: { english: 'Dwitiya', sanskrit: 'Dwitiya', hindi: 'द्वितीया', number: 2 },
  3: { english: 'Tritiya', sanskrit: 'Tritiya', hindi: 'तृतीया', number: 3 },
  4: { english: 'Chaturthi', sanskrit: 'Chaturthi', hindi: 'चतुर्थी', number: 4 },
  5: { english: 'Panchami', sanskrit: 'Panchami', hindi: 'पंचमी', number: 5 },
  6: { english: 'Shashthi', sanskrit: 'Shashthi', hindi: 'षष्ठी', number: 6 },
  7: { english: 'Saptami', sanskrit: 'Saptami', hindi: 'सप्तमी', number: 7 },
  8: { english: 'Ashtami', sanskrit: 'Ashtami', hindi: 'अष्टमी', number: 8 },
  9: { english: 'Navami', sanskrit: 'Navami', hindi: 'नवमी', number: 9 },
  10: { english: 'Dashami', sanskrit: 'Dashami', hindi: 'दशमी', number: 10 },
  11: { english: 'Ekadashi', sanskrit: 'Ekadashi', hindi: 'एकादशी', number: 11 },
  12: { english: 'Dwadashi', sanskrit: 'Dwadashi', hindi: 'द्वादशी', number: 12 },
  13: { english: 'Trayodashi', sanskrit: 'Trayodashi', hindi: 'त्रयोदशी', number: 13 },
  14: { english: 'Chaturdashi', sanskrit: 'Chaturdashi', hindi: 'चतुर्दशी', number: 14 },
  15: { english: 'Purnima', sanskrit: 'Purnima', hindi: 'पूर्णिमा', number: 15 },
  30: { english: 'Amavasya', sanskrit: 'Amavasya', hindi: 'अमावस्या', number: 30 },
};

// ============ Weekdays ============
export interface WeekdayNames {
  english: string;
  sanskrit: string;
  hindi: string;
  ruler: string;
}

export const WEEKDAYS: Record<string, WeekdayNames> = {
  Sunday: { english: 'Sunday', sanskrit: 'Ravivar', hindi: 'रविवार', ruler: 'Sun' },
  Monday: { english: 'Monday', sanskrit: 'Somvar', hindi: 'सोमवार', ruler: 'Moon' },
  Tuesday: { english: 'Tuesday', sanskrit: 'Mangalvar', hindi: 'मंगलवार', ruler: 'Mars' },
  Wednesday: { english: 'Wednesday', sanskrit: 'Budhvar', hindi: 'बुधवार', ruler: 'Mercury' },
  Thursday: { english: 'Thursday', sanskrit: 'Guruvar', hindi: 'गुरुवार', ruler: 'Jupiter' },
  Friday: { english: 'Friday', sanskrit: 'Shukravar', hindi: 'शुक्रवार', ruler: 'Venus' },
  Saturday: { english: 'Saturday', sanskrit: 'Shanivar', hindi: 'शनिवार', ruler: 'Saturn' },
};

// ============ Months ============
export interface MonthNames {
  english: string;
  short: string;
  number: number;
}

export const MONTHS: Record<number, MonthNames> = {
  1: { english: 'January', short: 'Jan', number: 1 },
  2: { english: 'February', short: 'Feb', number: 2 },
  3: { english: 'March', short: 'Mar', number: 3 },
  4: { english: 'April', short: 'Apr', number: 4 },
  5: { english: 'May', short: 'May', number: 5 },
  6: { english: 'June', short: 'Jun', number: 6 },
  7: { english: 'July', short: 'Jul', number: 7 },
  8: { english: 'August', short: 'Aug', number: 8 },
  9: { english: 'September', short: 'Sep', number: 9 },
  10: { english: 'October', short: 'Oct', number: 10 },
  11: { english: 'November', short: 'Nov', number: 11 },
  12: { english: 'December', short: 'Dec', number: 12 },
};

// ============ Helper Functions ============

/**
 * Get planet name with both English and Indian name
 */
export function getPlanetDisplayName(englishName: string, format: 'full' | 'short' = 'full'): string {
  const planet = PLANETS[englishName];
  if (!planet) return englishName;
  
  if (format === 'short') {
    return `${planet.english} (${planet.sanskrit})`;
  }
  return `${planet.english} / ${planet.sanskrit} (${planet.hindi})`;
}

/**
 * Get sign name with both English and Indian name
 */
export function getSignDisplayName(englishName: string, format: 'full' | 'short' = 'full'): string {
  const sign = SIGNS[englishName];
  if (!sign) return englishName;
  
  if (format === 'short') {
    return `${sign.english} (${sign.sanskrit})`;
  }
  return `${sign.english} / ${sign.sanskrit} (${sign.hindi})`;
}

/**
 * Get sign by number
 */
export function getSignByNumber(signNumber: number): SignNames | undefined {
  return SIGNS_BY_NUMBER[signNumber];
}

/**
 * Get nakshatra name with both English and Indian name
 */
export function getNakshatraDisplayName(name: string, format: 'full' | 'short' = 'full'): string {
  const nakshatra = NAKSHATRAS[name];
  if (!nakshatra) return name;
  
  if (format === 'short') {
    return nakshatra.english;
  }
  return `${nakshatra.english} (${nakshatra.hindi})`;
}

/**
 * Get nakshatra by number
 */
export function getNakshatraByNumber(number: number): NakshatraNames | undefined {
  return NAKSHATRAS_BY_NUMBER[number];
}

/**
 * Get tithi name by number
 */
export function getTithiByNumber(number: number): TithiNames | undefined {
  return TITHIS[number];
}

/**
 * Get month abbreviation (3-char)
 */
export function getMonthShort(monthNumber: number): string {
  return MONTHS[monthNumber]?.short || '';
}

export default {
  PLANETS,
  SIGNS,
  SIGNS_BY_NUMBER,
  NAKSHATRAS,
  NAKSHATRAS_BY_NUMBER,
  TITHIS,
  WEEKDAYS,
  MONTHS,
  getPlanetDisplayName,
  getSignDisplayName,
  getSignByNumber,
  getNakshatraDisplayName,
  getNakshatraByNumber,
  getTithiByNumber,
  getMonthShort,
};
