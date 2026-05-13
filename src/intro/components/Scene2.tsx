import { SvgText } from "./SvgText";
import { TEXT } from "../data/text";
import { LAYOUT } from "../data/layout";

export function Scene2() {
  return (
    <g id="scene2">
      <g id="tagline">
        <SvgText id="taglineText" text={TEXT.tagline} {...LAYOUT.tagline} />
      </g>
      <g id="emphasis">
        <SvgText id="emphasisText" text={TEXT.emphasis} {...LAYOUT.emphasis} />
      </g>
      <g id="rightWord">
        <SvgText id="rightWordText" text={TEXT.rightWord} {...LAYOUT.rightWord} />
      </g>
      <g id="leftWord">
        <SvgText id="leftWordText" text={TEXT.leftWord} {...LAYOUT.leftWord} />
      </g>
    </g>
  );
}
