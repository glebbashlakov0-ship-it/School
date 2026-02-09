export type CourseLevel = {
  id: string;
  level: string;
  title: string;
  description: string;
  highlights: string[];
  oldPrice: string;
  who: string[];
  learns: string[];
};

export const courses: CourseLevel[] = [
  {
    id: "level-1",
    level: "Level 1",
    title: "Crypto Starter",
    description:
      "Confident, safe entry into crypto with clear fundamentals and security.",
    highlights: [
      "Simple, practical crypto foundations",
      "Secure setup for wallets and exchanges",
      "Avoid beginner mistakes and scams"
    ],
    oldPrice: "$400",
    who: [
      "Time holding crypto: 0–6 months",
      "Crypto assets: up to 2 assets",
      "Portfolio value: up to $5,000 AUD"
    ],
    learns: [
      "What crypto & blockchain really are (simple, practical)",
      "How to buy crypto safely in Australia",
      "Wallets, exchanges, seed phrase security",
      "Beginner mistakes & scams",
      "Crypto taxes in Australia (CGT basics)"
    ]
  },
  {
    id: "level-2",
    level: "Level 2",
    title: "Crypto Holder",
    description: "Structured holding strategy with diversification and DeFi basics.",
    highlights: [
      "Diversification and asset selection",
      "DeFi basics (staking, lending)",
      "Risk management mindset"
    ],
    oldPrice: "$900",
    who: [
      "Time holding: 6–18 months",
      "Crypto assets: 3–5 assets",
      "Portfolio value: $5,000 – $25,000 AUD"
    ],
    learns: [
      "Portfolio diversification",
      "Bitcoin vs Altcoins",
      "DeFi basics (staking, lending)",
      "Risk management & investor psychology",
      "Australian tax reporting (ATO-ready)"
    ]
  },
  {
    id: "level-3",
    level: "Level 3",
    title: "Crypto Investor",
    description: "System-driven investing with advanced strategies and risk control.",
    highlights: [
      "Market cycles and strategy design",
      "Narrative-based investing",
      "Advanced risk management"
    ],
    oldPrice: "$1,300",
    who: [
      "Time holding: 1.5 – 3 years",
      "Crypto assets: 6–10 assets",
      "Portfolio value: $25,000 – $100,000 AUD"
    ],
    learns: [
      "Investment strategies & market cycles",
      "Narrative-based investing",
      "Advanced risk management",
      "DeFi strategies (intermediate–advanced)",
      "Legal tax optimisation in Australia"
    ]
  },
  {
    id: "level-4",
    level: "Level 4",
    title: "Crypto Strategist",
    description: "Protect and grow serious capital with strategic allocation.",
    highlights: [
      "Capital allocation strategies",
      "Yield & income strategies",
      "Advanced security setups"
    ],
    oldPrice: "$1,800",
    who: [
      "Time holding: 3–5 years",
      "Crypto assets: 10–20 assets",
      "Portfolio value: $100,000 – $500,000 AUD"
    ],
    learns: [
      "Capital allocation strategies",
      "Yield & income strategies",
      "On-chain analytics (practical level)",
      "Advanced wallet & security setups",
      "Preparing for bull markets"
    ]
  },
  {
    id: "level-5",
    level: "Level 5",
    title: "Crypto Elite / Crypto Capital",
    description: "Institutional-level management and long-term wealth preservation.",
    highlights: [
      "Managing large crypto portfolios",
      "Custody, multi-sig & inheritance planning",
      "Private deals and long-term preservation"
    ],
    oldPrice: "$2,500",
    who: [
      "Time holding: 5+ years",
      "Crypto assets: 20+ assets",
      "Portfolio value: $500,000+ AUD"
    ],
    learns: [
      "Managing large crypto portfolios",
      "Custody, multi-sig & inheritance planning",
      "International tax logic (compliant)",
      "Web3, early-stage & private deals",
      "Long-term wealth preservation"
    ]
  }
];
