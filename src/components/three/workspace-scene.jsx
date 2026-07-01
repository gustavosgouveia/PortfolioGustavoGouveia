import { Float, OrbitControls, Text } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function WorkspaceModel() {
  const group = useRef(null);

  useFrame((state) => {
    if (!group.current) {
      return;
    }

    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.25) * 0.18;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.08;
  });

  return (
    <group ref={group}>
      <mesh position={[0, -1.05, 0]}>
        <boxGeometry args={[3.4, 0.12, 1.8]} />
        <meshStandardMaterial color="#112240" metalness={0.35} roughness={0.45} />
      </mesh>
      <mesh position={[0, -0.3, -0.2]}>
        <boxGeometry args={[1.8, 1.05, 0.12]} />
        <meshStandardMaterial color="#0f1f38" metalness={0.3} roughness={0.25} />
      </mesh>
      <mesh position={[0, -0.85, -0.12]}>
        <boxGeometry args={[0.3, 0.58, 0.16]} />
        <meshStandardMaterial color="#163052" metalness={0.45} roughness={0.3} />
      </mesh>
      <mesh position={[0, -0.28, -0.12]}>
        <planeGeometry args={[1.48, 0.78]} />
        <meshBasicMaterial color="#64FFDA" transparent opacity={0.85} />
      </mesh>
      <mesh position={[1.15, -0.72, 0.22]} rotation={[0.18, -0.45, -0.18]}>
        <boxGeometry args={[0.88, 0.07, 0.58]} />
        <meshStandardMaterial color="#18365d" metalness={0.25} roughness={0.35} />
      </mesh>
      <Float speed={2.5} rotationIntensity={0.9} floatIntensity={1.2} position={[-1.4, 0.9, 0.2]}>
        <mesh>
          <torusKnotGeometry args={[0.18, 0.05, 90, 12]} />
          <meshStandardMaterial color="#64FFDA" emissive="#64FFDA" emissiveIntensity={0.35} />
        </mesh>
      </Float>
      <Float speed={2.2} rotationIntensity={0.8} floatIntensity={0.9} position={[1.2, 0.6, 0.4]}>
        <mesh>
          <icosahedronGeometry args={[0.22, 0]} />
          <meshStandardMaterial color="#CCD6F6" metalness={0.5} roughness={0.15} />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={0.75} floatIntensity={1.1} position={[0, 1.15, 0.3]}>
        <Text color="#8892B0" fontSize={0.18} maxWidth={1.8} anchorX="center" anchorY="middle">
          React • Node.js • Oracle • Azure
        </Text>
      </Float>
    </group>
  );
}

export function WorkspaceScene() {
  return (
    <div className="glass-panel relative h-[24rem] overflow-hidden rounded-[32px] border">
      <Canvas camera={{ position: [0, 0.3, 4.8], fov: 42 }} dpr={[1, 1.25]} gl={{ antialias: false, powerPreference: "high-performance" }}>
        <ambientLight intensity={1.1} />
        <pointLight position={[2, 3, 4]} intensity={18} color="#64FFDA" />
        <pointLight position={[-3, -2, 3]} intensity={10} color="#CCD6F6" />
        <WorkspaceModel />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[rgba(10,25,47,0.9)] to-transparent" />
    </div>
  );
}