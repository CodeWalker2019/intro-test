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

        <directionalLight position={[5, 8, 4]} intensity={4} color="#ffffff" />
        <directionalLight position={[-4, -3, 2]} intensity={1} color="#1133cc" />

        <Logo />
      </Canvas>
    </div>
  );
}
