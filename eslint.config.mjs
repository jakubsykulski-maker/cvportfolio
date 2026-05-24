import next from "eslint-config-next";

// Disable react/no-unescaped-entities — the case-study pages are
// long-form English with contractions ("doesn't", "household's") on
// every other line. Escaping each one as &apos; hurts readability
// more than it helps.
const config = [
  ...next,
  {
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
  {
    ignores: [".next/**", "node_modules/**", "next-env.d.ts"],
  },
];

export default config;
