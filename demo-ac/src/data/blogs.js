/**
 * Blogs Data for Blogs Page
 *
 * Schema:
 * - id: Unique identifier (string)
 * - title: Blog headline (string)
 * - excerpt: Short preview text (string, 120-180 chars recommended)
 * - publishedAt: ISO date string for sorting (string)
 * - readingTime: Estimated reading time in minutes (number)
 * - featured: Editor flag for featured placement (boolean, optional)
 * - slug: URL-friendly identifier (string)
 * - image: Optional cover image path (string, optional)
 *
 * NOTE: In production, this data would be fetched from a CMS, API, or database.
 * This file simulates that data source for demonstration purposes.
 */

export const blogs = [
  {
    id: "understanding-retrograde-mercury",
    title: "Understanding Mercury Retrograde: Beyond the Fear",
    excerpt:
      "Mercury retrograde is often met with anxiety, but understanding its true nature reveals opportunities for reflection, revision, and reconnection with past matters.",
    publishedAt: "2026-01-28",
    readingTime: 8,
    featured: true,
    slug: "understanding-retrograde-mercury",
  },
  {
    id: "morning-mantras-daily-practice",
    title: "Morning Mantras: A Simple Practice for Daily Alignment",
    excerpt:
      "Starting each day with conscious intention through mantra recitation creates a foundation of calm awareness. Here are accessible practices for beginners.",
    publishedAt: "2026-01-25",
    readingTime: 6,
    slug: "morning-mantras-daily-practice",
  },
  {
    id: "saturn-return-transformation",
    title: "The Saturn Return: A Time of Profound Transformation",
    excerpt:
      "Around ages 28-30 and again near 58-60, Saturn returns to its natal position. This period invites maturity, responsibility, and authentic self-definition.",
    publishedAt: "2026-01-22",
    readingTime: 10,
    slug: "saturn-return-transformation",
  },
  {
    id: "lunar-cycles-emotional-awareness",
    title: "Living with Lunar Cycles: Emotional Awareness Through the Moon",
    excerpt:
      "The Moon's phases mirror our internal emotional rhythms. Learning to observe these patterns brings greater self-understanding and emotional intelligence.",
    publishedAt: "2026-01-19",
    readingTime: 7,
    slug: "lunar-cycles-emotional-awareness",
  },
  {
    id: "vedic-astrology-western-differences",
    title: "Vedic and Western Astrology: Understanding the Differences",
    excerpt:
      "While both systems study celestial influences, their approaches differ significantly. Understanding these distinctions helps seekers choose their path.",
    publishedAt: "2026-01-16",
    readingTime: 12,
    slug: "vedic-astrology-western-differences",
  },
  {
    id: "navagrahas-nine-planets",
    title: "The Navagrahas: Understanding the Nine Celestial Influences",
    excerpt:
      "In Vedic tradition, nine celestial bodies shape our experiences. Each graha carries specific energies that influence different aspects of human life.",
    publishedAt: "2026-01-13",
    readingTime: 9,
    slug: "navagrahas-nine-planets",
  },
  {
    id: "meditation-beginners-guide",
    title: "Meditation for Beginners: Finding Stillness in Modern Life",
    excerpt:
      "Meditation need not be complex or time-consuming. Simple practices, consistently applied, create profound shifts in awareness and inner peace.",
    publishedAt: "2026-01-10",
    readingTime: 5,
    slug: "meditation-beginners-guide",
  },
  {
    id: "birth-chart-first-reading",
    title: "Your First Birth Chart Reading: What to Expect",
    excerpt:
      "Approaching your first astrological consultation can feel mysterious. Understanding the process helps you arrive prepared and receptive to insights.",
    publishedAt: "2026-01-07",
    readingTime: 8,
    slug: "birth-chart-first-reading",
  },
  {
    id: "vastu-home-harmony",
    title: "Vastu Principles for Home Harmony: Starting Simple",
    excerpt:
      "Vastu Shastra offers guidelines for spatial arrangement that support well-being. Begin with these accessible adjustments for your living space.",
    publishedAt: "2026-01-04",
    readingTime: 7,
    slug: "vastu-home-harmony",
  },
  {
    id: "karma-dharma-understanding",
    title: "Karma and Dharma: Understanding Life's Deeper Currents",
    excerpt:
      "These interconnected concepts form the philosophical foundation of Vedic wisdom. Exploring their meaning illuminates our choices and purpose.",
    publishedAt: "2026-01-01",
    readingTime: 11,
    slug: "karma-dharma-understanding",
  },
  {
    id: "gemstones-planetary-remedies",
    title: "Gemstones as Planetary Remedies: An Introduction",
    excerpt:
      "Certain gemstones are believed to strengthen planetary influences in one's chart. Understanding proper selection and use ensures meaningful application.",
    publishedAt: "2025-12-28",
    readingTime: 9,
    slug: "gemstones-planetary-remedies",
  },
  {
    id: "eclipses-spiritual-significance",
    title: "Eclipses and Their Spiritual Significance",
    excerpt:
      "Solar and lunar eclipses have held profound meaning across cultures. Vedic tradition offers specific guidance for these powerful astronomical events.",
    publishedAt: "2025-12-25",
    readingTime: 8,
    slug: "eclipses-spiritual-significance",
  },
  {
    id: "relationship-astrology-basics",
    title: "Relationship Astrology: Understanding Compatibility Factors",
    excerpt:
      "Synastry examines how two charts interact. Beyond simple sun sign matching, deeper factors reveal the true nature of relational dynamics.",
    publishedAt: "2025-12-22",
    readingTime: 10,
    slug: "relationship-astrology-basics",
  },
  {
    id: "panchang-daily-timing",
    title: "Using Panchang for Daily Decisions: A Practical Guide",
    excerpt:
      "The traditional Hindu almanac offers guidance for timing important activities. Learn to read basic panchang elements for everyday application.",
    publishedAt: "2025-12-19",
    readingTime: 7,
    slug: "panchang-daily-timing",
  },
  {
    id: "yoga-nidra-deep-rest",
    title: "Yoga Nidra: The Art of Conscious Deep Rest",
    excerpt:
      "This practice of yogic sleep offers profound restoration without the time commitment of extended meditation. Accessible techniques for modern practitioners.",
    publishedAt: "2025-12-16",
    readingTime: 6,
    slug: "yoga-nidra-deep-rest",
  },
];

/**
 * Utility functions for blog management
 */

// Get featured blog (editor-flagged or most recent)
export const getFeaturedBlog = (blogList = blogs) => {
  const featured = blogList.find((b) => b.featured);
  if (featured) return featured;

  // Fallback to most recent
  return [...blogList].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt),
  )[0];
};

// Get blogs sorted by date (excluding specified id)
export const getBlogsByDate = (blogList = blogs, excludeId = null) => {
  return [...blogList]
    .filter((b) => b.id !== excludeId)
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
};

// Format date for display
export const formatBlogDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Paginate blogs
export const paginateBlogs = (blogList, page = 1, perPage = 6) => {
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedBlogs = blogList.slice(startIndex, endIndex);
  const totalPages = Math.ceil(blogList.length / perPage);

  return {
    blogs: paginatedBlogs,
    currentPage: page,
    totalPages,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
    totalBlogs: blogList.length,
  };
};
