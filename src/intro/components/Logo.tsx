import { useRef, useMemo } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import { MeshTransmissionMaterial, Center } from "@react-three/drei";
import { logoProxy, Z_NEAR, Z_FAR } from "../animation/logoProxy";

const LogoMesh = () => {
  const svgData = useLoader(SVGLoader, "/GDA-01.svg");

  const shapes = useMemo(() =>
    svgData.paths.flatMap(path => {
      path.userData.style.fillRule = "nonzero";
      return SVGLoader.createShapes(path);
    }),
    [svgData]
  );

  const geometry = useMemo(() => new THREE.ExtrudeGeometry(shapes, {
    depth: 30,
    bevelEnabled: true,
    bevelThickness: 2,
    bevelSize: 1.5,
    bevelSegments: 12,
  }), [shapes]);

  return (
    <mesh
      frustumCulled={false}
      geometry={geometry}
      scale={0.0055}
      rotation={[Math.PI * -0.15, Math.PI * -0.15, Math.PI * -1.15]}
    >
      <MeshTransmissionMaterial
        backside
        transmission={0.82}
        ior={1.75}
        thickness={7.5}
        color="#c8c8c8"
        attenuationColor="#3a3a3a"
        attenuationDistance={0.25}
        roughness={0}
        anisotropy={1}
        chromaticAberration={2.5}
        distortion={1}
        distortionScale={0.05}
        temporalDistortion={0}
        clearcoat={1}
        clearcoatRoughness={0}
        envMapIntensity={5}
        samples={16}
        resolution={1024}
      />
    </mesh>
  );
};

export default function Logo() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(({ camera, size }, delta) => {
    const cam = camera as THREE.PerspectiveCamera;
    const t = logoProxy.x;

    const halfFov = Math.tan(THREE.MathUtils.degToRad(cam.fov / 2));
    const depth = cam.position.z - Z_FAR;
    const edgeX = depth * halfFov * (size.width / size.height) * 1.1;
    const edgeY = depth * halfFov * 0.45;

    groupRef.current.position.x = t * edgeX;
    groupRef.current.position.y = t * Math.abs(t) * edgeY;
    groupRef.current.position.z = Z_FAR + (Z_NEAR - Z_FAR) * (1 - t * t);
    groupRef.current.rotation.y += delta * 0.9;
  });

  return (
    <group ref={groupRef}>
      <Center>
        <LogoMesh />
      </Center>
    </group>
  );
}
