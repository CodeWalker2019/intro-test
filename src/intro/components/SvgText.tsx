import type { TextSlot } from "../data/layout";

type Props = TextSlot & {
  id: string;
  text: string;
};

export function SvgText({ id, text, x, baseline, fontSize, textLength, align }: Props) {
  return (
    <text
      id={id}
      x={x}
      y={baseline}
      fontSize={fontSize}
      fill="white"
      stroke="white"
      strokeWidth={14}
      paintOrder="stroke fill"
      fontFamily="'Bebas Neue', sans-serif"
      textAnchor={align}
      textLength={textLength}
      lengthAdjust="spacingAndGlyphs"
    >
      {text}
    </text>
  );
}
