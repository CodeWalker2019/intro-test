import { useRef, useMemo, useEffect } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import { mergeVertices } from "three/examples/jsm/utils/BufferGeometryUtils";
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

  const geometry = useMemo(() => {
    const geo = new THREE.ExtrudeGeometry(shapes, {
      depth: 25,
      bevelEnabled: true,
      bevelThickness: 1.5,
      bevelSize: 2.5,
      bevelSegments: 12,
    });
    const merged = mergeVertices(geo);
    merged.computeVertexNormals();
    merged.computeBoundingSphere();
    return merged;
  }, [shapes]);

  useEffect(() => () => geometry.dispose(), [geometry]);

  return (
    <mesh
      frustumCulled={false}
      geometry={geometry}
      scale={0.0055}
      rotation={[Math.PI * -0.15, Math.PI * -0.15, Math.PI * -1.15]}
    >
      <MeshTransmissionMaterial
        color="#7d7d7d"
        transmission={1}
        ior={1.45}
        thickness={17}
        roughness={0.2}
        chromaticAberration={2}
        distortion={0.35}
        distortionScale={0.4}
        temporalDistortion={0}
        anisotropy={1}
        clearcoat={1}
        clearcoatRoughness={0}
        envMapIntensity={1}
        samples={6}
      />
    </mesh>
  );
};

export default function Logo() {
  const groupRef = useRef<THREE.Group>(null!);
  const edgeXRef = useRef(0);
  const lastFov = useRef(0);
  const lastAspect = useRef(0);

  useFrame(({ camera, size }, delta) => {
    const cam = camera as THREE.PerspectiveCamera;
    const aspect = size.width / size.height;

    if (cam.fov !== lastFov.current || aspect !== lastAspect.current) {
      lastFov.current = cam.fov;
      lastAspect.current = aspect;
      edgeXRef.current =
        (cam.position.z - Z_FAR) *
        Math.tan(THREE.MathUtils.degToRad(cam.fov / 2)) *
        aspect *
        1.1;
    }

    const t = logoProxy.x;
    const pos = groupRef.current.position;
    pos.x = t * Math.abs(t) * edgeXRef.current;
    pos.z = Z_FAR + (Z_NEAR - Z_FAR) * (1 - t * t);
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
