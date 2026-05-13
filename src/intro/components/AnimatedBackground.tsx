import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useSceneTexture } from "../animation/useSceneTexture";

const _dir = new THREE.Vector3();
const CAMERA_DIST = 1;

export function AnimatedBackground() {
  const texture = useSceneTexture("introSvg");
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(({ camera, size }) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const cam = camera as THREE.PerspectiveCamera;
    const h = 2 * CAMERA_DIST * Math.tan(THREE.MathUtils.degToRad(cam.fov / 2));
    const w = h * (size.width / size.height);
    const side = Math.min(w, h);

    _dir.set(0, 0, -CAMERA_DIST).applyQuaternion(camera.quaternion);
    mesh.position.copy(camera.position).add(_dir);
    mesh.quaternion.copy(camera.quaternion);
    mesh.scale.set(side, side, 1);
  });

  return (
    <mesh ref={meshRef} renderOrder={-1}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial
        map={texture.current ?? undefined}
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  );
}
