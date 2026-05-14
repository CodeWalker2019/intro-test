import gsap from "gsap";
import { logoProxy } from "./logoProxy";

function setInitialState(): void {
  gsap.set("#headline", { svgOrigin: "3.5 3.5",     scaleY: 2.703 });
  gsap.set("#subline",  { svgOrigin: "503.5 530",   scaleY: 0.001, y: 470 });
  gsap.set("#feature",  { svgOrigin: "3.5 1003",    scaleY: 0.001 });
  gsap.set("#caption",  { svgOrigin: "3.5 553",     scaleY: 0.001 });
  gsap.set("#scene2",   { y: 596 });
  gsap.set("#leftWord", { x: -248, svgOrigin: "3.5 483" });
  gsap.set("#rightWord",{ x: 709 });
  gsap.set("#emphasis", { x: -1000 });
  gsap.set("#tagline",  { x: 1000 });
  gsap.set("#stage",    { svgOrigin: "503.5 503.5", scale: 1.00366 });
  gsap.set(logoProxy,   { x: -1 });
}

export function buildTimeline(): gsap.core.Timeline {
  setInitialState();

  const tl = gsap.timeline({ paused: true });

  tl.to("#headline", { duration: 0.47, scaleY: 2.177, ease: "squish1" }, 0.33);
  tl.to("#headline", { duration: 0.23, scaleY: 2.270, ease: "squish2" }, 0.80);
  tl.to("#headline", { duration: 0.47, scaleY: 1.767, ease: "squish3" }, 1.03);
  tl.to("#headline", { duration: 0.23, scaleY: 1.212, ease: "squish4" }, 1.50);
  tl.to("#headline", { duration: 0.43, scaleY: 1.0,   ease: "squish5" }, 1.73);

  tl.to("#subline", { duration: 0.37, scaleY: 1.249, ease: "sublineScale1" }, 0.43);
  tl.to("#subline", { duration: 0.23, scaleY: 1.0,   ease: "sublineScale2" }, 0.80);
  tl.to("#subline", { duration: 0.17, y: 442, ease: "rise1" }, 1.03);
  tl.to("#subline", { duration: 0.20, y: 350, ease: "rise2" }, 1.20);
  tl.to("#subline", { duration: 0.13, y: 258, ease: "rise3" }, 1.40);
  tl.to("#subline", { duration: 0.13, y: 123, ease: "rise4" }, 1.53);
  tl.to("#subline", { duration: 0.10, y: 66,  ease: "rise5" }, 1.67);
  tl.to("#subline", { duration: 0.07, y: 42,  ease: "rise6" }, 1.77);
  tl.to("#subline", { duration: 0.33, y: 0,   ease: "power1.out" }, 1.83);

  tl.to("#feature", { duration: 0.47, scaleY: 0.840, ease: "bounce1" }, 1.13);
  tl.to("#feature", { duration: 0.47, scaleY: 1.424, ease: "bounce2" }, 1.60);
  tl.to("#feature", { duration: 0.37, scaleY: 0.859, ease: "bounce3" }, 2.07);
  tl.to("#feature", { duration: 0.20, scaleY: 1.0,   ease: "bounce4" }, 2.43);

  tl.to("#caption", { duration: 0.37, scaleY: 1.398, ease: "reveal1" }, 2.07);
  tl.to("#caption", { duration: 0.33, scaleY: 1.0,   ease: "reveal2" }, 2.43);

  tl.to("#scene1", { duration: 2.17, y: -595, ease: "slide1" }, 3.03);
  tl.to("#scene2", { duration: 2.17, y: 0,    ease: "slide1" }, 3.03);

  tl.to("#leftWord", { duration: 0.47, x: 0,                 ease: "slide1" }, 3.63);
  tl.to("#leftWord", { duration: 0.17, scaleX: 127.5 / 85.3, ease: "slide2" }, 4.00);
  tl.to("#leftWord", { duration: 0.13, scaleX: 1,             ease: "slide2" }, 4.17);

  tl.to("#rightWord", { duration: 0.67, x: 0, ease: "slide1" }, 3.97);
  tl.to("#emphasis",  { duration: 0.43, x: 0, ease: "slide2" }, 4.80);
  tl.to("#tagline",   { duration: 0.67, x: 0, ease: "slide2" }, 5.23);

  tl.to("#stage", { duration: 2.37, scale: 5.838,    ease: "zoom1"        }, 5.90);
  tl.to("#stage", { duration: 0.20, scale: 30,       ease: "zoom2"        }, 8.27);
  tl.to("#stage", { duration: 1.73, x: -158, y: -33, ease: "power1.inOut" }, 6.73);
  tl.to("#stage", { duration: 0.67, opacity: 0,      ease: "power2.in"    }, 7.80);

  tl.to(logoProxy, { duration: 1.5, x: 0, ease: "power2.out" }, 5.90);
  tl.to(logoProxy, { duration: 1.5, x: 1, ease: "power2.in"  }, 8.90);

  return tl;
}
