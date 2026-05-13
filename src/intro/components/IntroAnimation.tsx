import { useIntroAnimation } from "../animation/useIntroAnimation";
import { useFontEmbed } from "../animation/useFontEmbed";
import Scene3D from "./Scene3D";
import { Scene1 } from "./Scene1";
import { Scene2 } from "./Scene2";

export default function IntroAnimation() {
  useIntroAnimation();
  const fontStyle = useFontEmbed('/fonts/BebasNeue-Regular.woff2', 'Bebas Neue');

  return (
    <div className="relative w-screen h-screen bg-black select-none overflow-hidden">
        <svg
          id="introSvg"
          viewBox="0 0 1007 1007"
          className="invisible absolute"
          aria-hidden="true"
        >
          <defs>
            <style>{`${fontStyle} text{font-family:'Bebas Neue',sans-serif}`}</style>
            <clipPath id="clip">
              <rect width="1007" height="1007" />
            </clipPath>
          </defs>
          <rect width="1007" height="1007" fill="black" />
          <g id="stage" clipPath="url(#clip)">
            <Scene2 />
            <Scene1 />
          </g>
        </svg>
        <Scene3D />
    </div>
  );
}
