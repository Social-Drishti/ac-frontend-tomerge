/**
 * Articles Data for Insights Blog
 *
 * Schema:
 * - id: Unique identifier (string)
 * - title: Article headline (string)
 * - excerpt: Short preview text (string, 120-180 chars recommended)
 * - category: Topic category for visual grouping (string)
 * - publishedAt: ISO date string for sorting (string)
 * - readingTime: Estimated reading time in minutes (number)
 * - featured: Editorial flag for featured placement (boolean, optional)
 * - slug: URL-friendly identifier (string)
 * - image: Optional cover image path (string, optional)
 */

export const articleCategories = [
  { id: "vedic-foundations", label: "Vedic Foundations" },
  { id: "planetary-analysis", label: "Planetary Analysis" },
  { id: "interpretation-methods", label: "Interpretation Methods" },
  { id: "timing-techniques", label: "Timing Techniques" },
  { id: "case-studies", label: "Case Studies" },
  { id: "classical-texts", label: "Classical Texts" },
];

export const articles = [
  {
    id: "pramana-valid-knowledge",
    title: "Pramāṇa: The Foundation of Valid Knowledge in Vedic Sciences",
    excerpt:
      "Understanding the epistemological basis of Jyotiṣa through the lens of classical Indian philosophy. How observation, inference, and testimony form the triad of reliable knowledge.",
    category: "vedic-foundations",
    publishedAt: "2026-01-28",
    readingTime: 12,
    featured: true,
    slug: "pramana-valid-knowledge",
  },
  {
    id: "saturn-significations",
    title:
      "Saturn's Significations: Structure, Limitation, and Temporal Authority",
    excerpt:
      "A systematic examination of Śani's interpretive framework across houses and signs. Moving beyond fear-based interpretations toward analytical understanding.",
    category: "planetary-analysis",
    publishedAt: "2026-01-25",
    readingTime: 15,
    slug: "saturn-significations",
  },
  {
    id: "dasha-timing-principles",
    title: "Dasha Timing: When Potential Becomes Manifestation",
    excerpt:
      "The Vimshottari dasha system offers precise timing frameworks. Learn how planetary periods activate natal promises and why timing matters more than placement alone.",
    category: "timing-techniques",
    publishedAt: "2026-01-22",
    readingTime: 18,
    slug: "dasha-timing-principles",
  },
  {
    id: "twelve-bhava-significations",
    title: "The Twelve Bhāvas: Domains of Human Experience",
    excerpt:
      "Each house represents a sphere of life—from self-identity to transcendence. A comprehensive guide to bhāva significations and their interconnections.",
    category: "vedic-foundations",
    publishedAt: "2026-01-19",
    readingTime: 20,
    slug: "twelve-bhava-significations",
  },
  {
    id: "yoga-combinations-analysis",
    title: "Yoga Analysis: Reading Planetary Combinations with Precision",
    excerpt:
      "Dhana yoga, Raja yoga, Vipareet Raja yoga—understanding when combinations actually manifest and why identical yogas produce different results.",
    category: "interpretation-methods",
    publishedAt: "2026-01-16",
    readingTime: 14,
    slug: "yoga-combinations-analysis",
  },
  {
    id: "jupiter-wisdom-expansion",
    title: "Jupiter as Guru: Wisdom, Expansion, and Dharmic Purpose",
    excerpt:
      "Bṛhaspati's role extends beyond fortune. Examining Jupiter's significations in education, ethics, and the pursuit of meaningful growth.",
    category: "planetary-analysis",
    publishedAt: "2026-01-13",
    readingTime: 11,
    slug: "jupiter-wisdom-expansion",
  },
  {
    id: "transit-interpretation-method",
    title: "Transit Interpretation: The Moving Sky Against Natal Patterns",
    excerpt:
      "Gochar (transits) activate dormant potential in the birth chart. A methodological approach to reading transits without overinterpretation.",
    category: "timing-techniques",
    publishedAt: "2026-01-10",
    readingTime: 16,
    slug: "transit-interpretation-method",
  },
  {
    id: "brihat-parashara-hora",
    title: "Insights from Bṛhat Parāśara Horā Śāstra",
    excerpt:
      "The foundational text of Vedic astrology contains systematic frameworks often overlooked. Key principles from the classical source.",
    category: "classical-texts",
    publishedAt: "2026-01-07",
    readingTime: 22,
    slug: "brihat-parashara-hora",
  },
  {
    id: "ascendant-analysis",
    title: "The Ascendant: More Than a Rising Sign",
    excerpt:
      "Lagna establishes the entire chart framework. Why the ascendant lord, its placement, and aspects define the native's fundamental orientation.",
    category: "interpretation-methods",
    publishedAt: "2026-01-04",
    readingTime: 13,
    slug: "ascendant-analysis",
  },
  {
    id: "career-tenth-house",
    title: "Career Analysis: The Tenth House and Its Lord",
    excerpt:
      "Professional significations in Jyotiṣa extend beyond the tenth house. A systematic approach to career timing and vocational indicators.",
    category: "case-studies",
    publishedAt: "2026-01-01",
    readingTime: 17,
    slug: "career-tenth-house",
  },
  {
    id: "moon-mind-emotions",
    title: "Chandra: The Mind, Emotions, and Inner Landscape",
    excerpt:
      "The Moon's placement reveals mental patterns, emotional responses, and psychological tendencies. Understanding Chandra beyond superficial interpretations.",
    category: "planetary-analysis",
    publishedAt: "2025-12-28",
    readingTime: 14,
    slug: "moon-mind-emotions",
  },
  {
    id: "divisional-charts-introduction",
    title: "Divisional Charts: Precision Through Division",
    excerpt:
      "Vargas (divisional charts) offer granular insight into specific life areas. An introduction to D-9, D-10, and their practical application.",
    category: "interpretation-methods",
    publishedAt: "2025-12-25",
    readingTime: 19,
    slug: "divisional-charts-introduction",
  },
  {
    id: "nakshatras-lunar-mansions",
    title: "The 27 Nakṣatras: Lunar Mansions and Their Significations",
    excerpt:
      "Beyond rāśis, nakṣatras provide finer personality distinctions and timing indicators. A systematic overview of lunar mansion symbolism.",
    category: "vedic-foundations",
    publishedAt: "2025-12-22",
    readingTime: 24,
    slug: "nakshatras-lunar-mansions",
  },
  {
    id: "relationship-seventh-house",
    title: "Relationship Analysis: Beyond Sun Sign Compatibility",
    excerpt:
      "The seventh house, its lord, Venus, and Jupiter all contribute to partnership patterns. A comprehensive framework for relationship analysis.",
    category: "case-studies",
    publishedAt: "2025-12-19",
    readingTime: 16,
    slug: "relationship-seventh-house",
  },
  {
    id: "rahu-ketu-nodes",
    title: "Rahu and Ketu: The Nodal Axis of Karmic Direction",
    excerpt:
      "The shadow planets indicate past patterns and future growth directions. Understanding the nodes without superstition or fear.",
    category: "planetary-analysis",
    publishedAt: "2025-12-16",
    readingTime: 15,
    slug: "rahu-ketu-nodes",
  },
];

/**
 * Utility functions for article management
 */

// Get featured article (most recent with featured flag, or most recent overall)
export const getFeaturedArticle = (articleList = articles) => {
  const featured = articleList.find((a) => a.featured);
  if (featured) return featured;

  // Fallback to most recent
  return [...articleList].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt),
  )[0];
};

// Get articles sorted by date (excluding featured if specified)
export const getArticlesByDate = (articleList = articles, excludeId = null) => {
  return [...articleList]
    .filter((a) => a.id !== excludeId)
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
};

// Get articles grouped by category
export const getArticlesByCategory = (articleList = articles) => {
  const grouped = {};

  articleList.forEach((article) => {
    if (!grouped[article.category]) {
      grouped[article.category] = [];
    }
    grouped[article.category].push(article);
  });

  // Sort each category by date
  Object.keys(grouped).forEach((cat) => {
    grouped[cat].sort(
      (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt),
    );
  });

  return grouped;
};

// Get category label from id
export const getCategoryLabel = (categoryId) => {
  const category = articleCategories.find((c) => c.id === categoryId);
  return category ? category.label : categoryId;
};

// Format date for display
export const formatArticleDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
