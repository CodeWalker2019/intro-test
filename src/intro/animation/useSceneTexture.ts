import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const SVG_CANVAS_SIZE = 1007;

export function useSceneTexture(svgId: string) {
  const offscreen = useRef<HTMLCanvasElement | null>(null);
  const texture = useRef<THREE.CanvasTexture | null>(null);
  const img = useRef(new Image());
  const pending = useRef(false);

  if (!offscreen.current) {
    const canvas = document.createElement("canvas");
    canvas.width = SVG_CANVAS_SIZE;
    canvas.height = SVG_CANVAS_SIZE;
    offscreen.current = canvas;
    texture.current = new THREE.CanvasTexture(canvas);
  }

  useEffect(() => {
    return () => { texture.current?.dispose(); };
  }, []);

  useFrame(() => {
    if (pending.current) return;
    const svg = document.getElementById(svgId);
    if (!svg || !texture.current || !offscreen.current) return;

    pending.current = true;
    const blob = new Blob(
      [new XMLSerializer().serializeToString(svg)],
      { type: "image/svg+xml;charset=utf-8" }
    );
    const url = URL.createObjectURL(blob);

    img.current.onload = () => {
      const ctx = offscreen.current!.getContext("2d");
      ctx?.clearRect(0, 0, SVG_CANVAS_SIZE, SVG_CANVAS_SIZE);
      ctx?.drawImage(img.current!, 0, 0);
      URL.revokeObjectURL(url);
      texture.current!.needsUpdate = true;
      pending.current = false;
    };
    img.current.src = url;
  });

  return texture;
}
