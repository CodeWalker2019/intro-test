import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { AnimatedBackground } from "./AnimatedBackground";
import Logo from "./Logo";

export default function Scene3D() {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 35 }}
        gl={{ alpha: true, antialias: true }}
        onCreated={({ gl }) => { gl.setClearColor(0x000000, 0); }}
      >
        <AnimatedBackground />

        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={4} />
        <Environment preset="studio" />

        <Logo />
      </Canvas>
    </div>
  );
}
