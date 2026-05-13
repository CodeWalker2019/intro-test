import { useEffect, useRef } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { buildTimeline } from "./timeline";
import { ANIMATION_TARGETS, CUSTOM_EASES } from "../data/eases";

gsap.registerPlugin(CustomEase);
CUSTOM_EASES.forEach(([name, path]) => CustomEase.create(name, path));

export function useIntroAnimation(): void {
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      gsap.set(ANIMATION_TARGETS, { clearProps: "all" });
      tlRef.current = buildTimeline();
      tlRef.current.play();
    });

    return () => { tlRef.current?.kill(); };
  }, []);
}
