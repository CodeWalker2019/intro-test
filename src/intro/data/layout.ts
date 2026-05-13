export type TextSlot = {
  x: number;
  baseline: number;
  fontSize: number;
  textLength: number;
  align: "start" | "middle" | "end" | "inherit";
};

export const LAYOUT = {
  headline:  { x: 3.5, baseline: 373.5, fontSize: 514, textLength: 1000, align: "start" },
  subline:   { x: 3.5, baseline: 530,   fontSize: 194, textLength: 1000, align: "start" },
  caption:   { x: 3.5, baseline: 667,   fontSize: 160, textLength: 1000, align: "start" },
  feature:   { x: 3.5, baseline: 1000,  fontSize: 437, textLength: 1000, align: "start" },
  leftWord:  { x: 3.5, baseline: 533,   fontSize: 153, textLength: 243,  align: "start" },
  rightWord: { x: 298, baseline: 533,   fontSize: 153, textLength: 706,  align: "start" },
  emphasis:  { x: 3.5, baseline: 833,   fontSize: 389, textLength: 1000, align: "start" },
  tagline:   { x: 3.5, baseline: 1003,  fontSize: 205, textLength: 1000, align: "start" },
} satisfies Record<string, TextSlot>;
