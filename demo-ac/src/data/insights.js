/**
 * INSIGHTS DATA SOURCE
 * Educational Knowledge Publication
 *
 * Content Types:
 * - "opening"     : Editorial introduction spread
 * - "concept"     : Main educational article section
 * - "technical"   : Technical insight block (pull-quote/side note)
 * - "diagram"     : Illustration with explanation (used sparingly)
 * - "reflection"  : Closing thought or principle
 *
 * Each concept can have optional illustrations referenced via `illustration` field
 */

export const insightsMetadata = {
  title: "Insights",
  subtitle: "Educational Studies in Vedic Knowledge",
  description:
    "A curated publication exploring the technical, conceptual, and interpretive foundations of Vedic sciences and astrology.",
};

export const insightsContent = [
  // ========================================
  // OPENING SPREAD
  // ========================================
  {
    id: "opening-knowledge",
    type: "opening",
    title: "Understanding Before Interpretation",
    content: [
      "This publication presents Vedic astrology and related sciences as structured knowledge systems—frameworks built on observation, reasoning, and centuries of documented tradition.",
      "What follows is not advice, not prediction, and not inspiration. It is education: concept explanations, interpretive methodologies, and technical foundations designed for those who seek to understand how these systems function.",
      "Each section builds upon the previous. Read linearly, as you would a textbook chapter, allowing concepts to layer and connect.",
    ],
  },

  // ========================================
  // CONCEPT SECTIONS
  // ========================================
  {
    id: "concept-pramana",
    type: "concept",
    title: "Valid Knowledge in Vedic Epistemology",
    lead: "How classical tradition defines and validates knowledge.",
    content: [
      "The Sanskrit term pramāṇa refers to valid means of acquiring knowledge. Vedic philosophy recognizes multiple such means: pratyakṣa (direct perception), anumāna (inference), and śabda (authoritative testimony from reliable sources).",
      "Jyotiṣa (Vedic astrology), as a Vedāṅga—a limb of the Vedas—operates through all three. The astrologer observes celestial positions (perception), infers correlations based on established principles (inference), and draws upon documented tradition and classical texts (testimony).",
      "This epistemological framework distinguishes knowledge from belief. Belief accepts without systematic examination; knowledge examines before accepting. The practitioner's task is not to reveal hidden truths but to apply established interpretive frameworks to specific configurations.",
    ],
    subsections: [
      {
        title: "Perception in Astrological Practice",
        content:
          "Direct observation forms the foundation: planetary positions, zodiacal placements, house occupancies. These are mathematical calculations based on astronomical data, not intuitive impressions.",
      },
      {
        title: "Inference and Pattern Recognition",
        content:
          "From observed positions, the practitioner infers significations using codified principles. If Saturn occupies the seventh house, certain relational dynamics are indicated—not because Saturn 'causes' them, but because this placement correlates with documented patterns.",
      },
      {
        title: "Textual Authority",
        content:
          "Classical texts—Bṛhat Parāśara Horā Śāstra, Jātaka Pārijāta, Phaladīpikā—provide interpretive guidance accumulated over centuries. These are not sacred revelations but systematic compilations of observed correlations.",
      },
    ],
  },

  // ----------------------------------------
  // TECHNICAL INSIGHT
  // ----------------------------------------
  {
    id: "technical-knowledge-belief",
    type: "technical",
    content:
      "Knowledge requires method. Belief requires only acceptance. Vedic sciences belong to the former category—they are systems to be learned, not doctrines to be adopted.",
  },

  // ----------------------------------------
  // CONCEPT: GRAHAS
  // ----------------------------------------
  {
    id: "concept-grahas",
    type: "concept",
    title: "The Nine Grahas: Symbolic Markers",
    lead: "Understanding planetary significations as interpretive lenses, not causative forces.",
    content: [
      "The term graha is often translated as 'planet,' but its root meaning is 'that which seizes or influences.' In Vedic astrology, grahas are symbolic markers—each carries a cluster of significations that the practitioner uses as interpretive lenses.",
      "It is essential to understand that grahas do not cause events. They indicate tendencies, correlate with patterns, and mark timing. The mechanism is not physical causation but symbolic correspondence—a principle found throughout Vedic thought.",
    ],
    subsections: [
      {
        title: "Sūrya (Sun)",
        content:
          "Signifies self-identity, authority, vitality, father, government, leadership. Its placement indicates how one expresses core identity and relates to authority structures.",
      },
      {
        title: "Candra (Moon)",
        content:
          "Signifies mind, emotions, mother, public perception, nourishment, fluctuation. The Moon's condition reveals emotional constitution and mental tendencies.",
      },
      {
        title: "Maṅgala (Mars)",
        content:
          "Signifies energy, courage, conflict, siblings, property, technical skill. Mars indicates how one directs energy and handles confrontation.",
      },
      {
        title: "Budha (Mercury)",
        content:
          "Signifies intellect, communication, commerce, adaptability, discrimination. Mercury reveals analytical capacity and communicative style.",
      },
      {
        title: "Guru (Jupiter)",
        content:
          "Signifies wisdom, expansion, teachers, children, dharma, optimism. Jupiter indicates philosophical orientation and capacity for growth.",
      },
      {
        title: "Śukra (Venus)",
        content:
          "Signifies pleasure, beauty, relationships, creativity, luxury, harmony. Venus reveals aesthetic sensibility and relational values.",
      },
      {
        title: "Śani (Saturn)",
        content:
          "Signifies structure, limitation, discipline, longevity, servants, sorrow. Saturn indicates where effort is required and what must be earned through time.",
      },
      {
        title: "Rāhu (North Node)",
        content:
          "Signifies obsession, amplification, foreign elements, unconventional paths. Rāhu indicates areas of intense worldly desire and karmic expansion.",
      },
      {
        title: "Ketu (South Node)",
        content:
          "Signifies detachment, spirituality, past patterns, loss, liberation. Ketu indicates areas of innate skill but also potential neglect or surrender.",
      },
    ],
  },

  // ----------------------------------------
  // DIAGRAM
  // ----------------------------------------
  {
    id: "diagram-houses",
    type: "diagram",
    title: "The Twelve Bhāvas",
    caption: "Domains of experience in the horoscopic framework",
    description:
      "The twelve houses represent life domains. Planets placed within them modify how those domains manifest. House lords—the rulers of each house's sign—carry house significations wherever they are placed.",
    illustration: {
      type: "houses-wheel",
      alt: "Twelve house wheel showing domains of experience",
    },
    houses: [
      {
        number: 1,
        name: "Tanu",
        domain: "Self, body, personality, appearance",
      },
      { number: 2, name: "Dhana", domain: "Wealth, speech, family, food" },
      {
        number: 3,
        name: "Sahaja",
        domain: "Siblings, courage, efforts, communication",
      },
      {
        number: 4,
        name: "Sukha",
        domain: "Home, mother, comfort, vehicles, education",
      },
      {
        number: 5,
        name: "Putra",
        domain: "Children, creativity, intelligence, merit",
      },
      { number: 6, name: "Ripu", domain: "Enemies, disease, service, debts" },
      {
        number: 7,
        name: "Yuvati",
        domain: "Partnership, marriage, others, business",
      },
      {
        number: 8,
        name: "Āyu",
        domain: "Longevity, transformation, hidden matters",
      },
      {
        number: 9,
        name: "Dharma",
        domain: "Fortune, father, philosophy, long journeys",
      },
      {
        number: 10,
        name: "Karma",
        domain: "Career, status, actions, authority",
      },
      {
        number: 11,
        name: "Lābha",
        domain: "Gains, friends, aspirations, income",
      },
      {
        number: 12,
        name: "Vyaya",
        domain: "Loss, isolation, liberation, foreign lands",
      },
    ],
  },

  // ----------------------------------------
  // CONCEPT: INTERPRETATION
  // ----------------------------------------
  {
    id: "concept-interpretation",
    type: "concept",
    title: "The Art of Synthesis",
    lead: "Why single factors never determine meaning.",
    content: [
      "A common error in astrological study is isolation—extracting one placement and assigning it absolute meaning. 'Saturn in the seventh house means difficult marriage.' This reductionism contradicts the system's own logic.",
      "Interpretation requires synthesis. The astrologer must weigh: the planet's inherent nature, its sign placement, aspects received from other planets, houses it rules, its condition in divisional charts, and the overall chart context.",
      "A Saturn in the seventh house in its own sign (Capricorn or Aquarius), receiving Jupiter's aspect, with its dispositor well-placed, manifests very differently from Saturn in debilitation, afflicted, with a weakened seventh lord. The placement is identical; the interpretation is not.",
    ],
    subsections: [
      {
        title: "Layered Analysis",
        content:
          "Begin with the rāśi (sign) chart for overall themes. Examine the relevant bhāva (house) and its lord. Check divisional charts for specific life areas. Assess planetary strength through ṣaḍbala or simpler dignity considerations. Only then form interpretive conclusions.",
      },
      {
        title: "Timing Activation",
        content:
          "A natal indication remains potential until activated. Daśās (planetary periods) and transits trigger latent significations. The same chart manifests differently at age 20 versus age 50, depending on which planetary period is operating.",
      },
    ],
  },

  // ----------------------------------------
  // TECHNICAL INSIGHT
  // ----------------------------------------
  {
    id: "technical-synthesis",
    type: "technical",
    content:
      "Interpretation without synthesis is not interpretation—it is memorization. The system's depth lies in how factors combine, not in what isolated placements 'mean.'",
  },

  // ----------------------------------------
  // CONCEPT: MISCONCEPTIONS
  // ----------------------------------------
  {
    id: "concept-misconceptions",
    type: "concept",
    title: "Clarifying Boundaries",
    lead: "What the system does not claim.",
    content: [
      "Intellectual honesty requires acknowledging limitations. Vedic astrology, properly understood, makes specific types of claims and explicitly avoids others. Misrepresenting its scope damages both understanding and credibility.",
    ],
    clarifications: [
      {
        misconception: "Astrology predicts exact events",
        correction:
          "The system indicates tendencies, timing windows, and the nature of periods—not specific events. It describes that a period may involve career challenges; it does not predict termination on a particular date.",
      },
      {
        misconception: "A difficult chart guarantees suffering",
        correction:
          "Challenging configurations indicate areas requiring attention and effort. They do not predetermine outcomes. Human response, environment, and conscious choice remain variables.",
      },
      {
        misconception: "Remedies change planetary positions",
        correction:
          "No practice alters astronomical reality. Traditional remedies (mantra, charity, discipline) are understood to refine the individual's relationship with indicated energies—a psychological and spiritual reorientation, not cosmic manipulation.",
      },
      {
        misconception: "Sun sign defines personality",
        correction:
          "In Vedic astrology, the ascendant (lagna) and Moon sign carry greater interpretive weight. Sun sign analysis, popularized in Western media, provides minimal information within this system's framework.",
      },
    ],
  },

  // ----------------------------------------
  // CONCEPT: KARMA TYPES
  // ----------------------------------------
  {
    id: "concept-karma",
    type: "concept",
    title: "Karma and Agency",
    lead: "The classical framework for understanding fixity and flexibility.",
    content: [
      "Classical texts distinguish three categories of karma based on their modifiability. This framework is essential for understanding the relationship between astrological indication and human agency.",
      "Dṛḍha karma (fixed): results that will manifest regardless of effort. Adṛḍha karma (non-fixed): results highly responsive to action and can be significantly altered. Dṛḍhādṛḍha karma (mixed): results that can be partially modified through effort.",
      "This classification implies that not all indications are equally deterministic. The skilled practitioner assesses which category applies—a task requiring experience and careful analysis, not algorithmic certainty.",
    ],
  },

  // ----------------------------------------
  // TECHNICAL INSIGHT
  // ----------------------------------------
  {
    id: "technical-agency",
    type: "technical",
    content:
      "The chart shows the terrain. It does not dictate the journey. Understanding the map serves navigation; it does not eliminate the need to walk.",
  },

  // ----------------------------------------
  // CONCEPT: CASE REASONING
  // ----------------------------------------
  {
    id: "concept-case-reasoning",
    type: "concept",
    title: "Reasoning Through Configuration",
    lead: "How interpretive logic applies to specific placements.",
    content: [
      "Abstract examples illustrate interpretive methodology without compromising privacy or encouraging cookbook-style memorization.",
    ],
    cases: [
      {
        scenario: "Tenth lord placed in the twelfth house",
        analysis:
          "The tenth house governs career, public action, and status. The twelfth house signifies foreign lands, isolation, institutions, and expenditure. When the ruler of the tenth occupies the twelfth, career may involve foreign residence, institutional work (hospitals, ashrams, prisons), behind-the-scenes roles, or professions requiring sacrifice of personal visibility.",
        variables:
          "The specific planet matters: Jupiter here differs from Saturn. Sign placement matters: benefic signs modify differently than malefic ones. Aspects matter: Jupiter aspecting this placement differs from Mars. The individual's context matters: a spiritual seeker experiences this differently than a corporate executive.",
      },
      {
        scenario: "Moon conjunct Ketu in the fourth house",
        analysis:
          "The Moon signifies mind and mother; Ketu indicates detachment and past-life patterns; the fourth house governs home, emotional security, and mother. This combination may indicate emotional detachment regarding domestic matters, an absent or spiritually-oriented mother, or innate disinterest in conventional home life.",
        variables:
          "Sign matters: Moon-Ketu in Cancer (Moon's own sign) manifests differently than in Scorpio. Aspects matter: Jupiter's aspect brings philosophical orientation; Saturn's aspect intensifies the sense of emotional isolation. Daśā timing determines when these themes activate prominently.",
      },
    ],
  },

  // ----------------------------------------
  // CONCEPT: EDUCATION VS ADVICE
  // ----------------------------------------
  {
    id: "concept-education",
    type: "concept",
    title: "The Purpose of Understanding",
    lead: "Knowledge serves awareness, not dependency.",
    content: [
      "This publication provides educational content—frameworks for understanding how Vedic astrological interpretation functions. It does not provide personalized readings, life advice, or predictive services.",
      "Understanding astrological principles can expand one's perspective on timing, tendencies, and patterns. This expanded perspective serves self-awareness and informed decision-making. It does not replace professional consultation (medical, legal, financial) or personal ethical discernment.",
      "The goal is literacy, not dependency. A reader who understands these frameworks can engage more critically with astrological content, ask better questions of practitioners, and maintain appropriate epistemic humility about what any interpretive system can and cannot deliver.",
    ],
  },

  // ========================================
  // CLOSING REFLECTION
  // ========================================
  {
    id: "reflection-closing",
    type: "reflection",
    content:
      "Knowledge clarifies. Awareness chooses. Responsibility remains yours.",
  },
];

/**
 * Future content can be added to insightsContent array.
 * The page will auto-render new items following the established layout logic.
 *
 * To add new content:
 * 1. Add object to insightsContent array
 * 2. Set appropriate `type` field
 * 3. Include required fields for that type
 * 4. Optional: add `illustration` field for diagram types
 */
