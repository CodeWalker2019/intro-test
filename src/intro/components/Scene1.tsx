import { SvgText } from "./SvgText";
import { TEXT } from "../data/text";
import { LAYOUT } from "../data/layout";

export function Scene1() {
  return (
    <g id="scene1">
      <g id="caption">
        <SvgText id="captionText" text={TEXT.caption} {...LAYOUT.caption} />
      </g>
      <g id="feature">
        <SvgText id="featureText" text={TEXT.feature} {...LAYOUT.feature} />
      </g>
      <g id="subline">
        <SvgText id="sublineText" text={TEXT.subline} {...LAYOUT.subline} />
      </g>
      <g id="headline">
        <SvgText id="headlineText" text={TEXT.headline} {...LAYOUT.headline} />
      </g>
    </g>
  );
}
