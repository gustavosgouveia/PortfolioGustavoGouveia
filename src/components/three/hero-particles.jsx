import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";

function ParticleField() {
  const group = useRef(null);
  const particles = useMemo(
    () =>
      Array.from({ length: 24 }, (_, index) => ({
        id: index,
        position: [
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 6,
        ],
        scale: 0.03 + Math.random() * 0.08,
      })),
    [],
  );

  useFrame((state, delta) => {
    if (!group.current) {
      return;
    }

    group.current.rotation.y += delta * 0.05;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
  });

  return (
    <group ref={group}>
      {particles.map((particle) => (
        <mesh key={particle.id} position={particle.position} scale={particle.scale}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshStandardMaterial color="#64FFDA" emissive="#64FFDA" emissiveIntensity={0.35} transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
}

export function HeroParticles() {
  return (
    <div className="absolute inset-0 -z-10 opacity-75">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 58 }} dpr={[1, 1.25]} gl={{ antialias: false, powerPreference: "high-performance" }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[2, 3, 4]} intensity={16} color="#64FFDA" />
        <ParticleField />
      </Canvas>
    </div>
  );
}